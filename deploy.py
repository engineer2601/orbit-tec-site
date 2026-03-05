"""
Deploy orbit-tec-site to 95.81.99.189
"""
import paramiko
import os
import tarfile
import tempfile
import sys

HOST = '95.81.99.189'
PORT = 22
USER = 'vladimir'
KEY_FILE = 'C:/Users/vold/OneDrive/Dokumenty/putty_keys/hh_srv_openssh'
KEY_PASSPHRASE = '!QAZzaq1'
SUDO_PASS = '!QAZxdr5432'
REMOTE_DIR = '/var/www/orbit-tec-site'
APP_PORT = 3002


def run(client, cmd, sudo=False, get_pty=False):
    if sudo:
        cmd = f"echo '{SUDO_PASS}' | sudo -S bash -c '{cmd}'"
    print(f"  $ {cmd[:80]}...")
    stdin, stdout, stderr = client.exec_command(cmd, get_pty=get_pty)
    out = stdout.read().decode().strip()
    err = stderr.read().decode().strip()
    if out:
        print(f"    OUT: {out[:200]}")
    if err and 'sudo:' not in err:
        print(f"    ERR: {err[:200]}")
    return out


def connect():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, port=PORT, username=USER,
                   key_filename=KEY_FILE, passphrase=KEY_PASSPHRASE, timeout=30)
    print(f"Connected to {HOST}")
    return client


def upload_project(client):
    """Create tarball and upload via SFTP"""
    project_dir = os.path.dirname(os.path.abspath(__file__))
    exclude = {'.next', 'node_modules', '.git', 'data', '__pycache__'}

    with tempfile.NamedTemporaryFile(suffix='.tar.gz', delete=False) as tmp:
        tmp_path = tmp.name

    print(f"Creating tarball...")
    with tarfile.open(tmp_path, 'w:gz') as tar:
        for item in os.listdir(project_dir):
            if item not in exclude:
                full = os.path.join(project_dir, item)
                tar.add(full, arcname=item)

    size_mb = os.path.getsize(tmp_path) / 1024 / 1024
    print(f"Tarball: {size_mb:.1f} MB")

    sftp = client.open_sftp()
    remote_tmp = f'/tmp/orbit-tec-site.tar.gz'
    print(f"Uploading to {remote_tmp}...")
    sftp.put(tmp_path, remote_tmp)
    sftp.close()
    os.unlink(tmp_path)
    print("Upload complete")
    return remote_tmp


def deploy():
    client = connect()

    # Check environment
    node_ver = run(client, 'node --version 2>/dev/null || echo "no node"')
    npm_ver = run(client, 'npm --version 2>/dev/null || echo "no npm"')
    pm2_ver = run(client, 'pm2 --version 2>/dev/null || echo "no pm2"')
    print(f"Node: {node_ver}, npm: {npm_ver}, pm2: {pm2_ver}")

    # Install Node.js if needed
    if 'no node' in node_ver:
        print("Installing Node.js 20...")
        run(client, 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -', sudo=True)
        run(client, 'apt-get install -y nodejs', sudo=True)

    # Install pm2 if needed
    if 'no pm2' in pm2_ver:
        print("Installing pm2...")
        run(client, 'npm install -g pm2', sudo=True)

    # Install nginx if needed
    nginx_check = run(client, 'which nginx || echo "no nginx"')
    if 'no nginx' in nginx_check:
        print("Installing nginx...")
        run(client, 'apt-get update && apt-get install -y nginx', sudo=True)

    # Upload project
    remote_tmp = upload_project(client)

    # Extract
    run(client, f'mkdir -p {REMOTE_DIR}', sudo=True)
    run(client, f'tar -xzf {remote_tmp} -C {REMOTE_DIR}', sudo=True)
    run(client, f'chown -R {USER}:{USER} {REMOTE_DIR}', sudo=True)
    run(client, f'rm {remote_tmp}')

    # npm install + build
    print("Installing dependencies...")
    run(client, f'cd {REMOTE_DIR} && npm install --production=false 2>&1 | tail -3')
    print("Building...")
    run(client, f'cd {REMOTE_DIR} && npm run build 2>&1 | tail -10')

    # PM2 config
    pm2_config = f"""module.exports = {{
  apps: [{{
    name: 'orbit-tec-site',
    cwd: '{REMOTE_DIR}',
    script: 'node_modules/.bin/next',
    args: 'start -p {APP_PORT}',
    env: {{ NODE_ENV: 'production', PORT: '{APP_PORT}' }},
    restart_delay: 3000,
    max_restarts: 10,
  }}]
}}"""
    # Write pm2 config
    run(client, f"cat > {REMOTE_DIR}/ecosystem.config.js << 'PMEOF'\n{pm2_config}\nPMEOF")
    run(client, f'cd {REMOTE_DIR} && pm2 delete orbit-tec-site 2>/dev/null; pm2 start ecosystem.config.js')
    run(client, 'pm2 save')
    run(client, 'pm2 startup systemd -u vladimir --hp /home/vladimir 2>/dev/null | tail -1')

    # Nginx config
    nginx_conf = f"""server {{
    listen 80;
    server_name _;

    location / {{
        proxy_pass http://127.0.0.1:{APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }}
}}"""

    run(client, f"echo '{nginx_conf}' | sudo tee /etc/nginx/sites-available/orbit-tec-site", sudo=False)
    run(client, 'ln -sf /etc/nginx/sites-available/orbit-tec-site /etc/nginx/sites-enabled/orbit-tec-site', sudo=True)
    run(client, 'rm -f /etc/nginx/sites-enabled/default', sudo=True)
    run(client, 'nginx -t && systemctl restart nginx', sudo=True)

    print("\n✅ Deployed! Site running at http://95.81.99.189/")
    print(f"   PM2 app: orbit-tec-site on port {APP_PORT}")

    client.close()


if __name__ == '__main__':
    deploy()

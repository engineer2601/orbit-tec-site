"""
Deploy orbit-tec-site - phase 2: check build + setup PM2 + nginx
"""
import paramiko
import sys
import io

# Force UTF-8 output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

HOST = '95.81.99.189'
PORT = 22
USER = 'vladimir'
KEY_FILE = 'C:/Users/vold/OneDrive/Dokumenty/putty_keys/hh_srv_openssh'
KEY_PASSPHRASE = '!QAZzaq1'
SUDO_PASS = '!QAZxdr5432'
REMOTE_DIR = '/var/www/orbit-tec-site'
APP_PORT = 3002


def run(client, cmd, sudo=False, timeout=120):
    if sudo:
        cmd = f"echo '{SUDO_PASS}' | sudo -S bash -c \"{cmd}\""
    print(f"  $ {cmd[:100]}")
    stdin, stdout, stderr = client.exec_command(cmd, timeout=timeout)
    stdout.channel.set_combine_stderr(False)
    out = stdout.read().decode('utf-8', errors='replace').strip()
    err = stderr.read().decode('utf-8', errors='replace').strip()
    if out:
        safe = out.encode('ascii', errors='replace').decode('ascii')
        print(f"    OUT: {safe[:300]}")
    if err:
        safe_err = err.encode('ascii', errors='replace').decode('ascii')
        # filter sudo noise
        lines = [l for l in safe_err.split('\n') if 'sudo:' not in l and 'password for' not in l and l.strip()]
        if lines:
            print(f"    ERR: {chr(10).join(lines[:5])}")
    return out


def connect():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, port=PORT, username=USER,
                   key_filename=KEY_FILE, passphrase=KEY_PASSPHRASE, timeout=30)
    print(f"Connected to {HOST}")
    return client


def deploy():
    client = connect()

    # Check what's deployed
    print("\n--- Checking deployed files ---")
    run(client, f'ls {REMOTE_DIR}/ 2>/dev/null | head -20')

    # Build on server
    print("\n--- Building on server ---")
    out = run(client, f'cd {REMOTE_DIR} && npm run build 2>&1 | tail -20', timeout=300)

    if 'Build error' in out or 'Error' in out:
        print("BUILD FAILED! Output:")
        run(client, f'cd {REMOTE_DIR} && npm run build 2>&1', timeout=300)
        client.close()
        return

    print("\n--- Setting up PM2 ---")
    pm2_config = """module.exports = {
  apps: [{
    name: 'orbit-tec-site',
    cwd: '""" + REMOTE_DIR + """',
    script: 'node_modules/.bin/next',
    args: 'start -p """ + str(APP_PORT) + """',
    env: { NODE_ENV: 'production' },
    restart_delay: 3000,
    max_restarts: 10,
  }]
}"""

    run(client, f"cat > {REMOTE_DIR}/ecosystem.config.js << 'PMEOF'\n{pm2_config}\nPMEOF")
    run(client, f'pm2 delete orbit-tec-site 2>/dev/null; echo ok')
    run(client, f'cd {REMOTE_DIR} && pm2 start ecosystem.config.js')
    run(client, 'pm2 save')

    # Try pm2 startup
    startup_out = run(client, 'pm2 startup 2>&1 | tail -3')
    if 'sudo' in startup_out:
        # Execute the suggested command
        cmd = [l for l in startup_out.split('\n') if 'sudo' in l]
        if cmd:
            run(client, cmd[0].strip().replace('sudo ', ''), sudo=True)

    print("\n--- Setting up Nginx ---")
    nginx_conf = f"""server {{
    listen 80 default_server;
    server_name _;

    location / {{
        proxy_pass http://127.0.0.1:{APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 60s;
    }}
}}"""

    run(client, f'tee /etc/nginx/sites-available/orbit-tec-site', sudo=True)

    # Write nginx config via echo
    run(client, f'mkdir -p /etc/nginx/sites-available', sudo=True)
    run(client, f"""cat > /tmp/nginx_orbit.conf << 'NGEOF'
{nginx_conf}
NGEOF""")
    run(client, 'cp /tmp/nginx_orbit.conf /etc/nginx/sites-available/orbit-tec-site', sudo=True)
    run(client, 'ln -sf /etc/nginx/sites-available/orbit-tec-site /etc/nginx/sites-enabled/orbit-tec-site', sudo=True)
    run(client, 'rm -f /etc/nginx/sites-enabled/default 2>/dev/null; echo ok', sudo=True)
    run(client, 'nginx -t 2>&1', sudo=True)
    run(client, 'systemctl restart nginx', sudo=True)

    print("\n--- Verifying ---")
    run(client, 'pm2 list')
    run(client, f'curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:{APP_PORT}/ 2>/dev/null || echo "not ready yet"')

    print("\n✅ DEPLOYED! Site at http://95.81.99.189/")
    client.close()


if __name__ == '__main__':
    deploy()

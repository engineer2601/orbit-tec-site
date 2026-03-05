'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  opacity: number
  color: string
  orbitRadius: number
  orbitAngle: number
  orbitSpeed: number
  orbitTilt: number
  type: 'particle' | 'node' | 'star'
}

export default function OrbitalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#6366F1', '#00D4FF', '#A78BFA']

    // Create particles
    const particles: Particle[] = []

    // Stars (background)
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 1000,
        vx: 0, vy: 0, vz: -0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        color: '#ffffff',
        orbitRadius: 0, orbitAngle: 0, orbitSpeed: 0, orbitTilt: 0,
        type: 'star',
      })
    }

    // Orbital nodes
    const centerX = W / 2
    const centerY = H / 2

    const orbits = [
      { r: 120, count: 5, speed: 0.003, tilt: 0.3, color: '#3B82F6' },
      { r: 200, count: 8, speed: -0.002, tilt: 0.5, color: '#8B5CF6' },
      { r: 300, count: 12, speed: 0.0015, tilt: 0.1, color: '#06B6D4' },
      { r: 420, count: 15, speed: -0.001, tilt: 0.7, color: '#6366F1' },
    ]

    orbits.forEach((orbit) => {
      for (let i = 0; i < orbit.count; i++) {
        const angle = (i / orbit.count) * Math.PI * 2
        particles.push({
          x: centerX + Math.cos(angle) * orbit.r,
          y: centerY + Math.sin(angle) * orbit.r * Math.cos(orbit.tilt),
          z: 0,
          vx: 0, vy: 0, vz: 0,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          color: orbit.color,
          orbitRadius: orbit.r,
          orbitAngle: angle,
          orbitSpeed: orbit.speed,
          orbitTilt: orbit.tilt,
          type: 'node',
        })
      }
    })

    // Floating particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: 0,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: 0,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        orbitRadius: 0, orbitAngle: 0, orbitSpeed: 0, orbitTilt: 0,
        type: 'particle',
      })
    }

    function drawConnections() {
      const nodes = particles.filter(p => p.type === 'node')
      ctx!.lineWidth = 0.3

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      // Connect to mouse
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      nodes.forEach(node => {
        const dx = node.x - mx
        const dy = node.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const alpha = (1 - dist / 200) * 0.3
          ctx!.beginPath()
          ctx!.strokeStyle = `rgba(6, 182, 212, ${alpha})`
          ctx!.lineWidth = 0.5
          ctx!.moveTo(node.x, node.y)
          ctx!.lineTo(mx, my)
          ctx!.stroke()
        }
      })
    }

    function render() {
      timeRef.current += 0.016
      const t = timeRef.current

      // Clear
      ctx!.fillStyle = '#020212'
      ctx!.fillRect(0, 0, W, H)

      // Draw subtle radial gradient center glow
      const grad = ctx!.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.min(W, H) * 0.6)
      grad.addColorStop(0, 'rgba(59, 130, 246, 0.03)')
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)')
      grad.addColorStop(1, 'transparent')
      ctx!.fillStyle = grad
      ctx!.fillRect(0, 0, W, H)

      // Update & draw stars
      particles.forEach(p => {
        if (p.type === 'star') {
          p.z += p.vz
          if (p.z < 0) {
            p.z = 1000
            p.x = Math.random() * W
            p.y = Math.random() * H
          }
          const scale = 1000 / (1000 - p.z)
          const sx = (p.x - W / 2) * scale + W / 2
          const sy = (p.y - H / 2) * scale + H / 2
          const r = p.size * scale * 0.5
          if (sx > 0 && sx < W && sy > 0 && sy < H) {
            ctx!.beginPath()
            ctx!.arc(sx, sy, r, 0, Math.PI * 2)
            ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity * Math.min(scale * 0.3, 0.8)})`
            ctx!.fill()
          }
        } else if (p.type === 'node') {
          p.orbitAngle += p.orbitSpeed
          const mouseInfluence = 0.02
          const mx = mouseRef.current.x
          const my = mouseRef.current.y
          const dx = mx - W / 2
          const dy = my - H / 2
          p.x = W / 2 + Math.cos(p.orbitAngle) * p.orbitRadius + dx * mouseInfluence
          p.y = H / 2 + Math.sin(p.orbitAngle) * p.orbitRadius * Math.cos(p.orbitTilt) + dy * mouseInfluence

          // Glow
          const grd = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          grd.addColorStop(0, p.color + 'CC')
          grd.addColorStop(1, p.color + '00')
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
          ctx!.fillStyle = grd
          ctx!.fill()

          // Core
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx!.fillStyle = p.color
          ctx!.fill()
        } else {
          // floating particle
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0) p.x = W
          if (p.x > W) p.x = 0
          if (p.y < 0) p.y = H
          if (p.y > H) p.y = 0

          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + p.x * 0.01)
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx!.fillStyle = p.color + Math.floor(p.opacity * pulse * 255).toString(16).padStart(2, '0')
          ctx!.fill()
        }
      })

      drawConnections()
      animRef.current = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

import { useEffect, useRef } from 'react'

/**
 * Canvas-based animated particle network — nodes connected by lines,
 * with a subtle mouse repulsion effect. Fits the IEEE circuit-board aesthetic.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let raf
    const N = window.innerWidth < 768 ? 30 : 60
    const LINK = 150
    let pts = []
    const mouse = { x: null, y: null }

    function resize() {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    function mkPt() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.6 + 0.7,
        baseAlpha: Math.random() * 0.45 + 0.25,
        phase: Math.random() * Math.PI * 2,
      }
    }

    function init() {
      resize()
      pts = Array.from({ length: N }, mkPt)
    }

    let t = 0
    function frame() {
      raf = requestAnimationFrame(frame)
      t += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of pts) {
        // Gentle mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d2 = dx * dx + dy * dy
          if (d2 < 12000) {
            const d = Math.sqrt(d2)
            const f = (110 - d) / 110 * 0.18
            p.vx += (dx / d) * f
            p.vy += (dy / d) * f
          }
        }
        // Speed cap + damping
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 1.5) { p.vx = p.vx / spd * 1.5; p.vy = p.vy / spd * 1.5 }
        p.vx *= 0.999; p.vy *= 0.999

        p.x += p.vx; p.y += p.vy

        // Wrap edges
        if (p.x < -5) p.x = canvas.width + 5
        else if (p.x > canvas.width + 5) p.x = -5
        if (p.y < -5) p.y = canvas.height + 5
        else if (p.y > canvas.height + 5) p.y = -5
      }

      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK) {
            const a = (1 - d / LINK) * 0.5
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(200, 70, 70, ${a})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes with glow
      for (const p of pts) {
        const alpha = p.baseAlpha + Math.sin(t * 1.2 + p.phase) * 0.1
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
        g.addColorStop(0, `rgba(210, 60, 60, ${alpha * 0.55})`)
        g.addColorStop(1, 'rgba(210, 60, 60, 0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 130, 130, ${alpha})`
        ctx.fill()
      }
    }

    init()
    frame()

    const onResize = () => init()
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

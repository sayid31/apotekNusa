import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Partikel emas lembut — seperti debu di bawah lampu apotek malam.
 * Canvas murni tanpa library. Dimatikan jika user minta reduced-motion.
 */
export default function GoldParticles({ density = 42, className = '' }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined

    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let raf = 0
    let particles = []
    let w = 0
    let h = 0

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const count = isMobile ? Math.round(density * 0.5) : density

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const makeParticle = (randomY = true) => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + Math.random() * 40,
      r: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.22 + 0.06,
      drift: (Math.random() - 0.5) * 0.14,
      alpha: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
    })

    const init = () => {
      resize()
      particles = Array.from({ length: count }, () => makeParticle(true))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        p.phase += 0.012

        if (p.y < -10) Object.assign(p, makeParticle(false))

        const twinkle = 0.65 + Math.sin(p.phase) * 0.35
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 204, 123, ${p.alpha * twinkle})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    const onResize = () => {
      resize()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [density, reduced])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Angka menghitung naik saat masuk layar. */
export default function Counter({ value, suffix = '', duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView || reduced) {
      if (reduced) setDisplay(value)
      return undefined
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduced])

  const formatted =
    typeof value === 'number' && value >= 1000
      ? display.toLocaleString('id-ID')
      : display

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  )
}

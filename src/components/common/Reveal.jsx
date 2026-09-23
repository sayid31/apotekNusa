import { motion, useReducedMotion } from 'framer-motion'

/**
 * Wrapper animasi "masuk layar" — SEMUA section memakai komponen ini
 * supaya bahasa gerakan seragam dari hero sampai footer.
 *
 * Easing panjang & halus (gaya Lusion): konten tidak pernah menunggu
 * animasi selesai untuk bisa dibaca.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.9,
  className = '',
  as = 'div',
  ...rest
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduced) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

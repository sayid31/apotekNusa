import { motion, useReducedMotion } from 'framer-motion'
import { testimonials } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { IconStar } from '../common/Icons'

function Stars({ rating }) {
  const reduced = useReducedMotion()
  return (
    <div className="flex gap-1" role="img" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={reduced ? false : { opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <IconStar
            className={`h-4 w-4 ${i < rating ? 'text-gold' : 'text-white/[0.15]'}`}
          />
        </motion.span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Testimoni"
          title={
            <>
              Cerita dari <span className="italic text-gold">pelanggan kami</span>
            </>
          }
          subtitle="Ulasan asli, ditulis sendiri oleh pelanggan yang biasa belanja di sini."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="card flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
                <Stars rating={t.rating} />
                <figcaption className="sr-only">
                  {t.name} memberi rating {t.rating} dari 5
                </figcaption>

                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-muted">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3.5">
                  {/* Avatar inisial */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-b from-gold/25 to-transparent font-display text-sm text-gold">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-medium text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

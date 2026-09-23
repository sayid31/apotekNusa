import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { faqs } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { IconChevron } from '../common/Icons'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="relative scroll-mt-24 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/40"
      />
      <div className="shell relative">
        <SectionHeading
          align="center"
          eyebrow="Pertanyaan Umum"
          title={
            <>
              Hal yang sering <span className="italic text-gold">ditanyakan</span>
            </>
          }
        />

        <div className="mx-auto max-w-3xl divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-surface/70 backdrop-blur">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="px-5 sm:px-7">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span
                      className={`text-[15px] font-medium transition-colors duration-300 sm:text-base ${
                        isOpen ? 'text-gold-bright' : 'text-ink'
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? 'rotate-180 border-gold/50 bg-gold/10 text-gold'
                          : 'border-white/[0.12] text-ink-muted'
                      }`}
                    >
                      <IconChevron className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-sm leading-relaxed text-ink-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

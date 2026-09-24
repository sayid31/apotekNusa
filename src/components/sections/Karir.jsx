import { careers, brand } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { IconPin, IconMail, IconWhatsapp } from '../common/Icons'

/* Lowongan kerja — tampil di halaman /informasi */
export default function Karir() {
  return (
    <section id="karir" className="relative scroll-mt-24 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/40"
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Karir"
          title={
            <>
              Lagi nyari <span className="italic text-gold">teman kerja?</span>
            </>
          }
          subtitle={careers.intro}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {careers.positions.map((pos, i) => (
            <Reveal key={pos.title} delay={i * 0.08}>
              <article className="card group h-full p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
                <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {pos.type}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-bright">
                  {pos.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
                  <IconPin className="h-3.5 w-3.5 text-teal" />
                  {pos.place}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {pos.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cara melamar */}
        <Reveal delay={0.2}>
          <div className="card mt-8 p-6 sm:p-8">
            <p className="max-w-3xl text-[15px] leading-relaxed text-ink-muted">
              {careers.apply}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={`mailto:${brand.email}`} className="btn-gold">
                <IconMail className="h-4 w-4" />
                Kirim Email
              </a>
              <a
                href={brand.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconWhatsapp className="h-4 w-4 text-teal" />
                Chat WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

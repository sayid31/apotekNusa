import { about } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { IconShield, IconChat, IconStethoscope } from '../common/Icons'

const pointIcons = [IconShield, IconChat, IconStethoscope]

/* Cerita singkat Apotek Nusa — tampil di halaman /informasi */
export default function Tentang() {
  return (
    <section id="tentang" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Tentang Kami"
          title={
            <>
              Dari satu ruko <span className="italic text-gold">di Menteng</span>
            </>
          }
          subtitle={'Ceritanya singkat, tapi jalannya panjang.'}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Paragraf cerita */}
          <Reveal className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-ink-muted sm:text-base"
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* Tiga poin yang dipegang */}
          <div className="space-y-4">
            {about.points.map((pt, i) => {
              const Icon = pointIcons[i]
              return (
                <Reveal key={pt.title} delay={i * 0.08}>
                  <div className="card flex gap-4 p-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-ink">
                        {pt.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

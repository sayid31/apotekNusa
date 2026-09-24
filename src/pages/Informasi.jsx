import { useEffect } from 'react'
import Reveal from '../components/common/Reveal'
import Tentang from '../components/sections/Tentang'
import Karir from '../components/sections/Karir'
import FAQ from '../components/sections/FAQ'
import { infoMenu } from '../data/content'

/* Halaman Informasi — berisi Tentang, Karir, dan FAQ.
   Dipisah dari halaman utama sesuai permintaan. */
export default function Informasi() {
  useEffect(() => {
    document.title = 'Informasi — Tentang, Karir & FAQ | Apotek Nusa'
  }, [])

  return (
    <>
      {/* Header halaman */}
      <section className="relative overflow-hidden pb-6 pt-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="glow-gold pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px]"
        />
        <div
          aria-hidden="true"
          className="glow-teal pointer-events-none absolute -bottom-40 -left-24 h-[360px] w-[360px]"
        />

        <div className="shell relative">
          <Reveal>
            <span className="eyebrow">Informasi</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="section-title mt-5 max-w-3xl">
              Kenalan lebih dekat{' '}
              <span className="italic text-gold">sama kami</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
              Ceritanya dari mana, posisi yang lagi kosong, sama jawaban atas
              pertanyaan yang paling sering masuk ke WhatsApp kami. Pilih aja
              mau mulai dari mana:
            </p>
          </Reveal>

          {/* Lompat cepat ke bagian */}
          <Reveal delay={0.24}>
            <nav aria-label="Bagian halaman informasi" className="mt-7 flex flex-wrap gap-3">
              {infoMenu.map((m) => (
                <a
                  key={m.href}
                  href={`#${m.href.split('#')[1]}`}
                  className="rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm text-ink-muted backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.07] hover:text-gold-bright"
                >
                  {m.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <Tentang />
      <Karir />
      <FAQ />
    </>
  )
}

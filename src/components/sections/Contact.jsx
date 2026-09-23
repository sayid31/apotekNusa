import { brand } from '../../data/content'
import { useOpenStatus } from '../../utils/openStatus'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import CityMap from '../common/CityMap'
import {
  IconPin,
  IconClock,
  IconPhone,
  IconMail,
  IconWhatsapp,
  IconArrow,
} from '../common/Icons'

export default function Contact() {
  const status = useOpenStatus()

  const contactItems = [
    { icon: IconPin, label: 'Alamat', value: brand.address },
    { icon: IconPhone, label: 'Telepon', value: brand.phone },
    { icon: IconMail, label: 'Email', value: brand.email },
  ]

  return (
    <section id="kontak" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Kunjungi Kami"
          title={
            <>
              Siap melayani Anda, <span className="italic text-gold">kapan saja</span>
            </>
          }
          subtitle="Datang langsung, telepon, atau kirim pesan — apoteker kami siap membantu."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* ============ Info kontak ============ */}
          <div className="flex flex-col gap-4">
            {/* Status realtime */}
            <Reveal>
              <div className="card flex items-center gap-3.5 p-5">
                <span className="relative flex h-2.5 w-2.5">
                  {status.open && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                      status.open ? 'bg-teal' : 'bg-gold'
                    }`}
                  />
                </span>
                <span className={`text-sm font-medium ${status.open ? 'text-teal' : 'text-gold'}`}>
                  {status.label}
                </span>
              </div>
            </Reveal>

            {contactItems.map((c, i) => (
              <Reveal key={c.label} delay={0.08 * (i + 1)}>
                <div className="card group flex items-start gap-4 p-5 transition-all duration-500 hover:border-gold/40">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:bg-gold/[0.16]">
                    <c.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-widest2 text-ink-muted">
                      {c.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink">
                      {c.value}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}

            {/* Jam buka */}
            <Reveal delay={0.32}>
              <div className="card p-5">
                <div className="flex items-center gap-2.5 text-gold">
                  <IconClock className="h-[18px] w-[18px]" />
                  <span className="text-[10px] uppercase tracking-widest2">Jam Operasional</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {brand.hours.map((h) => (
                    <li key={h.label} className="flex justify-between gap-4 text-sm">
                      <span className="text-ink-muted">{h.label}</span>
                      <span className="text-ink">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ============ Peta + CTA ============ */}
          <Reveal delay={0.15} className="flex flex-col gap-4">
            <div className="card overflow-hidden">
              <div className="relative h-[300px] w-full sm:h-[360px]">
                <CityMap pins={[{ id: 'hq', x: 140, y: 150, selected: true }]} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />

                {/* Kartu di atas peta */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-deep/[0.85] p-4 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-lg text-ink">{brand.name}</div>
                      <div className="mt-1 text-xs text-ink-muted">{brand.address}</div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jakarta+Pusat"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/40 px-3.5 py-1.5 text-[11px] font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-[#1A1206]"
                    >
                      Rute
                      <IconArrow className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp besar */}
            <a
              href={brand.waLink}
              target="_blank"
              rel="noreferrer"
              className="card group flex items-center justify-between gap-4 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/[0.15] text-teal transition-transform duration-500 group-hover:scale-110">
                  <IconWhatsapp className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-lg text-ink">
                    Butuh obat mendadak?
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-muted">
                    Chat sekarang, apoteker kami balas dalam hitungan menit.
                  </span>
                </span>
              </div>
              <IconArrow className="h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

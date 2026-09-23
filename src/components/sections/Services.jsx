import { services } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import {
  IconReceipt,
  IconChat,
  IconStethoscope,
  IconTruck,
  IconShield,
  IconBell,
} from '../common/Icons'

const iconMap = {
  receipt: IconReceipt,
  chat: IconChat,
  stethoscope: IconStethoscope,
  truck: IconTruck,
  shield: IconShield,
  bell: IconBell,
}

export default function Services() {
  return (
    <section id="layanan" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Layanan Kami"
          title={
            <>
              Bisa dibantu <span className="italic text-gold">apa aja</span>
            </>
          }
          subtitle={
            'Dari menebus resep sampai tanya obat harian, semuanya bisa lewat WhatsApp atau mampir langsung. Tidak perlu antre lama.'
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || IconReceipt
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <article className="card group h-full p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
                  {/* Ikon */}
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.08] text-gold transition-all duration-500 group-hover:bg-gold/[0.16] group-hover:text-gold-bright">
                    <Icon className="h-[26px] w-[26px]" />
                    <span className="absolute inset-0 rounded-xl bg-gold/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-6 font-display text-xl text-ink transition-colors duration-300 group-hover:text-gold-bright">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>

                  {/* Garis emas tumbuh saat hover */}
                  <span className="mt-6 block h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-700 group-hover:w-full" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

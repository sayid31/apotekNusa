import { brand, nav } from '../../data/content'
import { Logo, IconInstagram, IconFacebook, IconWhatsapp } from '../common/Icons'
import Reveal from '../common/Reveal'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-surface/60">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <div className="leading-tight">
                <div className="font-display text-lg text-ink">{brand.name}</div>
                <div className="text-[10px] uppercase tracking-widest2 text-gold-dim">
                  Pharmacy
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Apotek keluarga yang mengutamakan keaslian produk, transparansi harga,
              dan saran obat yang benar dari apoteker bersertifikat.
            </p>
            <div className="mt-6 flex gap-3">
              {[IconInstagram, IconFacebook, IconWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 2 ? brand.waLink : '#'}
                  target={i === 2 ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label="Sosial media Apotek Nusa"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Navigasi */}
          <Reveal delay={0.08}>
            <h4 className="text-xs uppercase tracking-widest2 text-gold">Navigasi</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Jam buka */}
          <Reveal delay={0.16}>
            <h4 className="text-xs uppercase tracking-widest2 text-gold">Jam Buka</h4>
            <ul className="mt-5 space-y-3">
              {brand.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-4 text-sm">
                  <span className="text-ink-muted">{h.label}</span>
                  <span className="text-ink">{h.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-teal">
              Darurat 24 jam — {brand.phone}
            </p>
          </Reveal>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.name}. Seluruh hak cipta dilindungi.</p>
          <p>
            Dibuat dengan hati untuk kesehatan yang lebih baik
          </p>
        </div>
      </div>
    </footer>
  )
}

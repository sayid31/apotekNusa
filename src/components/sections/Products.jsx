import { products } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { IconArrow } from '../common/Icons'

/* Ilustrasi produk — SVG inline per tipe kemasan */
function ProductArt({ art }) {
  const common = { className: 'h-full w-full' }

  if (art === 'bottle')
    return (
      <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
        <rect x="44" y="14" width="32" height="16" rx="4" fill="#D4A94A" />
        <rect x="36" y="30" width="48" height="76" rx="12" fill="#1F2430" stroke="#8A6F2E" strokeWidth="1.5" />
        <rect x="44" y="48" width="32" height="40" rx="6" fill="#D4A94A" fillOpacity="0.9" />
        <path d="M60 56v24M48 68h24" stroke="#0A0C10" strokeWidth="5" strokeLinecap="round" />
        <rect x="42" y="36" width="8" height="34" rx="4" fill="#F5F3EE" fillOpacity="0.14" />
      </svg>
    )

  if (art === 'strip')
    return (
      <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
        <rect x="24" y="30" width="72" height="60" rx="8" fill="#C9C6BE" fillOpacity="0.92" />
        {[0, 1].map((r) =>
          [0, 1, 2].map((c) => (
            <g key={`${r}-${c}`}>
              <circle cx={42 + c * 18} cy={48 + r * 26} r="9" fill="#0A0C10" fillOpacity="0.35" />
              <circle cx={42 + c * 18} cy={48 + r * 26} r="9" fill="none" stroke="#8A6F2E" strokeOpacity="0.6" />
            </g>
          )),
        )}
      </svg>
    )

  if (art === 'syrup')
    return (
      <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
        <rect x="48" y="12" width="24" height="14" rx="4" fill="#3FBFA8" />
        <path d="M42 40c0-8 6-14 18-14s18 6 18 14v58a8 8 0 0 1-8 8H50a8 8 0 0 1-8-8V40Z" fill="#2A2E38" stroke="#8A6F2E" strokeWidth="1.5" />
        <rect x="46" y="60" width="28" height="34" rx="5" fill="#D4A94A" fillOpacity="0.85" />
        <path d="M52 70h16M52 78h16" stroke="#0A0C10" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
        <rect x="46" y="44" width="7" height="30" rx="3.5" fill="#F5F3EE" fillOpacity="0.14" />
      </svg>
    )

  if (art === 'mask')
    return (
      <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
        <rect x="26" y="34" width="68" height="52" rx="12" fill="#E9EDF2" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M34 ${50 + i * 11}h52`} stroke="#9AA0AC" strokeWidth="3" strokeLinecap="round" />
        ))}
        <path d="M26 52c-8 0-12 6-12 12M94 52c8 0 12 6 12 12" stroke="#3FBFA8" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="86" cy="44" r="7" fill="#D4A94A" />
      </svg>
    )

  if (art === 'pump')
    return (
      <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
        <path d="M56 16h14v10h10v8H56z" fill="#C9C6BE" />
        <rect x="40" y="34" width="40" height="72" rx="10" fill="#3FBFA8" fillOpacity="0.75" stroke="#8A6F2E" strokeWidth="1.5" />
        <rect x="47" y="52" width="26" height="34" rx="5" fill="#0A0C10" fillOpacity="0.35" />
        <path d="M60 60v18M51 69h18" stroke="#F2CC7B" strokeWidth="4" strokeLinecap="round" />
        <rect x="46" y="40" width="7" height="30" rx="3.5" fill="#F5F3EE" fillOpacity="0.2" />
      </svg>
    )

  // jar (default)
  return (
    <svg viewBox="0 0 120 120" {...common} aria-hidden="true">
      <rect x="38" y="22" width="44" height="14" rx="5" fill="#D4A94A" />
      <rect x="34" y="36" width="52" height="70" rx="12" fill="#1F2430" stroke="#8A6F2E" strokeWidth="1.5" />
      <rect x="42" y="54" width="36" height="38" rx="6" fill="#F2CC7B" fillOpacity="0.9" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={52 + i * 8} cy={73} r="4" fill="#0A0C10" fillOpacity="0.5" />
      ))}
      <rect x="40" y="42" width="8" height="34" rx="4" fill="#F5F3EE" fillOpacity="0.14" />
    </svg>
  )
}

export default function Products() {
  return (
    <section id="produk" className="relative scroll-mt-24 py-16 sm:py-24">
      {/* Latar halus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/40"
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Produk Unggulan"
          title={
            <>
              Pilihan favorit <span className="italic text-gold">pelanggan kami</span>
            </>
          }
          subtitle={
            'Harga transparan, stok selalu tersedia, dan setiap produk terdaftar resmi di BPOM.'
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <article className="card group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
                {/* Panel gambar */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-b from-elevated to-surface">
                  <div className="glow-gold absolute h-28 w-28 rounded-full transition-all duration-700 group-hover:h-36 group-hover:w-36" />
                  <div className="relative h-28 w-28 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                    <ProductArt art={p.art} />
                  </div>

                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-deep/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur">
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest2 text-teal">
                    {p.category}
                  </div>
                  <h3 className="mt-2 font-display text-lg text-ink transition-colors duration-300 group-hover:text-gold-bright">
                    {p.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-medium text-gold">{p.price}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted transition-colors duration-300 group-hover:text-gold">
                      Pesan
                      <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

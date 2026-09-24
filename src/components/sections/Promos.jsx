import { promos } from '../../data/content'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

/* Pamflet promo — tampilan seperti kertas promo dengan bingkai
   putus-putus dan cap "Promo" miring di pojok. */
export default function Promos() {
  return (
    <section id="promo" className="relative scroll-mt-24 py-16 sm:py-24">
      {/* Latar halus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/40"
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Promo Bulan Ini"
          title={
            <>
              Lagi ada <span className="italic text-gold">promo nih</span>
            </>
          }
          subtitle={
            'Bukan brosur yang dibuang orang — ini yang beneran lagi jalan di outlet. Tinggal bilang promonya ke apoteker pas bayar.'
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promos.map((p, i) => (
            <Reveal key={p.discount} delay={(i % 3) * 0.1}>
              <article className="card group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
                {/* Bingkai ala kertas promo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-xl border border-dashed border-gold/30 transition-colors duration-500 group-hover:border-gold/55"
                />

                {/* Cap promo miring */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 rotate-12 rounded-full border border-gold/50 bg-gold/[0.07] px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-gold transition-transform duration-500 group-hover:rotate-6"
                >
                  Promo
                </span>

                <div className="relative">
                  <span className="text-[10px] uppercase tracking-widest2 text-teal">
                    {p.period}
                  </span>
                  <h3 className="mt-4 max-w-[75%] font-display text-3xl leading-tight text-gold-bright">
                    {p.discount}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-ink">{p.item}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {p.desc}
                  </p>

                  {/* Garis sobek ala kupon */}
                  <div
                    aria-hidden="true"
                    className="my-5 border-t border-dashed border-white/15"
                  />
                  <p className="text-xs leading-relaxed text-ink-muted/75">
                    {p.terms}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useMemo, useState } from 'react'
import { brand, outlets, outletCities } from '../../data/content'
import { getOpenStatus, useNow } from '../../utils/openStatus'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import CityMap from '../common/CityMap'
import { IconSearch, IconPin, IconClock, IconArrow, IconWhatsapp } from '../common/Icons'

function mapsLink(address) {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`
}

function waLink(outlet) {
  return `${brand.waLink}?text=${encodeURIComponent(
    `Halo ${outlet.name}, saya ingin bertanya tentang ketersediaan obat.`,
  )}`
}

function OutletCard({ outlet, now, selected, onSelect }) {
  const status = getOpenStatus(now, outlet.close)
  const hours = outlet.close >= 24 ? '24 Jam' : `07.00 – ${outlet.close}.00`
  const cardId = `outlet-${outlet.id}`

  return (
    <div
      className={`card p-5 transition-all duration-400 ${
        selected
          ? 'border-gold/50 bg-elevated/70 shadow-card'
          : 'hover:-translate-y-0.5 hover:border-gold/30'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {/* Judul sekaligus pemicu pilih — tombol sungguhan, bisa diakses keyboard */}
          <button
            type="button"
            onClick={onSelect}
            aria-pressed={selected}
            aria-controls="peta-outlet"
            className="text-left font-display text-lg leading-snug text-ink outline-none transition-colors hover:text-gold-bright focus-visible:text-gold-bright"
          >
            {outlet.name}
          </button>
          <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-ink-muted">
            {outlet.city}
          </span>
        </div>

        <span
          className={`flex shrink-0 items-center gap-2 text-xs font-medium ${
            status.open ? 'text-teal' : 'text-gold'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${status.open ? 'bg-teal' : 'bg-gold'}`}
          />
          {status.open ? 'Buka' : 'Tutup'}
        </span>
      </div>

      <div className="mt-4 space-y-2.5 text-sm text-ink-muted">
        <p className="flex items-start gap-2.5">
          <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dim" />
          <span className="leading-relaxed">{outlet.address}</span>
        </p>
        <p className="flex items-center gap-2.5">
          <IconClock className="h-4 w-4 shrink-0 text-gold-dim" />
          <span>{hours}</span>
        </p>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <a
          href={mapsLink(outlet.address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-ink transition-all duration-300 hover:border-gold/50 hover:text-gold-bright"
        >
          Rute
          <IconArrow className="h-3.5 w-3.5" />
          <span className="sr-only">ke {outlet.name} di Google Maps</span>
        </a>
        <a
          href={waLink(outlet)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat ${outlet.name} via WhatsApp`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-teal transition-all duration-300 hover:bg-teal/20"
        >
          <IconWhatsapp className="h-4 w-4" />
        </a>
      </div>
      <span id={cardId} className="sr-only">
        {selected ? 'Sedang ditampilkan di peta' : ''}
      </span>
    </div>
  )
}

export default function Outlets() {
  const now = useNow()
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('Semua')
  const [activeId, setActiveId] = useState(outlets[0].id)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return outlets.filter((o) => {
      const matchCity = city === 'Semua' || o.city === city
      const matchQuery =
        !q ||
        o.name.toLowerCase().includes(q) ||
        o.city.toLowerCase().includes(q) ||
        o.address.toLowerCase().includes(q)
      return matchCity && matchQuery
    })
  }, [query, city])

  const active =
    filtered.find((o) => o.id === activeId) || filtered[0] || null
  const activeStatus = active ? getOpenStatus(now, active.close) : null

  return (
    <section id="outlet" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="shell">
        <SectionHeading
          align="center"
          eyebrow="Cari Outlet"
          title={
            <>
              Temukan Apotek Nusa <span className="italic text-gold">terdekat</span>
            </>
          }
          subtitle="Enam cabang tersebar di Jakarta, Bandung, dan Surabaya — semua melayani resep, konsultasi, dan pengantaran."
        />

        {/* ============ Kontrol pencarian ============ */}
        <Reveal className="mb-8">
          <div className="card flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center">
            {/* Input cari */}
            <div className="relative flex-1">
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari outlet… (nama, kota, atau alamat)"
                aria-label="Cari outlet"
                className="w-full rounded-full border border-white/10 bg-deep/70 py-3 pl-11 pr-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink-muted focus:border-gold/50 focus:ring-2 focus:ring-gold/15"
              />
            </div>

            {/* Filter kota */}
            <div className="flex flex-wrap gap-2">
              {['Semua', ...outletCities].map((c) => {
                const isActive = city === c
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCity(c)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'border-gold/60 bg-gold/15 text-gold-bright'
                        : 'border-white/10 bg-white/[0.03] text-ink-muted hover:border-gold/40 hover:text-ink'
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* ============ Hasil + Peta ============ */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Daftar outlet */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-widest2 text-ink-muted">
                {filtered.length} outlet ditemukan
              </p>
              {(query || city !== 'Semua') && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setCity('Semua')
                  }}
                  className="text-xs text-gold transition-colors hover:text-gold-bright"
                >
                  Reset filter
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="flex flex-col gap-4">
                {filtered.map((o, i) => (
                  <Reveal key={o.id} delay={i * 0.06}>
                    <OutletCard
                      outlet={o}
                      now={now}
                      selected={active?.id === o.id}
                      onSelect={() => setActiveId(o.id)}
                    />
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="card p-10 text-center">
                  <IconSearch className="mx-auto h-8 w-8 text-gold-dim" />
                  <p className="mt-4 font-display text-lg text-ink">
                    Outlet tidak ditemukan
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Coba kata kunci lain atau reset filter kota.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('')
                      setCity('Semua')
                    }}
                    className="btn-ghost mt-6 !px-6 !py-2.5 text-xs"
                  >
                    Reset pencarian
                  </button>
                </div>
              </Reveal>
            )}
          </div>

          {/* Peta */}
          <Reveal delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div id="peta-outlet" className="relative h-[320px] sm:h-[380px]">
                <CityMap
                  pins={filtered.map((o) => ({
                    id: o.id,
                    x: o.x,
                    y: o.y,
                    selected: active?.id === o.id,
                  }))}
                  onPinClick={setActiveId}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />

                {/* Kartu outlet terpilih */}
                {active && (
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-deep/[0.92] p-4 backdrop-blur">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-display text-base text-ink">
                          {active.name}
                        </div>
                        <div className="mt-1 text-xs text-ink-muted">
                          {active.address}
                        </div>
                      </div>
                      <span
                        className={`shrink-0 text-[11px] font-medium ${
                          activeStatus?.open ? 'text-teal' : 'text-gold'
                        }`}
                      >
                        {activeStatus?.open ? 'Buka' : 'Tutup'}
                      </span>
                    </div>
                    <div className="mt-3.5 flex gap-2">
                      <a
                        href={mapsLink(active.address)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold flex-1 !px-4 !py-2 text-xs"
                      >
                        Buka di Google Maps
                        <IconArrow className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={waLink(active)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost !px-4 !py-2 text-xs"
                      >
                        Chat
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { brand, hero } from '../../data/content'
import GoldParticles from '../common/GoldParticles'
import { IconArrow, IconWhatsapp } from '../common/Icons'

/* ============================================================
   Ilustrasi hero — vitrin apotek premium.
   Komposisi produk nyata (botol obat, blister foil, karton),
   dipisah jadi layer berlapis untuk parallax.
   ============================================================ */

function LayerBack() {
  return (
    <svg viewBox="0 0 520 520" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="niche" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#171B24" />
          <stop offset="100%" stopColor="#0D1015" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3FBFA8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3FBFA8" stopOpacity="0.10" />
        </linearGradient>
        <linearGradient id="amberBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A94A" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7A5C22" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="railLight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4A94A" stopOpacity="0" />
          <stop offset="50%" stopColor="#F2CC7B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4A94A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Niche rak */}
      <rect x="42" y="42" width="436" height="436" rx="28" fill="url(#niche)" />
      <rect
        x="42"
        y="42"
        width="436"
        height="436"
        rx="28"
        fill="none"
        stroke="#8A6F2E"
        strokeOpacity="0.4"
      />

      {/* Lampu rak atas */}
      <rect x="72" y="96" width="376" height="2" fill="url(#railLight)" />

      {/* Siluet botol jauh — hilang dalam gelap, bukan kartun */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
        const x = 78 + i * 38
        const heights = [34, 46, 30, 42, 36, 48, 32, 44, 38, 40]
        const h = heights[i]
        const teal = i % 4 === 2
        return (
          <g key={i} opacity="0.5">
            <rect
              x={x}
              y={148 - h}
              width="18"
              height={h}
              rx="4"
              fill={teal ? 'url(#glass)' : 'url(#amberBack)'}
            />
            <rect x={x + 5} y={152 - h} width="8" height="6" rx="2" fill="#8A6F2E" opacity="0.7" />
          </g>
        )
      })}
      {/* Rak bawah */}
      <rect x="72" y="152" width="376" height="3" rx="1.5" fill="#8A6F2E" fillOpacity="0.55" />
      <rect x="72" y="155" width="376" height="14" fill="#000" fillOpacity="0.35" />
    </svg>
  )
}

function LayerMid() {
  return (
    <svg viewBox="0 0 520 520" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="amberBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6E4A14" />
          <stop offset="18%" stopColor="#E8C071" />
          <stop offset="48%" stopColor="#D4A94A" />
          <stop offset="76%" stopColor="#A8761E" />
          <stop offset="100%" stopColor="#5E3F11" />
        </linearGradient>
        <linearGradient id="capGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2CC7B" />
          <stop offset="100%" stopColor="#B8912F" />
        </linearGradient>
        <linearGradient id="foil" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E9EDF2" />
          <stop offset="45%" stopColor="#B9C0C9" />
          <stop offset="100%" stopColor="#8D949E" />
        </linearGradient>
        <linearGradient id="cartonG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E242F" />
          <stop offset="100%" stopColor="#141821" />
        </linearGradient>
        <linearGradient id="counterTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D4A94A" stopOpacity="0" />
          <stop offset="50%" stopColor="#F2CC7B" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#D4A94A" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="podium" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Meja counter */}
      <rect x="52" y="396" width="416" height="4" rx="2" fill="url(#counterTop)" />
      <rect x="52" y="400" width="416" height="78" fill="#12151C" />
      <rect x="52" y="400" width="416" height="78" fill="none" stroke="#8A6F2E" strokeOpacity="0.3" />

      {/* Bayangan podium */}
      <ellipse cx="262" cy="396" rx="70" ry="14" fill="url(#podium)" />
      <ellipse cx="150" cy="396" rx="46" ry="11" fill="url(#podium)" />
      <ellipse cx="376" cy="396" rx="44" ry="11" fill="url(#podium)" />

      {/* ---------- Botol utama (apotek klasik) ---------- */}
      <g>
        {/* Leher */}
        <rect x="240" y="150" width="44" height="34" fill="#8A6220" />
        {/* Tutup emas */}
        <rect x="232" y="132" width="60" height="24" rx="5" fill="url(#capGold)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={240 + i * 11} y="136" width="3" height="16" rx="1.5" fill="#6E4A14" opacity="0.5" />
        ))}
        {/* Badan kaca amber */}
        <path
          d="M224 190c0-8 8-14 18-14h40c10 0 18 6 18 14v186c0 12-10 22-22 22h-32c-12 0-22-10-22-22V190Z"
          fill="url(#amberBody)"
        />
        {/* Refleksi kaca */}
        <path
          d="M244 184c4-4 10-6 14-6v206c-6-2-12-8-14-14V184Z"
          fill="#FFFFFF"
          opacity="0.18"
        />
        {/* Label */}
        <rect x="236" y="238" width="52" height="96" rx="4" fill="#0F1218" opacity="0.92" />
        <rect x="236" y="238" width="52" height="96" rx="4" fill="none" stroke="#F2CC7B" strokeOpacity="0.6" />
        {/* Palang medis di label */}
        <rect x="257" y="252" width="10" height="30" rx="3" fill="#3FBFA8" />
        <rect x="247" y="262" width="30" height="10" rx="3" fill="#3FBFA8" />
        {/* Garis teks di label */}
        <rect x="244" y="294" width="36" height="4" rx="2" fill="#F5F3EE" opacity="0.55" />
        <rect x="248" y="304" width="28" height="3" rx="1.5" fill="#F5F3EE" opacity="0.3" />
        <rect x="252" y="312" width="20" height="3" rx="1.5" fill="#F5F3EE" opacity="0.3" />
      </g>

      {/* ---------- Blister foil (kiri) ---------- */}
      <g transform="rotate(-8 150 330)">
        <rect x="114" y="278" width="74" height="112" rx="8" fill="url(#foil)" />
        <rect x="114" y="278" width="74" height="112" rx="8" fill="none" stroke="#8D949E" />
        {[0, 1, 2].map((r) =>
          [0, 1].map((c) => (
            <g key={`${r}-${c}`}>
              <circle cx={136 + c * 30} cy={304 + r * 32} r="11" fill="#0A0C10" opacity="0.25" />
              <circle cx={136 + c * 30} cy={302 + r * 32} r="11" fill="#E9EDF2" />
              <circle cx={136 + c * 30} cy={302 + r * 32} r="11" fill="none" stroke="#A8AEB7" />
              <path d="M130 298a8 8 0 0 1 8-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" />
            </g>
          )),
        )}
        {/* Refleksi foil */}
        <path d="M114 286l74 44v14l-74-40Z" fill="#FFFFFF" opacity="0.25" />
      </g>

      {/* ---------- Karton obat (kanan) ---------- */}
      <g transform="rotate(6 376 340)">
        <rect x="342" y="270" width="70" height="120" rx="5" fill="url(#cartonG)" />
        <rect x="342" y="270" width="70" height="120" rx="5" fill="none" stroke="#8A6F2E" strokeOpacity="0.7" />
        {/* Strip aksen teal */}
        <rect x="342" y="300" width="70" height="16" fill="#3FBFA8" opacity="0.85" />
        {/* Garis kemasan */}
        <rect x="352" y="332" width="50" height="5" rx="2.5" fill="#F5F3EE" opacity="0.6" />
        <rect x="352" y="344" width="38" height="4" rx="2" fill="#F5F3EE" opacity="0.32" />
        <rect x="352" y="354" width="44" height="4" rx="2" fill="#F5F3EE" opacity="0.32" />
        <rect x="352" y="368" width="26" height="4" rx="2" fill="#D4A94A" opacity="0.8" />
        {/* Sisi atas (kedalaman) */}
        <path d="M342 270l10-9h70l-10 9Z" fill="#2A313E" />
        <path d="M412 270l10-9v120l-10 9Z" fill="#0D1015" />
      </g>
    </svg>
  )
}

function LayerFront() {
  return (
    <svg viewBox="0 0 520 520" className="h-full w-full" aria-hidden="true">
      {/* Kapsul — kecil, realistis, melayang pelan */}
      <g className="animate-float-slow">
        <g transform="translate(418 150) rotate(-30)">
          <rect x="-24" y="-11" width="48" height="22" rx="11" fill="#E9EDF2" />
          <path d="M0 -11h13a11 11 0 0 1 0 22H0Z" fill="#3FBFA8" />
          <rect x="-18" y="-6" width="12" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
        </g>
      </g>

      <g className="animate-float">
        <g transform="translate(104 448) rotate(14)">
          <rect x="-22" y="-10" width="44" height="20" rx="10" fill="#E9EDF2" />
          <path d="M0 -10h12a10 10 0 0 1 0 20H0Z" fill="#D4A94A" />
          <rect x="-16" y="-5" width="10" height="3.5" rx="1.75" fill="#FFFFFF" opacity="0.8" />
        </g>
      </g>

      {/* Tablet lepas */}
      <circle cx="446" cy="330" r="12" fill="#E9EDF2" />
      <path d="M435 330h22" stroke="#0A0C10" strokeOpacity="0.3" strokeWidth="2" />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  // Parallax — nilai mouse diubah jadi motion value yang dispring (halus)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 })

  const backX = useTransform(sx, (v) => v * -12)
  const backY = useTransform(sy, (v) => v * -8)
  const midX = useTransform(sx, (v) => v * -24)
  const midY = useTransform(sy, (v) => v * -16)
  const frontX = useTransform(sx, (v) => v * -42)
  const frontY = useTransform(sy, (v) => v * -28)

  const onMouseMove = (e) => {
    if (reduced) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const titleDelay = 0.12

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Latar: glow emas lembut (radial-gradient, tanpa blur) */}
      <div
        aria-hidden="true"
        className="glow-gold pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="glow-teal pointer-events-none absolute bottom-[-20%] left-[-15%] h-[420px] w-[420px] rounded-full"
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* ===================== Konten ===================== */}
        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/[0.07] px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-gold-bright">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline — reveal per kata */}
          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
            {hero.title.map((word, i) => (
              <motion.span
                key={word + i}
                initial={reduced ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: titleDelay + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mr-[0.28em] inline-block ${
                  word === hero.highlightWord
                    ? 'bg-gradient-to-r from-gold-bright via-gold to-gold-dim bg-clip-text italic text-transparent'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subjudul — tanpa opacity gate: langsung visible saat paint pertama
              (elemen LCP), animasinya cukup slide-up */}
          <motion.p
            initial={reduced ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: titleDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-[16.5px]"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA — tidak menunggu animasi lain selesai */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: titleDelay + 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#kontak" className="btn-gold">
              {hero.primaryCta}
              <IconArrow className="h-4 w-4" />
            </a>
            <a
              href={brand.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconWhatsapp className="h-4 w-4 text-teal" />
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: titleDelay + 0.65 }}
            className="mt-11 flex flex-wrap gap-x-10 gap-y-5"
          >
            {hero.miniStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-gold">{s.value}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-widest text-ink-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===================== Ilustrasi berlapis ===================== */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          {/* Glow di belakang ilustrasi (radial-gradient, tanpa blur) */}
          <div className="glow-gold absolute inset-8 rounded-full" />

          <motion.div
            style={reduced ? undefined : { x: backX, y: backY }}
            className="absolute inset-0"
          >
            <LayerBack />
          </motion.div>

          <motion.div
            style={reduced ? undefined : { x: midX, y: midY }}
            className="absolute inset-0"
          >
            <LayerMid />
          </motion.div>

          <motion.div
            style={reduced ? undefined : { x: frontX, y: frontY }}
            className="absolute inset-0"
          >
            <LayerFront />
          </motion.div>

          {/* Partikel emas */}
          <GoldParticles density={40} />
        </motion.div>
      </div>

      {/* Garis pemisah bawah */}
      <div className="shell mt-16 lg:mt-24">
        <div className="hairline" />
      </div>
    </section>
  )
}

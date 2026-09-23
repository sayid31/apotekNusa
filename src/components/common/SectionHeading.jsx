import Reveal from './Reveal'

/** Eyebrow + judul + sub judul, dipakai semua section biar konsisten. */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignCls = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  const eyebrowCls = align === 'center' ? 'justify-center' : ''

  return (
    <div className={`${alignCls} mb-12 sm:mb-16`}>
      <Reveal>
        <span className={`eyebrow ${eyebrowCls}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title mt-5">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

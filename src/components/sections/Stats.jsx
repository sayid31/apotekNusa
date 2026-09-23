import { stats } from '../../data/content'
import Counter from '../common/Counter'
import Reveal from '../common/Reveal'

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="shell">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.09}
              className="bg-surface px-5 py-8 text-center sm:px-6 sm:py-10"
            >
              <div className="font-display text-3xl text-gold sm:text-[2.6rem]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-widest2 text-ink-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

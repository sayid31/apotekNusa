import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/common/Reveal'
import { brand } from '../data/content'
import { IconArrow, IconWhatsapp } from '../components/common/Icons'

/* Halaman 404 dengan copy santai + jalan pulang ke beranda. */
export default function NotFound() {
  useEffect(() => {
    document.title = 'Halaman tidak ditemukan | Apotek Nusa'
  }, [])

  return (
    <section className="relative flex min-h-[75vh] items-center py-32">
      <div
        aria-hidden="true"
        className="glow-gold pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2"
      />
      <div className="shell relative text-center">
        <Reveal>
          <span className="eyebrow justify-center">404</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="section-title mx-auto mt-5 max-w-2xl">
            Halaman yang kamu cari{' '}
            <span className="italic text-gold">nggak ada</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
            Mungkin tautannya salah ketik atau sudah lama. Coba balik ke
            beranda, atau kalau mau tanya apa pun, chat aja langsung.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-gold">
              Ke Beranda
              <IconArrow className="h-4 w-4" />
            </Link>
            <a
              href={brand.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconWhatsapp className="h-4 w-4 text-teal" />
              Chat WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

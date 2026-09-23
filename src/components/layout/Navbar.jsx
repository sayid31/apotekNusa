import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { brand, nav } from '../../data/content'
import { Logo, IconArrow } from '../common/Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-deep/[0.85] py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="shell flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10 transition-transform duration-500 group-hover:rotate-6" />
          <span className="leading-tight">
            <span className="block font-display text-lg text-ink">{brand.name}</span>
            <span className="block text-[10px] uppercase tracking-widest2 text-gold/80">
              Pharmacy
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#kontak" className="btn-gold hidden !px-6 !py-2.5 text-[13px] sm:inline-flex">
            Pesan Obat
            <IconArrow className="h-4 w-4" />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
          >
            <span
              className={`h-px w-4 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-4 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-b border-white/[0.07] bg-deep/[0.97] backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/[0.05] py-3.5 text-[15px] text-ink-muted transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={brand.waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold w-full"
                  onClick={() => setOpen(false)}
                >
                  Pesan via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

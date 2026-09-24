import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { brand, nav, infoMenu } from '../../data/content'
import { Logo, IconArrow, IconChevron } from '../common/Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const infoRef = useRef(null)
  const reduced = useReducedMotion()
  const location = useLocation()

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

  /* Tutup semua menu setiap pindah halaman/hash */
  useEffect(() => {
    setOpen(false)
    setInfoOpen(false)
  }, [location.pathname, location.hash])

  /* Dropdown Informasi: tutup saat klik di luar / tekan Escape */
  useEffect(() => {
    if (!infoOpen) return
    const onDown = (e) => {
      if (infoRef.current && !infoRef.current.contains(e.target)) {
        setInfoOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setInfoOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [infoOpen])

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
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10 transition-transform duration-500 group-hover:rotate-6" />
          <span className="leading-tight">
            <span className="block font-display text-lg text-ink">{brand.name}</span>
            <span className="block text-[10px] uppercase tracking-widest2 text-gold/80">
              Pharmacy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.dropdown ? (
              <li key={item.label} ref={infoRef} className="relative">
                <button
                  type="button"
                  aria-expanded={infoOpen}
                  aria-haspopup="true"
                  onMouseEnter={() => setInfoOpen(true)}
                  onClick={() => setInfoOpen((v) => !v)}
                  className="relative flex items-center gap-1.5 py-2 text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                  <IconChevron
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      infoOpen ? 'rotate-180 text-gold' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {infoOpen && (
                    <motion.ul
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? undefined : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      onMouseLeave={() => setInfoOpen(false)}
                      className="absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.09] bg-surface/95 p-2 shadow-card backdrop-blur-xl"
                    >
                      {infoMenu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            onClick={() => setInfoOpen(false)}
                            className="block rounded-xl px-4 py-2.5 text-sm text-ink-muted transition-colors hover:bg-gold/[0.08] hover:text-gold-bright"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group relative text-sm text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/#kontak" className="btn-gold hidden !px-6 !py-2.5 text-[13px] sm:inline-flex">
            Chat Apoteker
            <IconArrow className="h-4 w-4" />
          </Link>

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
            className="absolute inset-x-0 top-full max-h-[85vh] overflow-y-auto border-b border-white/[0.07] bg-deep/[0.97] backdrop-blur-xl lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={reduced ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={infoOpen}
                        onClick={() => setInfoOpen((v) => !v)}
                        className="flex w-full items-center justify-between border-b border-white/[0.05] py-3.5 text-[15px] text-ink-muted transition-colors hover:text-gold"
                      >
                        {item.label}
                        <IconChevron
                          className={`h-4 w-4 transition-transform duration-300 ${
                            infoOpen ? 'rotate-180 text-gold' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {infoOpen && (
                          <motion.ul
                            initial={reduced ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={reduced ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pl-4"
                          >
                            {infoMenu.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  to={sub.href}
                                  onClick={() => setOpen(false)}
                                  className="block border-b border-white/[0.05] py-3 text-sm text-ink-muted transition-colors hover:text-gold"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/[0.05] py-3.5 text-[15px] text-ink-muted transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={brand.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                  onClick={() => setOpen(false)}
                >
                  Chat via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

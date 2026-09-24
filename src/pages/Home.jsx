import { lazy, Suspense, useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'

/* Section bawah fold di-load terpisah — initial load hanya Hero + Stats,
   sisanya menyusul setelah interaktif (mengurangi TBT & style work). */
const Services = lazy(() => import('../components/sections/Services'))
const Promos = lazy(() => import('../components/sections/Promos'))
const Outlets = lazy(() => import('../components/sections/Outlets'))
const Testimonials = lazy(() => import('../components/sections/Testimonials'))
const Contact = lazy(() => import('../components/sections/Contact'))

export default function Home() {
  useEffect(() => {
    document.title = 'Apotek Nusa — Apotek 24 Jam di Menteng, Jakarta'
  }, [])

  return (
    <>
      <Hero />
      <Stats />
      {/* content-visibility auto + lazy: tidak dihitung saat load */}
      <div className="cv-section">
        <Suspense fallback={<div aria-hidden="true" className="min-h-[60vh]" />}>
          <Services />
          <Promos />
          <Outlets />
          <Testimonials />
          <Contact />
        </Suspense>
      </div>
    </>
  )
}

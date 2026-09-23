import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'

/* Section bawah fold di-load terpisah — initial load hanya Hero + Stats,
   sisanya menyusul setelah interaktif (mengurangi TBT & style work). */
const Services = lazy(() => import('./components/sections/Services'))
const Products = lazy(() => import('./components/sections/Products'))
const Outlets = lazy(() => import('./components/sections/Outlets'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Contact = lazy(() => import('./components/sections/Contact'))

export default function App() {
  return (
    <div className="min-h-screen bg-deep">
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten-utama" tabIndex={-1}>
        <Hero />
        <Stats />
        {/* content-visibility auto + lazy: tidak dihitung saat load */}
        <div className="cv-section">
          <Suspense fallback={<div aria-hidden="true" className="min-h-[60vh]" />}>
            <Services />
            <Products />
            <Outlets />
            <Testimonials />
            <FAQ />
            <Contact />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}

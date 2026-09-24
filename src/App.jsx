import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollManager from './components/common/ScrollManager'
import Home from './pages/Home'
import Informasi from './pages/Informasi'

/* Hanya halaman 404 yang di-lazy — kalau /informasi di-lazy, fallback
   Suspense (min-h-[60vh]) diganti konten saat chunk datang → CLS besar. */
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="min-h-screen bg-deep">
      <ScrollManager />
      <a href="#konten-utama" className="skip-link">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten-utama" tabIndex={-1}>
        <Suspense fallback={<div aria-hidden="true" className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informasi" element={<Informasi />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

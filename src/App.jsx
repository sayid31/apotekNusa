import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Products from './components/sections/Products'
import Outlets from './components/sections/Outlets'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-deep">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Outlets />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

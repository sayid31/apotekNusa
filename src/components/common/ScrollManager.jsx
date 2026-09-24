import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Menangani scroll di SPA:
   - ada hash (#kontak, /informasi#karir, dst) → scroll ke elemennya
     (dengan retry, karena section lazy-load belum tentu sudah ada)
   - pindah halaman tanpa hash → kembali ke atas
   Elemen section punya scroll-mt-24 supaya tidak ketutup navbar. */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      let tries = 0
      const attempt = () => {
        const el = document.getElementById(id)
        if (el) {
          // tanpa opsi behavior → ikut CSS scroll-behavior
          // (halus saat normal, instan saat prefers-reduced-motion)
          el.scrollIntoView({ block: 'start' })
        } else if (tries++ < 40) {
          setTimeout(attempt, 75)
        }
      }
      attempt()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, key])

  return null
}

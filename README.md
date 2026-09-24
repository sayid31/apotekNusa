# Apotek Nusa — Landing Page

Landing page premium untuk apotek "Apotek Nusa": dark theme + aksen emas, seluruh konten berbahasa Indonesia, animasi halus di setiap section.

**Live:** https://apotek-nusa.vercel.app
**Repo:** https://github.com/sayid31/apotekNusa

## Stack

- React 18 + Vite 5 + React Router 7 (2 halaman: `/` dan `/informasi`)
- Tailwind CSS 3 (token warna di `tailwind.config.js`)
- Framer Motion (animasi)
- Font self-host: Playfair Display + Inter (`@fontsource`, subset latin — tanpa Google Fonts)

## Menjalankan

```bash
npm install
npm run dev        # dev server
npm run build      # build production + inline CSS ke index.html
npm run preview    # preview build production
```

## Struktur

```
src/
├── App.jsx                    # routing (/, /informasi, 404)
├── data/content.js            # ← SELURUH KONTEN/TEKS ada di sini
├── pages/
│   ├── Home.jsx               # halaman utama: Hero → Stats → Layanan → Promo
│   │                          #   → Outlet → Testimoni → Kontak
│   ├── Informasi.jsx          # halaman /informasi: Tentang → Karir → FAQ
│   └── NotFound.jsx           # halaman 404
├── components/
│   ├── layout/                # Navbar (dropdown Informasi), Footer
│   ├── sections/              # Hero, Stats, Services, Promos, Tentang,
│   │                          # Karir, Outlets, Testimonials, FAQ, Contact
│   └── common/                # Reveal, ScrollManager, CityMap, Icons
├── utils/openStatus.js        # status Buka/Tutup realtime
scripts/
└── inline-build.mjs           # pasca-build: inline CSS ke index.html
vercel.json                    # SPA rewrite + header keamanan (CSP, dll)
workflow.md                    # dokumen konsep & checklist proses
```

## Cara mengedit konten

Semua teks — termasuk menu, promo, tentang, karir, testimoni, FAQ, outlet, dan info brand — ada di **`src/data/content.js`** — tidak perlu menyentuh komponen. Contoh:

```js
// Ganti nomor WhatsApp semua tombol
brand: { waLink: 'https://wa.me/6281234567890', ... }

// Tambah promo baru (tampil sebagai pamflet di section Promo)
promos: [ { period: 'Sampai 30 November', discount: 'Diskon 20%', item: '…', desc: '…', terms: '…' } ]

// Tambah outlet baru
outlets: [ { id: 7, name: 'Apotek Nusa …', city: '…', ... } ]
```

Sub-menu "Informasi" di navbar juga diatur di sini: item utama `nav` (label `Informasi`) + daftar isinya `infoMenu` (Karir, Tentang, FAQ → semuanya menunjuk ke `/informasi#…`).

Setelah edit, jalankan `npm run build` (atau push ke `main` — Vercel auto-build).

## Deploy

Vercel, project `apotek-nusa`, terhubung ke repo GitHub — **setiap push ke `main` otomatis deploy**.

Build script `npm run build` juga menjalankan `scripts/inline-build.mjs` yang meng-inline CSS utama ke `index.html` (menghilangkan render-blocking request). Jangan hapus script ini; JS sengaja tidak di-inline karena chunk code-split bergantung ke file entry.

### Keamanan (`vercel.json`)

- **SPA rewrite** `/(.*) → /index.html` — semua rute (termasuk `/informasi` & 404) di-handle React Router.
- **Header keamanan** di semua rute:
  - `Content-Security-Policy` — `script-src 'self'` (tanpa inline script/skrip eksternal, build memang tidak menyisipkan inline script), `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`, `style-src 'self' 'unsafe-inline'` (CSS di-inline oleh build).
  - `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
  - `Strict-Transport-Security` (HSTS), `Referrer-Policy`, `Permissions-Policy`
- Semua link `target="_blank"` memakai `rel="noopener noreferrer"`.

> Catatan: `npm audit` menemukan 2 temuan (esbuild/vite) yang hanya ada di **devDependency** (development server) — `npm audit --omit=dev` = 0 vulnerability. Jangan jalankan `npm audit fix --force` karena akan upgrade vite ke versi breaking.

## Kualitas (Lighthouse, production)

| Kategori | Skor |
|---|---|
| Performance | **96** (mobile) / 100 (desktop) |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

Aksesibilitas: skip link, focus ring `:focus-visible`, hierarki heading, `aria-expanded`/`aria-controls` pada FAQ & dropdown navbar (hover/fokus/klik, tutup dengan Escape), dan dukungan penuh `prefers-reduced-motion` (semua animasi nonaktif).

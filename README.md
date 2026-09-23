# Apotek Nusa — Landing Page

Landing page premium untuk apotek "Apotek Nusa": dark theme + aksen emas, seluruh konten berbahasa Indonesia, animasi halus di setiap section.

**Live:** https://apotek-nusa.vercel.app
**Repo:** https://github.com/sayid31/apotekNusa

## Stack

- React 18 + Vite 5
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
├── App.jsx                    # urutan section
├── data/content.js            # ← SELURUH KONTEN/TEKS ada di sini
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Hero, Stats, Services, Products,
│   │                          # Outlets, Testimonials, FAQ, Contact
│   └── common/                # Reveal (wrapper animasi), CityMap, Icons
├── utils/openStatus.js        # status Buka/Tutup realtime
scripts/
└── inline-build.mjs           # pasca-build: inline CSS ke index.html
workflow.md                    # dokumen konsep & checklist proses
```

## Cara mengedit konten

Semua teks, data outlet, produk, testimoni, FAQ, dan info brand ada di **`src/data/content.js`** — tidak perlu menyentuh komponen. Contoh:

```js
// Ganti nomor WhatsApp semua tombol
brand: { waLink: 'https://wa.me/6281234567890', ... }

// Tambah outlet baru
outlets: [ { id: 7, name: 'Apotek Nusa …', city: '…', ... } ]
```

Setelah edit, jalankan `npm run build` (atau push ke `main` — Vercel auto-build).

## Deploy

Vercel, project `apotek-nusa`, terhubung ke repo GitHub — **setiap push ke `main` otomatis deploy**.

Build script `npm run build` juga menjalankan `scripts/inline-build.mjs` yang meng-inline CSS utama ke `index.html` (menghilangkan render-blocking request). Jangan hapus script ini; JS sengaja tidak di-inline karena chunk code-split bergantung ke file entry.

## Kualitas (Lighthouse, production)

| Kategori | Skor |
|---|---|
| Performance | **96** (mobile) / 100 (desktop) |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

Aksesibilitas: skip link, focus ring `:focus-visible`, hierarki heading, `aria-expanded`/`aria-controls` pada FAQ, dan dukungan penuh `prefers-reduced-motion` (semua animasi nonaktif).

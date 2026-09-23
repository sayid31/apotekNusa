# Workflow — Landing Page "Apotek Nusa"

Dokumen konsep &amp; alur kerja dari awal sampai akhir.
Status: **IN PROGRESS — Fase 1–3 selesai, siap masuk Fase 4 (polish).**

---

## 1. Ringkasan Proyek


| Item        | Keputusan                                                          |
| ----------- | ------------------------------------------------------------------ |
| Nama brand  | **Apotek Nusa**                                                    |
| Tipe        | Landing page statis (satu halaman)                                 |
| Bahasa      | Bahasa Indonesia                                                   |
| Tech stack  | React + Vite + Tailwind CSS                                        |
| Gaya visual | **Dark premium + aksen emas**                                      |
| Tujuan      | Terlihat "wah" &amp; elegan, tapi tetap terasa seperti apotek asli |


**Ukuran keberhasilan:** orang membuka situsnya dan langsung berpikir
*"ini apotek yang serius, profesional, dan modern"* — bukan template generik,
dan bukan juga norak penuh efek.

---

## 2. Insight dari Riset Inspirasi

Riset dilakukan ke tiga referensi yang diminta: **Three.js Showcase**,
**Lusion.co**, dan **FWA / WebDesignAwards kategori Healthcare**.

### 2.1 Lusion.co

- Kuncinya bukan jumlah 3D, tapi **keseimbangan**: gerakan merespons mouse
dan scroll, tetapi konten tetap jadi fokus.
- Easing **lambat &amp; halus** — tidak ada animasi cepat yang menjerit perhatian.

### 2.2 Three.js Showcase

- Pola paling relevan: **product showcase 3D** — objek melayang, berputar
pelan, pencahayaan dramatis.
- Peringatan penting: hero yang berisi *seluruh environment 3D interaktif*
sudah kelewatan → terasa seperti game, bukan website.

### 2.3 FWA / WebDesignAwards — Healthcare

- Pemenang kategori kesehatan justru yang **tidak norak**
(contoh: "La Pharmacie — Modern French Pharmacy").
- Formula juara: tipografi besar &amp; bersih, ruang kosong banyak,
**satu** elemen visual kuat, animasi reveal halus saat scroll.

### 2.4 Best practice hero (Prismic / LogRocket / Awwwards)

- Animasi **tidak boleh memblokir** judul, sub-judul, dan CTA.
- Headline + tombol harus terlihat &amp; bisa diklik dalam **3 detik pertama**.

### 2.5 Kesimpulan → Prinsip Gerak (Motion Principles)

> **"Wah" datang dari KONSISTENSI gerakan, bukan dari JUMLAH efek.**

1. Satu *bahasa gerak* yang dipakai dari hero sampai footer:
 drift lembut, reveal saat scroll, glow emas.
2. Semua easing lambat &amp; halus (`cubic-bezier` panjang / `ease-out` panjang).
3. Setiap elemen hanya bergerak **sekali** saat masuk layar (reveal),
 tidak bergerak terus-menerus kecuali elemen hero.
4. Hormati `prefers-reduced-motion` — matikan animasi untuk user yang minta.
5. Tidak ada animasi yang menunda akses ke konten.

---

## 3. Arah Visual

### 3.1 Palet Warna


| Token          | Hex       | Pemakaian                                                                                      |
| -------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `bg-deep`      | `#0A0C10` | Background utama (nyaris hitam kebiruan)                                                       |
| `bg-surface`   | `#12151C` | Kartu / section alternatif                                                                     |
| `bg-elevated`  | `#1A1E27` | Kartu terangkat, input                                                                         |
| `gold`         | `#D4A94A` | Aksen utama, judul highlight, ikon                                                             |
| `gold-bright`  | `#F2CC7B` | Hover, glow, garis aksen                                                                       |
| `gold-dim`     | `#8A6F2E` | Border halus, divider                                                                          |
| `text-primary` | `#F5F3EE` | Teks utama (putih hangat)                                                                      |
| `text-muted`   | `#9AA0AC` | Teks sekunder                                                                                  |
| `medical-teal` | `#3FBFA8` | Aksen kecil **tipuan "rasa apotek"** — dipakai sangat hemat (badge, status "buka", ikon resep) |


> Catatan: hijau sengaja **tidak** dipakai sebagai warna dominan.
> Kesan "apotek" dijaga oleh `medical-teal` dalam dosis kecil +
> ikon &amp; bahasa visual khas apotek (botol obat, resep, kapsul, palang apotek).

### 3.2 Tipografi

- Judul: font display serif atau sans tebal ber-*tracking* rapat → kesan premium
- Isi: sans-serif bersih, line-height lega
- Angka statistik: font numerik besar dengan aksen emas

### 3.3 Ikonografi &amp; Gambar

- **Semua SVG inline / dibuat sendiri** (logo, ikon layanan, ilustrasi hero,
produk) — tajam di segala layar, gampang diwarnai emas, tanpa file eksternal.
- *(Keputusan aset final dikonfirmasi di Fase 0.)*

---

## 4. Struktur Section (urutan halaman)


| #   | Section                  | Isi utama                                                      | Animasi                                       |
| --- | ------------------------ | -------------------------------------------------------------- | --------------------------------------------- |
| 0   | **Navbar**               | Logo Apotek Nusa, nav, CTA "Pesan Obat"                        | Menyusut + backdrop blur saat scroll          |
| 1   | **Hero + CTA**           | Headline, sub, 2 tombol, visual apotek                         | **Kuat** — lihat §5                           |
| 2   | **Statistik**            | 4 angka kepercayaan (pelanggan, jam layanan, dll)              | Counter angka naik saat masuk layar           |
| 3   | **Layanan**              | 6 kartu layanan (resep, konsultasi, cek kesehatan, antar, dll) | Reveal berjenjang + ikon SVG animasi          |
| 4   | **Produk unggulan**      | Grid kartu produk dengan harga &amp; badge                     | Kartu melayang saat hover, reveal saat scroll |
| 5   | **Cari Outlet**          | Pencarian + filter kota + peta 6 cabang interaktif             | Reveal, pin peta, status Buka/Tutup realtime   |
| 6   | **Testimoni**            | Kartu ulasan + rating bintang                                  | Reveal + bintang terisi satu per satu         |
| 7   | **FAQ**                  | Akordeon pertanyaan umum                                       | Rotasi ikon + tinggi transisi halus           |
| 8   | **Kontak / Lokasi**      | Alamat, jam buka, peta, WhatsApp                               | Reveal + badge "Buka/Tutup" realtime          |
| 9   | **Footer**               | Nav, sosial media, copyright                                   | Minimal, tanpa gerak                          |
| —   | **Preloader** (opsional) | Logo Apotek Nusa singkat                                       | Maks. 1 detik, tidak memblokir                |


---

## 5. Konsep Animasi Hero (keputusan kritis)

### Opsi yang sudah dievaluasi


| Opsi                             | Isi                                                                              | Kesan                                                        | Bobot                        |
| -------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- |
| **A. 3D Three.js/R3F**           | Botol obat &amp; kapsul 3D melayang, material emas/kaca, ikut mouse &amp; scroll | Paling "wah", pola product-showcase yang menang di showcase  | Berat (~200–400 KB three.js) |
| **B. Ilustrasi + GSAP parallax** | Layer ilustrasi apotek gerak parallax + teks reveal + glow emas                  | Elegan, ringan, konsisten gaya FWA healthcare                | Ringan                       |
| **C. Hybrid (rekomendasi)**      | Partikel emas lembut (canvas) + ilustrasi berlapis parallax + GSAP text reveal   | "Wah" tapi ringan, **bahasa gerak seragam ke semua section** | Sedang                       |


### ✅ Keputusan: **Opsi C — Hybrid**

**Alasan:**

1. Kamu minta animasi di *semua section* → kalau hero pakai Three.js penuh
 lalu section lain cuma fade-in biasa, terasa **timpang**.
2. Dengan Hybrid, bahasa gerakannya bisa dipakai seragam hero → footer,
 dan justru itu yang bikin terasa "wah" versi Lusion: **konsistensi motion**.
3. Inline SVG tidak bergantung asset eksternal (konsisten dengan §3.3).
4. Ringan: LCP aman, teks &amp; CTA muncul &lt; 1 detik.

**Rincian komposisi hero (revisi setelah review visual):**

> **Revisi:** versi awal memakai kartun apoteker + kapsul besar melayang →
> terasa seperti website anak-anak, bukan bisnis. Diganti jadi komposisi
> *vitrin produk apotek premium* (sesuai inspirasi FWA healthcare:
> satu elemen visual kuat, bukan banyak karakter).

- **Lapisan 1 — Rak belakang:** siluet botol memudar dalam gelap + lampu rak emas.
- **Lapisan 2 — Produk utama:** botol obat kaca amber (tutup emas, label medis),
blister foil aluminium, dan karton obat di atas counter bergaris lampu.
Parallax halus ikut gerak mouse.
- **Lapisan 3 — Konten:** headline reveal per-kata (geser ke atas + fade),
sub-judul, 2 CTA. Muncul **tanpa menunggu** lapisan lain selesai.
- **Lapisan 4 — Aksen:** kapsul kecil realistis + tablet melayang pelan,
garis glow emas bergerak sangat pelan.
- **Lapisan 5 — Partikel emas:** canvas debu kecil, opacity rendah.
- **Chip kredibilitas (kartu, bukan stiker):** "Resep Terverifikasi" &
"Pengantaran 45 Menit" — nada korporat, bukan playful.

---

## 6. Arsitektur Teknis

### 6.1 Stack

- **Vite** — build tool &amp; dev server
- **React 18** — komponen
- **Tailwind CSS** — styling + token warna di `tailwind.config.js`
- **Framer Motion** — reveal, parallax, akordeon, counter (API React, ringan)
- **Plain `<canvas>`** — partikel hero (tanpa library, kontrol penuh)

> Tidak pakai Three.js / GSAP / Lottie — alasan di §5.

### 6.2 Struktur folder yang dituju

```
FarmCareLandingPage/
├── workflow.md                 ← dokumen ini
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css               ← font, token global, base styles
    ├── components/
    │   ├── common/
    │   │   ├── Reveal.jsx       ← wrapper animasi masuk layar (seragam)
    │   │   ├── GoldParticles.jsx
    │   │   ├── Counter.jsx      ← animasi angka
    │   │   ├── SectionHeading.jsx
    │   │   ├── Icons.jsx        ← semua ikon + logo SVG inline
    │   │   └── CityMap.jsx      ← peta stilasi (Outlet & Kontak)
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   └── sections/
    │       ├── Hero.jsx
    │       ├── Stats.jsx
    │       ├── Services.jsx
    │       ├── Products.jsx
    │       ├── Outlets.jsx      ← Cari Outlet (search + filter + peta)
    │       ├── Testimonials.jsx
    │       ├── FAQ.jsx
    │       └── Contact.jsx
    ├── data/
    │   └── content.js           ← SEMUA teks Indonesia di satu tempat
    └── utils/
        └── openStatus.js        ← status Buka/Tutup realtime
```

**Prinsip kunci:** semua animasi lewat satu komponent `Reveal` →
konsistensi gerak terjamin otomatis di semua section.

---

## 7. Fase Pengerjaan

### Fase 0 — Konfirmasi konsep *(SEKARANG)*

- [x] Riset inspirasi (Three.js Showcase, Lusion, FWA)
- [x] Tentukan warna: dark premium + emas
- [x] Tentukan nama: Apotek Nusa
- [x] Dokumen workflow.md ini dibuat
- [ ] User review &amp; approve workflow.md
- [ ] Kunci keputusan: Opsi C untuk hero, sumber aset gambar

### Fase 1 — Setup proyek ✅

- [x] Vite + React (JS) terpasang
- [x] Install &amp; konfigurasi Tailwind — token warna §3.1 terdefinisi
- [x] Framer Motion terpasang
- [x] Font (Playfair Display + Inter) &amp; base styles di `index.css`
- [x] `data/content.js` berisi seluruh copywriting Indonesia

### Fase 2 — Kerangka section ✅ *(+ revisi visual)*

- [x] Navbar + Footer
- [x] Hero — layout &amp; ilustrasi SVG
- [x] Stats, Services, Products, Testimonials, FAQ, Contact
- [x] **Cari Outlet** — search, filter kota, peta pin interaktif *(tambahan request)*
- [x] Ilustrasi hero direvisi: kartun → vitrin produk premium *(revisi request)*
- [ ] Responsive check menyeluruh: 360px / 768px / 1280px / 1920px

### Fase 3 — Lapisan animasi ✅

- [x] Komponen `Reveal` (wrapper seragam)
- [x] Text reveal headline Hero (per-kata)
- [x] Parallax layer ilustrasi Hero (mouse)
- [x] Partikel emas (canvas, hormati reduced-motion)
- [x] Counter statistik
- [x] Reveal berjenjang Services / Products / Testimonials / Outlets
- [x] Akordeon FAQ halus
- [x] Navbar shrink + backdrop blur saat scroll

### Fase 4 — Polish &amp; kualitas ⏳ *(berikutnya)*

- [ ] Responsive check menyeluruh semua breakpoint
- [ ] Cek performa: Lighthouse ≥ 90 (Performance, SEO, A11y)
- [ ] Uji `prefers-reduced-motion`
- [ ] Cek keyboard navigation &amp; fokus kontras (WCAG AA)
- [ ] Pastikan teks + CTA tampil &lt; 3 detik (animasi tidak memblokir)
- [ ] Meta title/description, Open Graph, favicon
- [ ] Cross-browser: Chrome, Firefox, Edge, Safari

### Fase 5 — Deploy

- [ ] `npm run build`
- [ ] Deploy: **Vercel** / **Netlify** / GitHub Pages
- [ ] Pasang domain sendiri (opsional)
- [ ] Serah terima: cara edit konten (`data/content.js`)

---

## 8. Risiko &amp; Mitigasi


| Risiko                              | Mitigasi                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| Terlalu banyak animasi → jadi norak | Prinsip §2.5: satu bahasa gerak, elemen bergerak sekali                           |
| Animasi memblokir konten            | Konten &amp; CTA dirender langsung; animasi hanya *enhancement*                   |
| Performa buruk di HP                | Tanpa Three.js; canvas partikel dimatikan di mobile/reduced-motion                |
| SVG ilustrasi rumit                     | Ilustrasi hero dibuat bertahap: rak → botol → blister → karton (bukan karakter)    |
| Warna emas terasa murah             | Pakai emas **matang** (`#D4A94A`), hindari kuning terang; glow halus &amp; jarang |


---

## 9. Out of Scope (tidak dikerjakan di versi ini)

- Halaman terpisah (tentang, blog, karier)
- Backend / form submission nyata (CTA mengarah WhatsApp)
- Login, keranjang belanja, payment gateway
- Toggle bahasa bilingual
- CMS

---

*Maintenance dokumen ini setiap kali ada keputusan baru.*
*Status saat ini: Fase 1–3 selesai → berikutnya Fase 4 (polish &amp; kualitas).*
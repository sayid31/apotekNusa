/* ============================================================
   Seluruh copywriting Apotek Nusa — ubah konten cukup di sini
   ============================================================ */

export const brand = {
  name: 'Apotek Nusa',
  tagline: 'Apotek Terpercaya, Melayani dengan Hati',
  phone: '+62 812-3456-7890',
  waLink: 'https://wa.me/6281234567890',
  email: 'halo@apotecnusa.id',
  address: 'Jl. Merdeka Raya No. 88, Menteng, Jakarta Pusat',
  hours: [
    { label: 'Senin – Jumat', value: '07.00 – 23.00' },
    { label: 'Sabtu', value: '07.00 – 22.00' },
    { label: 'Minggu & Hari Libur', value: '24 Jam' },
  ],
}

export const nav = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Produk', href: '#produk' },
  { label: 'Outlet', href: '#outlet' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
]

export const hero = {
  badge: 'Buka 24 Jam • Apoteker Bersertifikat',
  title: ['Jaga', 'Kesehatan', 'Keluarga', 'dari', 'Sekarang'],
  highlightWord: 'Kesehatan',
  subtitle:
    'Apotek Nusa menyediakan obat asli, konsultasi apoteker, dan pengantaran cepat ke rumah Anda. Transparan, aman, dan selalu siap kapan pun Anda butuhkan.',
  primaryCta: 'Pesan Sekarang',
  secondaryCta: 'Konsultasi Gratis',
  miniStats: [
    { value: '4.9', label: 'Rating Google' },
    { value: '24/7', label: 'Siap Melayani' },
    { value: '100%', label: 'Obat Asli' },
  ],
}

export const stats = [
  { value: 12500, suffix: '+', label: 'Pelanggan Setia' },
  { value: 24, suffix: ' Jam', label: 'Layanan Nonstop' },
  { value: 3200, suffix: '+', label: 'Resep Diabaca' },
  { value: 45, suffix: ' Menit', label: 'Rata-rata Antar' },
]

export const services = [
  {
    icon: 'receipt',
    title: 'Penebusan Resep',
    desc: 'Kirim resep via WhatsApp, kami siapkan dan antar tanpa antre.',
  },
  {
    icon: 'chat',
    title: 'Konsultasi Apoteker',
    desc: 'Tanya dosis, efek samping, dan interaksi obat langsung dengan ahlinya.',
  },
  {
    icon: 'stethoscope',
    title: 'Cek Kesehatan Ringan',
    desc: 'Cek tekanan darah, gula darah, dan kolesterol di tempat, gratis.',
  },
  {
    icon: 'truck',
    title: 'Antar Cepat',
    desc: 'Pengantaran rata-rata 45 menit untuk area Jakarta Pusat sekitarnya.',
  },
  {
    icon: 'shield',
    title: 'Jaminan Obat Asli',
    desc: 'Seluruh produk terdaftar BPOM, disimpan dengan rantai dingin tepat.',
  },
  {
    icon: 'bell',
    title: 'Pengingat Obat',
    desc: 'Notifikasi rutin agar Anda dan keluarga tidak lupa minum obat.',
  },
]

export const products = [
  {
    name: 'Vitamin C 1000mg',
    category: 'Vitamin & Suplemen',
    price: 'Rp 45.000',
    badge: 'Terlaris',
    art: 'bottle',
  },
  {
    name: 'Paracetamol 500mg',
    category: 'Obat Pereda Nyeri',
    price: 'Rp 18.000',
    badge: null,
    art: 'strip',
  },
  {
    name: 'Sirup Batuk Anak',
    category: 'Obat Anak',
    price: 'Rp 62.000',
    badge: 'Pilihan Apoteker',
    art: 'syrup',
  },
  {
    name: 'Masker Medis 50 pcs',
    category: 'Alat Kesehatan',
    price: 'Rp 35.000',
    badge: null,
    art: 'mask',
  },
  {
    name: 'Hand Sanitizer 500ml',
    category: 'Perlindungan',
    price: 'Rp 28.000',
    badge: null,
    art: 'pump',
  },
  {
    name: 'Multivitamin Dewasa',
    category: 'Vitamin & Suplemen',
    price: 'Rp 89.000',
    badge: 'Baru',
    art: 'jar',
  },
]

export const testimonials = [
  {
    name: 'Rina Kusuma',
    role: 'Ibu dari dua anak',
    rating: 5,
    quote:
      'Anak saya demam tengah malam dan apotek lain tutup. Apotek Nusa antar obatnya dalam 40 menit. Sangat terbantu.',
  },
  {
    name: 'Bagas Pratama',
    role: 'Pasien kronis',
    rating: 5,
    quote:
      'Saya rutin beli obat darah tinggi. Harganya transparan dan apotekernya sabar menjelaskan cara minumnya.',
  },
  {
    name: 'Siti Marlina',
    role: 'Pekerja kantoran',
    rating: 5,
    quote:
      'Kirim resep lewat WhatsApp, sorenya obat sudah sampai kantor. Praktis dan tidak perlu antre panjang.',
  },
]

export const faqs = [
  {
    q: 'Apakah obat yang dijual dijamin asli?',
    a: 'Ya. Seluruh produk kami dibeli langsung dari distributor resmi, terdaftar BPOM, dan disimpan sesuai standar suhu penyimpanan. Anda bisa memindai kode verifikasi pada kemasan.',
  },
  {
    q: 'Bagaimana cara mengirim resep dokter?',
    a: 'Cukup kirim foto resep yang jelas melalui WhatsApp. Apoteker kami akan memeriksa ketersediaan, mengonfirmasi total biaya, lalu mengantarkan obat ke alamat Anda.',
  },
  {
    q: 'Berapa lama pengantaran obat?',
    a: 'Rata-rata 45 menit untuk area Jakarta Pusat dan sekitarnya. Pesanan di luar jam operasional akan diantar pada pagi hari berikutnya, kecuali layanan darurat 24 jam.',
  },
  {
    q: 'Apakah bisa konsultasi tanpa membeli obat?',
    a: 'Bisa. Konsultasi dasar dengan apoteker kami gratis dan tanpa kewajiban membeli. Kami akan menyarankan solusi paling aman sesuai kondisi Anda.',
  },
  {
    q: 'Metode pembayaran apa saja yang diterima?',
    a: 'Tunai di tempat, transfer bank, QRIS, serta dompet digital seperti GoPay, OVO, dan ShopeePay. Untuk pesanan antar, pembayaran dapat dilakukan saat barang diterima.',
  },
]

/* ============================================================
   Outlet / cabang — x & y dipakai untuk posisi pin di peta
   ============================================================ */

export const outletCities = [
  'Jakarta Pusat',
  'Jakarta Selatan',
  'Bandung',
  'Surabaya',
]

export const outlets = [
  {
    id: 'menteng',
    name: 'Apotek Nusa Menteng',
    city: 'Jakarta Pusat',
    address: 'Jl. Merdeka Raya No. 88, Menteng, Jakarta Pusat',
    close: 23,
    x: 150,
    y: 165,
  },
  {
    id: 'tanah-abang',
    name: 'Apotek Nusa Tanah Abang',
    city: 'Jakarta Pusat',
    address: 'Jl. K.H. Mas Mansyur No. 45, Tanah Abang, Jakarta Pusat',
    close: 23,
    x: 95,
    y: 225,
  },
  {
    id: 'kebayoran',
    name: 'Apotek Nusa Kebayoran',
    city: 'Jakarta Selatan',
    address: 'Jl. Panglima Polim V No. 12, Kebayoran Baru, Jakarta Selatan',
    close: 23,
    x: 250,
    y: 248,
  },
  {
    id: 'kemang',
    name: 'Apotek Nusa Kemang',
    city: 'Jakarta Selatan',
    address: 'Jl. Kemang Raya No. 3, Bangka, Jakarta Selatan',
    close: 24,
    x: 320,
    y: 188,
  },
  {
    id: 'bandung',
    name: 'Apotek Nusa Dago',
    city: 'Bandung',
    address: 'Jl. Ir. H. Juanda No. 210, Dago, Bandung',
    close: 22,
    x: 168,
    y: 92,
  },
  {
    id: 'surabaya',
    name: 'Apotek Nusa Tunjungan',
    city: 'Surabaya',
    address: 'Jl. Tunjungan No. 56, Genteng, Surabaya',
    close: 23,
    x: 322,
    y: 105,
  },
]

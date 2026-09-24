/* ============================================================
   Seluruh copywriting Apotek Nusa — ubah konten cukup di sini
   ============================================================ */

export const brand = {
  name: 'Apotek Nusa',
  tagline: 'Obat asli, apoteker ramah, buka 24 jam',
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
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Promo', href: '/#promo' },
  { label: 'Outlet', href: '/#outlet' },
  { label: 'Testimoni', href: '/#testimoni' },
  { label: 'Informasi', href: '/informasi', dropdown: true },
  { label: 'Kontak', href: '/#kontak' },
]

/* Sub-menu "Informasi" — menunjuk ke bagian di halaman /informasi */
export const infoMenu = [
  { label: 'Karir', href: '/informasi#karir' },
  { label: 'Tentang', href: '/informasi#tentang' },
  { label: 'FAQ', href: '/informasi#faq' },
]

export const hero = {
  badge: 'Buka 24 Jam • Apoteker Bersertifikat',
  title: ['Jaga', 'kesehatan', 'keluarga', 'mulai', 'sekarang'],
  highlightWord: 'kesehatan',
  subtitle:
    'Obatnya asli semua, apotekernya ramah diajak tanya-tanya, dan buka 24 jam kalau butuh mendadak.',
  primaryCta: 'Kirim Resep',
  secondaryCta: 'Konsultasi Gratis',
  miniStats: [
    { value: '4.9', label: 'Rating Google' },
    { value: '24/7', label: 'Selalu Buka' },
    { value: '100%', label: 'Obat Asli' },
  ],
}

export const stats = [
  { value: 12500, suffix: '+', label: 'Pelanggan Setia' },
  { value: 24, suffix: ' Jam', label: 'Buka Terus' },
  { value: 3200, suffix: '+', label: 'Resep Ditebus' },
  { value: 6, suffix: '', label: 'Outlet di 3 Kota' },
]

export const services = [
  {
    icon: 'receipt',
    title: 'Penebusan Resep',
    desc: 'Fotokan resepnya lewat WhatsApp, obatnya kami siapkan. Tidak perlu antre.',
  },
  {
    icon: 'chat',
    title: 'Konsultasi Apoteker',
    desc: 'Bingung obat ini diminumnya kapan? Tanya langsung ke apoteker kami.',
  },
  {
    icon: 'stethoscope',
    title: 'Cek Kesehatan Ringan',
    desc: 'Tensi, gula darah, dan kolesterol bisa dicek langsung di tempat, gratis.',
  },
  {
    icon: 'shield',
    title: 'Jaminan Obat Asli',
    desc: 'Kami ambil obatnya dari distributor resmi, semuanya terdaftar BPOM.',
  },
  {
    icon: 'bell',
    title: 'Pengingat Obat',
    desc: 'Biar obat rutin tidak ada yang kelupaan, kami kirim pengingat lewat WhatsApp.',
  },
]

export const promos = [
  {
    period: 'Sampai 30 November',
    discount: 'Beli 1 Gratis 1',
    item: 'Vitamin C 1000mg',
    desc: 'Buat stok sebulan di rumah, justru lebih pas ambil dua sekaligus.',
    terms: 'Maksimal dua paket tiap orang, selama stoknya masih ada.',
  },
  {
    period: 'Sepanjang November',
    discount: 'Diskon 30%',
    item: 'Sirup batuk anak',
    desc: 'Musim hujan batuk naik. Harganya sudah dipotong, apotekernya juga siap dihubungi.',
    terms: 'Berlaku semua merek, tidak bisa digabung promo lain.',
  },
  {
    period: 'Min. belanja Rp150 ribu',
    discount: 'Potong Rp20.000',
    item: 'Belanja apa saja',
    desc: 'Sekalian isi kabinet obat di rumah, kan makin banyak makin hemat.',
    terms: 'Langsung dipotong di kasir, tidak perlu kode apa pun.',
  },
]

export const about = {
  paragraphs: [
    'Apotek Nusa mulai tahun 2012, dari satu ruko kecil di Menteng. Waktu itu cuma ada satu apoteker, satu printer resep, dan tetangga yang datang hampir tiap malam nanya obat buat anaknya.',
    'Pelanggannya kebanyakan dari mulut ke mulut. Ada yang rutin tiap bulan ambil obat darah tinggi, ada yang kirim resep dari luar kota terus ambil pas sampai. Lama-lama diminta buka di daerah lain, ya kami penuhi.',
    'Sekarang outletnya sudah enam di tiga kota. Yang tidak berubah cuma satu: tetap ada apoteker yang jawab langsung, dan obatnya tetap dari distributor resmi.',
  ],
  points: [
    {
      title: 'Obat asli, tanpa kompromi',
      desc: 'Ambil dari distributor resmi dan terdaftar BPOM. Kalau ada yang lebih murah tapi tidak jelas asalnya, tidak kami ambil.',
    },
    {
      title: 'Tanya itu gratis',
      desc: 'Mau nanya obat sebelum beli juga boleh. Kami jelasin sampai paham, tidak harus beli.',
    },
    {
      title: 'Yang jaga apoteker',
      desc: 'Setiap outlet didampingi apoteker bersertifikat. Bukan cuma kasir yang jawab.',
    },
  ],
}

export const careers = {
  intro:
    'Kami buka peluang buat yang rapi urusan obat dan enak diajak ngobrol sama pasien. Kirim CV-nya lewat WhatsApp atau email, dibalas paling lama seminggu.',
  positions: [
    {
      title: 'Apoteker',
      type: 'Penuh waktu',
      place: 'Menteng, Jakarta',
      note: 'Wajib punya STR aktif. Kamu yang pegang resep dan jawab konsultasi pasien.',
    },
    {
      title: 'Admin Outlet',
      type: 'Penuh waktu',
      place: 'Semua outlet',
      note: 'Jaga loket, urus stok harian, dan bantu pelanggan yang bingung pilih obat. Baru lulus pun boleh coba.',
    },
    {
      title: 'Apoteker Paruh Waktu',
      type: 'Paruh waktu',
      place: 'Bandung & Surabaya',
      note: 'Buat yang jam kerjanya fleksibel. Shift-nya dibicarakan sendiri sama outlet.',
    },
  ],
  apply:
    'Cara melamarnya gampang: kirim CV sama satu paragraf kenapa mau kerja di apotek ke halo@apotecnusa.id, atau chat langsung lewat WhatsApp. Mau tanya-tanya dulu sebelum kirim juga boleh.',
}

export const testimonials = [
  {
    name: 'Rina Kusuma',
    role: 'Ibu dari dua anak',
    rating: 5,
    quote:
      'Anak saya demam jam 12 malam, apotek lain tutup semua. Untungnya Apotek Nusa buka 24 jam dan apotekernya sabar jelasin obat anak. Lega banget.',
  },
  {
    name: 'Bagas Pratama',
    role: 'Langganan tetap',
    rating: 5,
    quote:
      'Saya rutin beli obat darah tinggi di sini. Harganya jelas, dan apotekernya sabar menjelaskan cara minumnya.',
  },
  {
    name: 'Siti Marlina',
    role: 'Pekerja kantoran',
    rating: 5,
    quote:
      'Kirim resep lewat WhatsApp pas jam kerja, sorenya tinggal ambil di outlet. Sudah disiapkan, jadi tidak perlu antre.',
  },
]

export const faqs = [
  {
    q: 'Obatnya dijamin asli semua kan?',
    a: 'Dijamin. Kami beli langsung dari distributor resmi, semuanya terdaftar BPOM, dan disimpan sesuai standar suhu. Kalau mau cek sendiri, kode verifikasinya ada di kemasan.',
  },
  {
    q: 'Gimana cara kirim resep dokter?',
    a: 'Gampang: fotokan resepnya, kirim lewat WhatsApp. Nanti apoteker yang cek stok dan total biayanya dulu, tinggal datang ambil — tidak perlu antre.',
  },
  {
    q: 'Outletnya di mana aja?',
    a: 'Sekarang ada enam cabang: dua di Jakarta Pusat, dua di Jakarta Selatan, satu di Bandung, dan satu di Surabaya. Cek di bagian outlet, ya.',
  },
  {
    q: 'Kalau cuma mau tanya-tanya, boleh?',
    a: 'Boleh. Tanya itu gratis, tidak harus beli. Nanti kami bantu carikan yang paling aman untuk kondisi Anda.',
  },
  {
    q: 'Bisa bayar pakai apa saja?',
    a: 'Tunai, transfer, QRIS, sama GoPay/OVO/ShopeePay juga bisa.',
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

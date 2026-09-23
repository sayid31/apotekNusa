/** Kumpulan ikon SVG inline — semua buatan sendiri, tanpa file eksternal. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconReceipt(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3h12v18l-2.5-1.6L13 21l-2.5-1.6L8 21l-2-1.4V3Z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  )
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </svg>
  )
}

export function IconStethoscope(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3v5a4 4 0 0 0 8 0V3" />
      <path d="M10 12v3a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </svg>
  )
}

export function IconTruck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 6 2 7H4c.5-1 2-3 2-7Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.4l-5.81 3.05L7.3 14 2.6 9.4l6.5-.95L12 2.5Z" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M14.5 8.5H17V5.5h-2.5A3.5 3.5 0 0 0 11 9v2.5H9V14h2v6h3v-6h2.2l.6-2.5H14V9c0-.3.2-.5.5-.5Z" />
    </svg>
  )
}

export function IconWhatsapp(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3.5 20.5l1.4-4.4A8 8 0 1 1 8 19.3l-4.5 1.2Z" />
      <path d="M9 9.5c.4 3 2.5 5 5.5 5.5l1-1.6 1.8.8c-.4 1.5-1.8 2.1-3.3 1.8-3.6-.7-6.3-3.5-7-7-.3-1.5.4-2.9 1.9-3.3l.7 1.8-1.6 1.2" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconChevron(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

/** Logo Apotek Nusa — palang medis dengan inisial, semua SVG inline. */
export function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2CC7B" />
          <stop offset="100%" stopColor="#D4A94A" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="18" fill="#0F1218" stroke="#8A6F2E" strokeWidth="1.5" />
      <rect x="27.5" y="15" width="9" height="34" rx="4.5" fill="url(#lg-gold)" />
      <rect x="15" y="27.5" width="34" height="9" rx="4.5" fill="url(#lg-gold)" />
      <circle cx="32" cy="32" r="5" fill="#0F1218" />
      <circle cx="32" cy="32" r="2" fill="#3FBFA8" />
    </svg>
  )
}

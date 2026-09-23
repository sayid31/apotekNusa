import { useEffect, useState } from 'react'

/**
 * Status buka/tutup berdasarkan jam sekarang.
 * closeHour 24 = buka 24 jam. Minggu selalu 24 jam (sesuai brand.hours).
 */
export function getOpenStatus(now = new Date(), closeHour = 23) {
  const day = now.getDay() // 0 = Minggu
  const hour = now.getHours() + now.getMinutes() / 60

  if (closeHour >= 24 || day === 0) {
    return { open: true, label: 'Buka — 24 Jam' }
  }

  const close = day === 6 ? Math.min(closeHour, 22) : closeHour
  const open = hour >= 7 && hour < close

  return {
    open,
    label: open
      ? `Buka — tutup pukul ${close}.00`
      : 'Tutup — buka lagi pukul 07.00',
  }
}

/** Jam sekarang yang diperbarui berkala (untuk status realtime). */
export function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}

export function useOpenStatus(closeHour = 23) {
  const now = useNow()
  return getOpenStatus(now, closeHour)
}

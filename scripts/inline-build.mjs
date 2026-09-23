/**
 * Pasca-build: inline CSS utama ke dist/index.html.
 *
 * CSS adalah satu-satunya render-blocking request (JS module defer otomatis),
 * jadi meng-inline-nya membuat browser bisa mulai paint begitu HTML + JS siap,
 * tanpa menunggu round-trip ekstra untuk stylesheet.
 *
 * JS TIDAK di-inline: chunk code-split (section bawah fold) mengimpor shared
 * module dari file entry — menghapus atau men-duplikasi entry akan merusak
 * dynamic import. Entry juga dipertahankan agar tetap bisa di-cache browser.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = join(root, 'dist', 'index.html')
let html = readFileSync(htmlPath, 'utf8')
let count = 0

// --- CSS: <link rel="stylesheet" crossorigin href="/assets/xxx.css">
html = html.replace(
  /<link\s+rel="stylesheet"\s+crossorigin\s+href="(\/assets\/[^"]+)">/g,
  (_, src) => {
    const file = join(root, 'dist', src.replace(/^\//, ''))
    if (!existsSync(file)) throw new Error(`CSS tidak ditemukan: ${src}`)
    count++
    const css = readFileSync(file, 'utf8').replace(/<\/style/gi, '<\\/style')
    return `<style>\n${css}\n</style>`
  }
)

if (count === 0) {
  console.warn('[inline-build] Tidak ada stylesheet yang cocok — cek pola tag.')
  process.exit(0)
}

writeFileSync(htmlPath, html)
console.log(
  `[inline-build] OK — ${count} stylesheet di-inline ke index.html (${(
    readFileSync(htmlPath, 'utf8').length / 1024
  ).toFixed(1)} KB)`
)

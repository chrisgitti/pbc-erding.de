/**
 * Liest content/kontakt-routing.md und schreibt lib/kontakt-routing.ts.
 * Wird von next.config.ts als prebuild-Schritt ausgeführt.
 */

import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const src  = join(root, 'content', 'kontakt-routing.md')
const dest = join(root, 'lib', 'kontakt-routing.ts')

const rawMd = readFileSync(src, 'utf-8')

// Fenced code blocks entfernen, damit ## darin nicht als Abschnitt erkannt wird
const md = rawMd.replace(/^```[\s\S]*?^```/gm, '')

/** Parst einen ##-Abschnitt und gibt { value, label, to[], cc[] } zurück. */
function parseSection(heading, body) {
  const [rawKey, ...labelParts] = heading.split('|')
  const value = rawKey.trim()
  const label = labelParts.join('|').trim()

  const toMatch  = body.match(/^to:\s*(.+)$/m)
  const ccMatch  = body.match(/^cc:\s*(.+)$/m)

  const splitEmails = (s) =>
    s.split(',').map(e => e.trim()).filter(Boolean)

  return {
    value,
    label,
    to:  toMatch  ? splitEmails(toMatch[1])  : [],
    cc:  ccMatch  ? splitEmails(ccMatch[1])  : [],
  }
}

// Zeilen auf oberster Ebene mit ## aufteilen; erster Teil (vor erstem ##) wird verworfen
const chunks = md.split(/^(?=## )/m)
const entries = []
for (const chunk of chunks) {
  const headingMatch = chunk.match(/^## (.+)/m)
  if (!headingMatch) continue
  const body = chunk.slice(headingMatch[0].length)
  const entry = parseSection(headingMatch[1], body)
  if (entry.to.length > 0) entries.push(entry)
}

if (entries.length === 0) {
  console.error('[generate-kontakt-routing] Keine Einträge gefunden – Abbruch.')
  process.exit(1)
}

const ts = `// AUTOMATISCH GENERIERT – nicht manuell bearbeiten.
// Quelle: content/kontakt-routing.md
// Änderungen bitte dort vornehmen, dann \`npm run build\` ausführen.

export type KontaktRoute = {
  value: string   // interner Schlüssel (z. B. 'mitgliedschaft')
  label: string   // Anzeigetext im Dropdown
  to: string[]
  cc: string[]
}

export const kontaktRoutes: KontaktRoute[] = ${JSON.stringify(entries, null, 2)
  .replace(/"([^"]+)":/g, '$1:')}
`

writeFileSync(dest, ts, 'utf-8')
console.log(`[generate-kontakt-routing] ${entries.length} Einträge → lib/kontakt-routing.ts`)

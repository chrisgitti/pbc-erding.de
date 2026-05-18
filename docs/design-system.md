# PBC Erding – Design System

## Farben (Tailwind v4 CSS-Tokens in globals.css)

| Token | Wert | Verwendung |
|---|---|---|
| `charcoal-950` | `#0a0a0b` | Seitenhintergrund |
| `charcoal-900` | `#111113` | Kartenebene 1 |
| `charcoal-800` | `#1a1a1e` | Hover-Zustand |
| `green-700` | `#134d22` | Logo, Buttons sekundär |
| `green-900` | `#0a2010` | CTA-Section-Hintergrund |
| `gold-500` | `#d4a043` | Primärer Akzent, CTAs |
| `gold-400` | `#e2b96f` | Hover-Zustand |
| `white/60` | — | Fließtext |
| `white/30` | — | Metadaten, Labels |

## Typografie

- **Headlines:** Inter Black (900), Uppercase, tracking-tight
- **Body:** Inter Regular (400), 16px/1.6
- **Labels:** Inter SemiBold, 0.75rem, UPPERCASE, Letter-spacing 0.2em
- **Zahlen:** `tabular-nums` für Ergebnisse, Statistiken

## Abstände

- Section-Padding: `py-20` bis `py-28`
- Container: max-width 7xl, responsive px-4/6/8
- Kartenabstände: `p-6` bis `p-10`

## Komponenten

### Button
- `variant="primary"` → gold, charcoal Text
- `variant="secondary"` → grün
- `variant="outline"` → transparenter Rahmen
- Keine Rundungen — scharf, sportlich

### Badge
- `variant="green"` → Liga-Status
- `variant="gold"` → Turnier-Highlights
- `variant="neutral"` → Kategorien
- `variant="red"` → Niederlage

## Layout-Prinzipien

- Sections trennen sich durch Hintergrundwechsel (`charcoal-950` ↔ `charcoal-900`)
- Trennlinien: `border-white/5` (sehr subtil)
- Grid-Trennlinien via `gap-px bg-white/5` (statt Border auf Karten)
- Keine Schatten — stattdessen Hintergrundstufen

## Do's & Don'ts

**Do:**
- Scharfe Ecken
- Großzügige Whitespace
- Uppercase Headlines
- Gold sparsam (Akzente, nicht Flächen)

**Don't:**
- Glassmorphism oder Blur auf Karten
- Viele Farben mischen
- Verspielte Schriftarten
- Gradient-Overload

# pbc-erding.de – Projektdokumentation für Claude Code

## Kurzüberblick

Next.js 16 Website für den **Pool Billard Club Erding e.V.** (pbc-erding.de).
Statischer Export (`output: 'export'`), deployed im **Wurzelverzeichnis** von pbc-erding.de.

| Eigenschaft     | Wert                                      |
|-----------------|-------------------------------------------|
| Framework       | Next.js 16 + React 19 + TypeScript        |
| Styling         | Tailwind CSS 4 (Utility-first, dark)      |
| Animationen     | framer-motion (nur Hero + StatsSection)   |
| Dev-Port        | **3005** (`npm run dev`)                  |
| Deployment-URL  | `/` (Wurzelverzeichnis pbc-erding.de)     |
| Build-Befehl    | `npm run build`                           |
| GitHub          | https://github.com/chrisgitti/pbc-erding.de |

---

## Design-System

### Farbpalette (Tailwind CSS custom colors in `app/globals.css`)

| Token           | Hex       | Verwendung                          |
|-----------------|-----------|-------------------------------------|
| `charcoal-950`  | `#0a0a0b` | Haupt-Seitenhintergrund             |
| `charcoal-900`  | `#111113` | Sekundärer Hintergrund, Header      |
| `charcoal-800`  | `#1a1a1e` | Karten, Panels                      |
| `gold-500`      | `#d4a043` | Primäre Akzentfarbe (CTAs, Badges)  |
| `gold-400`      | `#e2b96f` | Hellerer Gold-Akzent                |
| `green-700`     | `#134d22` | Linker Akzentbalken auf Karten      |
| `green-500`     | `#1f8c3b` | Sieg-Badges                         |

### Typografie

- **Display-Font**: Bebas Neue (`font-display`, `uppercase`) – für Headlines und Teamname
- **Body-Font**: Inter (`font-sans`) – für Fließtext
- Schriften über `next/font/google` in `app/layout.tsx` geladen

### Design-Prinzipien

- Dunkles Theme (charcoal-950 als Basis), keine hellen Varianten
- Linke Akzentlinie (`w-1 bg-green-700`) auf allen Card-Headern
- Borderkanten: `border-white/6` (subtil) bzw. `border-gold-500/20` (akzentuiert)
- Hover-Effekte: ausschließlich CSS Transitions (kein framer-motion außer Hero)
- Abgerundete Karten: `rounded-[1.5rem]` (innen) / `rounded-[1.75rem]` (äußere Container)
- Badges: `<Badge variant="gold|green|red|neutral">` aus `components/ui/Badge.tsx`

### Animationen (bewusst reduziert)

| Komponente       | Animation                     |
|------------------|-------------------------------|
| HeroSection      | framer-motion entrance (Fade/Slide/Spring) |
| StatsSection     | Count-up bei Eintritt ins Viewport (useInView) |
| MembershipCTASection | Orbs (framer-motion infinite) |
| SponsorsSection  | whileHover scale auf Gold-Sponsor-Logos |
| Alle anderen     | CSS hover transitions only    |

---

## Datei- und Seitenstruktur

### Seiten (`app/`)

| Route          | Datei                          | Besonderheit                         |
|----------------|--------------------------------|--------------------------------------|
| `/`            | `app/page.tsx`                 | Startseite mit 7 Sections            |
| `/verein`      | `app/verein/page.tsx`          |                                      |
| `/mannschaften`| `app/mannschaften/page.tsx`    |                                      |
| `/veranstaltungen` | `app/veranstaltungen/page.tsx` | Build-Zeit-Kalender, vergangene Termine gefiltert |
| `/ergebnisse`  | `app/ergebnisse/page.tsx`      | Server-Komponent + Client TeamSection |
| `/news/[slug]` | `app/news/[slug]/page.tsx`     | Dynamische Route (Static Params)     |
| `/links`       | `app/links/page.tsx`           | Externe Links mit verifizierten URLs |
| `/downloads`   | `app/downloads/page.tsx`       |                                      |
| `/galerie`     | `app/galerie/page.tsx`         |                                      |
| `/sponsoren`   | `app/sponsoren/page.tsx`       |                                      |
| `/kontakt`     | `app/kontakt/page.tsx`         | Formular vorhanden, aber inaktiv     |
| `/impressum`   | `app/impressum/page.tsx`       |                                      |
| `/datenschutz` | `app/datenschutz/page.tsx`     |                                      |

### Homepage-Sections (Reihenfolge in `app/page.tsx`)

1. `HeroSection` – Hintergrundfoto + Headline + CTA-Buttons
2. `StatsSection` – Vereinskennzahlen mit Count-up
3. `NewsSection` – Letzte 3 News-Artikel (aus `lib/data.ts`)
4. `AboutSection` – Vereinsbeschreibung
5. `EventsSection` – Nächste Termine (Build-Zeit-Berechnung)
6. `SponsorsSection` – Sponsoren
7. `MembershipCTASection` – Mitglied werden CTA

### Wichtige Komponenten

| Datei                              | Zweck                                     |
|------------------------------------|-------------------------------------------|
| `components/ui/Button.tsx`         | Primary / Outline / Ghost                 |
| `components/ui/Badge.tsx`          | gold / green / red / neutral              |
| `components/ui/Container.tsx`      | max-w Wrapper mit horizontalem Padding    |
| `components/ui/SectionHeading.tsx` | label (klein) + title (Display) + subtitle |
| `components/ui/AnimateIn.tsx`      | framer-motion Wrapper – **nicht mehr verwenden** (nur historisch) |
| `app/ergebnisse/TeamSection.tsx`   | `'use client'` – Aufklapp-Karte je Mannschaft |

---

## Datenschicht (`lib/`)

### `lib/data.ts`

Zentrale Datendatei (statisch, kein CMS). Enthält:
- `news[]` – News-Artikel (Volltext, Slug → `app/news/[slug]`)
- `events[]` – **veraltet / nicht mehr in EventsSection genutzt** (EventsSection ist jetzt dynamisch)
- `teams[]` – Mannschaftsinfos
- `sponsors[]` – Sponsoren
- `links[]` – Links-Seite (Gruppen mit items)

**Wichtig:** News-Artikel id=3 (`mittwochsturnier`) enthält ein zur Build-Zeit berechnetes Datum aus `lib/turnier-utils.ts`.

### `lib/turnier-utils.ts`

Datumslogik für das Mittwochsturnier:
- `getNextMittwochsturnier(from: Date): Date` – letzter Mittwoch des Monats ≥ heute
- `getNextTrainingDays(from, count)` – nächste Di/Do/So Trainingstage

Wird genutzt in: `lib/data.ts`, `components/sections/EventsSection.tsx`, `app/veranstaltungen/page.tsx`

### `lib/site-config.ts`

Vereinsstammdaten: Name, Adresse, Kontakt, Social-Links.

### `lib/navigation.ts`

Haupt-Navigation (`mainNav[]`).

---

## Build-Zeit-Datenmuster

Da `output: 'export'` → **keine Runtime-Logik**, alles zur Build-Zeit:

```typescript
// Pattern: new Date() in Server-Komponente = Build-Zeitpunkt
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) // Mitternacht normiert
const nextTurnier = getNextMittwochsturnier(today)
```

- `NEXT_PUBLIC_BASE_PATH`: immer `''` (kein Unterordner-Prefix mehr)
- Bildpfade: `src={\`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/...\`}` → liefert `/images/...`
- **Nicht** `next/image` verwenden → stattdessen `<img>` mit manuellem Pfad

---

## Ergebnisse-Seite

- Datei: `app/ergebnisse/page.tsx` (Server, enthält echte Spielplandaten)
- Interaktivität: `app/ergebnisse/TeamSection.tsx` (`'use client'`, useState für Aufklappen)
- **Wichtig:** `metadata` export darf nur in Server-Komponenten sein → nie beides in derselben Datei mit `'use client'`
- 3 Mannschaften: PBC Erding I (Bezirksliga), II + III (Kreisliga Oberbayern D)
- Saison: 2025/26, Datenquelle: BBV Pool

---

## Turniere-Seite

- Generiert Trainingstage zur Build-Zeit: **So** 13–17 Uhr, **Di** 18–22 Uhr, **Do** 18–22 Uhr
- Mittwochsturnier: letzter Mittwoch im Monat, 18:00 Uhr
- Vergangene Termine werden gefiltert (`ev.date >= today`)
- Leere Monate werden ausgeblendet (`if (events.length === 0) return null`)
- Zeigt 2 Monate: aktuell + nächsten

---

## Mittwochsturnier-Details (für Texte)

- Beginn: 18:00 Uhr, Bowling Castle Erding
- Offenes Turnier für **Vereins- und Hobbyspieler** (nicht "internes Vereinsturnier")
- Max. 32 Teilnehmer
- Startgebühr: 10 €
- Modus: Gruppenphase → KO (Gruppen-Erste und -Zweite)
- Ausschüttung: vollständig, Platz 1–4

---

## Deployment-Workflow

```powershell
# 1. Build
cd C:\Daten\Projects\pbc-erding.de
npm run build

# 2. out/ per FTP / SFTP / rsync ins Wurzelverzeichnis von pbc-erding.de hochladen
# (kein robocopy in weberding mehr nötig)

# 3. Git commit + push
git add <files>
git commit -m "..."
git push
```

- `out/` enthält den fertigen statischen Export – direkt ins Serverroot hochladen
- Kein `basePath` mehr → absolute Pfade (`/_next/…`, `/images/…`) funktionieren vom Root
- `scripts/relativize-export.mjs` wird **nicht** mehr benötigt (war nur für Unterordner-Deployment)

---

## Sicherheitsstatus (Stand 2026-05)

🟢 **Low Risk** – statischer Export, keine API-Routes, keine npm-Lücken

Noch offen:
- 🟡 Kontaktformular inaktiv – vor Aktivierung CSRF/Validierung/Rate-Limiting nötig
- ✅ Security-Headers über `.htaccess` in `public/` bereits konfiguriert

---

## Realisierte Features

| Feature                         | Status |
|---------------------------------|--------|
| Hero mit Hintergrundfoto        | ✅     |
| Dynamische Trainingskalender    | ✅     |
| Mittwochsturnier (nächster Termin dynamisch) | ✅ |
| Vergangene Termine ausblenden   | ✅     |
| Ergebnisse (echte Daten 2025/26)| ✅     |
| Aufklappbare Team-Sektionen     | ✅     |
| Links mit verifizierten URLs    | ✅     |
| Mittwochsturnier News-Artikel   | ✅     |
| Animationen reduziert           | ✅     |
| Root-Deployment (kein Unterordner) | ✅  |

## Offene / Ausstehende Features

| Feature                                      | Status    |
|----------------------------------------------|-----------|
| Kontaktformular Backend                      | ⏳ offen  |
| Galerie mit echten Fotos                     | ⏳ offen  |
| Ergebnisse Saison-Update (nach Saisonende)   | ⏳ offen  |
| GitHub-Repository anlegen                    | ⏳ offen  |
| Produktionsserver einrichten / Domain zeigen | ⏳ offen  |

# PBC Erding – Website

Offizielle Website des **Pool Billard Club Erding e.V.**

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (sparsam)
- React Server Components by default

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Dann im Browser öffnen: [http://localhost:3000](http://localhost:3000)

## Projektstruktur

```
app/                    # Next.js App Router (Seiten)
  page.tsx              # Startseite
  verein/               # Vereinsseite
  mannschaften/         # Mannschaften
  veranstaltungen/      # Veranstaltungen & Events
  ergebnisse/           # Spielergebnisse
  galerie/              # Fotogalerie
  sponsoren/            # Sponsoren
  kontakt/              # Kontaktseite

components/
  layout/               # Header, Footer
  sections/             # Homepage-Abschnitte
  cards/                # Wiederverwendbare Karten
  ui/                   # Primitive (Button, Badge, Container, SectionHeading)

lib/
  site-config.ts        # Globale Konfiguration (Name, Adresse, ...)
  navigation.ts         # Navigationslinks
  data.ts               # Content-Daten (News, Events, Teams, Sponsoren)

content/                # Strukturierte redaktionelle Inhalte
docs/                   # Design & Content Guidelines
public/images/          # Bilder
```

## Inhalte pflegen

Alle Inhalte (News, Events, Teams, Sponsoren) sind in `lib/data.ts` definiert.
Globale Einstellungen (Adresse, Kontakt, etc.) in `lib/site-config.ts`.

## Dokumentation

- [Design System](./docs/design-system.md)
- [Content Guidelines](./docs/content-guidelines.md)

## Deployment

```bash
npm run build
npm run start
```

Für Produktion: Deployment auf [Vercel](https://vercel.com) empfohlen.

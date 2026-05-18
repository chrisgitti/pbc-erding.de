// AUTOMATISCH GENERIERT – nicht manuell bearbeiten.
// Quelle: content/kontakt-routing.md
// Änderungen bitte dort vornehmen, dann `npm run build` ausführen.

export type KontaktRoute = {
  value: string   // interner Schlüssel (z. B. 'mitgliedschaft')
  label: string   // Anzeigetext im Dropdown
  to: string[]
  cc: string[]
}

export const kontaktRoutes: KontaktRoute[] = [
  {
    value: "--",
    label: "Bitte wählen…",
    to: [
      "info@pbc-erding.de"
    ],
    cc: []
  },
  {
    value: "mitgliedschaft",
    label: "Mitgliedschaft",
    to: [
      "info@pbc-erding.de"
    ],
    cc: []
  },
  {
    value: "training",
    label: "Schnuppertraining",
    to: [
      "info@pbc-erding.de"
    ],
    cc: [
      "bartclaessen76@gmail.com"
    ]
  },
  {
    value: "turnier",
    label: "Turnieranmeldung",
    to: [
      "turnier@pbc-erding.de"
    ],
    cc: [
      "info@pbc-erding.de"
    ]
  },
  {
    value: "unterstuetzung",
    label: "Unterstützung/Partnerschaft",
    to: [
      "info@pbc-erding.de"
    ],
    cc: []
  },
  {
    value: "sonstiges",
    label: "Sonstiges",
    to: [
      "info@pbc-erding.de"
    ],
    cc: []
  }
]

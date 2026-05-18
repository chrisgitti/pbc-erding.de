# pbc-erding2 – Content-Verwaltung via Dateien

## Ziel

Häufig aktualisierte Inhalte (Spielberichte, Termine, Ergebnisse) werden aus dem TypeScript-Code
ausgelagert und in einfach editierbare Dateien gespeichert — bearbeitbar in **Windows Editor (Notepad),
Notepad++ oder VS Code**. Kein TypeScript-Wissen erforderlich.

---

## Dateiformat

### Spielberichte / News → `content/news/*.html`

Eine `.html`-Datei pro Artikel:

```html
<!-- slug: spieltag-landshut-maerz-2026 -->
<!-- title: Heimsieg gegen BC Landshut -->
<!-- date: 2026-03-08 -->
<!-- category: Liga -->
<!-- excerpt: PBC Erding I gewinnt das Heimspiel gegen BC Landshut mit 7:5. -->

<p>Ein starker Auftritt in der Bayernliga: PBC Erding I setzte sich...</p>

<p>Besonders hervorzuheben war...</p>

<ul>
  <li>Einzelergebnisse: ...</li>
  <li>Nächster Spieltag: ...</li>
</ul>
```

**Regeln für den Kopfbereich:**

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| `slug` | ✓ | URL-Pfad, z. B. `spieltag-landshut-maerz-2026` (nur a-z, 0-9, Bindestriche) |
| `title` | ✓ | Überschrift des Artikels |
| `date` | ✓ | Datum im Format `YYYY-MM-DD` |
| `category` | ✓ | z. B. `Liga`, `Turnier`, `Verein`, `Vereinsleben` |
| `excerpt` | ✓ | Kurzbeschreibung (erscheint in der Vorschaukarte auf der Startseite) |

**Erlaubte HTML-Tags im Artikeltext:**
`<p>`, `<strong>`, `<em>`, `<ul>`, `<li>`, `<ol>`, `<h3>`, `<h4>`, `<br>`

---

### Termine → `content/events.json`

```json
[
  {
    "id": "1",
    "title": "Vereinstraining",
    "date": "2026-04-01",
    "time": "ab 18:00 Uhr",
    "location": "Bowling Castle Erding",
    "type": "training",
    "description": "Regelmäßiges Training für Mitglieder."
  },
  {
    "id": "2",
    "title": "Bayernliga Spieltag",
    "date": "2026-04-12",
    "time": "14:00 Uhr",
    "location": "Bowling Castle Erding",
    "type": "liga",
    "description": "Heimspiel PBC Erding I."
  }
]
```

**Erlaubte Werte für `type`:** `turnier` | `training` | `vereinsabend` | `liga`

> Einträge in aufsteigender Datumsreihenfolge eintragen (älteste zuerst).
> Die `id` muss eindeutig sein — einfach durchnummerieren.

---

### Ergebnisse → `content/ergebnisse.json`

```json
[
  {
    "datum": "2026-03-08",
    "heim": "PBC Erding I",
    "gast": "BC Landshut",
    "ergebnis": "7 : 5",
    "wertung": "sieg",
    "liga": "Bayernliga"
  },
  {
    "datum": "2026-03-01",
    "heim": "BC Rosenheim",
    "gast": "PBC Erding I",
    "ergebnis": "6 : 6",
    "wertung": "unentschieden",
    "liga": "Bayernliga"
  }
]
```

**Erlaubte Werte für `wertung`:** `sieg` | `niederlage` | `unentschieden`

> Neueste Ergebnisse an den **Anfang** der Liste setzen.

---

## Workflow

```
1. Datei öffnen / anlegen
   • Neuer Artikel:  content/news/mein-neuer-bericht.html  anlegen
   • Termin hinzufügen: content/events.json  öffnen, neue Zeile einfügen
   • Ergebnis eintragen: content/ergebnisse.json  öffnen, neue Zeile am Anfang

2. Inhalt schreiben und speichern

3. Website neu bauen:
   cd C:\Daten\Projects\pbc-erding2
   npm run build

4. Ordner out\ auf den Server hochladen (nach /pbced/pbced2)
```

---

## Technische Umsetzung (Entwickler-Info)

- `lib/content.ts` — liest Dateien zur Build-Zeit via Node.js `fs` (keine neuen Abhängigkeiten)
- HTML-Frontmatter wird als `<!-- key: wert -->`-Kommentare geparst
- `NewsSection` und `EventsSection` sind `'use client'` — Daten werden von `app/page.tsx` als Props übergeben
- `dangerouslySetInnerHTML` für Artikel-HTML (vertretbar: ausschließlich lokale, redaktionell kontrollierte Inhalte)
- Funktioniert mit `output: 'export'` (statische Site), da `fs` nur zur Build-Zeit läuft

**Betroffene Dateien bei Implementierung:**

| Datei | Änderung |
|-------|----------|
| `lib/content.ts` | Neu: `getNewsArticles()`, `getNewsArticle()`, `getEvents()`, `getErgebnisse()` |
| `lib/data.ts` | `news` und `events` Exports entfernen |
| `app/page.tsx` | `getNewsArticles()` + `getEvents()` aufrufen, als Props übergeben |
| `app/news/[slug]/page.tsx` | `getNewsArticle()` + `dangerouslySetInnerHTML` |
| `app/veranstaltungen/page.tsx` | `getEvents()` statt data.ts |
| `app/ergebnisse/page.tsx` | `getErgebnisse()` statt hardkodiertem Array |
| `components/sections/NewsSection.tsx` | Props statt direkter data.ts-Nutzung |
| `components/sections/EventsSection.tsx` | Props statt direkter data.ts-Nutzung |

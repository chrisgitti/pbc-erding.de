# PBC Erding 2 – Anpassungen

Dokumentiert alle wesentlichen Änderungen an der Next.js-Website des Pool Billard Club Erding e.V.

| Eigenschaft  | Wert                                       |
|--------------|--------------------------------------------|
| Repository   | `pbc-erding2`                              |
| Deployment   | `/pbced/pbced2` (Entwurf) / Root (Produktion) |
| Technologie  | Next.js 16, React 19, Tailwind CSS 4, TypeScript |

---

---

<details>
<summary><strong>Website – Phasen 1–22</strong></summary>

## Phase 1 – Vorstand-Feedback (Robert) zur Startseite

Umgesetzte Anregungen zur Startseite.

> **Hinweis:** Aktuell nur teilweise umgesetzt. Noch ausstehend: Rückbau „Mitglied werden"
> nur auf Startseite. Bereits erledigt: Galerie-Erweiterung, Downloads vervollständigt,
> Verlinkungen korrigiert, Bezeichnungen auf „Schnuppertraining" vereinheitlicht.

### 1.1 Section-Reihenfolge Startseite

**Datei:** `app/page.tsx`

Events-Section vor die About-Section gezogen, damit aktuelle Informationen (News + Events) früher erscheinen.

Neue Reihenfolge: `Hero → Stats → News → Events → About → Sponsors → MembershipCTA`

### 1.2 Hero-Eyebrow Typografie

**Datei:** `components/sections/HeroSection.tsx`

Vereinsname auf zwei Zeilen aufgeteilt (weiß statt gold):
- Zeile 1: „Pool Billard Club" (text-2xl/3xl)
- Zeile 2: „Erding e.V." (text-3xl/4xl, etwas größer)

Subtext „Im Bowling Castle seit 2026" bleibt gold und unverändert.

### 1.3 Hero-CTA: Schnuppertraining als primärer Button

**Datei:** `components/sections/HeroSection.tsx`

Primärer CTA-Button von „Mitglied werden" auf „Schnuppertraining anfragen" umgestellt.
Link: `/kontakt?betreff=training`

„Mitglied werden" ist weiterhin im Header und in der MembershipCTA-Section vorhanden.

### 1.4 Kontaktformular – Betreff-Option Schnuppertraining

**Datei:** `app/kontakt/KontaktForm.tsx`

Option `value='training'` / `label='Schnuppertraining'` zu `BETREFF_OPTIONS` ergänzt,
damit der Hero-Link die Vorauswahl korrekt setzt.

### 1.5 AboutSection – Trainingszeiten korrigiert

**Datei:** `components/sections/AboutSection.tsx`

Highlight „Offen für Einsteiger": Sonntag-Uhrzeit von 13–17 Uhr auf 13–16 Uhr korrigiert.

Vollständig: „Schnuppertraining ist sonntags von 13 bis 16 Uhr sowie dienstags und
donnerstags von 18 bis 21 Uhr möglich."

### 1.6 Hero-Hintergrundbild

**Datei:** `public/images/billardhalle.jpg`

KI-generiertes Platzhalterfoto durch echtes Panoramafoto der Billardhalle im Bowling Castle
ersetzt. Bild auf 1920 × 823 px skaliert.

---

## Phase 2 – Änderungen vom 24. April 2026

Umfangreiche Erweiterung: Galerie mit echten Fotos, Chronik auf Verein-Seite, neue
News-Artikel, BBV-Skill, Ligaspieltage auf Turniere-Seite und Deployment-Konsolidierung.

### 2.1 Galerie – echte Vereinsfotos und Lightbox

**Dateien:** `app/galerie/GalerieGrid.tsx` (neu), `app/galerie/page.tsx`

13 echte Vereinsfotos integriert:
- `erding2.jpg`, `erding3.jpg` – Mannschaftsfotos
- `spieler1.jpg` bis `spieler10.jpg` – Spielszenen und Trainingsmomente
- `billardhalle.jpg` – Spielsaal beim laufenden Spieltag (Label: Spielstätte)

Neue Client-Komponente `GalerieGrid.tsx`: responsives CSS-Grid (2/3/4 Spalten je Viewport),
Hover-Effekt mit Label-Einblendung, Lightbox mit ESC-Taste und Klick-außerhalb-Schließen,
Scroll-Lock während Lightbox aktiv.

### 2.2 Verein-Seite – Chronik (aufklappbar)

**Dateien:** `app/verein/Chronik.tsx` (neu), `app/verein/page.tsx`, `lib/data.ts`

Neue Section `id=chronik` am Ende der Verein-Seite (nach Trainingszeiten).

Client-Komponente `Chronik.tsx`: zweistufig aufklappbar nach Jahr (neuestes offen) und
Monat (neuester offen). Einträge innerhalb eines Monats aufsteigend nach Tag sortiert.
Jeder Eintrag ist direkter Link auf die News-Detailseite.

Neuer Typ `ChronikEntry` und Array `chronik` in `lib/data.ts`. Startbestand:
- 05.04.2026 – Spieltag im Bowling Castle
- 25.03.2026 – Mittwoch-Cup 2. Abend
- 20.12.2025 – Umzug ins Bowling Castle
- 20.12.2025 – Herzlichen Dank an das Stardust-Team
- 01.12.2025 – Mittwochsturnier – offenes Turnier

### 2.3 NewsSection – Link „Alle Nachrichten" korrigiert

**Datei:** `components/sections/NewsSection.tsx`

Button „Alle Nachrichten" verlinkt jetzt auf `/verein#chronik` statt auf `/verein`
(springt direkt zur Chronik-Section).

### 2.4 Neue News-Artikel

**Datei:** `lib/data.ts`

**Artikel A** – Spieltag im Bowling Castle (05.04.2026, Kategorie: Liga)
Slug: `heimspieltag-bowling-castle-april-2026`
Basiert auf Foto eines Spieltags mit 4 parallelen Tischen und Zuschauern.

**Artikel B** – Mittwoch-Cup: Zweiter Abend der Serie (25.03.2026, Kategorie: Turnier)
Slug: `mittwoch-cup-zweiter-abend-maerz-2026`
Basiert auf Facebook-Post: 16 Spieler, 10-Ball auf 4 Gewonnene, 4 Vierergruppen.
Ergebnisse: Platz 1 Huetti, Platz 2 Leon Bozbel, Platz 3/4 Andy Galsterer und Markus Bauer.
Nächster Termin: 29. April 2026. Anmeldung: turnier@pbc-erding.de.

### 2.5 Ergebnisse – zwei neue Spielergebnisse eingetragen

**Datei:** `lib/data.ts` (vormals `app/ergebnisse/page.tsx`)

| Begegnung | Ergebnis | Wertung | Datum |
|---|---|---|---|
| PBC Erding I – BC Mainburg II | 4:6 | Niederlage | 18.04.2026 |
| PBC Erding II – BSV PB München III | 6:4 | Sieg | 11.04.2026 |

Teamstatistiken aktualisiert:
- Erding I:  5S / 1U / 3N, Frames 44:46, Punkte 11:7
- Erding II: 9S / 0U / 0N, Frames 64:26, Punkte 18:0

Stand-Datum: 24.04.2026

### 2.6 BBV-Skill `/bbv-ergebnisse`

**Datei:** `.claude/skills/bbv-ergebnisse/SKILL.md` (neu)

Wiederverwendbarer Claude-Code-Skill für den automatischen Abruf von Spielergebnissen
vom BBV-Portal.

URLs:
- `group=990` – Erding I, Bezirksliga Oberbayern-Nord
- `group=1011` – Erding II + III, Kreisliga Oberbayern D

Ablauf: Erding-Zeilen filtern → mit `lib/data.ts` abgleichen → Änderungen zur
Bestätigung vorlegen → Teamstatistiken neu berechnen → Build ausführen.

### 2.7 Turniere-Seite – Ligaspieltage Saison 2025/26

**Datei:** `app/veranstaltungen/page.tsx`

Neue Section „Ligaspieltage 2025/26" unterhalb des Monatskalenders.
Vollständiger BBV-Spielplan (je 10 Spiele) für alle 3 Mannschaften, statisch eingebaut.

Design: Drei Team-Blöcke mit Mannschaftsname, Liga, S/U/N-Bilanz und Spielzähler im Header.
Vergangene Spiele zeigen Ergebnis + farbigen Punkt (grün = Sieg, rot = Niederlage, gold = Unentschieden).
Ausstehende Spiele zeigen Uhrzeit.

### 2.8 Downloads-Seite – Links und Dateien des bisherigen Internetauftritts

Links und Dateien des bisherigen Internetauftritts integriert (z. T. Aktualisierungen
noch erforderlich).

### 2.9 Deployment-Konsolidierung

**Dateien:** `next.config.ts`, `C:\Daten\Projects\index.html`

`next.config.ts`: `basePath` über Umgebungsvariable `BASE_PATH` konfigurierbar.
Vergleichs-Deployment `pbced21` eingestellt; einzige aktive Version wieder `pbced2`.
`out2`-Ordner mit GitHub-Stand angelegt (Versionsvergleich).

`index.html` im Projektordner: nur noch ein Button „Entwurf ansehen" auf `/pbced/pbced2`.

### 2.10 Galerie-Lightbox: Navigation, Diashow und Touch-Swipe

**Datei:** `app/galerie/GalerieGrid.tsx` (vollständig überarbeitet)

- Prev/Next-Pfeile: Klick und Tastatur-Pfeiltasten links/rechts
- Diashow: Play/Pause-Button und Leertaste; automatische Weiterschaltung alle 4 Sekunden
- Dot-Indikatoren: aktives Bild gold hervorgehoben, direkt anklickbar
- Bildnummer-Zähler (z. B. 3 / 14) unterhalb der Dots
- Touch-Swipe für Mobile (Wischgeste links/rechts)
- ESC-Taste und Klick auf Hintergrund schließt die Lightbox

### 2.11 Downloads-Seite – echte Dateien und Links

**Dateien:** `public/downloads/` (neu), `app/downloads/page.tsx`, `lib/data.ts`

9 PDFs kopiert und verlinkt:
- `PBC-Erding_Satzung.pdf`
- `PBC-Erding_Aufnahmeantrag.pdf`
- `PBC-Erding_Einzugsermaechtigung-SEPA_Vorlage.pdf`
- `PBC-Erding_Informationsblatt_2024-01.pdf`
- `PBC-Erding_Fahrtkostenzuschuss-2024-2025.pdf`
- `Spielregeln-Pool_DBU_Stand-2009-03.pdf`
- `Sport-und-Turnierordnung-Pool_DBU_Stand-2009-05.pdf`
- `BBV_Vorlage-Spielbericht-Pool.pdf`
- `14-1-Endlos_Vorlage.pdf`

Zusätzlich: `SchweizerSystem_XLSM.zip` (Excel-Anwendung Turnier im Schweizer System).

4 Turnierpläne (16er/32er/64er/128er Doppel-KO) als lokale ZIP-Dateien eingebunden.

Download-Karten sind echte Hyperlinks mit Download-Icon (PDF/ZIP) bzw. Extern-Icon
für externe Links.

### 2.12 Stat-Karten Startseite – Verlinkung und Umbenennung

**Dateien:** `components/sections/StatsSection.tsx`, `lib/data.ts`

Alle vier Stat-Karten sind klickbare Links:
- Gründung (2008) → `/verein`
- Neue Spielstätte (2026) → `/galerie`
- Schnuppertraining (3 Termine) → `/kontakt?betreff=training`
- Downloads (9+) → `/downloads`

Label „Probetraining" in „Schnuppertraining" umbenannt.
Hover-Effekt: goldener Rahmen und goldenes Label.

### 2.13 Hero-CTA: Button-Text vereinheitlicht

**Datei:** `components/sections/HeroSection.tsx`

Button-Text von „Probetraining anfragen" auf „Schnuppertraining anfragen" geändert.
Link `/kontakt?betreff=training` war bereits korrekt (unverändert).

### 2.14 SponsorsSection – „Jetzt anfragen" korrekt verlinkt

**Datei:** `components/sections/SponsorsSection.tsx`

Link bei „Interesse an einer Partnerschaft?" war `/sponsoren`; jetzt `/kontakt?betreff=sponsoring`.
Auf Next.js `<Link>`-Komponente umgestellt (basePath `/pbced/pbced2` wird automatisch ergänzt).

### 2.15 index.html – Änderungshistorie-Link und Bereinigung

**Datei:** `C:\Daten\Projects\index.html`

Link auf Änderungshistorie-PDF hinzugefügt.
Hinweis „Noch nicht realisiert" (Mitglied werden / Kontaktformular) entfernt.

---

## Phase 3 – Änderungen vom 25. April 2026

Weitere Detailverbesserungen: Datenschutz, Footer, Downloads, Navigation, Galerie.

### 3.1 Datenschutzseite – Kontaktformular korrekt beschrieben

**Datei:** `app/datenschutz/page.tsx`

Abschnitt 6 vollständig neu geschrieben: Erklärt das mailto-Formular korrekt.
Daten werden nur lokal im Browser verarbeitet, keine Übertragung an den Webserver.
Ein Klick öffnet das E-Mail-Programm mit vorausgefüllter Nachricht; Übertragung erst
beim aktiven Absenden durch den Nutzer.
Abschnitt 4 um „Bebas Neue" als zweite Schriftart ergänzt.
Abschnitt 5 umbenannt zu „Kontaktaufnahme per E-Mail oder Telefon".
Stand auf April 2026 aktualisiert. Alle Umlaute korrigiert.

### 3.2 Footer – Facebook-Link ergänzt

**Datei:** `components/layout/Footer.tsx`

Facebook-Icon-Link mit SVG-Icon unter der E-Mail-Adresse im Footer-Brand-Block ergänzt.
Ziel: `https://www.facebook.com/billard.erding` (öffnet in neuem Tab).

### 3.3 Downloads – Turnierpläne als lokale ZIP-Dateien

**Datei:** `lib/data.ts`, `public/downloads/`

4 Turnierpläne als ZIP-Dateien eingebunden (vorher externe Links auf pbc-erding.de):
- `16er-Feld-Doppel-KO.zip`
- `32er-Feld-Doppel-KO.zip`
- `64er-Feld-Doppel-KO.zip`
- `128er-Feld-Doppel-KO.zip`

### 3.4 Downloads-Karten – Anker-Navigation

**Datei:** `app/downloads/page.tsx`

Die drei Kategorie-Karten sind jetzt klickbare Anker-Links:
- „Für Neumitglieder" → `#verein`
- „Für Mannschaften" → `#liga`
- „Regelwerk & Vorlagen" → `#regelwerk`

Jede Sektion hat eine entsprechende `id` erhalten.

### 3.5 Navigation – „Turniere" → „Veranstaltungen"

**Dateien:** `lib/navigation.ts`, `app/veranstaltungen/page.tsx`

Menüpunkt „Turniere" in „Veranstaltungen" umbenannt (URL damals `/turniere`, in Phase 13 auf `/veranstaltungen` umgestellt).
Seitenüberschrift auf „Liga, Turniere, Training & Kalender" geändert.

### 3.6 Galerie – Billard-Zitate als Bildbeschriftungen

**Dateien:** `app/galerie/GalerieGrid.tsx`, `app/galerie/page.tsx`

Optionales Feld `quote?: string` im `Photo`-Typ ergänzt.
Allen 14 Fotos ein Zitat zugewiesen (Spieler-Fotos: 10 rotierende Billard-Zitate,
Spielstätten-Fotos und Mannschaftsfotos: individuelle Zitate).
Darstellung: kursive Caption unter dem Bild im Grid + in der Lightbox über den Dots.

---

## Phase 4 – Downloads aktualisiert, index.html-Layout, Git-Identität (25. April 2026)

Vorlagen und Regelwerk auf aktuelle Versionen gebracht, Einstiegsseite index.html
übersichtlicher gestaltet, Git-E-Mail-Adresse auf GitHub-noreply umgestellt.

### 4.1  Downloads – Sport- und Turnierordnung BBV-Pool

**Datei:** `lib/data.ts`, `public/downloads/`

Eintrag „Sport- und Turnierordnung Pool" (DBU, Stand 2009) durch „Sport- und Turnierordnung BBV-Pool"
(Stand 01.04.2024) ersetzt.

| | Vorher | Nachher |
|---|---|---|
| Titel | Sport- und Turnierordnung Pool | Sport- und Turnierordnung BBV-Pool |
| Datei | `Sport-und-Turnierordnung-Pool_DBU_Stand-2009-05.pdf` | `Aktuelle_Sportordnung_BBV-Pool_24-04-01.pdf` |

### 4.2  Downloads – Spielberichtsvorlage BBV aktualisiert und selbstrechnende Version ergänzt

**Datei:** `lib/data.ts`, `public/downloads/`

`BBV_Vorlage-Spielbericht-Pool.pdf` durch aktuelle Version ersetzt.
Neuer Eintrag „Spielberichtsvorlage Pool BBV (selbstrechnend)" mit
`BBV_Vorlage-Spielbericht-Pool_selbstrechnend.pdf` in der Vorlagen-Gruppe ergänzt.

### 4.3  Downloads – Turnierpläne Doppel-KO zusammengefasst

**Datei:** `lib/data.ts`, `public/downloads/`

Die drei Einzeleinträge 16er, 32er und 64er Doppel-KO durch einen kombinierten Link ersetzt.
128er Doppel-KO-Turnierplan ersatzlos entfernt.

| | Vorher | Nachher |
|---|---|---|
| Einträge | 4 separate Links (16er / 32er / 64er / 128er) | 1 Link (16er, 32er und 64er kombiniert) |
| Datei | je eigene ZIP | `Turnierplan-dko_16_32_64.zip` |

### 4.4  index.html – Button-Layout dreizeilig

**Datei:** `C:\Daten\Projects\index.html`

Die vier Buttons in der Einstiegsseite wurden in drei separate Zeilen aufgeteilt:
- Zeile 1 (mittig): „Entwurf ansehen" (primär, allein)
- Zeile 2 (mittig, umbrechend): „Anpassungen" · „Änderungshistorie"
- Zeile 3 (mittig): „Entwicklungsumgebung" (allein)

Zuvor waren alle Buttons in einer einzigen `flex-wrap`-Zeile gemischt.
Der Entwicklungsumgebung-Link wurde dabei auch von rechts-unten auf mittig (eigene Zeile) verschoben.

### 4.5  Git-Identität – noreply-E-Mail

Die globale Git-E-Mail-Adresse wurde von `gitti@weberding.de` auf
`chrisgitti@users.noreply.github.com` umgestellt, damit die private Adresse
nicht mehr in öffentlichen Commit-Metadaten erscheint.

---

## Phase 5 – „Schnuppertraining" seitenübergreifend vereinheitlicht (25. April 2026)

Der Begriff „Probetraining" wurde in allen verbleibenden Stellen durch „Schnuppertraining" ersetzt.
Betroffen waren 7 Dateien mit insgesamt 12 Vorkommen.

### 5.1  „Probetraining" → „Schnuppertraining" – vollständige Bereinigung

**Dateien:** `lib/site-config.ts`, `lib/data.ts`, `components/sections/HeroSection.tsx`,
`components/sections/AboutSection.tsx`, `app/verein/page.tsx`, `app/veranstaltungen/page.tsx`,
`app/kontakt/page.tsx`

Der Begriff „Probetraining" war in früheren Phasen bereits im Hero-Button und in
einzelnen Labels umbenannt worden, kam aber noch in mehreren Fließtexten, Badges
und Datentabellen vor. Alle verbliebenen Vorkommen wurden nun durch „Schnuppertraining"
ersetzt:

| Datei | Kontext |
|---|---|
| `lib/site-config.ts` | SEO-Beschreibung (meta description) |
| `lib/data.ts` | News-Text „Umzug", Mannschafts-News, Events-Datensatz |
| `components/sections/HeroSection.tsx` | Hero-Fließtext |
| `components/sections/AboutSection.tsx` | Highlight-Karte „Offen für Einsteiger" |
| `app/verein/page.tsx` | Trainingszeiten-Tabelle (Sonntag-Zeile) |
| `app/veranstaltungen/page.tsx` | Kalender-Titel, Badge-Label, Info-Karte Wochenprogramm |
| `app/kontakt/page.tsx` | Section-Subtitle |

---

## Phase 6 – Laufzeit-Kalender, Ergebnisse Erding III, Liga-Links (26. April 2026)

Drei unabhängige Verbesserungen: dynamische Datumsberechnung auf der Startseite,
aktuelles Spielergebnis für Erding III sowie Liga-Verlinkung auf der Ergebnisse-Seite.

### 6.1  EventsSection – Datumsberechnung zur Laufzeit im Browser

**Datei:** `components/sections/EventsSection.tsx`

Die Section „Kommende Veranstaltungen" auf der Startseite berechnete Datum und
Filterung bisher zur Build-Zeit (Server Component). Dadurch wurden vergangene
Liga-Spieltage noch als kommende Veranstaltungen angezeigt, wenn seit dem letzten
Build ein neuer Tag begonnen hatte.

Die Komponente wurde auf `'use client'` umgestellt. Die gesamte Datumslogik
(Trainingstage, Mittwochsturnier, nächster offener Spieltag je Mannschaft) läuft
jetzt im Browser des Besuchers. Die Liste ist damit täglich automatisch aktuell,
unabhängig vom Build-Zeitpunkt.

Technisch: `useState<Entry[] | null>(null)` + `useEffect` mit `computeEntries()`.
Beim ersten Render erscheinen kurz vier pulsierende Platzhalter-Kacheln, bevor
die korrekte Liste eingeblendet wird (Ladezeit < 1 s).

### 6.2  Ergebnisse Erding III – Spieltag 25. April 2026

**Datei:** `lib/data.ts`

Spieltag vom 25. April 2026 eingetragen: PBC Erding III – PBC Markt Schwaben II **1:9**
(Niederlage). Teamstatistiken aktualisiert:

| Feld | Vorher | Nachher |
|---|---|---|
| Niederlagen | 7 | 8 |
| Spiele | 31:49 | 32:58 |
| Differenz | −18 | −26 |
| Punkte | 2:14 | 2:16 |

Stand-Datum in `app/ergebnisse/page.tsx` auf 26.04.2026 gesetzt.

### 6.3  Liga-Link-Pfeile auf der Ergebnisse-Seite

**Dateien:** `lib/data.ts`, `app/ergebnisse/TeamSection.tsx`

Analog zur Mannschaften-Seite wurde im Mannschafts-Header der Ergebnisse-Seite
ein kleiner Pfeil-Link (→) neben dem Liga-Namen ergänzt, der direkt zur BBV-Ligatabelle
führt. Dazu wurde der Typ `Mannschaft` in `lib/data.ts` um das optionale Feld
`ligaUrl` erweitert und für alle drei Mannschaften befüllt.

Der Klick auf den Pfeil öffnet das BBV-Portal in einem neuen Tab und löst nicht
das Aufklappen der Mannschafts-Karte aus (`e.stopPropagation()`).

---

## Phase 7 – Galerie-Aktualisierungen (26. April 2026)

Vier Galerie-Verbesserungen: Bild-Austausch, Quote-Korrekturen, neuer Facebook-Link
und gekürzter Untertitel.

### 7.1 Galerie – Bild 11 (spieler7.jpg) ausgetauscht

**Datei:** `public/images/galerie/spieler7.jpg`

Das bisherige Platzhalterbild wurde durch ein aktuelles Foto aus dem Vereinsbestand
ersetzt. Die Quelldatei lag unter `c:\temp\images\szenen\spieler7.jpg`.

### 7.2 Galerie – Quotes Bild 12 und 13 aktualisiert

**Datei:** `app/galerie/page.tsx`

- **Bild 12 (spieler8.jpg):** Der Halbsatz „für Menschen" wurde aus dem Quote entfernt.
  Neu: „Billard ist nicht nur Zeitvertreib. Es ist ein Spiel mit Blick fürs Detail."
- **Bild 13 (spieler9.jpg):** Gesamter Quote-Text ersetzt durch:
  „Billard begeistert mich, weil jeder Stoß eine kleine Entscheidung zwischen
  Gefühl, Technik und Strategie ist."

### 7.3 Galerie – Facebook-Link „Mehr Bilder auf Facebook" ergänzt

**Datei:** `app/galerie/page.tsx`

Unterhalb des Bildgitters wurde ein zentrierter Pill-Link zum Facebook-Auftritt des
Vereins ergänzt. Die URL stammt aus `siteConfig.social.facebook` in `lib/site-config.ts`.

Gestaltung: Outline-Pill (kein voller Button), mit kleinem Facebook-Icon (SVG 16×16).
Hover-Effekt: gold-farbige Umrandung und Textfarbe. Link öffnet in neuem Tab.

### 7.4 Galerie – Untertitel gekürzt

**Datei:** `app/galerie/page.tsx`

Der Seiten-Untertitel wurde von einem langen Beschreibungstext auf den kompakten
Satz „Eindrücke rund um den PBC Erding." gekürzt, da der Großteil der Galerie
auf Facebook hinterlegt wird.

### 7.5 Galerie – Vier Bilder ausgetauscht (Next.js + Fallback)

**Dateien:** `public/images/galerie/`, `Fallback/images/galerie/`

Bilder 6, 8, 9 und 13 wurden durch aktuelle Fotos aus dem Vereinsbestand ersetzt:

| Bild | Dateiname      | Ersetzt durch |
|------|----------------|---------------|
| 6    | spieler2.jpg   | neues Vereinsfoto |
| 8    | spieler4.jpg   | neues Vereinsfoto |
| 9    | spieler5.jpg   | neues Vereinsfoto |
| 13   | spieler9.jpg   | neues Vereinsfoto |

Die Quelldateien lagen unter `C:\temp\images\szenen\`. Der Austausch erfolgte
in beiden Versionen gleichzeitig – Next.js (`public/images/galerie/`) und
Fallback (`Fallback/images/galerie/`).

### 7.6 Galerie – Zitat-Texte vergrößert und besser lesbar

**Datei:** `app/galerie/GalerieGrid.tsx`

Die Zitat-Texte unter den Galerie-Bildern wurden in beiden Ansichten deutlich
lesbarer gestaltet:

- **Thumbnail-Zitate** (unter jedem Rasterbild): Schriftgröße von `0.7rem` auf
  `0.85rem` erhöht, Opazität von `white/55` auf `white/80` erhöht, dezenter
  Hintergrund (`bg-white/5`, `rounded-xl`) ergänzt.
- **Lightbox-Zitate** (Beschriftung beim Vollbild): Von unauffälligem
  transparenten Text auf eine dunkle „Plakette" umgestellt (`bg-black/70`,
  `border-white/10`, `rounded-xl`), die über jedem Bildinhalt gut lesbar ist.

---

## Phase 8 – Fallback-Website erstellt (26. April 2026)

Vollständige HTML/CSS/JS-Fallback-Website als pflegbare Notfallversion angelegt.
Ergänzend wurden kleinere Anpassungen an der Fallback-Startseite vorgenommen.

### 8.1  Fallback-Website – vollständige HTML/CSS/JS-Version

**Dateien:** `Fallback/` (neu, 22 Dateien)

Unter `Fallback/` wurde eine vollständige statische Version der pbc-erding2-Website
angelegt – ohne Next.js, ohne Node.js, ohne Build-Prozess. Die Fallback-Website
kann direkt im Browser geöffnet oder per FTP auf den Webserver geladen werden.

Umfang:
- 12 HTML-Seiten (alle Routen der Next.js-Website)
- 6 News-Artikel als statische `.html`-Dateien in `Fallback/news/`
- `css/style.css` (~1700 Zeilen, Dark Theme mit CSS Custom Properties)
- `js/nav.js` – Hamburger-Menü
- `js/events.js` – Datumsberechnung im Browser (Trainingstage, Mittwochsturnier, Ligaspieltage)
- `js/veranstaltungen.js` – dynamischer Monatskalender
- `js/galerie.js` – Lightbox via natives `<dialog>`-Element

Bilder (`images/`, `images/galerie/`) und Downloads (`downloads/`) sind eigenständige
Kopien innerhalb des `Fallback/`-Verzeichnisses – vollständig autark und FTP-upload-fertig.

**Deployment:** FTP nach `/pbced/pbced2/fallback/` → `weberding.de/pbced/pbced2/fallback/`

### 8.2  Skill `/pbced-fallback` erstellt

**Datei:** `.claude/skills/pbced-fallback/SKILL.md` (neu)

Wiederverwendbarer Claude-Code-Skill für die Pflege der Fallback-Website.
Dokumentiert Dateistruktur, häufige Pflegeaufgaben (neue News, Ergebnisse,
Trainingszeiten, Galerie, Vorstand), CSS-Klassen-Übersicht, JS-Pflege-Guide
und die saisonale Aktualisierungscheckliste.

### 8.3  Fallback-Startseite – Hero-Überschrift und Abstand

**Dateien:** `Fallback/index.html`, `Fallback/css/style.css`

**8.3a Hero-Überschrift:** `<h1>Billard</h1>` ersetzt durch dreizeiligen Text:
- „Spiel." (weiß)
- „Leidenschaft." (gold, `color:var(--gold)`)
- „Gemeinschaft." (weiß)

**8.3b Abstand Header → Hero-Inhalt:** `padding-top` in `.hero-content` von
`6rem` auf `3rem` reduziert; `padding-bottom` bleibt bei `6rem`.

---

## Phase 9 – Chronik-Erweiterung: Vereinsgeschichte seit 2010 (29. April 2026)

Alle archivierten Beiträge von pbc-erding.de (November 2010 bis April 2024) wurden
gesichtet, überarbeitet und als Chronik-Einträge in die Vereinsseite integriert.
Technisch wurde der Datentyp `ChronikEntry` erweitert, damit Einträge wahlweise
intern, extern oder ohne Link angezeigt werden können.

### 9.1  Chronik – 26 historische Artikel ergänzt

**Datei:** `lib/data.ts`

Aus dem Archiv von pbc-erding.de wurden 26 Beiträge aus den Jahren 2010 bis 2024
in das `chronik`-Array aufgenommen. Die Einträge wurden gesichtet und mit sprachlich
überarbeiteten Titeln versehen. Reine Bild-Posts ohne Nachrichtenwert sowie die
statische Kontaktseite wurden übersprungen.

| Zeitraum | Einträge | Themen (Beispiele) |
|---|---|---|
| 2010–2011 | 10 | Saisonstart, Aufstiege, Bayerischer Meister, Dienstags-Cup |
| 2012–2013 | 6 | Lokalwechsel ins Stardust, neue Turnierserien, Aufstieg Landesliga |
| 2021–2022 | 3 | Neustart Turnierserie, Neujahrsturnier |
| 2023–2024 | 5 | Stardust Open, DiCup, Spieltag Dingolfing, Bezirksmeisterschaft |

Einträge mit vorhandener interner News-Seite (z. B. `spieltag-gegen-dingolfing`) verweisen
weiterhin intern; alle anderen verlinken auf den Originalbeitrag auf pbc-erding.de.

### 9.2  ChronikEntry – Typ um optionales `url`-Feld erweitert

**Datei:** `lib/data.ts`

Der Typ `ChronikEntry` erhielt ein zusätzliches optionales Feld:

- Vorher: `{ title, date, slug: string }`
- Nachher: `{ title, date, slug?: string, url?: string }`

`slug` (intern) und `url` (extern) schließen sich inhaltlich aus; beide Felder sind optional,
sodass ein Eintrag ohne Link als reiner Text angezeigt werden kann.

### 9.3  Chronik.tsx – Drei Darstellungsmodi

**Datei:** `app/verein/Chronik.tsx`

Die Komponente rendert jeden Eintrag in einem von drei Modi:

- **Interner Link** (`slug` vorhanden): Next.js `<Link>` → `/news/[slug]`
- **Externer Link** (`url` vorhanden): `<a target="_blank" rel="noopener noreferrer">` → pbc-erding.de
- **Kein Link** (weder `slug` noch `url`): Plain-Text-`<li>` ohne Interaktionselement

Das Pfeil-Symbol `→` erscheint nur bei verlinkten Einträgen.

### 9.4  Fallback – Chronik-Bilder anklickbar (Lightbox)

**Dateien:** `Fallback/js/chronik-lightbox.js` (neu), `Fallback/css/style.css`,
`Fallback/news/*.html` (17 Artikel)

In der Fallback-Website waren die Fotos in den Chronik-Artikeln bisher nur statisch
angezeigt. Ein neues Script `chronik-lightbox.js` macht alle `.article-photo`-Bilder
anklickbar: per Klick öffnet sich ein modaler `<dialog>` mit dem Bild in voller
Breite. Der Dialog wird dynamisch erzeugt und nutzt die bereits vorhandenen
Lightbox-CSS-Klassen aus `style.css`.

- Bei mehreren Bildern auf einer Seite: Prev/Next-Buttons und Zähler
- Bei einem einzigen Bild: keine Navigationselemente
- Tastaturnavigation: ←/→ für Prev/Next, Esc zum Schließen
- Klick auf den Hintergrund (Backdrop) schließt ebenfalls
- `cursor: pointer` in `style.css` ergänzt (visuelles Signal für Klickbarkeit)
- Script-Tag in alle 17 Artikel mit Bildgalerien eingefügt; Artikel ohne Bilder bleiben unberührt

### 9.5  Next.js – Chronik-Bilder anklickbar (Lightbox)

**Dateien:** `app/news/NewsGallery.tsx` (neu), `app/news/[slug]/page.tsx`

In der Next.js-Version waren die Fotos in den Chronik-Artikeln ebenfalls nur statisch
dargestellt. Da `page.tsx` einen `metadata`-Export enthält und daher nicht mit
`'use client'` annotiert werden kann, wurde das Lightbox-Verhalten in eine separate
Client-Komponente `NewsGallery.tsx` ausgelagert — dasselbe Muster wie bei `TeamSection.tsx`.

Die Komponente empfängt das `images`-Array als Prop und rendert:
- Die Thumbnail-Rasteransicht (1- oder 2-spaltig, Span-Logik bei 3 Bildern)
- `cursor-pointer` und Hover-Opacity als visuelles Signal
- Ein Vollbild-Overlay (`fixed inset-0`) mit dem angeklickten Bild
- Prev/Next-Buttons und Zähler bei mehreren Bildern; keine Navigationselemente bei einem einzigen Bild
- Tastaturnavigation: ←/→ für Prev/Next, Esc zum Schließen (via `useEffect`)
- Klick auf den Hintergrund schließt das Overlay

`page.tsx` ersetzt den bisherigen statischen Bilder-Block durch `<NewsGallery images={item.images} />`.

---

## Phase 10 – Bilder-Integration, Chronik-UX und Fallback-Erweiterung (29. April 2026)

Historische Vereinsfotos wurden als Bildgalerien in News-Artikel integriert – sowohl in der
Next.js-Version als auch in der Fallback-Website. Ergänzend wurden zwei UX-Verbesserungen
für die Chronik umgesetzt: ein kontextbewusster Zurück-Link und persistente Accordion-Zustände.

### 10.1  NewsImage-Typ + Fotogalerie in News-Artikeln

**Dateien:** `lib/data.ts`, `app/news/[slug]/page.tsx`, `public/images/chronik/`

Der Datentyp `NewsImage` wurde neu eingeführt und auf `NewsItem` ergänzt:

- `NewsImage`: `{ src: string; alt: string; span?: boolean }` (optionales `span` für das erste Bild im 3-Spalten-Grid)
- `NewsItem`: neues optionales Feld `images?: NewsImage[]`

21 historische Fotos aus dem Vereinsarchiv (2011–2026) wurden in `public/images/chronik/`
abgelegt und 19 der 25 News-Artikel damit verknüpft. Zwei Artikel (`erdinger-stadtmeisterschaft-2011`,
`dienstags-cup-8-runde-2011`) bleiben ohne Bild, da dafür keine Originale vorlagen.

`app/news/[slug]/page.tsx` rendert die Bilder vor dem Artikeltext als responsives Grid:
1 Bild → einspaltig, 2 Bilder → zweispaltig, 3 + Bilder → dreispaltig (erstes Bild
`col-span-2` wenn `span: true`).

### 10.2  Kontextbewusster Zurück-Link (NewsBackLink)

**Datei:** `app/news/NewsBackLink.tsx` (neu)

Die Zurück-Schaltfläche in News-Artikeln erkennt nun den Aufruf-Kontext über den
Query-Parameter `?from=chronik`:

- `?from=chronik` → Link auf `/verein#chronik` (Accordion bleibt offen, da sessionStorage genutzt)
- Kein Parameter → Link auf `/#news` (Startseiten-News-Section)

Die Komponente ist `'use client'` und nutzt `useSearchParams()`. Da Next.js
`useSearchParams()` zwingend eine `<Suspense>`-Grenze erfordert, ist die Komponente
in `app/news/[slug]/page.tsx` in `<Suspense>` eingebettet.

### 10.3  Chronik-Accordion-Persistenz (sessionStorage)

**Datei:** `app/verein/Chronik.tsx`

Der Aufklappreiszt der Chronik-Jahres- und Monats-Akkordeons wird nun via `sessionStorage`
gespeichert:

- `STORAGE_YEARS` / `STORAGE_MONTHS` – Schlüssel für `openYears` und `openMonths`
- Beim Laden der Seite werden gespeicherte Zustände wiederhergestellt
- Ein `ready`-Flag verhindert, dass der leere Initialzustand die gespeicherten Daten überschreibt
- Beim Navigieren Chronik → Artikel → Zurück bleiben alle Jahres- und Monats-Akkordeons
  im selben Zustand wie beim Verlassen der Seite

### 10.4  Fallback-Website – Fotos und neue Artikel

**Dateien:** `Fallback/css/style.css`, `Fallback/news/*.html`, `Fallback/images/chronik/`, `Fallback/verein.html`

Alle 13 bereits vorhandenen News-Artikel der Fallback-Website erhielten Fotoblöcke
(`.article-photos > .article-photos-grid`). Vier neue Artikel wurden erstellt:

| Datei | Datum | Kategorie |
|---|---|---|
| `turnierserie-2022.html` | 20.01.2022 | Turnier |
| `vereinsabend-stardust-2025.html` | 18.02.2025 | Verein |
| `starte-durch-pbc-erding.html` | 16.01.2026 | Verein |
| `mittwoch-cup-ankuendigung-2026.html` | 16.01.2026 | Turnier |

Die 21 Chronik-Fotos wurden als eigenständige Kopien in `Fallback/images/chronik/` abgelegt.
In `Fallback/verein.html` wurden die vier neuen Artikel als Chronik-Einträge ergänzt
(Jahresgruppen 2022, 2025, 2026).

`Fallback/css/style.css` erhielt neue Klassen: `.article-photos`, `.article-photos-grid`,
`.cols-1 / .cols-2 / .cols-3`, `.article-photo`, `.photo-span-2`.

### 10.5  Bug-Fix: fehlendes Bild für `aufstieg-verbandsliga-2011`

**Datei:** `lib/data.ts`

Der Artikel `aufstieg-verbandsliga-2011` hatte trotz vorhandenem Foto (`2011-05-04.jpg`)
kein `images`-Feld in `lib/data.ts`. Das Feld wurde ergänzt. Das Foto war bereits in
`public/images/chronik/` und `Fallback/images/chronik/` vorhanden.

---

## Phase 11 – npm audit fix: Sicherheitslücken behoben (29. April 2026)

`npm audit` meldete 5 Sicherheitslücken (2 moderate, 3 high). Alle behebbaren Lücken
wurden in zwei Schritten geschlossen; zwei moderate postcss-CVEs verbleiben ohne
Breaking Change nicht behebbar.

### 11.1  Ausgangslage: 5 Lücken identifiziert

**Datei:** `package.json`, `package-lock.json`

`npm audit` meldete folgende verwundbare Pakete:

| Paket            | Schwere   | Details                                     |
|------------------|-----------|---------------------------------------------|
| `brace-expansion`| moderate  | RegExp-Denial-of-Service                    |
| `flatted`        | high      | Prototype Pollution                         |
| `picomatch`      | high      | RegExp-Denial-of-Service                    |
| `postcss`        | moderate  | Schwachstelle in Stylesheet-Parsing         |
| `next`           | high      | HTTP Request Smuggling / CSRF / DoS         |

### 11.2  Schritt 1: `npm audit fix` (sicher, kein Breaking Change)

Behebt `brace-expansion` (moderate), `flatted` (high), `picomatch` (high).
Danach: 2 verbleibende Lücken (beide moderate, nur postcss).

### 11.3  Schritt 2: `npm audit fix --force` (Next.js-Update)

Aktualisiert Next.js **16.1.6 → 16.2.4** und behebt die next-CVEs
(HTTP Request Smuggling, CSRF, DoS).

**Verbleibend nach beiden Schritten:** 2 moderate postcss-CVEs.
`postcss` ist innerhalb von Next.js gebündelt und wäre nur durch Downgrade
auf `next@9.3.3` fixierbar — ein Breaking Change, der nicht durchgeführt wurde.
Für dieses Projekt nicht ausnutzbar: statischer Export, kein laufender Node.js-Server
in Produktion.

Build nach dem Update: **51 Seiten** — weiterhin fehlerfrei.

---

## Phase 12 – BBV-Ergebnisupdate und dynamischer Veranstaltungskalender (9. Mai 2026)

Neues Spielergebnis für PBC Erding I eingetragen (letzter Spieltag der Saison) sowie
die Veranstaltungsseite um eine clientseitige Filterung erweitert, sodass vergangene
Kalendertermine immer – unabhängig vom Build-Zeitpunkt – ausgeblendet werden.

### 12.1  BBV-Ergebnisupdate: PBC Erding I – Sieg 8:2 gegen 1. PBC Freising III (09.05.2026)

**Dateien:** `lib/data.ts`, `app/veranstaltungen/page.tsx`, `Fallback/ergebnisse.html`, `Fallback/veranstaltungen.html`, `Fallback/js/events.js`

Das Ergebnis des letzten Heimspiels der Saison wurde eingetragen.

Änderungen in `lib/data.ts` und `app/veranstaltungen/page.tsx` (Array `ligaTeams`):

| Feld          | Vorher   | Nachher  |
|---------------|----------|----------|
| `ergebnis`    | `null`   | `'8:2'`  |
| `wertung`     | `'offen'`| `'sieg'` |
| `siege`       | 5        | 6        |
| `spiele`      | `'44:46'`| `'52:48'`|
| `diff`        | `'-2'`   | `'+4'`   |
| `punkte`      | `'11:7'` | `'13:7'` |

In den Fallback-Dateien wurden die Spielzeile, die Statistik-Pills, die Summary-Zeile
und das Stand-Datum auf den 09.05.2026 aktualisiert. Der Erding-I-Eintrag wurde aus
`Fallback/js/events.js` (Spielplan offener Spiele) entfernt.

PBC Erding II und III waren bereits aktuell – keine Änderungen nötig.

### 12.2  Dynamisches Ausblenden vergangener Kalendertermine (Next.js)

**Dateien:** `app/veranstaltungen/HidePastCalendarEvents.tsx` *(neu)*, `app/veranstaltungen/page.tsx`

Der Monatskalender auf der Veranstaltungsseite filterte Termine bisher nur zur
Build-Zeit. Lag der Build mehrere Tage zurück, wurden bereits vergangene
Trainings- und Turniertage dem Besucher weiterhin als „kommend" angezeigt.

Lösung: Jede Kalenderzeile im `EventRow`-Component erhielt das Attribut
`data-cal-date="YYYY-MM-DD"`. Eine neue `'use client'`-Komponente
`HidePastCalendarEvents` läuft nach dem Laden im Browser, liest das echte
Tagesdatum und setzt `display: none` auf alle Zeilen, deren Datum bereits
vergangen ist. Die Liga-Spielplan-Sektion (gesonderte Übersicht aller
Saisonspiele) bleibt davon unberührt.

---

## Phase 13 – Seite „Turniere" in „Veranstaltungen" umbenannt (9. Mai 2026)

Browser-Tab-Titel der Veranstaltungsseite angepasst, Route `/turniere` in
`/veranstaltungen` umbenannt sowie alle Verweise in Next.js, Fallback-Dateien,
Skills und Dokumentation aktualisiert.

### 13.1  Browser-Tab-Titel korrigiert

**Datei:** `app/veranstaltungen/page.tsx`

Der `metadata`-Export enthielt noch den alten Titel `'Turniere & Trainingstage'`.
Er wurde auf `'Veranstaltungen'` geändert, sodass der Browser-Tab nun
„Veranstaltungen | PBC Erding" zeigt.

### 13.2  Route umbenannt: /turniere → /veranstaltungen

**Dateien:** `app/veranstaltungen/` *(Ordner umbenannt)*, `lib/navigation.ts`,
`app/sitemap.ts`, `components/sections/EventsSection.tsx`, `CLAUDE.md`,
`README.md`, `Plan_Webredaktion.md`, `.claude/skills/bbv-ergebnisse/SKILL.md`

Der Ordner `app/turniere/` wurde in `app/veranstaltungen/` umbenannt – damit
änderte sich die URL-Route von `/turniere` auf `/veranstaltungen`. Alle internen
Verweise (Navigation, Sitemap, EventsSection-Link, Dokumentation, Skill) wurden
aktualisiert. Der `.next`-Cache musste nach der Umbenennung gelöscht werden
(`rm -rf .next`), da Next.js sonst noch auf den alten Modulpfad zugriff.

### 13.3  Fallback bereinigt

**Dateien:** `Fallback/turniere.html` → `Fallback/veranstaltungen.html`,
`Fallback/js/turniere.js` → `Fallback/js/veranstaltungen.js`,
alle ~50 HTML-Seiten in `Fallback/`, `.claude/skills/pbced-fallback/SKILL.md`

Die Fallback-Seite und das zugehörige JS-Modul wurden entsprechend umbenannt.
Der `<script>`-Verweis in `veranstaltungen.html` wurde von `js/turniere.js` auf
`js/veranstaltungen.js` angepasst. Alle Navigationsverlinkungen (`turniere.html`)
in den ~50 HTML-Dateien des Fallback wurden per `sed` in einem Schritt auf
`veranstaltungen.html` aktualisiert. Der Fallback-Skill wurde auf die neuen
Dateinamen angepasst.

---

## Phase 14 – BBV-Ergebnisse, Unterstützer-Umbenennung, Kontaktformular-Routing und Inhalte (18. Mai 2026)

Umfangreiche Inhalts- und Feature-Runde: letzte Spieltage beider Kreisliga-Mannschaften eingetragen, vollständige Umbenennung „Sponsoren" → „Unterstützer", Datenschutz auf netcup aktualisiert, Logo-Bugfix, drei neue News-Artikel, Chronik erweitert sowie ein konfigurierbares E-Mail-Routing für das Kontaktformular eingeführt.

### 14.1  BBV-Ergebnisupdate – Erding II und Erding III (letzter Spieltag)

**Dateien:** `lib/data.ts`, `app/veranstaltungen/page.tsx`, `Fallback/ergebnisse.html`, `Fallback/veranstaltungen.html`, `Fallback/js/events.js`

Letzter Spieltag der Kreisliga Oberbayern D eingetragen:
- **Erding II** (16.05.2026): 7:3 gegen BSV PB München IV → Sieg, Saison ungeschlagen abgeschlossen (10S / 0U / 0N, 71:29, +42, 20:0 Punkte)
- **Erding III** (09.05.2026): 4:6 bei PBC Lerchenau II → Niederlage (1S / 0U / 9N, 36:64, −28, 2:18 Punkte)

Fallback-Spielpläne auf `spieltag-past` gesetzt, Statistik-Pills und Bilanzen aktualisiert, Stand-Datum auf 18.05.2026 gesetzt. `events.js`-Spielplan geleert (keine offenen Liga-Spiele mehr).

### 14.2  Datenschutz: Hosting-Anbieter IONOS → netcup

**Datei:** `app/datenschutz/page.tsx`

Hosting-Anbieter in Abschnitt 3 (Hosting & technische Infrastruktur) und Abschnitt 10 (Auftragsverarbeitung) von IONOS SE (Montabaur) auf **netcup GmbH** (Emmy-Noether-Straße 10, 76131 Karlsruhe) umgestellt. Kontakt-E-Mail und Rechenzentrumsstandort (RZ Nürnberg) ergänzt. Stand des Dokuments auf „Mai 2026" aktualisiert.

### 14.3  Sponsoren → Unterstützer: vollständige Umbenennung

**Dateien:** `lib/navigation.ts`, `app/sitemap.ts`, `app/sponsoren/` → `app/unterstuetzer/page.tsx`, `components/sections/SponsorsSection.tsx`, `Fallback/sponsoren.html` → `Fallback/unterstuetzer.html`, ~49 weitere Fallback-HTML-Dateien

Menüeintrag, Route, Dateinamen und alle Texte wurden von „Sponsoren" auf „Unterstützer" umgestellt. Auf der Unterstützer-Seite:
- Einleitungstext bereinigt (kein Verweis mehr auf Altwebsite)
- Neue Goldüberschrift „WAS WIR BIETEN" vor den Paket-Karten
- Paket „Präsenz im Clubheim" → „Präsenz im Club" (Text auf Bowling-Castle-Situation angepasst: keine Aushänge im „Vereinsheim")
- CTA „Partner werden" → „Den Verein unterstützen", Sponsor-Begriff entfernt
- Link in SponsorsSection: `/kontakt?betreff=sponsoring` → `/kontakt?betreff=unterstuetzung`
- 49 Fallback-Dateien per Bulk-Replace aktualisiert (`sponsoren.html` → `unterstuetzer.html`)

### 14.4  Header-Logo vergrößert und Sichtbarkeits-Bugfix

**Datei:** `components/layout/Header.tsx`

Logo-Größe von 36 px auf 48 px erhöht. Dabei war das Logo auf Desktop-Breakpoints nicht mehr sichtbar, weil der Flex-Container es herausdrückte. Fix: `shrink-0` zur Logo-`<Link>`-Klasse ergänzt. Außerdem `NEXT_PUBLIC_BASE_PATH ?? ''` für den Bildpfad gesichert und `ring-2 ring-white/10 bg-charcoal-900` für visuelle Konsistenz hinzugefügt.

### 14.5  Drei neue News-Artikel + Chronik-Erweiterung

**Datei:** `lib/data.ts`, `app/news/[slug]/page.tsx` (via generateStaticParams), `Fallback/news/`, `Fallback/verein.html`

Neue Artikel:
- **Saisonabschluss Erding II** (`saisonabschluss-erding-2-2025-26`, 16.05.2026) – Kreisliga ungeschlagen, vollständige Spieltabelle
- **Trainer-Fortbildung Bart Claessen** (`trainer-fortbildung-bart-claessen`, 09.05.2026) – DBU Trainer-Assistent zertifiziert
- **Saisonabschluss Erding III** (`saisonabschluss-erding-3-2025-26`, 09.05.2026) – Kreisliga-Bilanz mit Spieltabelle

Alle drei Artikel in `chronik[]` eingetragen (datumssortiert, 2026-Gruppe). Entsprechende Fallback-HTML-Dateien unter `Fallback/news/` erstellt. Fallback-Chronik in `Fallback/verein.html` um 5 Einträge erweitert (inkl. nachgeholter Mittwoch-Cup-April-Eintrag).

### 14.6  News-Sortierung auf der Startseite

**Datei:** `components/sections/NewsSection.tsx`

Die drei neuesten Artikel auf der Startseite wurden bisher in Array-Reihenfolge angezeigt. Geändert auf explizite Datumsabstieg-Sortierung:

```typescript
const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
```

Damit erscheint immer das neueste Datum links, unabhängig von der Reihenfolge in `lib/data.ts`.

### 14.7  Konfigurierbares E-Mail-Routing für das Kontaktformular

**Dateien:** `content/kontakt-routing.md` *(neu)*, `scripts/generate-kontakt-routing.mjs` *(neu)*, `lib/kontakt-routing.ts` *(auto-generiert)*, `app/kontakt/KontaktForm.tsx`, `package.json`

Für jeden Betreff im Kontaktformular können nun individuelle Empfänger- und CC-Adressen hinterlegt werden. Architektur:

- **`content/kontakt-routing.md`** – Redakteurs-freundliche Markdown-Konfigurationsdatei mit vollständiger Dokumentation (Aufbau, Regeln, Beispiele). Redakteure pflegen hier ausschließlich die E-Mail-Adressen, ohne Code zu berühren.
- **`scripts/generate-kontakt-routing.mjs`** – Node.js-Prebuild-Skript: parst die Markdown-Datei, ignoriert Codeblöcke, und schreibt `lib/kontakt-routing.ts` mit typisiertem `kontaktRoutes`-Array (`value`, `label`, `to[]`, `cc[]`).
- **`package.json`** – `dev`- und `build`-Scripts starten den Generator als ersten Schritt.
- **`KontaktForm.tsx`** – importiert `kontaktRoutes` statt der bisherigen statischen `BETREFF_OPTIONS`-Konstante. Beim Absenden wird die passende Route gesucht und das `mailto:`-Link mit `to.join(',')` sowie optionalem `&cc=...`-Parameter aufgebaut.

Aktuell konfiguriert: Turnieranmeldung → `turnier@pbc-erding.de` (CC: `info@pbc-erding.de`), alle anderen → `info@pbc-erding.de`.

### 14.8  Hero-Section: Hintergrundbild optimiert

**Datei:** `public/images/` (Bilddatei), `components/sections/HeroSection.tsx`

Das Hintergrundbild der Hero-Section wurde durch eine optimierte Version ersetzt.

---

## Phase 15 – Schriftstücke als HTML-Vorlagen & Download-Links aktualisiert (19. Mai 2026)

Neue HTML-Versionen der Vereinsdokumente in `public/schriftstuecke/` bereitgestellt und auf der Downloadseite als „Online anzeigen"-Button verknüpft. Außerdem wurden neue Datei-Versionen eingepflegt und Dateinamen mit Leerzeichen durch Bindestrich-Varianten ersetzt.

### 15.1  Download-Dateien aktualisiert

**Dateien:** `public/downloads/`, `lib/data.ts`

Das Informationsblatt liegt jetzt als `PBC-Erding_Informationsblatt.pdf` vor (Stand 19.05.2026, vorher `PBC-Erding_Informationsblatt_2024-01.pdf`). Zusätzlich wurden Bearbeitungsvorlagen hinzugefügt: `PBC-Erding_Aufnahmeantrag.odt`, `PBC-Erding_Einzugsermaechtigung-SEPA_Vorlage.odt`, `PBC-Erding_Informationsblatt.odt`, `PBC-Erding_Informationsblatt.docx`. Alle neuen Dateien wurden mit Bindestrichen statt Leerzeichen im Namen abgelegt. Der Link in `lib/data.ts` wurde auf den neuen PDF-Dateinamen aktualisiert.

### 15.2  HTML-Schriftstücke erstellt

**Dateien:** `public/schriftstuecke/aufnahmeantrag.html`, `informationsblatt.html`, `sepa.html`, `fahrtkosten.html`, `satzung.html`, `schriftstuecke.css`, `colors_and_type.css`

Die fünf Vereinsdokumente aus dem Design-Katalog (`pbc-erding-design/ui_kits/schriftstuecke/`) wurden als druckfertige HTML-Seiten in `public/schriftstuecke/` integriert. Anpassungen gegenüber dem Design-Katalog:
- Logo-Pfad: `../../assets/logo_pbced.png` → `/images/logo_pbced.png`
- CSS-Import: `../../colors_and_type.css` → `colors_and_type.css` (lokale Kopie)
- Zurück-Link: `index.html` → `/downloads`
- Tabbar enthält „Drucken"-Button; bei `?bare=1` wird die Tabbar ausgeblendet

Die Satzung umfasst 7 A4-Seiten als separate `<article>`-Elemente. In der Fahrtkostenabrechnung wurden die Felder „Start" und „Ziel" ergänzt (zwischen „Liga / Betreff" und „Fahrer").

### 15.3  Download-Seite: „Online anzeigen"-Button

**Datei:** `app/downloads/page.tsx`, `lib/data.ts`

Der Typ `DownloadItem` wurde um das optionale Feld `htmlHref?: string` erweitert. Die fünf betroffenen Einträge (Satzung, Aufnahmeantrag, Einzugsermächtigung, Informationsblatt, Fahrtkostenzuschuss) erhielten je einen `htmlHref`-Wert. Auf der Downloadseite erscheint bei diesen Einträgen rechts ein kompakter Auge-Icon-Button, der die HTML-Version im neuen Tab öffnet.

## Phase 16 – Neue Förderer, Chronik-Originaltexte wiederhergestellt (20. Mai 2026)

Zwei neue Sponsoren wurden als Förderer ergänzt. Alle historischen Chronik-Artikel wurden mit den Originaltexten der Live-Website abgeglichen und wiederhergestellt – der zuvor eingeführte journalistische Umschreibstil wurde rückgängig gemacht.

### 16.1  Neue Förderer: Auto Baumschlager & Bendl Investment

**Datei:** `lib/data.ts`

Zwei neue Sponsoren wurden in die `sponsors[]`-Liste aufgenommen:
- **Auto Baumschlager** (Autoreparatur in Wörth) – `tier: 'bronze'`
- **Bendl Investment** (Finanzdienstleistungen auf einem anderen Level) – `tier: 'bronze'`

Beide erscheinen an erster Stelle in der Förderer-Gruppe auf der Unterstützer-Seite (vor Billard-Aktuell und Ortmann Billiards).

### 16.2  Chronik-Originaltexte wiederhergestellt

**Datei:** `lib/data.ts`

Alle historischen Artikel (2010–2026) in der `news[]`-Liste wurden mit den Originaltexten von `http://pbc-erding.de` abgeglichen. Dabei wurden die zuvor von Claude erstellten, formal-journalistischen Fassungen durch die echten Blog-Texte ersetzt – inkl. informellem Ton, Autorenunterschriften (z. B. „LG Ludwig") und originalem Zeicheneinsatz (z. B. „!!"). Nur offensichtliche Orthographie- und Grammatikfehler wurden korrigiert.

Betroffene Artikel (Auswahl):
- `umzug-bowling-castle-erding`: Namen Rudi Mathes, Stefan Knoll, Winni, Familie Meindl wiederhergestellt
- `herzlichen-dank-stardust`: Konkrete Namen (Sabin, Andy, Paul), letzter Trainingstermin 1.1.2026
- `tournierserienauftakt-2021`: Originaler Ludwig-Stil, vollständige Platzierten-Namen
- `neujahrsturnier-2022`: Ludwig-Signatur und informeller Anmeldehinweis
- `weihnachten-2010`: Auf Original-Einzeiler mit „!!" reduziert
- `olympia-bewerbung-2010`: Auf Link-Verweis reduziert
- `saisonstart-2010`: Jugendgruppe, Pooldragons, Weihnachtsfeier 3. Dezember
- `trainer-fortbildung-bart-claessen`: Erfundener Absatz über Bart's Mehrwert für das Training entfernt

Artikel mit ausschließlich Bildinhalt (kein Original-Text vorhanden) wurden unverändert belassen: `turnierserie-2022`, `stardust-open-2022/2023`, `dicup-2324`, `bezirksmeisterschaft-senioren-2024`, `spieltag-gegen-dingolfing`, `vereinsabend-stardust-2025`, `dienstags-turnierserie-2021`.

---

## Phase 17 – Unterstützer-Seite: Logos, Teaser, Sortierung & Fixes (20. Mai 2026)

Atom Billard wurde als weiterer Förderer ergänzt. Alle Sponsor-Logos wurden skaliert, Beschreibungstexte überarbeitet, das Kontaktformular vorbelegt und die Förderer alphabetisch sortiert. Außerdem wurde ein kritischer UTF-8-Kodierungsfehler in `lib/data.ts` behoben.

### 17.1  Atom Billard als Förderer ergänzt

**Datei:** `lib/data.ts`

Neuer Sponsor in der `sponsors[]`-Liste aufgenommen:

- **Atom Billard** (`tier: 'bronze'`, Website: `https://www.atom-billard.de`)
- Teaser: „Fachhandel für Billardtische & Queues"
- Logo: `public/images/sponsoren/atom-billard.png` (bereits vorhanden)

### 17.2  Bowling Castle – Teaser aktualisiert

**Datei:** `lib/data.ts`

Beschreibungstext des Hauptunterstützers geändert:

- Vorher: „Neue Spielstätte des PBC Erding seit Januar 2026"
- Nachher: „Spiellokal mit Bowling, 3D-Minigolf und Pool-Billard-Sport"

### 17.3  Sponsor-Logos skaliert

**Datei:** `app/unterstuetzer/page.tsx`

Logo-Höhen angepasst (Tailwind-Klassen):

| Tier | Vorher | Nachher |
| --- | --- | --- |
| gold (Hauptunterstützer) | `h-16` | `h-48` |
| silber (Partner) | `h-12` | `h-36` |
| bronze (Förderer) | `h-9` | `h-30` |

### 17.4  Kontaktformular-Betreff bei „Jetzt anfragen" vorbelegt

**Datei:** `app/unterstuetzer/page.tsx`

Der CTA-Button „Jetzt anfragen" verlinkt nun auf `/kontakt?betreff=unterstuetzung`, sodass das Dropdown im Kontaktformular automatisch auf „Unterstützung/Partnerschaft" vorausgewählt ist.

### 17.5  Förderer alphabetisch sortiert

**Datei:** `lib/data.ts`

Alle drei Sponsor-Gruppen sind jetzt alphabetisch geordnet. Förderer (bronze) neu:
Atom Billard → Auto Baumschlager → Bendl Investment → Billard-Aktuell → Ortmann Billiards

### 17.6  UTF-8-Kodierungsfehler behoben

**Datei:** `lib/data.ts`

Ein seit Commit `56693a4` bestehender UTF-8-BOM- und Doppelkodierungsfehler führte zu unlesbaren Umlauten im Browser (z. B. „â€"" statt „–", „NÃ¤chster" statt „Nächster"). Die Datei wurde aus dem letzten sauberen Commit (`e01012b`) wiederhergestellt und alle Inhaltsänderungen anschließend neu eingespielt.

---

## Phase 18 – Galerie, Sponsoren & Mittwochsturnier-Fixes (21. Mai 2026)

Galerie, Unterstützer-Seite und Mittwochsturnier-Artikel wurden inhaltlich aktualisiert und mehrere Fehler behoben.

### 18.1  Galerie – Spielerfotos und Zitate für spieler11–14

**Dateien:** `public/images/galerie/`, `lib/data.ts`

Vier neue Spieler wurden mit Fotos und Zitaten ergänzt. Vorhandene Fotos wurden durch qualitativ hochwertigere Versionen ersetzt.

### 18.2  Mittwochsturnier-Datum – UTC-Offset-Fehler behoben

**Datei:** `lib/turnier-utils.ts`

`toISOString()` liefert UTC-Zeit; bei lokalen Uhrzeiten nach Mitternacht verschob sich das Datum um einen Tag. Umgestellt auf `getFullYear/getMonth/getDate` (lokale Zeit).

### 18.3  Mittwochsturnier-Artikel – Publikationsdatum auf Build-Datum korrigiert

**Datei:** `lib/data.ts`

Das Publikationsdatum war fest kodiert; es wird nun zur Build-Zeit dynamisch gesetzt.

### 18.4  Fallback-Galerie – spieler11–14 ergänzt

**Datei:** `Fallback/galerie.html`

Die Fallback-Seite wurde um die vier neuen Spieler synchron zur Next.js-Galerie erweitert.

### 18.5  SponsorsSection – echte Logos statt Monogramme

**Dateien:** `components/sections/SponsorsSection.tsx`, `public/images/logos/`

Alle Sponsor-Logos wurden durch echte Bild-Assets ersetzt (zuvor Monogramm-Platzhalter).

### 18.6  Unterstützer – Sponsor-Karten verlinkt, Bendl Investment ergänzt

**Datei:** `lib/data.ts`

Sponsor-Karten auf der Unterstützer-Seite erhalten jetzt direkte Website-Links. Bendl Investment wurde mit URL ergänzt.

### 18.7  Auto Baumschlager – Website verlinkt

**Datei:** `lib/data.ts`

Auto Baumschlager als Förderer mit Website-URL ergänzt.

---

## Phase 19 – Billard-Aktuell-Logo, Quiz Vereinsvariante & Audio-Fixes (22.–23. Mai 2026)

Der Quiz-Bereich wurde zur Vereinsvariante umgebaut (nur Billard-Themen) und mehrere Audio-Fehler behoben; zudem kleinere Inhalts-Updates.

### 19.1  Billard-Aktuell – Logo hinzugefügt

**Datei:** `lib/data.ts`

Förderer Billard-Aktuell erhielt ein Sponsor-Logo.

### 19.2  Links – Billard-Quiz unter Spiel & Spaß

**Datei:** `lib/data.ts`

Der Link zum Billard-Quiz wurde in der Links-Übersichtsseite unter der Gruppe „Spiel & Spaß" ergänzt.

### 19.3  Galerie – Bildqualität verbessert

**Datei:** `public/images/galerie/`

Weitere Spielerfotos wurden durch qualitativ hochwertigere Versionen ersetzt.

### 19.4  Quiz Vereinsvariante – nur Billard-Themen

**Datei:** `public/spiel-spass/quiz/index.html`

Open Trivia DB und nicht-Billard-Themen wurden entfernt. Der Quiz richtet sich jetzt ausschließlich an den Vereinskontext (Pool-Billard-Regelwerk, Vereinsgeschichte).

### 19.5  Quiz – Audio-Fixes

**Datei:** `public/spiel-spass/quiz/index.html`

Zwei Fehler behoben: falscher relativer Audiopfad nach Deployment und Audio-Promise-Hang beim gleichzeitigen Abspielen. Standard-Einstellung auf „Ton aus" geändert.

### 19.6  Quiz-Tool – Fragenverwaltung

**Datei:** `public/spiel-spass/quiz/quiz-tool.html`

Ein lokales Entwicklungstool zur Validierung und Erstellung von Quiz-Fragendateien wurde ergänzt.

---

## Phase 20 – Quiz Redesign & Online-Reconnect-Robustheit (23. Mai 2026)

Das Billard-Quiz erhielt ein vollständiges Redesign im PBC-Erding-Farbschema und der Online-Modus wurde deutlich stabiler gemacht.

### 20.1  Billard-Quiz – Redesign im PBC-Erding-Design

**Dateien:** `public/spiel-spass/quiz/index.html`, `public/spiel-spass/quiz/logo_pbced.png`

Das Quiz wurde im Gold/Dunkel-Farbschema der Website neu gestaltet (Design-Tokens: `--gold`, `--card`, `--ink`). Schriften gewechselt zu Oswald (Headlines) und Open Sans (Body). Das PBC-Erding-Logo wurde im Header ergänzt.

### 20.2  Quiz Online-Modus – Reconnect-Robustheit

**Datei:** `public/spiel-spass/quiz/index.html`

Drei Stabilitätsverbesserungen analog zur Billard-App:

- `reconnectionAttempts` von 3 auf 10 erhöht; Delay-Backoff 1–5 s, Timeout 10 s
- Reconnect-UI: Overlay mit Spinner und Versuchszähler bei unerwarteten Disconnects
- Session-Persistenz: Raum-Code und Spielername in `localStorage` gespeichert; bei Verbindungsabbruch wird der Code in der Fehlermeldung angezeigt

---

## Phase 21 – Quiz-Fragedaten bereinigt und erweitert (31. Mai 2026)

Die Quiz-Fragendateien wurden überarbeitet: veraltete und redundante Fragen entfernt, eine falsche Antwort korrigiert und der Multiple-Choice-Pool um neue Fragen zu Stoßtechnik, fortgeschrittener Physik und Turnierwissen erweitert.

### 21.1  True-or-False-Quiz – Fragen bereinigt

**Datei:** `public/spiel-spass/quiz/td_poolbillard.htm`

9 veraltete oder redundante Fragen wurden entfernt; Schwerpunkte: Fouls, Gruppenregeln beim 8-Ball, Push-Out beim 9-Ball, 10-Ball und 14.1, BBV-Ligabetrieb.

### 21.2  Multiple-Choice-Quiz – Bereinigung, Korrektur und Erweiterung

**Datei:** `public/spiel-spass/quiz/tq_poolbillard.htm`

- 3 Fragen entfernt (Duplikate und fehlerhafte Inhalte, darunter die „Queue"-Frage mit veralteter Antwort)
- Push-Out-Antwort präzisiert: „Ein Stoß nur mit der Hand" → „Das freie Aufsetzen der Weißen auf dem Tisch nach einem Faul des Gegners"
- ~15 neue Fragen in mittlerem und schwerem Schwierigkeitsgrad ergänzt:
  - Stoßtechnik: Rückläufer, Nachläufer, Bank Shot, Push Out, offener Tisch
  - Fortgeschrittene Physik: Squirt/Deflection, Swerve, Kontaktwurf, Scoop-Jump, Effet an der Bande
  - Turnierwissen: Mosconi Cup (Namensgeber, Format, Atmosphäre)
  - Grundlagen: Pomeranze kreiden, Stellungsspiel
- JSON-Formatierung vereinheitlicht (Antwort-Arrays mehrzeilig)

---

## Phase 22 – Mittwoch-Cup Mai Neuigkeit & Kalender-Bugfix (31. Mai 2026)

Neuer News-Artikel und Chronik-Eintrag für den Mittwoch-Cup Mai 2026 sowie Behebung eines Timezone-Bugs im Veranstaltungskalender.

### 22.1  Mittwoch-Cup Mai 2026 – Neuigkeit und Chronik-Eintrag

**Datei:** `lib/data.ts`

Neuer Neuigkeiten-Artikel (id `'12'`) hinzugefügt: „Mittwoch-Cup Mai – Lucki Weidinger holt den Sieg". Ergebnis: Platz 1 Ludwig „Lucki" Weidinger (PBC Erding), Platz 2 Leon Bozbel (PBC Freising), Platz 3 Markus Merz (PBC Erding), Platz 4 John Popitz (PBC Freising). 15 Teilnehmer, 10-Ball auf drei Gewinnsätze. Nächster Termin: 24. Juni 2026.

Chronik-Eintrag ergänzt: `{ title: 'Mittwoch-Cup Mai – Ludwig „Lucki" Weidinger gewinnt', date: '2026-05-27', slug: 'mittwoch-cup-mai-2026' }`.

### 22.2  Timezone-Bug im Veranstaltungskalender behoben

**Datei:** `app/veranstaltungen/page.tsx`

`d.toISOString()` liefert UTC-Mitternacht, was bei UTC+2 auf das Vortags-Datum zeigt. Die `data-cal-date`-Attribute werden nun mit lokalen Datumskomponenten gebildet (`getFullYear()`, `getMonth()+1`, `getDate()`), sodass heutige Termine nicht mehr fälschlich als vergangen ausgeblendet werden. Commit: `a4f4c5b`.

---

## Architektur & Seitenstruktur (Stand: Mai 2026)

### Technologie-Stack

| Ebene         | Technologie                                      |
|---------------|--------------------------------------------------|
| Framework     | Next.js 16 (App Router, `output: 'export'`)      |
| UI            | React 19, Tailwind CSS 4, TypeScript             |
| Animationen   | framer-motion (nur Hero + Stats + MembershipCTA) |
| Schriften     | Inter (Body), Bebas Neue (Display) via next/font |
| Deployment    | Statischer Export → FTP → Wurzelverzeichnis pbc-erding.de |

---

### Seiten (Routen)

```
pbc-erding.de/
│
├── /                        Startseite
├── /verein                  Vereinsseite mit Chronik
├── /mannschaften            Mannschaftsübersicht
├── /veranstaltungen         Veranstaltungskalender + Ligaspieltage
├── /ergebnisse              BBV-Spielergebnisse aller 3 Teams
├── /news/[slug]             Dynamische News-Detailseite
├── /galerie                 Fotogalerie mit Lightbox
├── /downloads               Vereinsunterlagen & Vorlagen
├── /links                   Externe Links (Verbände, Partner)
├── /unterstuetzer           Unterstützer-/Sponsorenübersicht
├── /kontakt                 Kontaktformular (mailto, konfigurierbares Routing)
├── /impressum               Impressum
├── /datenschutz             Datenschutzerklärung
└── /sitemap.xml             Automatisch generierte Sitemap
```

---

### Startseite – Aufbau (app/page.tsx)

```
┌─────────────────────────────────────────┐
│  Header (Navigation + Mitglied werden)  │
├─────────────────────────────────────────┤
│  HeroSection                            │
│  Panoramafoto · Vereinsname · CTAs      │
├─────────────────────────────────────────┤
│  StatsSection                           │
│  4 klickbare Kennzahlen-Karten          │
├─────────────────────────────────────────┤
│  NewsSection                            │
│  Letzte 3 News-Artikel                  │
├─────────────────────────────────────────┤
│  EventsSection                          │
│  Nächste Termine: Training · Turnier    │
│  + nächster Ligaspieltag je Mannschaft  │
├─────────────────────────────────────────┤
│  AboutSection                           │
│  Vereinsbeschreibung · Highlights       │
├─────────────────────────────────────────┤
│  SponsorsSection                        │
│  Gold-/Silber-Sponsoren · Partnerlink   │
├─────────────────────────────────────────┤
│  MembershipCTASection                   │
│  Mitglied werden CTA                    │
├─────────────────────────────────────────┤
│  Footer                                 │
│  Adresse · Navigation · Facebook        │
│  Impressum · Datenschutz               │
└─────────────────────────────────────────┘
```

---

### Komponenten-Hierarchie

```
app/layout.tsx                 ← Root-Layout (Header, Footer, CookieBanner)
│
├── components/layout/
│   ├── Header.tsx             Navigation + Hamburger-Menü (mobile)
│   └── Footer.tsx             Adresse, Links, Facebook, Rechtliches
│
├── components/sections/       Nur auf der Startseite genutzt
│   ├── HeroSection.tsx        framer-motion Entrance-Animation
│   ├── StatsSection.tsx       Count-up via useInView
│   ├── NewsSection.tsx        Letzte 3 Artikel (datumsabsteigend) aus lib/data.ts
│   ├── EventsSection.tsx      Dynamische Terminberechnung (Build-Zeit)
│   ├── AboutSection.tsx       Statischer Vereinstext
│   ├── SponsorsSection.tsx    Unterstützer aus lib/data.ts (Route: /unterstuetzer)
│   └── MembershipCTASection.tsx  framer-motion Orbs
│
├── components/ui/
│   ├── Button.tsx             primary / outline / ghost
│   ├── Badge.tsx              gold / green / red / neutral
│   ├── Container.tsx          max-w Wrapper
│   ├── SectionHeading.tsx     label + title + subtitle
│   ├── CookieBanner.tsx       DSGVO-Einwilligungsbanner
│   └── ConsentManager.tsx     Einwilligung verwalten (localStorage)
│
└── Seiten-spezifische Komponenten
    ├── app/ergebnisse/TeamSection.tsx    'use client' – Aufklapp-Karte
    ├── app/galerie/GalerieGrid.tsx       'use client' – Grid + Lightbox
    ├── app/news/NewsBackLink.tsx         'use client' – Kontextbewusster Zurück-Link
    └── app/verein/Chronik.tsx            'use client' – Jahres-/Monatschronik
```

---

### Datenschicht (lib/)

```
lib/
├── data.ts              Zentrale Datendatei (statisch, kein CMS)
│   ├── news[]           News-Artikel mit Volltext und Slug
│   ├── mannschaften[]   3 Teams mit vollständigem Spielplan 2025/26
│   ├── clubStats[]      4 Kennzahlen-Karten (mit href)
│   ├── sponsors[]       Unterstützerliste (gold / silber; Route: /unterstuetzer)
│   ├── downloads[]      Downloaddateien und externe Links
│   ├── links[]          Links-Seite (Gruppen mit Items)
│   └── chronik[]        Vereinschronik-Einträge
│
├── kontakt-routing.ts   Auto-generiert via scripts/generate-kontakt-routing.mjs
│                        Typisiertes Array: value, label, to[], cc[] je Betreff
│
├── turnier-utils.ts     Datumslogik (Build-Zeit)
│   ├── getNextMittwochsturnier()   letzter Mi im Monat
│   └── getNextTrainingDays()       Di / Do / So Trainingstage
│
├── navigation.ts        Haupt-Navigation (mainNav[])
└── site-config.ts       Vereinsstammdaten, Kontakt, Social
```

---

### Build & Deployment

```
Quellcode (pbc-erding.de/)
        │
        ▼
  npm run build
  → generate-kontakt-routing.mjs (Prebuild)
  → Next.js statischer Export
        │
        ▼
     out/           ← Statische HTML/CSS/JS-Dateien
        │
        ├──▶  FTP/SFTP  ──▶  Wurzelverzeichnis pbc-erding.de
        │
        └──▶  git push  ──▶  github.com/chrisgitti/pbc-erding.de
```

**basePath-Regelung:**

| Modus       | Build-Befehl      | basePath | URL                    |
|-------------|-------------------|----------|------------------------|
| Produktion  | `npm run build`   | *(leer)* | `www.pbc-erding.de/`   |

Kein separater Entwurfs-Modus mehr; `basePath` ist dauerhaft `''`.

---

### Fallbackvariante

Eigenständige HTML/CSS/JS-Version der Website unter `Fallback/` – ohne Framework,
ohne Build-Prozess, für Pflege ohne Next.js-Kenntnisse.

| Eigenschaft  | Wert                                                                  |
|--------------|-----------------------------------------------------------------------|
| Verzeichnis  | `Fallback/` (innerhalb von `pbc-erding.de/`)                         |
| Technologie  | Reines HTML, CSS Custom Properties, Vanilla JS (IIFE)                |
| Deployment   | FTP → Wurzelverzeichnis `pbc-erding.de/fallback/`                    |
| Seiten       | 14 HTML-Seiten + 20 News-Artikel in `news/`                          |
| CSS          | `css/style.css` (~1700 Zeilen, ein File)                              |
| JS           | `nav.js` · `events.js` · `veranstaltungen.js` · `galerie.js`         |
| Assets       | Eigenständige Kopien in `Fallback/images/` (inkl. `chronik/`), `Fallback/downloads/` |
| Pflege-Skill | `/pbc-ed_fallback`                                                    |
| Stand        | Mai 2026                                                              |

---

</details>

---

<details>
<summary><strong>Billard App – Phasen 1–19</strong></summary>

## Phase 1 – Proof of Concept einer PBC Erding Billard-App integriert (1. Mai 2026)

Eine browserbasierte Pool-Billard-App (8-Ball & 9-Ball) wurde als Proof of Concept
entwickelt, in beide Versionen der Website integriert, für mobile Geräte optimiert und auf
WPA-konforme Tischgeometrie abgestimmt. Die App wird im eigenständigen Projekt `pbc-pool-app`
gepflegt und per Skill `/pbced-billardapp` in die pbc-erding2-Website übertragen.

### 1.1  App als statische Seite (Next.js)

**Datei:** `public/spiel-spass/billardapp/index.html` (neu)

Die fertige App-Datei wurde unter `public/spiel-spass/billardapp/` abgelegt. Next.js
kopiert alle Dateien aus `public/` unverändert in das Build-Verzeichnis `out/`, sodass
die App unter `/spiel-spass/billardapp/index.html` erreichbar ist — ohne eigene Route
oder Komponente.

### 1.2  Link auf der Startseite – Next.js (MembershipCTASection)

**Datei:** `components/sections/MembershipCTASection.tsx`

Der Text „schaust du noch zu" in der CTA-Section verlinkt auf die App.
- `basePath`-Prefix ergänzt (`NEXT_PUBLIC_BASE_PATH`), damit der Link im Production-Build
  auf `/pbced/pbced2/spiel-spass/billardapp/index.html` zeigt
- `target="_blank" rel="noopener noreferrer"` hinzugefügt, da die App kein eigenes
  Navigationsmenü hat und Besucher sonst ohne Zurück-Option verbleiben würden

### 1.3  Link in der Links-Seite – Next.js (Gruppe „Spiel & Spaß")

**Dateien:** `lib/data.ts`, `app/links/page.tsx`

In `lib/data.ts` wurde eine neue Gruppe „Spiel & Spaß" mit dem App-Link angelegt.
Der `LinkGroup`-Typ erhielt ein optionales `newTab?: boolean`-Feld, damit einzelne
interne Links trotzdem in einem neuen Tab öffnen können. `links/page.tsx` berücksichtigt
dieses Flag: `openNewTab = item.newTab || !isInternal`.

### 1.4  Fallback-Website – App verlinkt

**Dateien:** `Fallback/links.html`, `Fallback/index.html`

In der Fallback-Website wurde die App analog zur Next.js-Version an zwei Stellen verlinkt:
- `Fallback/links.html`: neue Gruppe „Spiel & Spaß" mit Link auf `spiel-spass/billardapp/index.html` (öffnet in neuem Tab)
- `Fallback/index.html`: Der Text „schaust du noch zu" in der MembershipCTA-Section verlinkt ebenfalls auf die App (neuer Tab)

### 1.5  Mobile-Optimierung der App (Touch-Support, CSS, Resize)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html` (Commit 7a21c86)

Die App war auf Smartphones nicht bedienbar. Drei Problembereiche wurden behoben:

**Touch-Events:**
- Canvas-Maus-Handler in benannte Funktionen ausgelagert (`handleCanvasDown`, `handleCanvasMove`, `handleCanvasUp`)
- `touchstart` / `touchmove` / `touchend` auf `#gameCanvas` ergänzt (`{ passive: false }`)
- SpinCanvas erhielt analog `touchstart` und `touchmove` (vorher nur `click`)
- PowerBar nutzte bereits die Pointer-Events-API – kein Eingriff nötig

**CSS:**
- Neue Media Query `@media (max-width: 600px)`: `.brand-chip` ausgeblendet, `.center-info { min-width: 0 }` (verhindert Scoreboard-Überlauf im Querformat), `#btnShoot` kleiner, `#spinCanvas` von 110 × 110 px auf 80 × 80 px reduziert, `.ctrl-hint` ausgeblendet

**Resize-Handler:**
- `window.addEventListener("resize", () => applyTableRotation())` ergänzt – Gerät drehen friert das Layout nicht mehr ein

Nach der Optimierung wurde die App per `/pbced-billardapp next` in die Next.js-Website übertragen (Build: 51 Seiten).

### 1.6  Skill `/pbced-billardapp` erstellt

**Datei:** `.claude/skills/pbced-billardapp/SKILL.md` (neu)

Wiederverwendbarer Claude-Code-Skill für die Übertragung der App aus `pbc-pool-app` in
die pbc-erding2-Website. Die Übertragung nach Next.js und Fallback läuft bewusst getrennt:

| Aufruf | Aktion |
|---|---|
| `/pbced-billardapp next` | Kopie nach `public/`, Build, robocopy, git commit+push |
| `/pbced-billardapp fallback` | Kopie nach `Fallback/`, git commit+push, FTP-Hinweis |

Kein „beide"-Modus – jede Integration ist eine eigenständige, gezielt ausgelöste Aktion.

### 1.7  Auto-Orientierung: Portrait auf Handy, Querformat auf Desktop

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html` (Commit 4d7cb5b)

Die App erkennt die Geräteausrichtung automatisch und wählt das passende Layout:
- **Handy im Hochformat** (< 768 px breit, Höhe > Breite): Tisch dreht sich 90°, füllt die Bildschirmhöhe; Controls-Bar kompakt unter dem Canvas
- **Desktop / Tablet**: unverändertes Querformat-Layout

**Neue JS-Funktion `isPortraitMode()`:**
Liefert `true`, wenn das Gerät im Hochformat ist oder der drill-15-Modus manuell gedreht wurde.
Ersetzt die bisherige Bedingung `game.drill15Rotated` in `render()`, `mousePos()` und dem Canvas-Sizing.

**`applyLayout()` ersetzt `applyTableRotation()`:**
Berechnet die Canvas-CSS-Größe dynamisch aus der tatsächlichen Scoreboard- und Controls-Höhe
(`offsetHeight`). Setzt die CSS-Klasse `body.portrait-mode` für das kompakte Layout.
`orientationchange`-Event ergänzt (100 ms Verzögerung, damit der Browser die Viewport-Maße aktualisiert hat).

**CSS `body.portrait-mode`:**
- Scoreboard: 3-spaltig (ohne Brand-Chip)
- `#controlPanel`: einzeilige Leiste — Power-Bar (flex: 1) | SpinCanvas (60 × 60 px) | Stoss-Button
- `.aim-section` zunächst ausgeblendet (→ in 1.8 wiederhergestellt)
- Bottom-Controls: kleiner und zentriert

### 1.8  Portrait-Mode: Feinabstimmungs-Buttons wiederhergestellt

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Portrait-Modus war die `.aim-section` (◄/► Feinzielen-Buttons) vollständig ausgeblendet.
Auf Touch-Geräten ist die Finger-Eingabe zu ungenau für exaktes Zielen; die Buttons sind
daher auch auf dem Handy nötig.

Die CSS-Regel wurde angepasst: Die Aim-Section erscheint nun als zweite Zeile im Control-Panel
— unterhalb der Hauptleiste (Power / Spin / Stoss). Titel und Tastatur-Hinweise bleiben
ausgeblendet (nur Desktop-relevant).

| | Vorher | Nachher |
|---|---|---|
| `.aim-section` | `display: none` | sichtbar als zweite Zeile |
| `#controlPanel` | `flex-wrap: nowrap` | `flex-wrap: wrap` |

### 1.9  Hilfslinien beim Zielen verbessert

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Zielhilfs-Linien in `drawAimingHelp()` waren auf dem dunklen Tisch schwer erkennbar.
Opazität, Linienstärke und Glow-Effekt wurden verbessert:

| Element | Vorher | Nachher |
|---|---|---|
| Ziellinie (Weiß) | Opazität 0.55, Breite 1.5 | Opazität 0.85, Breite 2 |
| Ghost-Ball-Kreis | Opazität 0.4, Breite 1, kein Fill | Opazität 0.75, Breite 2, leichte Füllung |
| Ablenkungslinie (Gold) | Opazität 0.6, Breite 1, Länge 70 | Opazität 0.95, Breite 2, Länge 120, Glow |

Ergänzend wurde das Timing der Anzeige überarbeitet: Die Hilfslinien erscheinen jetzt
sofort, sobald die weiße Kugel losgelassen wird – unabhängig davon, ob bereits aktiv
gezielt wurde. Ausgeblendet werden sie nur noch während des aktiven Ziehens der Kugel
(`cueDragging`). Die eingeblendeten Linien dienen gleichzeitig als visuelles Signal
„Zielfunktion aktiv".

### 1.10  Pinch-to-Zoom auf dem Canvas

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Für präzisere Ghost-Ball-Positionierung wurde Pinch-to-Zoom implementiert. Zwei Finger
vergrößern oder verkleinern den Canvas-Ausschnitt, ohne die Spielkoordinaten zu beeinflussen.

- Zoom-Bereich: 1× bis 3×
- Zoom zentriert auf den Pinch-Mittelpunkt (Canvas-Ankerpunkt bleibt fixiert)
- Zweifinger-Drag: gleichzeitiges Verschieben des Ausschnitts
- Doppeltap: Zoom zurücksetzen
- Nach dem Schuss und bei Orientierungswechsel: Zoom automatisch zurückgesetzt
- Koordinaten-Mapping (`mousePos`) funktioniert automatisch korrekt via `getBoundingClientRect()`

Technisch: CSS `transform: translate() scale()` auf dem Canvas mit `transform-origin: 0 0`.
Pinch-State in globalen Variablen; `resetCanvasZoom()` wird von `applyLayout()` und
`startShot()` aufgerufen.

### 1.11  Ball-in-Hand: einheitliches Platzieren und Zielen

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Ball-in-Hand nach Foul und der Anstoß (Kopffeld) wurden als gleichwertige Situationen
erkannt und einheitlich implementiert. Der Spieler kann die weiße Kugel beliebig oft
neu platzieren und danach direkt zielen; ein expliziter „Wechsel in den Zielmode" ist
nicht mehr nötig.

**Neues Zustandsmodell:**

| Zustand | `placingCue` | `cueDragging` | Was passiert |
|---|---|---|---|
| Kugel wird gezogen | `true` | `true` | Hilfslinien aus, Ball bewegt sich mit |
| Kugel liegt, Zielmode | `false` | `false` | Hilfslinien ein, Klick/Drag zielt |
| Klick auf Weiße im Zielmode | → `true` | → `true` | Re-Platzierung gestartet |
| STOSS ausgelöst | `false` | `false` | Beide Flags bereinigt |

**Schlüsseländerungen:**

- `handleCanvasUp`: Drag-Ende bei `ballInHand` setzt `placingCue = false` → automatischer Wechsel in Zielmode
- `handleCanvasDown`: Klick auf die Weiße bei `ballInHand && !placingCue` → Re-Platzierung (Radius 8r)
- `startShot()`: räumt `ballInHand` und `placingCue` immer auf, nicht nur bedingt
- `newGame()`: Break-Shot setzt `ballInHand = true` — der Anstoß ist semantisch ebenfalls Ball-in-Hand, nur auf das Kopffeld beschränkt (`kitchenOnly`)
- Touch-Greifradius 18r (groß) beim initialen Drag; 8r beim Re-Griff aus Zielmode

### 1.12  WPA-konforme Tischgeometrie

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Kugelgröße, Taschenöffnungen, Tischmarkierungen und Fußpunkt-Position wurden auf die
WPA-Turniernorm (9-Fuß-Tisch, 100" × 50" Spielfläche, Maßstab 8,4 px/inch) abgestimmt.

| Eigenschaft | WPA-Vorgabe | Umsetzung |
|---|---|---|
| Kugelradius | 57,15 mm / 2 = 1,125" | `BALL_R = 9.5 px` |
| Eckloch-Öffnung | ≥ 4,5" | `CORNER_CUT = 27 px` (= 4,5" / √2 × 8,4) |
| Seitenloch-Öffnung | ≥ 5,0" | `POCKET_R_SIDE = 25 px` (Sichtradius) |

Markierungspunkte auf Tischmittelachse (je ¼ Tischlänge vom Bandenspiegel):
- **Kopfpunkt** (`PLAY_W × 0,25`): Ausgangspunkt beim Anstoß
- **Mittelpunkt** (`PLAY_W × 0,50`): Mittelpunkt der Spielfläche (neu eingezeichnet)
- **Fußpunkt** (`PLAY_W × 0,75`): Aufstellpunkt für Aufbau (8-Ball, 15-Ball) und Respotting (9-Ball)

Eck- und Seitentaschen erhalten unterschiedliche visuelle Radien
(`POCKET_R_CORNER = 18 px` / `POCKET_R_SIDE = 25 px`), entsprechend den
unterschiedlichen WPA-Öffnungsweiten.

### 1.13  Seitentaschen: D-Form-Darstellung und Physik

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Seitentaschen wurden visuell und physikalisch korrekt als halbkreisförmige Öffnungen
(„D-Form") an der Bandeninnenseite umgesetzt.

**Neue Konstante:**
`HALF_SIDE_PW = 21 px` entspricht der halben WPA-Öffnungsbreite (5,0" / 2 × 8,4 px/inch).

**Darstellung:** Für jede Seitentasche wird statt eines vollen Kreises ein Halbkreis
(`arc(..., π, 0)` oben / `arc(..., 0, π)` unten) direkt an der Bandeninnenkante gezeichnet.
Drei Schichten (gold-transparent, fast-schwarz, schwarz) simulieren Tiefe.

**Cushion-Strip mit Lücke:** Die obere und untere Bande wird als zwei Hälften links und rechts
der Seitentasche gezeichnet (statt eines durchgehenden Rechtecks), damit die Öffnung sauber
dargestellt wird.

**Physik:** Die Bedingung `!nearPocket` für das Unterdrücken von Bandenreflexionen wurde
für die obere und untere Wand durch `!inSidePocketMouth` ersetzt. Die Zone
`Math.abs(b.x - midX) < HALF_SIDE_PW` lässt Bälle passieren, ohne sie zurückzuwerfen.

### 1.14  Sidespin-Richtungskorrektur an Banden

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

In `applySpinOnCushion()` war das Vorzeichen für die seitlichen Wände (links/rechts) vertauscht:
Rechtseffet an der rechten Bande lenkte die Kugel fälschlicherweise nach oben statt nach unten.

| | Vorher | Nachher |
|---|---|---|
| Vorzeichen (links/rechts) | `side === "right" ? -1 : 1` | `side === "right" ? 1 : -1` |

Das Ergebnis ist nun physikalisch korrekt: Rechtseffet an rechter Bande → Kugel läuft nach rechts weg.

### 1.15  Bandenphysik: Geschwindigkeitsabhängiger Ausfallwinkel

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die vier Wandreflexionen wurden durch eine neue Hilfsfunktion `applyCushionRebound(b, side)`
ersetzt. Sie implementiert einen physikalisch plausiblen Rückprall mit getrennten
Koeffizienten für Normal- und Tangentialkomponente:

| Koeffizient | Wert | Effekt |
|---|---|---|
| `e_n` (normal) | `max(0.65, 0.90 − max(0, (|vN| − 15) × 0.012))` | 0.90 bei leicht/mittel → Einfalls=Ausfallwinkel; sinkt auf 0.65 bei hartem Schuss |
| `e_t` (tangential) | 0.90 (konstant) | Einfalls=Ausfallwinkel bei mittlerer Stärke |

⚠ **Richtungsumkehr in Phase 2.12 korrigiert** — die Formel war invertiert (siehe 2.12).

### 1.16  Effet bei leichtem Bandenstoß verstärkt

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die bisherige Effet-Formel (`eng × |vN| × 0.18`) war proportional zur Aufprallgeschwindigkeit —
bei sehr leichten Bandenstößen wirkte das Effet kaum. Realitätsnäher ist das umgekehrte
Verhältnis: je weicher die Bande angespielt wird, desto stärker wirkt der Effet.

Neuer `spinBoost`-Faktor in `applySpinOnCushion()`:

```
spinBoost = |vN| < 15 ? (1 + (15 − |vN|) / 15) : 1.0
```

- Bei sehr leichtem Stoß (|vN| → 0): spinBoost bis 2,0 (doppelte Wirkung)
- Bei mittlerem Stoß (|vN| = 15): spinBoost = 1,0 (keine Verstärkung)
- Bei hartem Stoß (|vN| > 15): spinBoost = 1,0

### 1.17  Neue Spielvariante: Basisübung

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Neue Variante `basis` zum gezielten Üben der Steuerelemente und des Kugelgefühls.

- Nur die weiße Spielkugel; keine farbigen Bälle
- Nach jedem Stoß: Ball in Hand (Kugel neu platzieren)
- Stoßzähler `basisShots` läuft mit (wird im Ergebnis angezeigt)
- Der Modus-Auswahl-Bereich (8-Ball, 9-Ball usw.) wird im Menü ausgeblendet

Einsatzzweck: Übung von Stoßstärke, Lauflänge, Laufrichtung und Bandenwinkel
ohne Spielablenkung durch Spielregeln.

### 1.18  9-Ball: Aufstellungsvariante „Vorgelagert"

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im 9-Ball gibt es neben dem klassischen WPA-Diamant eine alternative Aufstellung:
Die 1 liegt eine Kugelbreite vor dem Fußpunkt, sodass der Fußpunkt zwischen der
ersten und zweiten Reihe des Diamonds fällt.

Im Spielmenü erscheint ein neuer Abschnitt „9-Ball Aufstellung" (nur bei Variante 9-Ball):

| Option | Beschreibung |
|---|---|
| Diamant (WPA) | Standard-Aufstellung: 1 auf dem Fußpunkt |
| Vorgelagert | 1 liegt eine Kugelbreite vor dem Fußpunkt |

Technisch: `setup9BallVorgelagert()` verwendet dieselbe Diamantformation wie
`setup9Ball()`, verschiebt den Apex-Punkt (`apexX`) jedoch um eine Reihenbreite
(`dx`) Richtung Kopfende.

### 1.19  8-Ball: Kugel-Ansage bei offenem Tisch

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Bei offenem Tisch muss der Spieler vor dem Schuss eine konkrete Kugelnummer ansagen
(statt pauschal „Voll" oder „Halb"). Die zuerst versenkte Kugel legt die Gruppen-
zuordnung für beide Spieler fest. Kombinationsstöße sind erlaubt: der Erstkontakt
darf auf jede Kugel außer der Schwarzen fallen, solange die angesagte Kugel versenkt
wird.

**Ablauf:**

1. Spieler zielt auf eine Kugel → Raycast erkennt die wahrscheinliche Zielkugel
2. Modal erscheint: „Volle 3 ansagen?" mit [✓ Bestätigen] / [Andere Kugel]
   – Das Modal erscheint erst nach aktivem Zielvorgang (`aimActive`-Flag),
     nicht sofort nach dem Zugwechsel
3. Nach Bestätigung wird der Schuss automatisch ausgeführt
4. Versenkte angesagte Kugel → Gruppen werden vergeben, Spieler setzt fort
5. Nicht versenkt → Tisch bleibt offen, Gegner am Zug

**KI:** Wählt selbständig eine geeignete Zielkugel und hält einen winkelbasierten
Sicherheitsabstand zur Schwarzen, um versehentliche 8-Ball-Fouls zu vermeiden.

| Szenario | Regel |
|---|---|
| Kombinationsstoß (z. B. 2 → 9) | Erlaubt, wenn 9 angesagt und versenkt |
| Schwarze als Erstkontakt | Foul (auch auf offenem Tisch) |
| Angesagte Kugel nicht versenkt | Kein Foul, aber Tisch bleibt offen |

### 1.20  Ecktaschen-Physik: Kugel-Katapult-Bug behoben

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Bälle, die sich im Bereich der Ecktaschen-Banden bewegten, wurden bei moderater
Geschwindigkeit regelrecht herauskatapultiert, statt in die Tasche zu fallen oder
liegen zu bleiben.

**Ursache:** Linke und rechte Bande unterdrücken Reflexionen bei Ecktaschennähe bereits
korrekt (`!nearPocket`). Die obere und untere Bande prüften hingegen nur
`!inSidePocketMouth` (für Seitentaschen) und ignorierten Ecktaschen vollständig.

**Fix:** Neue Variable `nearCornerPocket` (Radius 53 px, nur Ecktaschen). Die obere
und untere Bandenbedingung wurde um `&& !nearCornerPocket` ergänzt.

| Bande | Vorher | Nachher |
|---|---|---|
| Links / Rechts | `!nearPocket` ✓ | unverändert |
| Oben / Unten | `!inSidePocketMouth` (Ecktaschen nicht abgedeckt) | `!inSidePocketMouth && !nearCornerPocket` ✓ |

Bälle im Ecktaschenbereich werden von den Ober-/Unterbanden nicht mehr zurückgeworfen
und können wie erwartet versinken oder sanft herauslaufen.

### 1.21  KI Profi-Spielstärke: 80-90% Pocketrate, Positionierungsschwäche

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die KI in der Profi-Schwierigkeitsstufe verfehlte zu viele Bälle. Ursache war eine
fehlerhafte Power-Kalkulation, die den Schnittwinkel-Energieverlust ignorierte:
Bei einem dünnen Schnitt (z.B. 70°) überträgt der Stoß nur einen Bruchteil der
Cue-Energie auf die Zielkugel — sie blieb regelmäßig kurz vor der Tasche stehen.

Vier Änderungen in `aiPlanShot()`:

| Änderung | Vorher | Nachher |
|---|---|---|
| Power-Formel | `dTP / 1500` (Schnittwinkel ignoriert) | `dTP / dotN / 1600` (Energie-adjustiert) |
| Mindest-Power | 35% | 40% |
| Shot-Scoring | `dotN × 100` (linear) | `dotN² × 130` (quadratisch) |
| Profi: Min. dotN | 0.2 (≈78° Schnitt erlaubt) | 0.28 (≈74° Schnitt max.) |
| `hard` err | 0.002 rad (±0.11°) | 0.006 rad (±0.34°) |
| `hard` powerVar | 0.015 (±0.75%) | 0.08 (±4%) |

Die quadratische dotN-Gewichtung im Scoring bevorzugt gerade Stöße deutlich stärker;
die adjustierte Power-Formel stellt sicher, dass die Zielkugel auch bei dünnen Schnitten
die Tasche erreicht. Der leicht erhöhte Winkel-Fehler (err) und die größere
Power-Streuung (powerVar) sorgen für realistische Positionierungsschwächen ohne
die Trefferquote nennenswert zu beeinträchtigen.

---

## Phase 2 – Online-Multiplayer-Modus der Billard-App (2. Mai 2026)

Die Billard-App erhielt einen vollständigen Online-Multiplayer-Modus (2 Spieler, Echtzeit).
Grundlage ist ein eigener WebSocket-Relay-Server (`pbc-relay`), der auf Render.com betrieben
wird. Die Spiellogik läuft autoritativ auf der Seite des schießenden Spielers; der Gegner
erhält nach jedem Schuss einen vollständigen Spielzustand-Sync.

### 2.1  WebSocket-Relay-Server (pbc-relay)

**Projekt:** `C:\Daten\Projects\pbc-relay\relay.js` (eigenständiges Node.js-Projekt, GitHub: `chrisgitti/pbc-relay`)

Neues Projekt `pbc-relay` – ein schlanker WebSocket-Relay-Server (~55 Zeilen, Node.js + `ws`-Paket).
Deployed auf Render.com unter `wss://pbc-relay.onrender.com`.

Zwei Clients bilden einen Raum mit 6-stelligem Zufallscode. Alle Nachrichten zwischen
Host und Gast werden blind weitergeleitet.

| Nachrichtentyp | Richtung | Bedeutung |
|---|---|---|
| `create` / `join` | Client → Relay | Raum erstellen / beitreten |
| `created` / `start` | Relay → Client | Bestätigung / Spielstart mit Rollenzuweisung |
| `shot` | Client → Relay | Schuss-Parameter (Winkel, Kraft, Spin, Weiße-Position) |
| `sync` | Client → Relay | Vollständiger Spielzustand nach jedem Schuss |
| `ping` / `pong` | Client ↔ Relay | Keepalive |
| `rematch` / `disconnect` | Client ↔ Relay | Neustart-Wunsch / Verbindungsabbruch |

### 2.2  Lobby-Overlay und Raum-Code-System

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Neuer Menüpunkt „🌐 Online-Spiel" öffnet ein Lobby-Overlay mit:
- Namenseingabe für beide Spieler
- „Raum erstellen" → Relay generiert 6-stelligen Code (z. B. `A3KF2M`), der dem Gegner mitgeteilt wird
- „Beitreten" → Code-Eingabe → Relay verbindet beide Clients und startet das Spiel
- Wartescreen bis der Gegner beitritt
- Fehlertext bei ungültigem oder bereits vollem Raum
- Disconnect-Overlay bei Verbindungsabbruch

### 2.3  Autoritative Physik-Synchronisation

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Der schießende Spieler ist die autoritative Quelle: Er berechnet die Physik vollständig lokal
und sendet nach `onShotComplete()` einen vollständigen Zustand-Sync an den Gegner (`sendOnlineSync()`).

Der Empfänger animiert den Schuss visuell (`applyOnlineShot()`), überspringt aber die eigene
Spiellogik (`handle8BallShot()`) und wartet auf den Sync. `applyOnlineSync()` überschreibt
den gesamten Spielzustand:

| Im Sync enthaltene Felder |
|---|
| Positionen und `inPlay`-Status aller Kugeln |
| `currentPlayer`, Gruppen beider Spieler, `potted`-Arrays |
| `open8ball`, `ballInHand`, `placingCue`, `kitchenOnly`, `isBreakShot` |
| `foulMessage`, `called8Pocket`, `pushOutAvailable`, `state`, `endMessage` |

Eingabe-Blocking: Auf der Empfängerseite werden Canvas-Events, Spacebar und STOSS!-Button
gesperrt, wenn `game.currentPlayer !== online.myPlayer`.

### 2.4  Sync-Queue für Mehrfach-Stöße

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Bei aufeinanderfolgenden Stößen desselben Spielers (Kugel versenkt → Fortsetzung)
treffen mehrere Sync-Nachrichten ein, bevor die Physik des ersten Schusses auf der
Empfängerseite abgeschlossen ist. Ein einzelner `pendingSync`-Slot würde ältere Syncs
überschreiben und eine Zustandsdesynchronisation auslösen.

Fix: `_pendingSyncs[]`-Array (FIFO-Queue) statt einzelnem `pendingSync`-Slot.
Syncs werden exakt in der Eingangsreihenfolge den zugehörigen Schüssen zugeordnet.

### 2.5  Bugfixes: Kugelanzeige, Volle/Halbe, Spielende

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Drei weitere Probleme wurden behoben:

- **`potted`-Serialisierung:** `player.potted` enthält Kugel-Nummern (Integer), nicht Objekte.
  `sendOnlineSync()` rief fälschlicherweise `.map(b => b.num)` auf → `undefined`-Einträge →
  leere `potted`-Arrays auf der Empfängerseite → falsche „x übrig"-Anzeige.
  Fix: `[...game.players[i].potted]` (direkte Zahlen-Kopie).

- **Backfill beim Anstoß:** Beim Anstoß versenkte Kugeln wurden beim Zuweisen der Gruppen
  nicht retroaktiv dem neuen Gruppenbesitzer gutgeschrieben. Fix: Beim Gruppen-Zuweisen
  werden alle bereits `!inPlay`-Kugeln der jeweiligen Gruppe nachträglich in `potted` eingetragen.

- **Spielende:** `sendOnlineSync()` wurde bei `game.state === "ended"` nicht aufgerufen
  (early return vor dem Sync). Dem Gegner wurde das Spielende nicht mitgeteilt.
  Fix: Sync wird nun auch beim Spielende vor `showEndScreen()` gesendet.

### 2.6  CSP-Header erweitert

**Datei:** `public/.htaccess`

Die Content-Security-Policy im Apache-Header erlaubte unter `connect-src` nur `'self'`.
Dadurch wurde der WebSocket-Aufbau zu `wss://pbc-relay.onrender.com` vom Browser blockiert.
Zusätzlich fehlten Einträge für Google Fonts, die bereits in früheren Phasen als externe
Schriftquelle eingebunden worden waren.

Ergänzt in `connect-src`:
- `wss://pbc-relay.onrender.com` (WebSocket-Relay für Online-Modus)

Ergänzt in `style-src`:
- `https://fonts.googleapis.com`

Ergänzt in `font-src`:
- `https://fonts.gstatic.com`

### 2.7  Relay-Verbindungsaufbau mit automatischem Retry

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Fix: `connectRelay()` versucht die Verbindung bei `onerror` bis zu 8-mal alle 5 Sekunden
erneut (Gesamtdauer ~40 Sekunden). Während des Wartens wird im Lobby-Fehlerbereich
„Server startet… bitte warten (N/8)" angezeigt. Ein neuer Versuch wird nur gestartet,
solange das Lobby-Overlay noch sichtbar ist (Nutzer hat nicht abgebrochen).

### 2.8  Foul-Meldung wird beim nächsten Schuss sofort gelöscht

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Nach einem illegalen Anstoß (Foul) wurde die Fehlermeldung im Canvas nicht gelöscht,
wenn der nächste Spieler seinen Schuss ausführte. Die Meldung blieb über den gesamten
folgenden Zug hinweg sichtbar.

Fix: `game.foulMessage = ""` und `game.foulTimer = 0` werden jetzt am Beginn von
`startShot()` zurückgesetzt, bevor die Schussparameter gesetzt werden.

### 2.9  Menü-Klick am Spielende trennt Online-Verbindung

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Klickte ein Spieler am Ende einer Online-Partie auf „Menü", wurde die WebSocket-Verbindung
nicht getrennt. Der andere Spieler konnte anschließend auf „Revanche" klicken und ein
neues Spiel starten, ohne zu merken, dass kein Gegner mehr vorhanden war.

Fix: Der `endMenu`-Handler setzt `online.connected = false`, entfernt den `onclose`-Handler
(damit kein eigenes Disconnect-Overlay erscheint) und schließt den WebSocket. Das Relay
erkennt den Verbindungsabbau und sendet automatisch eine `disconnect`-Nachricht an den
Gegner, der daraufhin das Disconnect-Overlay angezeigt bekommt.

Zusätzlich: Der `rematch`-Empfänger-Handler prüft jetzt `online.connected`, bevor er
`newGame()` auslöst — verhindert, dass ein Spieler auf dem Menü unbemerkt in ein neues
Spiel gezogen wird.

### 2.10  Raumcode-Zeichensatz bereinigt

**Datei:** `C:\Daten\Projects\pbc-relay\relay.js`

Die bisherige Code-Generierung nutzte `Math.random().toString(36)`, dessen Zeichensatz
`0`, `O`, `1` und `I` enthält — Zeichen, die in vielen Schriftarten nicht eindeutig
voneinander zu unterscheiden sind.

Fix: Expliziter Zeichensatz `ABCDEFGHJKLMNPQRSTUVWXYZ23456789` (32 Zeichen) ohne die
verwechselbaren Zeichen. Bei 6 Stellen ergeben sich über 1 Milliarde mögliche Codes.

### 2.11  Menü/Neustart während des Online-Spiels trennt Verbindung

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Klickte ein Spieler während einer laufenden Online-Partie auf den „Menü"- oder
„Neustart"-Button (bzw. drückte die Taste `M`), erhielt der Gegner kein
Disconnect-Signal und spielte unbemerkt alleine weiter.

Fix: Die Disconnect-Logik wurde in `showMenu()` selbst verlagert. Beim Aufruf
prüft `showMenu()` jetzt `game.mode === "online"` und schließt ggf. den WebSocket
(mit vorherigem Nullen des `onclose`-Handlers). Damit sind alle Aufrufstellen
automatisch abgedeckt: `btnMenu`-Klick, Taste `M` und der End-Screen-„Menü"-Button
(dort wurde der redundante Disconnect-Code entfernt).

Der `btnRestart`-Handler leitet im Online-Modus auf `showMenu()` um statt `newGame()`
aufzurufen, da ein einseitiger Neustart ohne Gegnerabstimmung nicht sinnvoll ist.

### 2.12  Bandenphysik korrigiert – Ausfallwinkel geschwindigkeitsabhängig

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Formel in `applyCushionRebound()` war invertiert (eingeführt in Phase 1.15):
`e_n` sank bei hartem Stoß (→ flacherer Abprall), blieb aber bei leichtem Stoß konstant auf 0.90.
Tatsächlich ist das Verhalten in der Realität genau umgekehrt.

Korrekt implementiertes Verhalten:

| Stoßhärte | Ausfallwinkel | Erklärung |
|---|---|---|
| Leicht | vergrößert sich (flacher) | Gummi dämpft die Normalkomponente stärker, Kugel läuft flacher weg |
| Mittel (Referenz) | Einfalls = Ausfallswinkel | `e_n = e_t = 0.90` |
| Hart | verkleinert sich (spitzer) | Gummi federt elastischer zurück, Normalkomponente bleibt besser erhalten |

Neue Formel: `e_n = clamp(0.90 + (|vN| − 15) × 0.015, 0.62, 0.97)`

- Bei `|vN| = 0`: `e_n ≈ 0.68` → deutlich flacherer Abprall
- Bei `|vN| = 15` (mittlere Stärke): `e_n = 0.90` = `e_t` → gleiche Winkel
- Bei `|vN| ≥ 30`: `e_n = 0.97` → spitzerer Abprall

**Wechselwirkung mit Effet:** Der Effet (Sidespin) addiert eine Tangentialkomponente
nach dem Rückprall. Je nach Richtung verstärkt oder schwächt er den geometrischen
Ausfallwinkel. Bei leichten Stößen wirkt der Effet stärker (`spinBoost` bis 2×),
bei harten Stößen ist er proportional zur Aufprallgeschwindigkeit. Die Formel in
`applySpinOnCushion()` bleibt unverändert — die Interaktion ergibt sich korrekt
aus der Überlagerung beider Effekte.

### 2.13  Basisübung – Wiederholen-Toggle

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Spielmodus „Basisübung" wurde ein neuer Toggle-Button „↺ Wiederholen" in der
Steuerzeilenleiste ergänzt. Bei Aktivierung (goldene Umrandung) wird die Weiße nach
jedem Stoß automatisch an ihre Ausgangsposition vor dem Stoß zurückgesetzt, statt
wie üblich Ball-in-Hand zu gewähren. Der Modus erleichtert Training und Feinjustierung,
da derselbe Aufbau beliebig oft wiederholt werden kann ohne die Weiße neu zu platzieren.

Technisch speichert `startShot()` die aktuelle Cueball-Position in `game.basisCueSaveX/Y`,
bevor der Stoß ausgeführt wird. `handleBasisShot()` stellt bei aktivem `basisRepeatMode`
diese Position wieder her und setzt `game.cuePotted = false`, sodass kein Ball-in-Hand
ausgelöst wird. Beim Spielstart (`newGame()`) wird der Toggle automatisch deaktiviert
und die Schaltfläche auf den Standardzustand zurückgesetzt.

---

## Phase 3 – Mini-Modus und Bugfix Tisch drehen (2. Mai 2026)

Mini-Modus für Messen und Events: 8-Ball und 9-Ball sind jetzt mit reduzierter Kugelzahl
spielbar. Zusätzlich wurde ein Bugfix für den „Tisch drehen"-Button in der Basisübung
eingespielt.

### 3.1  Mini-Modus – Reduzierte Kugelanzahl für Messen

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Hauptmenü wurde ein neuer Abschnitt „Kugelanzahl" ergänzt (erscheint nur bei 8-Ball
und 9-Ball). Damit lässt sich die Anzahl der Kugeln beim Anstoß frei wählen:

| Variante | Auswahl | Besonderheit |
|---|---|---|
| 8-Ball | 3, 5, 7, 9, 11, 13 oder Alle (15) | Ball 8 immer dabei; je gleich viele Solids und Stripes |
| 9-Ball | 2, 3, 4, 5, 6, 7, 8 oder Alle (9) | Ball 9 als Gewinnkugel immer dabei; Ball 1 am Apex |

Die Aufstellung passt sich der gewählten Kugelzahl an: 9-Ball nutzt diamantartige
Formen (Ball 9 möglichst zentral), 8-Ball nutzt Dreiecksformen (Ball 8 in Reihe 3 Mitte).
Die Break-Mindestanforderung (normalerweise 4 Kugeln an der Bande) wird proportional
zur Kugelzahl gesenkt: `max(1, floor(n/4))`.

Die Spiellogik (Gruppenermittlung, Gewinnbedingung, Niedrigste-Kugel-Regel bei 9-Ball)
funktioniert ohne Anpassung, da `game.balls` nur die gewählten Kugeln enthält.

Im Online-Modus überträgt der Host nach dem Spielstart die gesamte Spielkonfiguration
(Variante, Aufstellungsart, Kugelanzahl) per neuem `settings`-Nachrichtentyp an den Gast.
Der Gast startet `newGame()` erst nach Empfang dieser Nachricht. Damit wurde auch die
bisher vorhandene Inkonsistenz behoben, bei der Variante und Rack-Typ nicht synchronisiert
wurden.

### 3.2  Bugfix: „Tisch drehen" in Basisübung

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Der Button „⟳ Tisch drehen" war im Spielmodus Basisübung sichtbar, aber funktionslos.
Ursache war ein zu enger Guard im Click-Handler (`if (game.variant !== "drill15") return`),
der die Variante `basis` blockierte. Der Guard wurde auf beide Varianten erweitert:
`drill15` und `basis`.

### 3.3  Mini-Modus: Aufstellungen für 3 und 5 Kugeln korrigiert

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Rack-Konfigurationen für 3 und 5 Kugeln wurden nach konkreten Vorgaben angepasst:

| Variante | Anzahl | Vorher | Nachher |
|---|---|---|---|
| 9-Ball | 3 | Dreieck (1 · 2+9) | Hintereinander: 1 – 9 – 2 |
| 9-Ball | 5 | Pfeil (1 · 2+3 · 4+9) | 1 vorne · 2+3 · 9 mittig · 4 dahinter |
| 8-Ball | 3 | Dreieck (1 · 8+9) | Hintereinander: 1 – 8 – 9 |
| 8-Ball | 5 | Zwei Reihen | 1 vorne · 2+9 · 8 mittig · 10 dahinter |

Bei der hintereinander-Aufstellung (3 Kugeln) stehen alle Bälle in einer Linie
entlang der Rack-Achse. Bei 5 Kugeln bilden je zwei Bälle die zweite Reihe,
der Schlüsselball (9 bzw. 8) steht mittig in Reihe 3, dahinter ein einzelner Ball.

### 3.4  Steuerungshinweis: LMB/RMB → LMT/RMT

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

In der Hinweiszeile unterhalb des Spielfelds wurden die englischen Abkürzungen
LMB (Left Mouse Button) und RMB (Right Mouse Button) durch die deutschen Entsprechungen
**LMT** (Linke Maustaste) und **RMT** (Rechte Maustaste) ersetzt.

### 3.5  Basisübung: Ball-in-Hand sofort beim Abwählen von „Wiederholen"

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

War „Wiederholen" aktiv und wurde abgewählt, konnte die Weiße erst nach dem nächsten
Stoß wieder frei platziert werden. Ursache: Im Repeat-Modus setzt `handleBasisShot()`
`cuePotted` nicht auf `true`, weshalb `respawnCueBall()` nie aufgerufen wurde und
`placingCue` auf `false` blieb.

Fix: Im Click-Handler von `btnBasisRepeat` wird beim Wechsel ON→OFF sofort
`respawnCueBall()` aufgerufen, sofern das Spiel im Zustand „aiming" ist und kein
Stoß läuft – identisch zum Verhalten nach einem normalen Stoß.

---

## Phase 4 – Mobile-Fixes Basisübung Billard-App (3. Mai 2026)

Mehrere mobile-spezifische Bugs im Spielmodus „Basisübung" wurden behoben. Alle
Fixes betreffen ausschließlich `C:\Daten\Projects\pbc-pool-app\index.html`.
Auf dem PC war kein Verhalten beeinträchtigt.

### 4.1  Basisübung: Weiße bleibt nach Stoß liegen

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Weiße wurde nach jedem Stoß immer auf den Fußpunkt gesetzt, auch wenn sie
nicht eingelocht worden war. Ursache: `handleBasisShot()` erzwang `game.cuePotted = true`,
was stets `respawnCueBall()` (→ Fußpunkt) auslöste.

Fix: `handleBasisShot()` prüft nun `game.cuePotted`. Liegt die Weiße noch auf dem
Tisch, wird `respawnCueBall()` zur korrekten State-Initialisierung aufgerufen und
anschließend die ursprüngliche Ruheposition wiederhergestellt. Nur bei echter
Versenkung bleibt `cuePotted = true` und der Ball erscheint am Fußpunkt.

### 4.2  Ball-in-Hand auf Mobile: aimLocked blockiert Drag nicht mehr

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Ab dem zweiten Stoß war die Weiße auf dem Handy nicht mehr verschiebbar.
Ursache: Ein synthetisches `mouseenter`-Event beim Antippen des SCHUSS-Buttons
setzte `game.aimLocked = true`. Da `mouseleave` auf Mobile nie feuert, blieb
`aimLocked` dauerhaft `true` und `handleCanvasMove()` kehrte sofort zurück.

Zwei Korrekturen:
- In `handleCanvasMove()` wurde der `aimLocked`-Check hinter den `placingCue`-Block
  verschoben, damit der Ball-in-Hand-Modus nie durch `aimLocked` gesperrt wird.
- Im Canvas-`touchstart`-Handler wird `game.aimLocked = false` gesetzt, bevor
  `handleCanvasDown()` aufgerufen wird.

### 4.3  touch-action: none für #gameCanvas

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Dem `#gameCanvas`-Selektor fehlte `touch-action: none`. Der Browser konnte
Touch-Events für Scroll und Zoom abfangen, bevor sie die App erreichten. Ergänzt.

### 4.4  WIEDERHOLEN-Button: robuste Touch-Behandlung

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Der WIEDERHOLEN-Button ließ sich auf dem Handy einschalten, aber nicht mehr
ausschalten. Drei Korrekturen:

- **Event-Handling:** Umstellung auf `touchstart` für Touch-Geräte und `pointerdown`
  (nur Nicht-Touch) für Maus/Stift; `click` bleibt als Fallback mit 500 ms-
  Deduplizierung erhalten, um Doppel-Auslösungen zu verhindern.
- **Visueller Aktivzustand:** Neuer CSS-Selektor `#btnBasisRepeat.repeat-active`
  (schwarzer Text auf Gold-Hintergrund, `!important`). Der Button zeigt im
  AN-Zustand den Text „↺ Wiederholen: AN" – sofort erkennbar, ob der State
  wirklich umgeschaltet hat.
- **Hover nur auf Zeigegeräten:** Die `#bottomControls button:hover`-Regel wurde
  in ein `@media (hover: hover) and (pointer: fine)` eingeschlossen, damit der
  Gold-Hover auf Touchscreens nicht mit dem Aktivzustand verwechselt werden kann.

Zusätzlich wurden `no-store`-Cache-Control-Header in `server.js` ergänzt, damit
Änderungen beim mobilen Testen sofort wirksam sind.

---

## Phase 5 – Zuschauer-Modus, Spielstand-Zähler und Live-Preview (3. Mai 2026)

Mehrere neue Features und Bugfixes im Online-Multiplayer sowie in allen Spielmodi.
Alle Änderungen betreffen `C:\Daten\Projects\pbc-pool-app\index.html` und
`C:\Daten\Projects\pbc-relay\relay.js`.

### 5.1  Zuschauer-Modus (spectate)

**Dateien:** `pbc-pool-app\index.html`, `pbc-relay\relay.js`

Ein dritter Lobby-Button „👁 Zuschauen" wurde ergänzt. Zuschauer verbinden sich
mit demselben Raumcode wie Spieler, erhalten aber keinerlei Spieleingabe-Rechte:

- Canvas erhält `pointer-events: none` → alle Touch- und Maus-Ereignisse blockiert
- Aim-Schaltflächen und STOSS-Button werden ausgeblendet, Kraft- und Effetanzeige
  bleibt sichtbar (nur lesend)
- Ein „👁 Zuschauer-Modus"-Badge mit Verlassen-Button erscheint am oberen Rand
- Bis zu 50 Zuschauer gleichzeitig pro Raum (`MAX_SPECTATORS = 50`)
- Trennt ein Zuschauer die Verbindung, läuft das Spiel unbeeinträchtigt weiter

Im Relay-Server wurde die Raumstruktur um ein `spectators[]`-Array erweitert.
Eine neue `broadcastToRoom()`-Funktion leitet Spielnachrichten an Gegner **und alle
Zuschauer** weiter. Ein eigener `"spectate"`-Handler prüft, ob ein aktives Spiel
im Raum läuft, bevor der Zuschauer zugelassen wird.

### 5.2  Ball-in-Hand Doppelklick-Toggle

**Datei:** `pbc-pool-app\index.html`

Beim Ball-in-Hand-Modus wird durch Doppelklick (Maus) bzw. Doppel-Tap (Touch)
zwischen Verschieben und Zielen umgeschaltet. Die Erkennung erfolgt über einen
`_lastMouseDownTime`-Zeitstempel direkt in `handleCanvasDown()` (Schwellenwert
300 ms, Radius 5× Kugelradius). Dadurch entfällt die frühere, fehleranfällige
Lösung mit einem großen Eingangsradius, der unbeabsichtigt den Ghostball
repositionierte.

### 5.3  Live-Preview für Zuschauer (Ziellinie, Kraft, Effet, Ballposition)

**Datei:** `pbc-pool-app\index.html`

Der am Zug befindliche Spieler sendet während des Zielens in Echtzeit ein
`"preview"`-Paket an den Server (max. ~12 Hz, gedrosselt über `_lastPreviewSent`).
Das Paket enthält Zielwinkel, Stoßstärke, Effet-X/Y sowie die aktuelle Position
des Spielballs. Zuschauer empfangen diese Daten und sehen so:

- Die live gezeichnete Ziellinie inklusive Ghostball
- Den aktuellen Wert der Stoßstärke-Anzeige
- Die Effetposition auf der Effetscheibe
- Die korrekte Position der weißen Kugel beim Ball-in-Hand-Verschieben

Der Gegenspieler (Spieler 2) ignoriert `"preview"`-Pakete vollständig.

### 5.4  Spielstand-Zähler über Rematches

**Datei:** `pbc-pool-app\index.html`

Ein persistenter Spielstand wird über mehrere Rematches hinweg gezählt:

- Anzeige `0 : 0` dauerhaft im Scoreboard-Header, rechts neben Spieler 2, durch
  eine goldene Trennlinie abgesetzt
- Aktualisiert sich sofort nach jedem Spielende
- Sichtbar in allen Mehrspielermodi (Hot-Seat, vs. KI, Online), ausgeblendet im
  Solo- und Basisübungs-Modus
- Im Endscreen zusätzlich als `< 1 : 0 >` unterhalb der Ergebnismeldung
- Spielstand wird beim Gang ins Hauptmenü zurückgesetzt, bei Revanche fortgeführt
- Im Online-Modus wird `game.winner` im Sync-Paket mitgesendet, damit Gegner und
  Zuschauer denselben Stand sehen

### 5.5  Fix: Ghostball-Klick sofort an Zuschauer übertragen

**Datei:** `pbc-pool-app\index.html`

Ein Einzelklick (Maus) bzw. Tap (Touch) auf den Canvas aktualisierte den
Zielwinkel (`updateAimFromPoint()`), rief aber `sendPreview()` nicht auf.
Zuschauer sahen die neue Ziellinie erst beim nächsten Drag oder Button-Klick.
Behoben: `sendPreview()` wird jetzt in beiden Klick-Pfaden von `handleCanvasDown()`
direkt nach `updateAimFromPoint()` aufgerufen.

---

## Phase 6 – Vollbild-Toggle für Handy-Betrieb (3. Mai 2026)

Ein Vollbild-Toggle-Button blendet auf kleinen Bildschirmen alle UI-Anzeigen aus
und vergrößert den Billardtisch auf den verfügbaren Platz. Alle Spielmodi sind
unterstützt.

### 6.1  Vollbild-Toggle-Button

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Ein neuer Button `⛶` (vier Ecken) wurde als letztes Element in `#bottomControls`
ergänzt. Er ist ausschließlich auf Bildschirmen mit ≤ 820 px Breite sichtbar
(CSS `display: none` + `@media (max-width: 820px) { display: inline-flex }`).
Auf dem Desktop bleibt er vollständig verborgen.

### 6.2  Vollbild-Modus: Layout und Canvas-Größe

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Ein Tipp auf `⛶` aktiviert die CSS-Klasse `body.fullscreen-mode`:

- `#scoreboard` → `display: none`
- `#controlPanel` → `display: none`
- `#playArea` → `grid-template-columns: 1fr` (Kontrollspalte entfällt)
- Alle anderen Buttons in `#bottomControls` → `display: none`
- Im Hochformat (`body.portrait-mode.fullscreen-mode`): `#playArea` erhält `flex: 1`,
  der Canvas füllt den verbleibenden vertikalen Platz

Die Canvas-Skalierung in `applyLayout()` wurde angepasst: Im Vollbild-Modus werden
die Höhen von Scoreboard und ControlPanel mit 0 angesetzt, sodass die berechnete
verfügbare Höhe korrekt dem gesamten Bildschirm (minus Buttonleiste) entspricht.

Erneutes Tippen auf `✕` (Icon wechselt beim Aktivieren) stellt das Normallayout
wieder her. Beim Öffnen des Hauptmenüs wird der Vollbild-Modus automatisch beendet.

### 6.3  Zuschauer-Modus-Kompatibilität

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Zuschauer-Modus ist `#bottomControls` auf `visibility: hidden` gesetzt. Der
`⛶`-Button erhält direkt danach `visibility: visible`, sodass er – trotz
unsichtbarer Elternleiste – weiterhin bedienbar bleibt (`visibility` ist bei
Kindelementen überschreibbar). Beim Verlassen des Zuschauer-Modus wird der
Inline-Style zurückgesetzt.

---

## Phase 7 – Vollbild-Bugfixes Zuschauer-Modus (3. Mai 2026)

Zwei Darstellungsfehler im Zusammenspiel von Vollbild-Toggle und Zuschauer-Modus
wurden behoben.

### 7.1  Spectator-Badge überdeckte den Spieltisch im Vollbild

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Das `#spectatorBadge`-Element (Einblendung „Zuschauer · Raum XXXXXX") wurde im
Vollbild-Modus nicht ausgeblendet und überlagerte den Canvas-Bereich. Behoben durch:

```css
body.fullscreen-mode #spectatorBadge { display: none !important; }
```

### 7.2  ✕-Button im Zuschauer-Modus auf Mobilgeräten unsichtbar

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Zuschauer-Modus setzt `updateUI()` die gesamte `#bottomControls`-Leiste auf
`visibility: hidden`. Das anschließende `style.visibility = "visible"` des
`#btnFullscreen` greift auf Mobilgeräten nicht zuverlässig, wenn das Elternelement
durch einen Inline-Style versteckt ist.

Lösung: Der Inline-Style `visibility: hidden` auf `#bottomControls` wird im Zuschauer-
Modus nur noch gesetzt, wenn `_fullscreen` nicht aktiv ist. Ist Vollbild aktiv, werden
weder `#bottomControls` noch `#btnFullscreen` per Inline-Style überschrieben; die
CSS-Klasse `fullscreen-mode` blendet alle anderen Buttons sauber via `display: none` aus.
Der `✕`-Button bleibt damit in allen Zuständen vollständig sichtbar und bedienbar.

### 7.3  ✕-Button im Vollbild durch Layout-Overflow verborgen

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Hochformat-Vollbild erhält `#playArea` die CSS-Eigenschaft `flex: 1` und füllt
damit die gesamte Höhe des `#app`-Containers (100 vh). `#bottomControls` rutscht
dadurch aus dem sichtbaren Bereich und wird durch `overflow: hidden` auf `#app`
abgeschnitten — der `✕`-Button ist nicht mehr erreichbar.

Lösung: In Vollbild-Modus erhält `#btnFullscreen` `position: fixed` mit einer festen
Position rechts unten (`bottom: 16px; right: 16px; z-index: 9999`). Der Button ist
damit aus dem normalen Dokumentfluss herausgenommen und immer sichtbar, unabhängig
von Layout-Overflow oder Container-Höhen.

---

## Phase 8 – Deflection, Swerve & Queue-Winkel (3. Mai 2026)

Drei reale Billard-Physikeffekte wurden in die App integriert: Deflection (Squirt),
Swerve (Masse-ähnliche Kurvenwirkung) und ein neues UI-Element für den Queue-Neigungswinkel.
Außerdem wurde die Swerve-Vorschau korrekt auf Zuschauer übertragen.

### 8.1  Deflection (Squirt)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Beim Schuss mit Seitenschnitt weicht die Weißkugel leicht in die dem Effet
entgegengesetzte Richtung ab. Kalibriert auf einen Predator K2 mit Revo-Shaft (Low-Deflection).

Formel: `deflAngle = K_DEF · |spinX| · powerPercent^P_DEF`  
Kalibrierung: **K_DEF = 0.044 rad**, **P_DEF = 0.64** (Fit-Fehler < 5 % an vier Messpunkten).

Die Ziellinie in `drawAimingHelp()` wird mit dem korrigierten Winkel gezeichnet –
der Spieler sieht, wohin die Kugel tatsächlich läuft.

### 8.2  Queue-Winkel (Élévation)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Neues UI-Element: zweiter Tab `WINKEL` innerhalb der bestehenden `.spin-section`,
ohne Layout-Änderungen. Ein `elevCanvas` zeigt eine Seitenansicht (Queue + Weißkugel),
der Neigungswinkel (0–45°) ist per Drag-Geste einstellbar (nach oben = mehr Winkel).
Der Winkel wird nach jedem Stoß und bei Spielstart auf 0° zurückgesetzt.

### 8.3  Swerve

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Mit Seitenschnitt und erhöhtem Queue-Winkel entsteht eine C-Bogenbahn: zunächst
Deflection-Richtung, dann Kurve in Effet-Richtung. Die Swerve-Kraft wird pro
Physik-Frame auf die Weißkugel angewendet, solange noch kein Ballkontakt stattfand
(`spinPending.used === false`).

Die goldene Swerve-Vorschaulinie (`predictSwervePath()`, 300 Schritte) wird über
die reguläre Ziellinie gelegt und zeigt die tatsächliche Flugkurve.

Zentrale Konstante: `swerveAcc = |spinX| · elevFactor · 0.012 · speedRatio` mit
`speedRatio = min(initialPower / currentSpeed, 6)` (geschwindigkeitsabhängig).

### 8.4  Swerve-Vorschau im Zuschauer-Modus

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

`sendPreview()` überträgt nun auch `cueElevation`. Der Zuschauer-Handler setzt
`game.cueElevation` aus der empfangenen Nachricht — damit wird die Swerve-Kurve
korrekt auf dem Zuschauer-Gerät gezeichnet.
Die Deflection-Linie wurde bereits zuvor korrekt übertragen (`spinX`/`spinY` waren
schon im Preview-Payload enthalten).

---

## Phase 9 – Match-Modus, Break-Regel und KI-Anstoß (7. Mai 2026)

Der Billard-App wurde ein vollständiges Match-System mit wählbarer Gewinnspiellzahl (1–23)
hinzugefügt, eine Break-Regel-Option (Wechselbreak/Winnerbreak) sowie deutliche
Verbesserungen am KI-Anstoß.

### 9.1  Match-Modus – Gewinnspiele (1–23)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Neuer Menüabschnitt „Gewinnspiele" mit einem Stepper (1–23), eingeblendet bei
8-Ball und 9-Ball in den Modi Hot-Seat, KI und Online.
Label: „Best of 1" (n = 1) bzw. „Best of N – Race to M" (n > 1, N = 2n–1).

Das Spielobjekt erhielt zwei neue Felder: `setsTarget` (Ziel-Gewinnspiellzahl) und
`matchScore` (gewonnene Spiele je Spieler). Der Spielstand wird im Scoreboard als
`X : Y` eingeblendet und nach jedem Spiel aktualisiert.

Verhalten im End-Screen:

| Situation | Titel | Button |
|---|---|---|
| Rundenende (Match noch offen) | „Spiel gewonnen!" + Spielstand | „Nächstes Spiel" |
| Match-Ende (Gewinnspiellimit erreicht) | „Match gewonnen!" + Endstand | „Revanche" |
| Einzelspiel (setsTarget = 1) | „Spielende" | „Revanche" |

NEUSTART während des Spiels und der Gang ins Hauptmenü setzen den Spielstand
auf 0:0 zurück. „Revanche" behält die eingestellte Gewinnspiellzahl und
setzt nur den Spielstand zurück.

Im Online-Modus überträgt der Host `setsTarget` im `settings`-Paket; der
laufende Spielstand wird per `sync` geteilt.

### 9.2  Break-Regel (Wechselbreak / Winnerbreak)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Neuer Menüabschnitt „Break-Regel" (erscheint zusammen mit dem Gewinnspiele-Stepper
bei 8-Ball/9-Ball). Zwei Optionen:

| Regel | Verhalten |
|---|---|
| Wechselbreak | Anstoß wechselt nach jedem Spiel |
| Winnerbreak | Gewinner des letzten Spiels stößt erneut an |

Der nächste Anstoßspieler (`nextBreakPlayer`) wird beim Gang ins Menü und bei
einer Revanche zurückgesetzt. Im Online-Modus wird er per `sync` synchronisiert.

### 9.3  KI-Anstoß – Automatik, Kraft und Position

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Drei Verbesserungen am KI-Anstoß im Zusammenspiel mit dem Match-Modus:

- **Automatik:** Ist die KI beim Spielstart am Zug (durch die Break-Regel), startet
  sie den Anstoß selbständig, ohne dass der Spieler eingreifen kann.
- **Kraft:** KI-Anstoß wird mit 88–100 % Stoßstärke ausgeführt (zuvor durch die
  allgemeine Stärke-Obergrenze auf ~78 % begrenzt).
- **Position (9-Ball):** Die KI platziert die Weiße beim 9-Ball-Anstoß am
  2. Diamanten der langen Bande (zufällig oben oder unten), nicht mehr in Tischmitte.

### 9.4  Profi-KI: Zielgenauigkeit und Safe-Spiel

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Profi-KI erhielt drei Verbesserungen, die Zielgenauigkeit und Spielverständnis
deutlich anheben.

**Zielgenauigkeit:**
Winkelstreuung und Power-Varianz wurden reduziert und an die Schussschwierigkeit
gekoppelt. Positionierungsfehler (die zuvor auch beim Profi auftraten) wurden entfernt.
Die Ball-in-Hand-Kandidatensuche wurde auf 56 Positionen erweitert (8 Abstände × 7 Lateralversätze).

| Parameter | Vorher | Nachher |
|---|---|---|
| Winkelstreuung Profi | 0,006 rad (fest) | 0,0007–0,0052 rad (schwierigkeitsabhängig) |
| Power-Varianz Profi | ±4 % | ±1,2 % |
| Stellungsfehler Profi | 45 % | 0 % (nur noch bei Anfänger) |

**Intelligentes Safety-System (`aiPlanSafetyShot`):**
Neue Funktion mit Simulationsvalidierung. Die KI bewertet 11 Winkelversätze × 9 Power-Stufen
und wählt den Schuss, der entweder die Zielkugel hinter einem Blocker versteckt oder
Weiße und Zielkugel an gegenüberliegenden Banden platziert.

**Fallback-Eskalation bei schwierigen Lagen:**
Dreistufige Kette: Safety → Bandenstoß-Safety (40 Zielpunkte × 7 Powers,
simulationsvalidiert) → Notstoß (22 % Kraft). Zuvor führte die KI direkt einen
Foul-Stoß aus. Zusätzlich werden Cut-Shots seltener verworfen (minDotN 0,55 → 0,48)
und einfache Pots nicht mehr fälschlicherweise als Safety behandelt.

---

## Phase 10 – Bestätigungsdialog & 9-Ball-Standard (7. Mai 2026)

Zwei kleine UX-Verbesserungen in der Billard-App: Schutz vor versehentlichem
Antippen von Menü/Neustart auf dem Handy sowie eine sinnvollere Voreinstellung
bei der 9-Ball-Aufstellung.

### 10.1  Bestätigungsdialog für „Menü" und „Neustart"

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Beim Justieren des Ghostballs auf dem Handy (links/rechts wischen) konnte man
versehentlich die Buttons „≡ Menü" oder „↻ Neustart" antippen und damit das
laufende Spiel ungewollt beenden.

Beide Buttons zeigen jetzt einen Bestätigungsdialog, bevor die Aktion ausgeführt wird:

| Button | Meldung |
|---|---|
| ≡ Menü | „Zum Menü wechseln? Aktueller Spielstand wird zurückgesetzt." |
| ↻ Neustart | „Spiel neu starten? Aktueller Spielstand wird zurückgesetzt." |

Der Dialog enthält die Buttons „OK" (gold, primär) und „Abbrechen". Er ist als
eigenes `<div id="confirmDialog">`-Overlay umgesetzt (z-index 500, über allen anderen
Overlays) und im gleichen Dark-Theme gestaltet wie `#endScreen` und `#onlineLobby`.
Die Hilfsfunktion `showConfirm(msg, onOk)` nimmt die Nachricht und einen Callback entgegen.

### 10.2  9-Ball Aufstellung – „Vorgelagert" als Standard

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Menü war bisher „Diamant (WPA)" als Standard für die 9-Ball-Aufstellung vorbelegt.
Da die vorgelagerte Stellung im Vereinsbetrieb bevorzugt wird, wurde die Voreinstellung
auf „Vorgelagert" geändert.

Angepasst wurden:
- HTML: `class="opt selected"` auf das `data-val="vorgelagert"`-Element gesetzt
- JavaScript: `game.rack9` Startwert von `"diamond"` auf `"vorgelagert"` geändert

---

## Phase 11 – Shot-Timer und 8-Ball-Regelkorrekturen (9. Mai 2026)

Zwei unabhängige Erweiterungen: ein optionaler Shot-Timer für alle Spielvarianten
sowie zwei Korrekturen an den 8-Ball-Regelauswertungen.

### 11.1  Shot-Timer (optional)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Im Menü wurde die Option **Shot-Timer** ergänzt (Standard: deaktiviert). Ist er
aktiv, läuft nach jedem Aufstellen einer Kugel (Drill15) bzw. nach jedem
Zug-Beginn (8/9-Ball) ein Countdown:

| Variante | Dauer | Sonderregel |
|---|---|---|
| 15-Kugeln Drill | 30 s | – |
| 8-Ball / 9-Ball – erster Stoß nach Anstoß | 60 s | – |
| 8-Ball / 9-Ball – alle weiteren Stöße | 30 s | – |

Soundhinweise: Warnsound (zwei fallende Töne) bei 10 s, Kurz-Beep jede Sekunde
in den letzten 5 s.

**Ablauf bei Timer-Ende:**
- Drill15: Kugel gilt als verfehlt, nächste Kugel wird aufgestellt, neuer Timer startet.
- 8/9-Ball: Foul „Keine Kugel getroffen" – Gegner erhält Ball-in-Hand. Funktioniert
  auch im Online-Modus (lokaler Spieler löst den Zug-Wechsel aus, Sync wird gesendet).

**Extension-Button (+30 s):** Nur für 8/9-Ball. Erscheint in den Bottom-Controls,
solange der Timer läuft. Jeder Spieler kann ihn genau einmal pro Spiel nutzen; danach
ist er ausgegraut.

### 11.2  8-Ball Respot-Korrektur (WPA)

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Die Funktion `respotBlackBall()` suchte bisher fälschlicherweise horizontal nach
rechts (Richtung Fußbande), wenn der Fußpunkt belegt war. Korrigiert: Die Suche
verläuft jetzt regelkonform entlang der Mittellinie **Richtung Kopffeld** (abnehmende
X-Koordinate). Nur als letzter Fallback wird Richtung Fußbande gesucht.

### 11.3  8-Ball – vorzeitig versenkte 8 kein Foul

**Datei:** `C:\Daten\Projects\pbc-pool-app\index.html`

Bisher galt das vorzeitige Versenken der 8 (Gruppe noch nicht geräumt) stets als
Foul mit Spielerwechsel und Ball-in-Hand. Vereinfachte Hausregel:

- Die 8 wird immer neu aufgesetzt (Respot), ohne Foul-Strafe für den Einlochvorgang.
- Hat der Spieler gleichzeitig eine eigene Kugel versenkt, darf er weiterspielen.
- Hat der Spieler keine eigene Kugel versenkt, wechselt der Zug normal (ohne Ball-in-Hand).
- Sonstige Fouls (Weiße eingelocht, keine Kugel getroffen usw.) gelten weiterhin.

---

## Phase 12 – Online-Stabilitätsverbesserungen & Fixes (23. Mai 2026)

Der Online-Modus wurde in mehreren Punkten robuster gemacht: Reconnect-Logik, State-Synchronisation und diverse Anzeigefehler behoben.

### 12.1  Safety-Timer + Sync-Button

**Datei:** `public/spiel-spass/billardapp/index.html`

Wenn eine Bestätigung vom Server zu lange ausbleibt, verhindert ein Safety-Timer ein Einfrieren des Spiels. Ein manueller Sync-Button im Online-Modus ermöglicht das Abrufen des aktuellen Spielzustands.

### 12.2  Online State-Reset + applyOnlineSync-Härtung

**Datei:** `public/spiel-spass/billardapp/index.html`

Alle blockierenden State-Flags (`wasKitchenShot`, `firstHitInKitchen`) werden in `applyOnlineSync()` bei jedem Sync zurückgesetzt, um Desyncs zwischen den Clients zu verhindern.

### 12.3  Queue-Wahl sofort an Zuschauer übertragen

**Datei:** `public/spiel-spass/billardapp/index.html`

Die Auswahl eines Queue-Typs (Standard, Jump etc.) wird jetzt sofort per Online-Sync an Zuschauer gesendet, nicht erst beim nächsten Shot.

### 12.4  Reconnect-Overlay bei Gast schließen

**Datei:** `public/spiel-spass/billardapp/index.html`

Wenn der Gegner nach einem Verbindungsabbruch zurückkommt, schließt das Reconnect-Overlay beim Gast automatisch.

### 12.5  Raumcode: kopierbar + im Scoreboard

**Datei:** `public/spiel-spass/billardapp/index.html`

Der Raumcode im Wartebildschirm ist jetzt per Klick/Tap in die Zwischenablage kopierbar. Zusätzlich wird er dauerhaft im Scoreboard angezeigt.

### 12.6  Online-Modus Bugfixes & Reconnect-Button

**Datei:** `public/spiel-spass/billardapp/index.html`

Weitere Einzelfehler im Online-Modus behoben. Ein expliziter Reconnect-Button erlaubt das manuelle Wiederverbinden nach Verbindungsverlust.

### 12.7  Hilfe – Online-Modus 7.6 aktualisiert

**Datei:** `public/spiel-spass/billardapp/hilfe.html`

Abschnitt 7.6 der Hilfe-Seite wurde mit den aktuellen Online-Modus-Funktionen ergänzt.

### 12.8  Nach Menü Lobby anzeigen

**Datei:** `public/spiel-spass/billardapp/index.html`

Nach dem Schließen des In-Game-Menüs wird jetzt korrekt zur Lobby zurückgekehrt (zuvor blieb das Spiel direkt aktiv).

### 12.9  Break-Queue nach Aufnahme zurücksetzen

**Datei:** `public/spiel-spass/billardapp/index.html`

Nach dem Anstoß wird die Queue-Auswahl auf die Standard-Spielqueue zurückgesetzt (zuvor blieb die Break-Queue aktiv).

### 12.10  Effet/Winkel-Tab im Zuschauer-Modus synchronisiert

**Datei:** `public/spiel-spass/billardapp/index.html`

Im Zuschauer-Modus werden Effet- und Winkel-Einstellungen korrekt angezeigt (zuvor nicht synchronisiert).

---

## Phase 13 – WPA-Regelkorrekturen Kopffeld (23. Mai 2026)

Das Kopffeld-Regelwerk (WPA 8-Ball) wurde vollständig korrigiert und in der Hilfe-Seite dokumentiert.

### 13.1  8-Ball Anstoß-Foul – immer Kopffeld

**Datei:** `public/spiel-spass/billardapp/index.html`

Jedes Anstoß-Foul (Scratch, zu wenige Bandenkontakte, illegaler Anstoß) führt jetzt einheitlich zur Pflicht-Platzierung im Kopffeld. Zuvor war die Kopffeld-Pflicht nur beim Scratch aktiv.

### 13.2  Kopffeld-Kugel-Foul beim 8-Ball

**Datei:** `public/spiel-spass/billardapp/index.html`

Beim Spielen aus dem Kopffeld darf keine Kugel angestoßen werden, die vollständig im Kopffeld liegt. Dieser Regelfall war bisher nicht implementiert.

### 13.3  Kopffeld-Foul via Kontaktpunkt

**Datei:** `public/spiel-spass/billardapp/index.html`

Die Erkennung erfolgt jetzt über den exakten Ball-Kontaktpunkt statt der Kugelkante, sodass Kugeln, die nur leicht in den Kopfbereich hineinragen, korrekt behandelt werden.

### 13.4  Kopffeld-Sonderregel in Hilfe dokumentiert

**Datei:** `public/spiel-spass/billardapp/hilfe.html`

Die „Kopffeld"-Sektion der Hilfe-Seite wurde um eine Erläuterung der WPA-Kontaktpunkt-Regel ergänzt.

---

## Phase 14 – KI-Profi: Stellungsspiel, Ansage, Pause/Undo & Regelkorrekturen (25.–31. Mai 2026)

Umfangreiche Verbesserungen der Profi-KI: Längsdrehll-Simulation ermöglicht echtes Stellungsspiel; sichtbare Stoß-Ansage; Pause/Undo-Funktion; 8-Ball-Kopffeldregel nach Anstoßfoul korrigiert; harte Safety-Prüfung; variable KI-Stoßverzögerung; KI-Debug-Modus.

### 14.1  Vollbild: Spieler-/Zuschauer-Layout & Schnell-Buttons

**Dateien:** `public/spiel-spass/billardapp/index.html`, `public/spiel-spass/billardapp/hilfe.html`

Im Vollbildmodus gibt es jetzt zwei Layout-Varianten, umschaltbar per ⚙-Button (neben ⛶):
- **Zuschauer-Layout**: Reines Spielfeld; fünf Schnell-Buttons links neben ⚙: ◄◄ (sehr fein links), ◄ (fein links), 🎱 (Stoß auslösen), ► (fein rechts), ►► (sehr fein rechts)
- **Spieler-Layout**: Overlay mit allen Steuerelementen; Live-Anzeige von Zielrichtung, Power, Effet, Queue-Neigung

Im Online-Zuschauer-Modus ebenfalls verfügbar; Eingreifen ins Spiel weiterhin nicht möglich.

### 14.2  KI-Profi – Längsdrehll-Simulation & Stellungsspiel

**Datei:** `public/spiel-spass/billardapp/index.html`

Die KI-Simulation (`aiSimulateShotResult`) berücksichtigt jetzt Längsdrehll (`spinY → wx, wy`) analog zur echten Stoßphysik. Dadurch können Nachläufer, Rückläufer und Stop-nahe Varianten geplant und korrekt bewertet werden.

Neue Funktion `aiApplyValidatedPositionControl()`: Testet moderate Follow-/Draw-Varianten und übernimmt Drehll-Werte nur, wenn der Pot in der Simulation weiterhin legal bleibt. Seiteneffet bei Ball-in-Hand gesperrt. Profi-Profil angepasst: `spinUsage: 0.92`, `positionWeight: 1.28` (vorher 0.20 / 0.75).

### 14.3  KI-Profi – Jump-Shot-Korrekturen für blockierte Lagen (8-Ball)

**Datei:** `public/spiel-spass/billardapp/index.html`

Bei blockierten 8-Ball-Lagen fiel die KI zuvor auf `hardBlockedLastResort` (illegaler Erstkontakt) zurück. Korrekturen:
- Jump-Kandidaten markieren sich explizit mit `isJump: true`
- Neuer Kandidatentyp `hardJumpCaromAttack` für Karambolage-Kontakte in Endlagen
- `jumpContactSafety` wird vor dem allgemeinen Safety-Filter bewertet
- Jump-Fallback-Sortierung: `hardJumpCaromAttack` → `hardJumpPot` → normale Kontakte

### 14.4  KI-Profi – Sichtbare Ansage & 8-Ball-Call-Shot-Regel

**Dateien:** `public/spiel-spass/billardapp/index.html`, `public/spiel-spass/billardapp/hilfe.html`

Nach der Stoßplanung zeigt die KI ihre Absicht sichtbar, bevor der Stoß ausgelöst wird:
- Statuszeile: „KI plant: Kugel N → Tasche …"
- Bei 8-Ball: „Ziel: N" neben der Gruppenanzeige (bei Safety: „Safe")
- Geplante Tasche wird gelb markiert

8-Ball-Regelkorrektur: Stoßrecht bleibt nur, wenn die angesagte Kugel in die angesagte Tasche fällt. Fällt sie in die falsche Tasche oder gar nicht, wechselt das Stoßrecht (kein Foul, aber kein Recht). Hilfe-Seite ergänzt (Abschnitt 6.3).

### 14.5  8-Ball-Kopffeldregel nach Anstoßfoul (Kontaktpunkt-Prüfung)

**Datei:** `public/spiel-spass/billardapp/index.html`

Nach einem 8-Ball-Anstoßfoul ist nur ein Erstkontakt an einem Kugelteil *außerhalb* des Kopffelds legal. Die Erkennung erfolgt jetzt kontaktpunktgenau (`isKitchenContactInHeadField()`). Die Profi-KI filtert entsprechende Zielkugeln (`filter8BallKitchenTargets()`).

### 14.6  Pause & Undo

**Dateien:** `public/spiel-spass/billardapp/index.html`, `public/spiel-spass/billardapp/hilfe.html`

Zwei neue Buttons in der Toolbar:
- **⏸ Pause** – friert das Spiel sofort ein (auch während KI-Planung); ▶ Weiter setzt fort
- **↩ Zurück** – stellt Tischzustand vor dem letzten Stoß wieder her (Kugeln, Gruppen, Foul-Status, Spielstand); kein doppeltes Undo

Im Online-Modus ausgeblendet. Hilfe-Seite ergänzt (Abschnitt 4.8).

### 14.7  Variable KI-Stoßverzögerung

**Dateien:** `public/spiel-spass/billardapp/index.html`, `public/spiel-spass/billardapp/hilfe.html`

Neuer Slider „KI-Stoßverzögerung" unter Erweiterte Optionen: 0,5–10 s, Standardwert 3,6 s. Legt fest, wie lange die KI nach der Stoßankündigung wartet, bevor sie auslöst. Bei Pause läuft die Wartezeit nicht weiter. Hilfe-Seite ergänzt (Abschnitte 6.3, 8.5).

### 14.8  Harte Safety-Prüfung im Profi-Modus

**Datei:** `public/spiel-spass/billardapp/index.html`

Neue Funktion `aiValidateHardSafetyShot()`: Safety-Kandidaten werden im Profi-Modus verworfen, wenn `scratchRisk > 0` oder `foulRisk > Schwellenwert`. Vor der Ausführung wird die gewählte Safety nochmals geprüft; bei Ablehnung sucht die KI einen validierten Fallback.

### 14.9  Handy-Vollbild: Touch-Schutzbereich erweitert

**Datei:** `public/spiel-spass/billardapp/index.html`

Knapp neben den Vollbild-Buttons (`fsQuickControls`, `fullscreenPlayControls`, ⛶, ⚙) landende Touches werden nicht mehr als Zielgeste interpretiert. Der Canvas ignoriert Touches in einem erweiterten Schutzbereich (18 px Padding) um diese Buttons.

### 14.10  KI-Debug-Modus & Analyse-Export

**Dateien:** `public/spiel-spass/billardapp/index.html`, `public/spiel-spass/billardapp/hilfe.html`

- **Alt+D** aktiviert ein Debug-Panel auf dem Canvas: KI-Profil, Kandidatentrichter, Planungsdauer, gewählter Schuss (Typ, Score, Einloch-Wahrscheinlichkeit, Scratch-Risiko)
- **Alt+E** (grüner 💾-Button) exportiert die vollständige KI-Planung als JSON
- Debug-Panel bleibt während der Ansage-Wartezeit sichtbar – ideal für Exports
- Hilfe-Seite ergänzt (Abschnitt 6.2)

### 14.11  Zufällige Rack-Aufstellung in Hilfe dokumentiert

**Datei:** `public/spiel-spass/billardapp/hilfe.html`

Abschnitt 5.3.1 ergänzt: Dokumentiert die zufällige Kugelverteilung bei jedem neuen Spiel sowie die Break-Streuung. 8-Ball: Ball 1 und 8 fix; Ecken der letzten Reihe je eine Volle/Halbe; Rest zufällig. 9-Ball: Ball 1 und 9 fix; Rest zufällig.

---

## Phase 15 – Vollbild-Buttons & Bandenball-Optimierungen der Profi-KI (1. Juni 2026)

Höhenreduzierung der Vollbild-Steuer-Buttons auf dem Handy sowie zwei gezielte Erweiterungen der Profi-KI für Bälle nahe oder an der Bande.

### 15.1  Vollbild: Steuer-Buttons in der Höhe reduziert

**Datei:** `pbc-pool-app/index.html`

Die Höhe der Vollbild-Buttons (`fsQuickControls`, `fullscreenPlayControls`, `fsPower`, `fsShoot`) wurde in drei Schritten um je 20 % reduziert (kumulativ ca. 49 % gegenüber dem Ausgangswert). `min-height` von 42–44 px auf 22 px gesenkt, Padding entsprechend angepasst. Damit ist die untere Bande und die linke Kopftasche im Vollbildmodus auf dem Handy wieder vollständig sichtbar.

### 15.2  Profi-KI: Bank-Shot-Funktion

**Datei:** `pbc-pool-app/index.html`

Neue Funktion `aiFindHardBankShotCandidates()`: Für jeden Zielball wird jedes Loch an jeder Bande gespiegelt (Reflexionsprinzip). Der resultierende virtuelle Zielpunkt ergibt per Geistball-Methode den exakten Abspielwinkel. Nach Geometrie-Vorfilterung (Bandenschnittpunkt außerhalb der Ecktaschen, freie Bahn) validiert `aiFinalValidateHardShot()` per Physik-Simulation. Score: 400 000+; wird nur aktiviert wenn kein direkter Pot verfügbar ist.

### 15.3  Profi-KI: aiFindHardRailPotLock überarbeitet

**Datei:** `pbc-pool-app/index.html`

Die Funktion für Bandenbälle wurde grundlegend korrigiert – sie schlug zuvor für die meisten Praxislagen fehl:

| Parameter | Alt | Neu |
| --- | --- | --- |
| Erkennungsradius | `BALL_R * 2.0` (19 px) | `BALL_R * 5.5` (52 px) |
| dotN-Mindestanforderung | `0.48` | `0.22` |
| Schuss-Berechnung | `aiEvaluatePotShot` (filtert intern mit `prof.minDotN`) | `aiGhostBallAngle` direkt (kein Doppelfilter) |
| Suchwinkel bei dünnen Schnitten | ±0,020 rad | ±0,032 rad |

Ergebnis: Bälle bis ~3 Kugeldurchmesser von jeder Bande werden erkannt; auch dünne Schnitte entlang der Bande (wie sie jeder gute Bezirksligaspieler versenkt) werden jetzt sicher versenkt.

---

## Phase 16 – JGPT-Codex-Gesamtoptimierung & Hilfe-Update (1. Juni 2026)

Umfangreiche Optimierungsrunde durch JGPT-Codex (dokumentiert in `SESSION_CHANGES_2026-06-01.md`) sowie Erweiterung der Spielanleitung.

### 16.1  KI-Verbesserungen (Profi-Modus)

**Datei:** `pbc-pool-app/index.html`

- **Ball-in-Hand:** Robustere Validierung; gerade oder Eckloch-Lösungen bevorzugt; spitze Mitteltaschen abgewertet; Follow-/Draw-Varianten für Stellungsspiel und Scratch-Vermeidung geprüft
- **Stellungsspiel:** Validierte Positionskontrolle nach sicherem Pot; Follow-, Draw- und Stun-Varianten werden per Simulation verglichen
- **Deadlock-Schutz:** Push-Outs als eigener Stoßtyp; finale Validierung mit mehreren Fallback-Stufen; kein endloses „KI denkt nach…" mehr
- **Effekt-Simulation:** KI-Simulation berücksichtigt Längsdrall (Rückläufer/Nachläufer) realistischer
- **8-Ball:** Stärkere Nutzung der validierten Profi-Pipeline; Stellung auf die 8 nach letzter Gruppenkugel höher gewichtet

### 16.2  Taschenphysik

**Datei:** `pbc-pool-app/index.html`

Kugeln, die die vorderen Taschenbacken (Corner-/Side-Pocket-Noses) passiert haben, werden jetzt korrekt als Taschenbereich erkannt und fallen ein. Bisher konnten Kugeln unrealistisch hinter den Backen stehen bleiben. Korrektur in `shouldPocketBall()` und `isBallInPocketEntryZone()`.

### 16.3  Fortschrittsanzeige während KI-Planung

**Datei:** `pbc-pool-app/index.html`

Während längerer KI-Planung zeigt die Statuszeile jetzt die aktuelle Phase mit Fortschrittsstand (z. B. „Kandidaten simulieren 8/20"). Phasen: Regeln prüfen → Ball-in-Hand planen → Kandidaten erzeugen → Kandidaten simulieren → Besten Stoß wählen → Blockaden / Jump / Kick prüfen → Stellung prüfen → Final validieren → Fallback suchen. Sobald die KI ausführt: „KI bereitet den Stoß vor" (mind. 2 s sichtbar). Fortschritt wird bei Stoßstart, Reset und Undo sauber gelöscht.

### 16.4  Spielanleitung erweitert

**Datei:** `pbc-pool-app/hilfe.html`

Abschnitt 6.1 (KI-Schwierigkeitsgrade) aktualisiert:

- Profi-Tabellenzeile: Bandenbälle, Stellungsspiel (Follow/Draw/Stun) und Kick-Varianten ergänzt
- Profi-Tipp-Kasten: Fünf strukturierte Punkte (Bandenbälle, Stellungsspiel, Ball-in-Hand, Blockaden, Fortschrittsanzeige)

---

## Phase 17 – KI-Optimierung Stufe 1: Zeitbudget, Zielauswahl, Kick-Escape (1. Juni 2026)

Reaktivität und Robustheit der Profi-KI erheblich verbessert. Dokumentiert in `AENDERUNGEN_KI_Stufe1.md`.

### 17.1  Zeitbudget-System (Einfrieren der KI behoben)

**Datei:** `pbc-pool-app/index.html`

Das bis zu >1 min dauernde Einfrieren in Phase „Spezial-Locks prüfen 5/6" – besonders am offenen 8-Ball-Tisch – wurde behoben durch:

- Neues Zeitbudget-System (`CFG_AI_TIME_BUDGET_MS` Default 600 ms, hartes Limit 2 s)
- Zweistufige Zielauswahl: billiger geometrischer Scan trennt „einfache" von „problematischen" Zielen; teure Spezialsuchen laufen nur noch für problematische Bälle
- Spezial-Lock-Block wird vollständig übersprungen, wenn bereits ein verlässlicher Direktpot vorliegt
- Budget-Abbrüche innerhalb aller Lock-Suchfunktionen

### 17.2  Neuer KI-Rechenzeit-Regler

**Datei:** `pbc-pool-app/index.html`

Neuer Schieberegler „KI-Rechenzeit" im Startmenü (Erweiterte Optionen): steuert das Zeitbudget zwischen Performance (0,15 s, schnell) und Gründlich (1,5 s, rechenintensiv). Beeinflusst Geschwindigkeit vs. Planungstiefe der Profi-KI. Unabhängig von der KI-Stoßverzögerung.

### 17.3  Jump-Shots nach Spielstärke abgestuft

**Datei:** `pbc-pool-app/index.html`

| Stärke | Verhalten |
| --- | --- |
| Anfänger | springt nie |
| Fortgeschrittener | kurze Jumps nur bei echter Blockade |
| Profi | volle Jump-Nutzung (in Stufe 2 weiter präzisiert) |

### 17.4  Physikvalidierte Kick-Suche (`aiFindLegalKickEscape`)

**Datei:** `pbc-pool-app/index.html`

Neue Funktion: 360°-Sweep mit echter Spielphysik, um bei verdeckten Bällen einen garantiert legalen Erstkontakt zu finden. Verhindert sinnlose Fouls durch fragile Spiegelgeometrie-Kicks. Eigenes Zeitbudget (~700 ms), unabhängig vom Rechenzeit-Regler.

### 17.5  Spielanleitung erweitert

**Datei:** `pbc-pool-app/hilfe.html`

- Neue Section 8.6 „KI-Rechenzeit": Erläuterung des Schiebereglers (Geschwindigkeit vs. Präzision), Unterschied zur Stoßverzögerung
- Tabelle 6.1: Fortgeschrittener und Profi um Jump-Verhalten und Vorausschau ergänzt
- Profi-Tipp-Kasten: Kick-Suche mit Physik-Sweep, Jump nur bei Snooker
- Debug-Panel: Build-Kennung (z. B. `S2.2`) im Overlay dokumentiert

---

## Phase 18 – KI-Optimierung Stufe 2: Runout-Kette & Cluster-Management (1. Juni 2026)

Profi-KI denkt mehrere Kugeln voraus. Dokumentiert in `AENDERUNGEN_KI_Stufe2.md`.

### 18.1  Geometrische 3-Kugel-Runout-Kette (`aiRunoutChainScore`)

**Datei:** `pbc-pool-app/index.html`

Neue Funktion berechnet einen diskontierten Positionswert über die nächsten 1–3 Kugeln (je nach Spielstärke). Stellungen, von denen sich der Tisch durchspielen lässt, werden bevorzugt; Sackgassen (nächste eigene Kugel danach verdeckt) werden bestraft.

| Stärke | Tiefe | Verhalten |
| --- | --- | --- |
| Anfänger | 1 | greedy 1-ahead, unverändert |
| Fortgeschrittener | 2 | 2-Kugel-Vorausschau |
| Profi | 3 | volle 3-Kugel-Runout-Kette |

Implementierung als Bonus/Malus relativ zu einem Neutralwert (nicht als konvexe Mischung – das hätte Sackgassen bevorzugt).

### 18.2  Skalierter Breakout-Bonus

**Datei:** `pbc-pool-app/index.html`

Der Bonus für das Freispielen blockierter eigener Kugeln skaliert jetzt mit der Anzahl der befreiten Kugeln (`min(70, 26 × freed)` statt flacher +28). Ein Stoß, der einen Cluster öffnet und mehrere Kugeln befreit, wird stärker belohnt.

### 18.3  Jump-Trigger präzisiert & Direktkontakt bevorzugt

**Datei:** `pbc-pool-app/index.html`

- Profi springt nur noch bei tatsächlich gesnookerten Zielen (`aiDetectHardSnooker().blocked`), nicht pauschal bei allen „problematischen" Bällen
- Direkter Voll-Kontakt in `aiFindHardPlayableEscape` erhält höchsten Quell-Bonus (3200); Kick/Jump bei freiem Pfad stark abgewertet (−8000)
- Notstoß-Stärken reduziert (20–38 % statt 54–62 %) für robustere Ausführung
- Build-Marker `S2.2` im Debug-Overlay

---

## Phase 19 – KI-Optimierung Stufe 2.3–2.7: Bewertung, Architektur, Push-Out und Break-Physik (1.–4. Juni 2026)

Zusammenfassung mehrerer Iterationen am Profi-KI-Kernpfad: feinere Bewertung von Pots/Safeties, Zentralisierung der KI-Folgezug-Auslösung, Behebung wiederkehrender Push-Out-Hänger, Aufweichung binärer Kandidaten-Killfilter zur Vermeidung erzwungener Foul-Stöße sowie Anpassungen der Anstoß- und Banden-Physik. Build-Marker im Debug-Overlay läuft von `S2.3` bis `S2.7`.

### 19.1  Pocket-Anflugwinkel & Mitteltaschen-Bewertung (S2.3 + S2.4)

**Datei:** `pbc-pool-app/index.html`

Die Profi-KI bewertet jetzt den Anflugwinkel der Zielkugel zur Tasche: Mitteltaschen akzeptieren physikalisch nur enge, fast senkrechte Anflüge, Ecktaschen sind toleranter. Vorher führten 38°-Schnitte an die Mitteltasche zu falschen „spielbar"-Bewertungen. Stufe 2.4 hat zusätzlich einen Distanz-Dämpfungs-Bug behoben (Strafe wurde bei langen Distanzen verstärkt statt gedämpft – häufige Ursache falscher Safety-Wahlen im Endgame) und den Mitteltaschen-Exponent moderater gesetzt (1.9 statt 2.6).

### 19.2  Profi-KI verwirft freie Pots nicht mehr (S2.5 + S2.5b)

**Datei:** `pbc-pool-app/index.html`

Vorab-Veto in `evaluateShotCandidate` entschärft: reguläre Pots werden nicht mehr stumm zu null verworfen, sondern gescort und vom Chooser über realistische Schwellen ausgewählt. Bewertungs-Noise-Floor von 0.4°/3 % auf 0.18°/1.5 % gesenkt – Profi schätzt die eigene Ausführung präziser ein. Ein freier Pot, der vorher wegen einer Robust-Sim-Schwankung unter die 90-%-Schwelle fiel, wird jetzt zuverlässig gespielt. S2.5b verhindert zusätzlich, dass ein „validierter" Jump auf eine blockierte Kugel den freien Direkt-Pot einer anderen Kugel überschreibt – nach dem Anstoß sprang die KI sonst sinnlos ins Cluster.

### 19.3  Zentrale KI-Folgezug-Auslösung (S2.6, Architektur)

**Datei:** `pbc-pool-app/index.html`

Sieben verstreute `aiThinking=true; aiTimer=N`-Trigger sind durch eine zentrale `scheduleAiTurn(delayFrames)`-Funktion ersetzt. Vorbedingungen (Modus, Spieler, State, Pause, ShotInProgress, aiPlanning) prüft genau eine Stelle. Für Trigger nach Click-Handlern und State-Mutationen gibt es zusätzlich `scheduleAiTurnAfterPaint(delayFrames)` mit Double-rAF. Der Side-Effect in `updateUI`, der die KI-Planung aus dem Render-Pfad heraus angestoßen hat, ist entfernt. Statuszeile zeigt jetzt dreistufig „KI stößt…" / „KI denkt nach…" / „KI ist am Zug" entsprechend der tatsächlichen KI-Aktivität.

### 19.4  9-Ball-Safety mit oppAccess-Metrik und Snooker-Generator (S2.6)

**Datei:** `pbc-pool-app/index.html`

Neue Helper-Funktion `aiOpponentAccessToLowestFromSim(sim, targetNum)` misst per Ghost-Ball-Analyse, wie gut der Gegner nach dem Safety-Stoß die niedrigste Kugel direkt versenken könnte. `CommonStrategy.scoreSafety` bestraft hohe Werte gestaffelt (`oppAccess > 0.82` → −180, `> 0.92` → −320) und belohnt echte Profi-Safeties (Snooker bei `oppAccess < 0.20` → +180, Distance-Safety bei `< 0.35` → +90). Zusätzlich erzeugt `aiBuildNineBallSnookerSafetyCandidates` Kandidaten, die die niedrigste Kugel gezielt hinter einer höheren Hider-Kugel parken. Die 9-Ball-Profi-KI legt jetzt die zu spielende Kugel hinter eine andere statt nur an die nächste Bande.

### 19.5  Push-Out-Hänger behoben (S2.6 + S2.6d)

**Datei:** `pbc-pool-app/index.html`

Zwei symmetrische Hänger im 9-Ball-Push-Out-Pfad sind gefixt: Mensch lehnt Push-Out der KI ab (S2.6) bzw. KI nimmt Push-Out des Menschen an (S2.6d). Beide Pfade nutzen jetzt `scheduleAiTurnAfterPaint`, sodass der Schedule erst nach Ablauf des `.finally()`-Blocks des Frame-Loops feuert (`aiPlanning` ist dann sauber zurückgesetzt). Vorher blieb die App im Status „KI denkt nach…" / „KI ist am Zug" hängen, bis Pause→Weiter den Schedule neu anstieß.

### 19.6  Kein erzwungenes Foul, wenn evaluierte Kandidaten existieren (S2.6b)

**Datei:** `pbc-pool-app/index.html`

In Snooker-Lagen verwarf `evaluateShotCandidate` bisher alle Kicks/Jumps wegen `scratchRisk > 0` oder ähnlicher Soft-Risiken. `evaluatedCandidates` blieb 0, und die KI fiel auf `hardForcedContactLastResort` zurück – einen Stoß, der direkt auf das Ziel zielt und den Blocker als Erstkontakt trifft (garantiertes Foul). Edit-Set:

- Klare Trennung von **fundamentalen** Defekten (Scratch, illegaler Erstkontakt, keine Bande nach Kontakt – echte Regelverletzung im exakten Stoß) und **Soft**-Risiken (Robust-Streuung, Cue nahe Tasche, Robust-bestSim nicht safety-legal). Soft-Risiken landen als Score-Mali im Chooser, nicht als Null-Verwurf.
- `aiSafetyShotLegal`-Fallback: bei Soft-Fail dient der exakte Sim als Bewertungsbasis.
- Chooser hat zwei zusätzliche Stufen: `realisticSafeties` (scratch/foul ≤ 30 %) und Last-Resort `evaluated[0]` (höchstgescorte verfügbare Option).
- Vor dem `aiBuildForcedContactShot`-Pfad iteriert die KI nochmals `evaluated[]` und nimmt den ersten Kandidaten, der die exakte Validierung besteht.
- Non-Safety-Profi-Floor gesenkt von 10 % auf 2 % Pot-Probability – ein legaler 7-%-Jump ist besser als ein garantiertes Foul.

### 19.7  9-Ball-KI-Anstoß analog 8-Ball (S2.6c)

**Datei:** `pbc-pool-app/index.html`

Bisher hatte die KI für den 9-Ball-Anstoß keine dedizierte Logik – sie setzte nur die Cue-Position und ließ `aiPlanShot` weiterlaufen, das einen zufälligen Safety-/Kick-Kandidaten als Aim-Winkel auswählte. Power wurde nachträglich auf 88–100 % gezwungen, der Winkel kam aber aus dem zufälligen Kandidaten. Folge: intermittierend illegaler Anstoß (< 4 Banden-Kugeln), woraufhin der Push-Out-Button regelkonform NICHT angezeigt wurde. Die neue Logik mirror't den 8-Ball-Pfad: gezielt auf die 1 (Apex der 9-Ball-Pyramide), `cueType="break"`, direkt `aiPreviewThenShoot` und `return`.

### 19.8  Break-Physik realistischer (S2.7)

**Datei:** `pbc-pool-app/index.html`

Die 8-Ball-Pyramide lief auch bei voller Power und Break-Queue zu wenig auseinander. Zwei Konstanten angepasst:

| Konstante | Vorher | Nachher | Wirkung |
| --- | --- | --- | --- |
| `CUE_PROFILES.break.powerGain` | 1.14 | 1.30 | +14 % Initial-Velocity, +30 % kinetische Energie beim Aufprall, nur Break-Cue betroffen |
| Banden-`eN`-Offset in `applyRailRebound` | `-0.14` | `-0.08` | Effektive eN-Baseline 0.82 statt 0.76 – realistischer für Pool-Banden, alle Banden-Kontakte |

Die KI verwendet dieselbe Physik in ihren Simulationen, daher gilt das Tuning auch dort konsistent. Andere Physik-Konstanten (`CFG_FRICTION`, `CFG_ROLLING_DRAG`, `CFG_BALL_BOUNCE`, `MAX_POWER`) blieben unverändert.

---

## Architektur PBC-Erding Billard-App (Stand: Mai 2026)

Die Billard-App ist eine vollständige Pool-Billard-Simulation als einzelne HTML-Datei.
Sie wird in einem eigenen Projekt gepflegt und in die pbc-erding2-Website eingebettet.

### Quellprojekt und Deployment-Ziele

| Eigenschaft  | Wert                                                              |
|--------------|-------------------------------------------------------------------|
| Quellprojekt | `C:\Daten\Projects\pbc-pool-app\`                                |
| Master-Datei | `pbc-pool-app\index.html` (gesamte App, HTML + CSS + JS)         |
| GitHub       | `github.com/chrisgitti/pbc-pool-app`                             |
| Pflege-Skill | `/pbced-billardapp next` / `/pbced-billardapp fallback`          |

Die App wird manuell in zwei Zielorte innerhalb von `pbc-erding2` kopiert:

| Zielort       | Pfad                                         | URL (Entwurf)                                              |
|---------------|----------------------------------------------|------------------------------------------------------------|
| Next.js-Build | `public/spiel-spass/billardapp/index.html`   | `weberding.de/pbced/pbced2/spiel-spass/billardapp/`        |
| Fallback-Site | `Fallback/spiel-spass/billardapp/index.html` | `weberding.de/pbced/pbced2/fallback/spiel-spass/billardapp/` |

### Deployment-Workflow

```
pbc-pool-app/index.html   ← Entwicklung und Änderungen immer hier
        │
        ├──▶  Copy-Item  ──▶  pbc-erding2/public/spiel-spass/billardapp/index.html
        │                           │
        │                     npm run build
        │                           │
        │                     out/spiel-spass/billardapp/  ──▶  FTP → weberding.de
        │
        └──▶  Copy-Item  ──▶  pbc-erding2/Fallback/spiel-spass/billardapp/index.html
                                    │
                                FTP → weberding.de/pbced/pbced2/fallback/
```

### Online-Modus: WebSocket-Relay (pbc-relay / Render.com)

Für den Zwei-Spieler-Online-Modus betreibt die App einen eigenen Relay-Server.
Der Relay hat keine Spiellogik – er leitet Nachrichten zwischen zwei Clients blind weiter.

| Eigenschaft     | Wert                                        |
|-----------------|---------------------------------------------|
| Projekt         | `C:\Daten\Projects\pbc-relay\relay.js`     |
| GitHub          | `github.com/chrisgitti/pbc-relay`           |
| Plattform       | Render.com (Pro Plan, Node.js + `ws`)       |
| WebSocket-URL   | `wss://pbc-relay.onrender.com`              |
| Umfang          | ~60 Zeilen                                  |

```
Browser (Host)                  Render.com                Browser (Gast)
      │                        ┌──────────┐                     │
      │──── WebSocket ─────────│ pbc-relay│──── WebSocket ──────│
      │       create/join      │  relay.js│      start/settings │
      │       shot/sync ──────▶│          │▶──── shot/sync ──── │
      │       disconnect       └──────────┘      disconnect      │
```

### Raumverwaltung

```
Host öffnet Raum  →  Server generiert 6-stelligen Code (A–Z, 2–9, ohne 0/O/1/I)
                     Server speichert: { host: ws, guest: null, hostName }
Gast tritt bei   →  Server verbindet Host + Gast → sendet 'start' an beide
Verbindung trennt →  Server löscht Raum, sendet 'disconnect' an Gegner
```

### Nachrichtenprotokoll

| Nachricht          | Richtung               | Bedeutung                                                    |
|--------------------|------------------------|--------------------------------------------------------------|
| `create`           | Client → Server        | Host erstellt Raum (`name`)                                 |
| `created`          | Server → Host          | Raumcode bestätigt (`code`, `role: 'host'`)                 |
| `join`             | Client → Server        | Gast tritt bei (`code`, `name`)                             |
| `start`            | Server → beide         | Spiel beginnt (`role`, `opponentName`)                      |
| `spectate`         | Client → Server        | Zuschauer tritt bei (`code`, `name`)                        |
| `spectating`       | Server → Zuschauer     | Zuschauen bestätigt                                         |
| `spectator_joined` | Server → Host          | Neuer Zuschauer verbunden → Host sendet `snapshot`          |
| `snapshot`         | Host → alle            | Vollständiger Spielzustand für neu verbundene Zuschauer     |
| `preview`          | aktiver Spieler → alle | Live-Zielwinkel, Kraft, Effet (X/Y), Queue-Winkel, Ballposition (~12 Hz) |
| `settings`         | Host → Gast            | Spielkonfiguration: Variante, Rack-Typ, Kugelanzahl, Gewinnspiele |
| `shot` u. a.       | Host ↔ Gast + Zusch.   | Stoß-Sync und Spielzustand (broadcast an alle im Raum)      |
| `disconnect`       | Server → alle          | Verbindungsabbruch eines Spielers                           |
| `ping`/`pong`      | Client ↔ Server        | Keep-alive

</details>

---

## Sonstiges

_Raum für aktuelle Anmerkungen der Autoren – nicht versioniert, kann jederzeit
überschrieben werden._

### Offener Punkt: Strategische Ausrichtung bezüglich der Aufnahme von Freizeitspielern

**Was spricht gegen eine zu offene Aufnahme**

Ein berechtigter Einwand ist, dass die Zahl der uns – insbesondere zu den Trainingszeiten –
zur Verfügung stehenden Billardtische begrenzt ist. Wenn viele Mitglieder ohne sportlichen
Anspruch dauerhaft Tische belegen, kann dies den Trainingsbetrieb der Liga- und
Turnierspieler beeinträchtigen.

Außerdem besteht das Risiko, dass der Verein für manche Interessierte vor allem als günstige
Spielmöglichkeit wahrgenommen wird. Das kann zu einer eher konsumorientierten Haltung führen:
Man nutzt die Infrastruktur, beteiligt sich aber kaum am Vereinsleben, an Arbeitseinsätzen,
Organisation oder sportlicher Weiterentwicklung.

Auch für die Außendarstellung kann eine zu beliebige Aufnahme problematisch sein, wenn der
Verein dadurch sein sportliches Profil verliert. Ein Billardverein sollte nicht nur
„Freizeitlocation", sondern auch Trainings-, Mannschafts- und Wettkampfgemeinschaft bleiben.

**Argumente für eine offene Vereinsstrategie**

Ein eingetragener Verein lebt grundsätzlich von Offenheit, Gemeinschaft und Teilhabe.
Gerade ein Sportverein sollte nicht zu früh zwischen „wertvollen" und „weniger wertvollen"
Mitgliedern unterscheiden. Viele spätere Liga- oder Turnierspieler beginnen zunächst als
Freizeitspieler ohne konkrete sportliche Ambitionen. Eine offene Aufnahme kann daher der
Einstieg in sportliche Entwicklung von Mitgliedern und insbesondere auch deren Kindern sein.

Auch wirtschaftlich ist Wachstum wichtig. Mitgliedsbeiträge schaffen Spielraum für bessere
Ausstattung, Pflege der Tische, Jugendarbeit, Öffentlichkeitsarbeit, Turniere und langfristige
Vereinsentwicklung. Wenn der Verein aktuell nur rund 30 Mitglieder hat und die Mitgliederzahl
seit längerer Zeit stagniert oder eher rückläufig ist, spricht das eher gegen eine stark
restriktive Aufnahmepolitik.

Zudem stärkt eine größere Mitgliederbasis das Vereinsleben: mehr helfende Hände, mehr
Kontakte, mehr Sichtbarkeit, mehr Nachwuchs und eine lebendigere Atmosphäre. Gerade für
einen neuen Webauftritt wäre eine zu defensive Botschaft wenig einladend.

**Persönliche Bewertung**

Die Sorge um begrenzte Tischkapazitäten ist nachvollziehbar. Sie spricht aber nicht zwingend
gegen eine offene Aufnahme, sondern eher für eine klare Organisation der Trainingszeiten.
Sofern sich künftig eine unverhältnismäßig hohe Teilnahme am Trainingsbetrieb ergeben sollte,
können bestimmte Zeiten primär für Ligaspieler, Mannschaftstraining oder Turniervorbereitung
reserviert werden. Daneben können offene Trainingszeiten, Schnuppertrainings und
Freizeitspielzeiten angeboten werden.

Insgesamt spricht mehr für eine offene, aber strukturierte Vereinsstrategie. Der PBC Erding e.V.
sollte grundsätzlich offen für neue Mitglieder sein, auch wenn diese zunächst nur
freizeit- oder hobbyorientiert spielen. Entscheidend ist nicht, neue Interessierte
auszubremsen, sondern sie sinnvoll in die Vereinsgemeinschaft einzubinden und für stärkere
Beteiligung zu begeistern.

**Empfehlung:** Auf der Startseite sollte nicht abschreckend oder restriktiv kommuniziert
werden, sondern offen und einladend. Die Aufnahme in den Verein kann anschließend im
persönlichen Kontakt erfolgen, ergänzt durch klare Regeln zu Trainingszeiten, Tischbelegung
und Rücksichtnahme auf Liga- und Mannschaftsbetrieb.

---

_Sportliche Grüße – Christian_

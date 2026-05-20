import { getNextMittwochsturnier } from './turnier-utils'

// Nächstes Mittwochsturnier – zur Build-Zeit berechnet
const _nextT     = getNextMittwochsturnier(new Date())
const _nextTISO  = _nextT.toISOString().slice(0, 10)
const _nextTDE   = _nextT.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
const _nextTWd   = _nextT.toLocaleDateString('de-DE', { weekday: 'long' })

// ─── News ────────────────────────────────────────────────────────────────────

export type NewsImage = {
  src: string   // Dateiname in /images/chronik/, z.B. "2011-04-12.jpg"
  alt: string
}

export type NewsItem = {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  content: string   // Volltext des Artikels (Absätze durch \n\n getrennt)
  images?: NewsImage[]
}

export const news: NewsItem[] = [
  {
    id: '10',
    title: 'Trainer-Fortbildung: Bart Claessen erfolgreich zertifiziert',
    excerpt:
      'Unser Vereinsmitglied Bart Claessen hat die Ausbildung zum Trainer-Assistenten der Deutschen Billard Union erfolgreich abgeschlossen. Der gesamte Verein gratuliert herzlich!',
    date: '2026-05-09',
    category: 'Vereinsleben',
    slug: 'trainer-fortbildung-bart-claessen',
    content: `Wir freuen uns, bekanntzugeben, dass unser Vereinsmitglied Bart Claessen die Ausbildung zum Trainer-Assistenten erfolgreich abgeschlossen hat.

Im Rahmen der aktuellen Novellierung der Trainer-Richtlinien absolvierte Bart gemeinsam mit 13 weiteren Teilnehmern eine intensive Schulung (60 Unterrichtseinheiten). Geleitet wurde die Fortbildung von Patrick Hummel – Trainer A Leistungssport und offizieller Ausbilder und Prüfer der Deutschen Billard Union (DBU).

Die Schwerpunkte der Ausbildung:
– Materialkunde: Tische, Tuche und Queues
– Technik: Körperhaltung und Stoßarten
– Trainingsmethodik: Wissen effektiv vermitteln

„Die Ausbildung war intensiv und lehrreich. Es ist toll zu sehen, wie viel Präzision und Systematik hinter einem guten Training stecken."

Der gesamte Verein gratuliert Bart herzlich zu diesem Erfolg!`,
  },
  {
    id: '11',
    title: 'Saisonabschluss: Erding III beendet die Kreisliga 2025/26',
    excerpt:
      'Mit einer 4:6-Niederlage beim BSV 1912 München III schließt PBC Erding III die Kreisliga-Saison 2025/26 ab: 1 Sieg, 0 Unentschieden, 9 Niederlagen.',
    date: '2026-05-09',
    category: 'Liga',
    slug: 'saisonabschluss-erding-3-2025-26',
    content: `Mit der Auswärtspartie beim BSV 1912 München III am 9. Mai 2026 hat PBC Erding III die Kreisliga-Saison 2025/26 beendet. Die Begegnung endete 4:6 aus Erding-Sicht – ein Ergebnis, das den Saisonverlauf der dritten Mannschaft treffend widerspiegelt.

Die Bilanz der Saison 2025/26:

– 1 Sieg · 0 Unentschieden · 9 Niederlagen
– Frames: 36:64 (Differenz: −28)
– Punkte: 2:18 – Platz 6

Für Erding III war es eine Saison voller Lernkurven. Die Mannschaft sammelte wertvolle Erfahrung gegen starke Gegner und entwickelte sich spielerisch weiter – eine gute Grundlage für die kommende Runde.

Ein Dank gilt allen Spielerinnen und Spielern für ihren Einsatz über die gesamte Saison – auf eine starke nächste Runde!`,
  },
  {
    id: '9',
    title: 'Saisonabschluss: Erding II beendet die Kreisliga mit makelloser Bilanz',
    excerpt:
      'Mit einem 7:3-Heimsieg gegen BSV PB München IV schließt PBC Erding II die Saison 2025/26 ungeschlagen ab: 10 Siege, 0 Niederlagen, Platz 1 in der Kreisliga Oberbayern D.',
    date: '2026-05-16',
    category: 'Liga',
    slug: 'saisonabschluss-erding-2-2025-26',
    content: `Mit einem verdienten 7:3-Heimsieg gegen BSV PB München IV hat PBC Erding II am 16. Mai 2026 eine außergewöhnliche Saison zu Ende gespielt – und dabei die Kreisliga Oberbayern D ohne eine einzige Niederlage abgeschlossen.

Die Bilanz der Saison 2025/26:

– 10 Siege · 0 Unentschieden · 0 Niederlagen
– Frames: 71:29 (Differenz: +42)
– Punkte: 20:0 – Platz 1

Erding II dominierte die Liga von Spieltag eins an. Kein Gegner konnte die Mannschaft bezwingen, und mit 71 gewonnenen Frames bei nur 29 abgegebenen unterstrich das Team seine überragende Stärke in dieser Saison.

Herzlichen Glückwunsch an die gesamte Mannschaft zu dieser starken Leistung!`,
  },
  {
    id: '8',
    title: 'Saisonabschluss: PBC Erding I gewinnt 8:2 und beendet die Bezirksliga stark',
    excerpt:
      'Mit einem überzeugenden 8:2-Heimsieg gegen 1. PBC Freising III verabschiedet sich PBC Erding I aus der Bezirksliga-Saison 2025/26: 6 Siege, 1 Remis, 3 Niederlagen.',
    date: '2026-05-09',
    category: 'Liga',
    slug: 'saisonabschluss-erding-1-2025-26',
    content: `Mit einem starken 8:2-Heimsieg gegen 1. PBC Freising III hat PBC Erding I am 9. Mai 2026 die Bezirksliga-Saison 2025/26 abgeschlossen. Ein verdienter Schlusspunkt nach einer insgesamt soliden Runde.

Die Saison in der Bezirksliga Oberbayern-Nord umfasste zehn Spieltage – fünf Auswärts-, fünf Heimspiele. Die Bilanz am Ende:

– 6 Siege · 1 Unentschieden · 3 Niederlagen
– Frames: 52:48 (Differenz: +4)
– Punkte: 13:7

Der Saisonverlauf zeigte zwei Gesichter: In der Hinrunde holte die Mannschaft vier Auswärtssiege in Serie (München III, Mühldorf III, Mainburg II, Freising III) und schuf damit eine solide Basis. Die Rückrunde gestaltete sich uneinheitlicher – einem deutlichen Heimsieg gegen Moosburg (6:4) und einem respektablen Remis gegen Mühldorf III (5:5) standen zwei Heimniederlagen gegenüber.

Den stärksten Auftritt des Jahres lieferte die Mannschaft heute: Das 8:2 gegen Freising III war die höchste Erding-Marge der gesamten Saison und ein würdiger Schlusspunkt.

Herzlichen Glückwunsch an die gesamte Mannschaft und die Verantwortlichen – auf eine gute nächste Saison!`,
  },
  {
    id: '7',
    title: 'Mittwoch-Cup April – Seppi Bendl holt den Sieg',
    excerpt:
      '8 Teilnehmer, 8-Ball auf drei Gewinnsätze: Josef „Seppi" Bendl vom BC 73 Pfeffenhausen gewinnt die April-Ausgabe des Mittwoch-Cups.',
    date: '2026-04-29',
    category: 'Turnier',
    slug: 'mittwoch-cup-april-2026',
    content: `Die April-Ausgabe des Mittwoch-Cups fand am 29. April 2026 im Bowling Castle Erding statt – und das trotz der Champions-League-Halbfinals an diesem Abend. Acht Teilnehmer ließen sich den Turnierreiz nicht nehmen und lieferten spannende Duelle im 8-Ball-Modus auf drei Gewinnsätze.

Das Siegertreppchen:
– Platz 1: Josef „Seppi" Bendl 🥇 (BC 73 Pfeffenhausen)
– Platz 2: Ludwig Weidinger 🥈 (PBC Erding)
– Platz 3: Urban Baumschlager 🥉 (PBC Erding)
– Platz 4: Christian Hütter (PBC Simbach)

Herzlichen Glückwunsch an alle Platzierten – und ein besonderes Dankeschön an Björn für die Organisation und das Team des Bowling Castle Erding für den reibungslosen Abend!

Der nächste Mi-Cup findet am 27. Mai statt. Anmeldungen über die Mi-Cup-WhatsApp-Gruppe oder per E-Mail an turnier@pbc-erding.de – wir freuen uns auf eure Teilnahme!`,
  },
  {
    id: '1',
    title: 'PBC Erding zieht ins Bowling Castle Erding um',
    excerpt:
      'Ab dem 4. Januar 2026 zieht der PBC Erding ins Bowling Castle Erding um. Dank an Rudi Mathes, Stefan Knoll und Winni sowie Familie Meindl und das Stardust-Team.',
    date: '2025-12-20',
    category: 'Verein',
    slug: 'umzug-bowling-castle-erding',
    content: `Ab dem 4. Januar 2026 hat der Pool Billard Club Erding e.V. eine neue sportliche Heimat: das Bowling Castle Erding in der Robert-Bosch-Straße 3 – mit Bowling, modern ausgestatteten Billardtischen sowie 3D-Minigolf unter einem Dach.

Schnuppertraining: sonntags 13–17 Uhr sowie dienstags und donnerstags ab 18 Uhr. Interessierte können gerne spontan vorbeikommen oder sich unter info@pbc-erding.de melden.

Der Vorstand dankt Rudi Mathes, Stefan Knoll und Winni vom Bowling Castle für die unkomplizierte Zusammenarbeit beim Übergang sowie Familie Meindl und dem gesamten Stardust-Team für acht gemeinsame Jahre.

Neue Mitglieder aller Spielstärken sind herzlich willkommen!`,
  },
  {
    id: '2',
    title: 'Herzlichen Dank an das Stardust-Team',
    excerpt:
      'Der PBC Erding bedankt sich bei Sabin, Andy und Paul sowie dem gesamten Stardust-Team für acht Jahre Unterstützung. Letztes Training am Donnerstag, 1. Januar 2026.',
    date: '2025-12-20',
    category: 'Vereinsleben',
    slug: 'herzlichen-dank-stardust',
    content: `Der PBC Erding bedankt sich beim Stardust-Team für acht Jahre Unterstützung des Poolbillards in der Region. Das letzte Training im Stardust findet am Donnerstag, 1. Januar 2026, um 18:00 Uhr statt.

Herzlichen Dank an Sabin, Andy und Paul sowie das gesamte Stardust-Team!`,
  },
  {
    id: '3',
    title: `Mittwochsturnier – Nächster Termin: ${_nextTWd}, ${_nextTDE}`,
    excerpt:
      'Jeden letzten Mittwoch im Monat: offenes Vereinsturnier mit Gruppen- und KO-Phase. Startgebühr 10 €, volle Ausschüttung für Platz 1 bis 4.',
    date: _nextTISO,
    category: 'Turnier',
    slug: 'mittwochsturnier',
    content: `Jeden letzten Mittwoch im Monat lädt der PBC Erding zum Mittwochsturnier – offen für Vereins- und Hobbyspieler. Turnierbeginn ist um 18:30 Uhr im Bowling Castle Erding, Robert-Bosch-Straße 3, 85055 Erding.

Voranmeldung erforderlich! Die Teilnehmerzahl ist auf maximal 32 Spielerinnen und Spieler begrenzt.

Turnierdetails:
– Beginn: 18:30 Uhr
– Offenes Turnier für Vereins- und Hobbyspieler
– Max. 32 Teilnehmer
– Startgebühr: 10 €
– Voranmeldung erforderlich

Turnierformat: In der Gruppenphase werden alle Teilnehmer auf Gruppen aufgeteilt. Gruppensieger und Gruppenzweite qualifizieren sich für die anschließende KO-Phase, in der die Platzierungen 1 bis 4 ausgespielt werden.

Preisgeld: Die gesamte Startgebühr wird vollständig und ohne Abzug an die vier besten Platzierten ausgezahlt. Wer sich ins Halbfinale kämpft, spielt um echtes Preisgeld.

Nächster Termin: ${_nextTWd}, ${_nextTDE} · 18:30 Uhr · Bowling Castle Erding`,
  },
  {
    id: '6',
    title: 'Mittwoch-Cup: Zweiter Abend der Serie – Hütti holt den Sieg',
    excerpt:
      '16 Spieler, 10-Ball auf 4 Gewonnene, vier Vierergruppen: Der zweite Abend der Erdinger Mittwoch-Cup-Serie war wieder in kürzester Zeit ausgebucht.',
    date: '2026-03-25',
    category: 'Turnier',
    slug: 'mittwoch-cup-zweiter-abend-maerz-2026',
    content: `Zweiter Abend der Erdinger Mittwoch-Cup-Serie – und wieder war das Feld kurze Zeit nach der Ankündigung mit 16 Spielerinnen und Spielern voll besetzt. Das zeigt: Das Format trifft den Nerv der Vereinsmitglieder.

Das Los entschied diesmal für 10-Ball – gespielt wurde auf vier Gewinnpartien. Die 16 Teilnehmer wurden in vier Vierergruppen aufgeteilt, in denen zunächst jeder gegen jeden antrat. Die Gruppen-Ersten und -Zweiten qualifizierten sich für die Endrunde, in der die Platzierungen 1 bis 4 ausgespielt wurden.

Das Siegertreppchen:
– Platz 1: Hütti 🥇
– Platz 2: Leon Bozbel 🥈
– Platz 3 & 4: Andy Galsterer und Markus Bauer 🥉

Herzlichen Glückwunsch an alle Platzierten!

Ein besonderer Dank gilt Björn, der den Abend wieder souverän organisiert und geleitet hat, sowie dem Team des Bowling Castle Erding für die bereitgestellten Tische und den reibungslosen Service.

Der nächste Cup findet am Mittwoch, 29. April 2026, statt. Anmeldung unter: turnier@pbc-erding.de – wer dabei sein möchte, sollte sich früh melden, die Plätze sind schnell vergeben.`,
  },
  {
    id: '5',
    title: 'Spieltag im Bowling Castle – Teamgeist an allen Tischen',
    excerpt:
      'Vier Tische, volle Konzentration, lautstarke Unterstützung: Eindrücke von einem Heimspieltag des PBC Erding im Bowling Castle.',
    date: '2026-04-05',
    category: 'Liga',
    slug: 'heimspieltag-bowling-castle-april-2026',
    content: `Vier Tische gleichzeitig in Betrieb, Spieler in höchster Konzentration, Zuschauer an den Längsseiten – so sieht ein Spieltag beim Pool Billard Club Erding aus. Beim jüngsten Heimspieltag im Bowling Castle Erding zeigte der Verein, was Mannschaftsbillard ausmacht: technische Präzision, mentale Stärke und echter Teamgeist.

An jedem Tisch lief eine eigene Partie, und doch spürte man die Verbundenheit zwischen den Spielern. Wer gerade nicht selbst am Queue stand, feuerte die Mitspieler an, verfolgte kritische Frames und zog Lehren für die eigene Partie. Genau diese Atmosphäre – konzentriert und zugleich gemeinschaftlich – ist es, die den Ligaalltag beim PBC Erding von einem reinen Trainingsbetrieb unterscheidet.

Das Bowling Castle bietet mit seinen hochwertigen Tischen und der professionellen Beleuchtung optimale Bedingungen für anspruchsvolle Ligapartien. Die großzügige Raumaufteilung erlaubt es, mehrere Partien parallel zu spielen, ohne dass sich die Tische gegenseitig beeinflussen – ein echter Vorteil gegenüber früheren Spielstätten.

Der PBC Erding nimmt in der Saison 2025/26 mit drei Mannschaften am Spielbetrieb des Bayerischen Billardverbands teil. Heimspieltage im Bowling Castle sind für Zuschauer und Interessierte jederzeit offen – wer Pool Billard im echten Wettkampfumfeld erleben möchte, ist herzlich willkommen.`,
  },
  {
    id: '4',
    title: 'Spieltag gegen Dingolfing',
    excerpt:
      'Ligabetrieb und Spieltage bleiben ein zentraler Teil des Vereinslebens beim PBC Erding.',
    date: '2024-04-14',
    category: 'Liga',
    slug: 'spieltag-gegen-dingolfing',
    content: `Ligabetrieb, Spieltage, Mannschaftsgeist – das ist der Kern des sportlichen Alltags beim Pool Billard Club Erding. Spieltage wie das Aufeinandertreffen mit dem BC Dingolfing zeigen, worum es im Vereinsbillard wirklich geht: um faire Wettkämpfe, kollegiale Atmosphäre und den gemeinsamen Spaß am Sport.

Ligaspiele im Poolbillard folgen einem klaren Format: Jede Mannschaft stellt ihre Spieler auf, die in festgelegten Einzel- und Doppelpartien gegeneinander antreten. Jeder gewonnene Frame zählt, jeder Punkt kann am Ende über Aufstieg oder Abstieg entscheiden. Dabei ist Billard zwar ein Einzelsport – aber als Mannschaft anzutreten, gemeinsam zu fiebern und sich gegenseitig anzufeuern, das macht den Reiz des Ligabetriebs aus.

Der PBC Erding nimmt mit seinen Mannschaften am Spielbetrieb des Bayerischen Billardverbands teil. Die Heimspieltage finden an den regulären Trainingsstandorten statt und sind für Zuschauer und Interessierte jederzeit zugänglich.

Wer selbst Teil des Mannschaftssports werden möchte, ist herzlich eingeladen, beim offenen Schnuppertraining vorbeizuschauen. Gemeinsam am Tisch stehen – beim PBC Erding ist das mehr als ein Satz.`,
    images: [
      { src: '2024-04-14-2.jpg', alt: 'Spieltag gegen BC Dingolfing 2024' },
    ],
  },

  // ── Historische Artikel (2010–2024) ────────────────────────────────────────
  {
    id: 'h01',
    title: 'Bezirksmeisterschaft Senioren 10-Ball in Erding',
    excerpt: 'Der PBC Erding richtet die Bezirksmeisterschaft Senioren 10-Ball aus – ein Highlight in der Vereinsgeschichte.',
    date: '2024-04-14',
    category: 'Turnier',
    slug: 'bezirksmeisterschaft-senioren-2024',
    content: `Der PBC Erding war Gastgeber der Bezirksmeisterschaft Senioren 10-Ball in Erding. Die Veranstaltung brachte Spielerinnen und Spieler aus der ganzen Region zusammen und bot spannende Wettkämpfe auf hohem Niveau.

10-Ball ist eine der anspruchsvollsten Pool-Billard-Disziplinen: Die Kugeln müssen in aufsteigender Reihenfolge versenkt werden, die 10 zählt als Schlusskugel. Das Format stellt hohe Anforderungen an Taktik, Präzision und mentale Stärke.

Der Verein freute sich, eine solche Meisterschaft ausrichten zu dürfen, und dankt allen Teilnehmern, Helfern und Unterstützern für einen reibungslosen Turniertag.`,
    images: [
      { src: '2024-04-14.jpg', alt: 'Bezirksmeisterschaft Senioren 10-Ball Erding 2024' },
    ],
  },
  {
    id: 'h02',
    title: 'DiCup 23/24 – Turnierserie für Jedermann',
    excerpt: 'Der DiCup startet in die Saison 23/24 – eine wöchentliche Turnierserie im Stardust, offen für alle.',
    date: '2023-10-15',
    category: 'Turnier',
    slug: 'dicup-2324',
    content: `Der DiCup geht in die nächste Runde: Die Turnierserie der Saison 2023/24 startet wieder jeden Dienstag im Stardust Casino Erding. Das Format ist offen für alle – Vereinsmitglieder ebenso wie Gastspieler.

Gespielt wird abwechselnd 8-Ball und 9-Ball im Gruppen- und KO-System. Das Handicap-System sorgt dafür, dass Spieler aller Stärken faire Chancen haben und die Spannung bis zum Finale erhalten bleibt.

Startgeld, genaue Startzeiten und Anmeldemodus werden zu Beginn jedes Turniers bekanntgegeben. Alle bisherigen Teilnehmer freuen sich auf einen weiteren spannenden DiCup-Winter.`,
    images: [
      { src: '2023-10-15.jpg', alt: 'DiCup 23/24 – Einladungsflyer' },
    ],
  },
  {
    id: 'h03',
    title: 'Stardust Open 2023',
    excerpt: 'Das Stardust Open 2023 lädt alle Pool-Billardspieler der Region zu einem offenen Turnier ins Stardust Casino ein.',
    date: '2023-10-15',
    category: 'Turnier',
    slug: 'stardust-open-2023',
    content: `Das Stardust Open 2023 öffnet seine Tore für alle Pool-Billardspieler der Region. Das offene Turnier findet im Stardust Casino Erding statt und bietet sowohl erfahrenen Spielern als auch Amateuren eine attraktive Bühne.

Gespielt wird im KO-System auf mehreren hochwertigen Poolbillardtischen. Das Startgeld wird vollständig als Preisgeld ausgeschüttet. Meldeformulare und weitere Details stehen auf der Vereins-Website zur Verfügung.

Der PBC Erding freut sich auf rege Beteiligung und wünscht allen Teilnehmern viel Erfolg und faire Partien.`,
    images: [
      { src: '2023-10-15-2.jpg', alt: 'Stardust Open 2023 – Turnierankündigung' },
    ],
  },
  {
    id: 'h04',
    title: 'Stardust Open 2022',
    excerpt: 'Das Stardust Open 2022 – ein offenes Turnier für Pool-Billardspieler aus der ganzen Region.',
    date: '2022-11-03',
    category: 'Turnier',
    slug: 'stardust-open-2022',
    content: `Das Stardust Open 2022 zog wieder zahlreiche Pool-Billardspieler aus der Region ins Stardust Casino Erding. Das offene Turnier bot spannende Partien in verschiedenen Disziplinen und ein vollständig ausgeschüttetes Preisgeld.

Das Turnier wurde im bewährten KO-Format ausgetragen. Gespielt wurde auf den hochwertigen K-Steel-Poolbillardtischen des Stardust, die beste Voraussetzungen für ein faires und spannendes Turnier boten.

Der PBC Erding dankt dem Stardust-Team für die Unterstützung und allen Teilnehmern für ihre sportliche Leistung.`,
    images: [
      { src: '2022-11-03.jpg', alt: 'Stardust Open 2022 – Turnierflyer' },
    ],
  },
  {
    id: 'h05',
    title: 'Neujahrsturnier am 1. Januar 2022',
    excerpt: 'Kleines Neujahrsturnier am 01.01.2022 – Anwesend 13:30, Beginn 14:00. Startgeld 5 € bei voller Ausschüttung. LG Ludwig',
    date: '2021-12-30',
    category: 'Turnier',
    slug: 'neujahrsturnier-2022',
    content: `Hallo, Billardfreunde! Wir machen am 01.01.2022 ein kleines Neujahrsturnier – siehe Ausschreibung. Anwesend 13:30, Beginn 14:00. Startgeld bei voller Ausschüttung 5 €, Modus je nach Teilnehmeranzahl. Anmeldung hier oder vor Ort.

LG Ludwig`,
    images: [
      { src: '2021-12-30.jpg', alt: 'Neujahrsturnier 1. Januar 2022 – Ankündigung' },
    ],
  },
  {
    id: 'h06',
    title: 'Tournierserienauftakt im Stardust: 14 Spieler, Sepp Scharl gewinnt',
    excerpt: 'Ein gelungener Tournierserienauftakt im Stardust mit 14 Spielern. Platz 1: Scharl Sepp. Nächster Termin: 30.11.2021.',
    date: '2021-10-28',
    category: 'Turnier',
    slug: 'tournierserienauftakt-2021',
    content: `Hallo, es war ein gelungener Tournierserienauftakt im Stardust mit 14 Spielern. Nächster Termin: 30.11.2021.

1. Platz: Scharl Sepp
2. Platz: Dominic Daniel
3./4. Platz: Christian Hütter und Christoph Garhammer (Simbach)`,
    images: [
      { src: '2021-10-28.jpg',   alt: 'Tournierserienauftakt im Stardust Oktober 2021' },
      { src: '2021-10-28-2.jpg', alt: 'Teilnehmer des Tournierserienauftakts Oktober 2021' },
    ],
  },
  {
    id: 'h07',
    title: 'Dienstags-Turnierserie wieder gestartet',
    excerpt: 'Die Dienstags-Turnierserie beim PBC Erding nimmt nach der Pause wieder Fahrt auf.',
    date: '2021-10-03',
    category: 'Turnier',
    slug: 'dienstags-turnierserie-2021',
    content: `Die Dienstags-Turnierserie beim PBC Erding startet nach der langen Pause wieder durch. Jeden Dienstag treffen sich Mitglieder und Gastspieler im Stardust Casino Erding zum Turnier.

Der Modus wechselt wöchentlich zwischen 8-Ball und 9-Ball. Das Handicap-System stellt sicher, dass alle Stärkeklassen faire Chancen haben und die Serie bis zum Ende offen bleibt.

Alle Interessierten sind herzlich eingeladen – einfach dienstags vorbeikommen und mitspielen!`,
    images: [
      { src: '2021-10-03.jpg', alt: 'Dienstags-Turnierserie im Stardust Erding 2021' },
    ],
  },
  {
    id: 'h08',
    title: 'Aktueller Stand der Hausturnierserie',
    excerpt: 'Alle Infos zur Hausturnierserie auf Billard Aktuell.',
    date: '2013-10-09',
    category: 'Turnier',
    slug: 'hausturnierserie-update-2013',
    content: `Alle Infos und aktuellen Stände zu unserer Hausturnierserie am Montag findet Ihr auf Billard Aktuell!`,
  },
  {
    id: 'h09',
    title: 'Neue Presseartikel zur Vereinsmeisterschaft 2013',
    excerpt: 'Neue Artikel des Pressewarts zur Vereinsmeisterschaft 2013 und zu den letzten Jugend-Aktivitäten.',
    date: '2013-07-10',
    category: 'Verein',
    slug: 'presseartikel-vereinsmeisterschaft-2013',
    content: `In der Rubrik „Presse" findet Ihr neue Artikel und Berichte unseres Pressewarts zur Vereinsmeisterschaft 2013 und den letzten Aktivitäten unserer Jugend (Vereinsmeisterschaft, Mannschaftsturnier). Viel Spaß beim Lesen!`,
  },
  {
    id: 'h10',
    title: '2. Mannschaft steigt vorzeitig in die Landesliga auf',
    excerpt: 'Vorzeitiger Aufstieg der 2. Mannschaft in die Landesliga – 8 Punkte Vorsprung nach dem 7. Spieltag.',
    date: '2013-03-18',
    category: 'Liga',
    slug: 'aufstieg-landesliga-2013',
    content: `Nach dem 7. Spieltag in der Bezirksliga steht der erste Aufsteiger dieser Saison fest: Gratulation an unsere 2. Mannschaft für den vorzeitigen Aufstieg in die Landesliga! Nach zwei hart umkämpften Siegen am letzten Samstag und dem Punkteverlust der Verfolger Freising 3 und Hoaße Greim hat sich unsere Zweite mit 8 Punkten Vorsprung uneinholbar den ersten Platz in der Bezirksliga Oberbayern-Nord gesichert.

Auch unsere 1. Mannschaft in der Verbandsliga hat noch Chancen, den Relegationsplatz zu erreichen, und im Spitzenspiel gegen den BSV München sogar noch die Möglichkeit, Platz 1 zu erobern. Unsere Mannschaften 3 und 4 in der Kreisliga sowie 6 in der Kreisklasse haben ebenfalls gute Chancen über einen direkten Aufstiegsplatz oder einen Relegationsplatz noch den Aufstieg in die nächsthöhere Spielklasse zu sichern. Es bleibt also bis zum Ende spannend!`,
  },
  {
    id: 'h11',
    title: 'HC-Turnierserie startet am 19. März 2013 im Stardust',
    excerpt: 'HC-Turnierserie startet ab 19. März 2013 jeden Dienstag ab 19:30 Uhr im Stardust Spielsalon Erding.',
    date: '2013-02-28',
    category: 'Turnier',
    slug: 'hc-turnierserie-2013',
    content: `Die HC-Turnierserie startet am 19. März 2013 im Stardust Spielsalon in Erding – jeden Dienstag ab 19:30 Uhr (Rennweg 59, 85435 Erding).

Startgebühr: 10 € oder 5 € ohne Gewinnausschüttung
(plus 3 € Endturnier / 1 € 9-Ball-Jackpot bis max. 50 € / 1 € Bearbeitung / 5 € Tagesausschüttung)

Spielmodus: Gruppenphase, danach Einfach-K.O. – 8-Ball und 9-Ball im Wechsel, mindestens 3 Matches pro Turnier.
Gewinnausschüttung: 1. Platz 50 %, 2. Platz 30 %, 3. & 4. Platz je 10 %.

Die Serie umfasst 20 Turniertage bis zum Endturnier am 3. August 2013. Die besten 16 Spieler mit mindestens 8 Teilnahmen qualifizieren sich für das Jackpot-Endturnier. Gesamtrangliste: 10 Punkte pro Teilnahme, 5 Punkte pro Sieg.`,
  },
  {
    id: 'h12',
    title: 'Trainingsbetrieb nach Sommerpause wieder aufgenommen',
    excerpt: 'Die Sommerpause ist vorbei, es gibt wieder Training!',
    date: '2012-09-14',
    category: 'Verein',
    slug: 'sommerpause-2012',
    content: `Die Sommerpause ist vorbei, es gibt wieder Training!

Jeden Mittwoch im Stardust Spielsalon in Erding (Rennweg 59):
– Jugendliche: 18:30 – 20:00 Uhr
– Erwachsene: 19:00 – 22:00 Uhr

Wer Lust hat, kann gerne zu einem Probetraining vorbeischauen!`,
  },
  {
    id: 'h13',
    title: 'Neue Pool-Billard-Turnierserie im Stardust Erding',
    excerpt: 'Jeden Dienstag ab 19:30 Uhr: neue Turnierserie im Stardust Spielsalon auf neun K-Steel-Tischen.',
    date: '2012-08-01',
    category: 'Turnier',
    slug: 'turnierserie-stardust-2012',
    content: `Gespielt wird auf 9 frisch bezogenen K-Steel-Pooltischen!

Jeden Dienstag ab 19:30 Uhr im Stardust Spielsalon, Rennweg 59, 85435 Erding.

Startgebühr: 10 € / 5 € ohne Gewinnausschüttung
Gewinnausschüttung: 1. Platz 50 % / 2. Platz 30 % / 3. & 4. Platz 10 %
(3 € Endturnier / 1 € 9-Ball-Jackpot bis max. 50 € / 1 € Bearbeitungsgebühr / 5 € Tagesausschüttung)

Modus: Gruppenphase, danach Einfach-K.O. (min. 3 Matches pro Turnier) – 8-Ball und 9-Ball im Wechsel.

Termine: 04.09.2012 bis 29.01.2013 (wöchentlich dienstags), Endturnier: 02.02.2013. Die Serie umfasst 20 Turniertage. Die besten 16 Spieler mit mindestens 8 Teilnahmen qualifizieren sich für das Jackpot-Endturnier. Gesamtrangliste: 10 Punkte pro Teilnahme / 5 Punkte pro gewonnenem Match.

HC-Regelung wird vor Ort erklärt. Weitere Informationen und Ergebnisse auf Facebook und im BA-Forum.`,
  },
  {
    id: 'h14',
    title: 'Spiellokal wechselt ins Stardust Spielsalon Erding',
    excerpt: 'Nach dem Beschluss der Mitgliederversammlung verlegt der PBC Erding sein Training in den Stardust Spielsalon.',
    date: '2012-04-12',
    category: 'Verein',
    slug: 'lokalwechsel-stardust-2012',
    content: `Liebe Mitglieder, vielen Dank für euer zahlreiches Erscheinen gestern auf der außerordentlichen Mitgliederversammlung und der eindeutigen Entscheidung. Im Namen des gesamten Vorstands möchte ich mich an dieser Stelle auch noch einmal ganz herzlich bei Günter und Heike bedanken, ohne die der Start unseres Vereins und die erfolgreichen ersten Jahre so nicht möglich gewesen wären. Wir hoffen aber auch, dass die nun anstehenden Veränderungen unseren Verein weiter vorwärts bringen werden, und freuen uns auf eine harmonische Zusammenarbeit mit Frau und Herrn Meindl. Für Fragen rund um den Wechsel unseres Spiellokals stehen wir euch natürlich gerne zur Verfügung.

Das Mittwochstraining wird ab nächster Woche im Stardust Spielsalon in Erding stattfinden. Ludwig wird sich bei euch melden, wie genau das neue Trainingssystem bzw. die Trainingszeiten und -gruppen aussehen werden. Das Modell der „freien Trainingskarte" ist ab sofort aufgehoben, der Vorstand wird sich um einen sinnvollen Ersatz bemühen. Auch bezüglich der geplanten Hausturnierserie wird sich Ludwig bei euch rechtzeitig melden.

Mit sportlichem Gruß, Marcel`,
  },
  {
    id: 'h15',
    title: 'Außerordentliche Mitgliederversammlung zum Lokalwechsel',
    excerpt: 'Einladung zur außerordentlichen Mitgliederversammlung am 11. April 2012 – Thema: möglicher Wechsel des Spiellokals.',
    date: '2012-04-03',
    category: 'Verein',
    slug: 'mitgliederversammlung-2012',
    content: `Am Mittwoch, den 11. April 2012, findet eine außerordentliche Mitgliederversammlung zur Zukunft unseres Vereins, im Speziellen zum Thema „Wechsel des Spiellokals" statt. Falls jemand noch keine Einladung per E-Mail erhalten hat, kann er sich gerne via kassenwart@pbc-erding.de melden. Der Vorstand hofft auf euer zahlreiches Erscheinen!

Marcel Kupsch, Kassenwart PBC Erding e.V.`,
  },
  {
    id: 'h16',
    title: '2. Offene Erdinger Stadtmeisterschaft am 2. Oktober',
    excerpt: 'Der PBC Erding richtet die 2. Offene Erdinger Stadtmeisterschaft aus – Double-Elimination mit 32 Startplätzen.',
    date: '2011-09-09',
    category: 'Turnier',
    slug: 'erdinger-stadtmeisterschaft-2011',
    content: `Hallo Billardfreunde! Der PBC Erding veranstaltet dieses Jahr noch die 2. Offene Erdinger Stadtmeisterschaft.

Das Turnier findet am Sonntag, dem 2. Oktober 2011, um 13:00 Uhr statt (Anwesenheit ab 12:30 Uhr) im Billard Cafe Neumayr in Erding.

Gespielt wird im 32er Feld (Doppel-K.O.) – 8-Ball auf 5 Gewinnersätze (Gewinnerseite) und 9-Ball auf 7 Gewinnersätze (Verliererseite). Anmeldung direkt im Billard Cafe Neumayr.`,
  },
  {
    id: 'h17',
    title: 'Dienstags-Cup startet in die 8. Runde',
    excerpt: 'Ab 23. August 2011 startet der Dienstags-Cup in seine 8. Runde – 20 Turniertage mit Handicap-System.',
    date: '2011-07-27',
    category: 'Turnier',
    slug: 'dienstags-cup-8-runde-2011',
    content: `Ab dem 23. August startet der bekannte Dienstags-Cup zum 8. Mal! Gespielt werden 20 Turniere wie immer im Wechsel 8- und 9-Ball mit Handicap-System. Beginn ist immer um 19:30 Uhr, Anwesenheit 19:15 Uhr. Gespielt wird nach den Regeln der DBU, Ausschüttung erfolgt an die Plätze 1–4. Wir freuen uns auf euer Kommen – alles Weitere erfahrt Ihr von Ludwig Weidinger am Turniertag.`,
  },
  {
    id: 'h18',
    title: 'Bayerischer Meister: 1. Mannschaft gewinnt 8-Ball-Cup-Mannschaftsmeisterschaft',
    excerpt: 'Gratulation an Richard Bendl, Stefan Mooser, Ludwig Weidinger und Josef Bendl zum Gewinn der Bayerischen 8-Ball Pokal Mannschaftsmeisterschaft 2010/2011!',
    date: '2011-06-27',
    category: 'Liga',
    slug: 'bayerischer-meister-2011',
    content: `Gratulation an unser Team (v.l.n.r. Richard Bendl, Stefan Mooser, Ludwig Weidinger, Josef Bendl) zum Gewinn der Bayerischen 8-Ball Pokal Mannschaftsmeisterschaft 2010/2011 und der Qualifikation zur Deutschen Meisterschaft! Nach 14:1 durch unseren „Star"-Spieler Seppi Bendl nun schon die zweite Qualifikation für die Deutsche Meisterschaft in der Saison 2010/2011. So kann es weitergehen – PBC Erding rocks!`,
    images: [
      { src: '2011-06-27.png', alt: 'Bayerische Meister 2011 – Mannschaftsfoto' },
    ],
  },
  {
    id: 'h19',
    title: 'Vereinsmeisterschaft 2011: Josef „Seppi" Bendl erneut Vereinsmeister',
    excerpt: 'Josef „Seppi" Bendl holt sich zum zweiten Mal in Folge den Titel des Vereinsmeisters beim PBC Erding.',
    date: '2011-05-05',
    category: 'Turnier',
    slug: 'vereinsmeisterschaft-2011',
    content: `Herzlichen Glückwunsch an Josef „Seppi" Bendl, den diesjährigen und mittlerweile schon zweifachen Vereinsmeister (2009/2011) des PBC Erding! Einen Turnierbericht und Fotos der Teilnehmer, Halbfinalisten und Finalisten findet Ihr in der Rubrik Berichte/Fotos.`,
    images: [
      { src: '2011-05-05.jpg',   alt: 'Vereinsmeisterschaft 2011 – alle Teilnehmer' },
      { src: '2011-05-05-2.jpg', alt: 'Vereinsmeisterschaft 2011 – Halbfinalisten' },
      { src: '2011-05-05-3.png', alt: 'Vereinsmeisterschaft 2011 – Finalisten' },
    ],
  },
  {
    id: 'h20',
    title: 'Aufstieg in die Verbandsliga perfekt',
    excerpt: 'Der PBC Erding steigt in die Verbandsliga auf – der dritte Aufstieg in Folge seit Vereinsgründung.',
    date: '2011-05-04',
    category: 'Liga',
    slug: 'aufstieg-verbandsliga-2011',
    content: `Nach dem letzten Spieltag ist die erste Mannschaft in die Verbandsliga aufgestiegen. Herzlichen Glückwunsch an Josef Bendl, Richard Bendl, Stefan Mooser und Ludwig Weidinger für eine tolle und spannende Saison 2010/2011!

Damit hat es der PBC Erding geschafft, mit seiner 1. Mannschaft dreimal in Folge aufzusteigen und nach der Gründung im Sommer 2008 schon jetzt in Bayerns zweithöchster Liga vertreten zu sein.

Die Jahreshauptversammlung ist für den 18. Juni geplant.`,
    images: [
      { src: '2011-05-04.jpg', alt: 'Aufstieg in die Verbandsliga 2011 – PBC Erding' },
    ],
  },
  {
    id: 'h21',
    title: '3. Mannschaft steigt direkt in die Bezirksliga auf',
    excerpt: 'Christian Herzog, Ernst Hillmann, Torsten Sanders und David Restle führen die 3. Mannschaft in die Bezirksliga.',
    date: '2011-04-12',
    category: 'Liga',
    slug: 'aufstieg-bezirksliga-2011',
    content: `Am letzten Spieltag der Kreisliga A rundete unsere 3. Mannschaft mit einem Sieg die hervorragende Saison ab und sicherte sich fast ungeschlagen den 1. Platz und damit den direkten Aufstieg in die Bezirksliga. Herzlichen Glückwunsch an Christian Herzog, Ernst Hillmann, Torsten Sanders und David Restle sowie den Unterstützern Christian Gruß und Alexander Nachbar!`,
    images: [
      { src: '2011-04-12.jpg',   alt: 'PBC Erding III – Aufstiegsteam Bezirksliga (1)' },
      { src: '2011-04-12-2.jpg', alt: 'PBC Erding III – Aufstiegsteam Bezirksliga (2)' },
    ],
  },
  {
    id: 'h22',
    title: 'Dienstags-Cup: Super-Seppi gewinnt die Turnierserie',
    excerpt: 'Josef „Super-Seppi" Bendl gewinnt den Dienstags-Cup – starke Leistungen auch von Scharl, Claessen und Gruß.',
    date: '2011-01-11',
    category: 'Turnier',
    slug: 'dienstags-cup-news-2011',
    content: `Neue Bilder vom Dienstags-Cup! Am 6. Januar fand das Endturnier der letzten Dienstags-Cup-Serie im Billard Cafe Neumayr statt. Wir gratulieren unserem „Super-Seppi" zum erneuten Sieg der Turnier-Serie! Die Plätze 2–4 belegten Josef Scharl, Bart Claessen und Christian Gruß. Das vollständige Ergebnis findet Ihr auf der Homepage des Billard Cafe Neumayr, die neuesten Bilder in der Rubrik Fotos im Album Dienstagscup.`,
    images: [
      { src: '2011-01-11.jpg', alt: 'Dienstags-Cup Januar 2011 – Turnierfoto' },
    ],
  },
  {
    id: 'h23',
    title: 'Frohe Weihnachten vom PBC Erding',
    excerpt: 'Der PBC Erding wünscht allen Mitgliedern mit Familien frohe und besinnliche Weihnachtstage und einen guten Rutsch ins neue Jahr!',
    date: '2010-12-23',
    category: 'Verein',
    slug: 'weihnachten-2010',
    content: `Der PBC Erding wünscht allen Mitgliedern mit Familien frohe und besinnliche Weihnachtstage und einen guten Rutsch ins neue Jahr!!`,
  },
  {
    id: 'h24',
    title: 'Olympia 2018',
    excerpt: 'Unterstützung der Bewerbung Münchens um die Olympischen und Paralympischen Winterspiele 2018.',
    date: '2010-12-05',
    category: 'Verein',
    slug: 'olympia-bewerbung-2010',
    content: `Unterstützung der Bewerbung Münchens um die Olympischen und Paralympischen Winterspiele 2018. Weitere Infos unter www.muenchen2018.org/unterstuetzer`,
  },
  {
    id: 'h25',
    title: 'Saisonstart 2010',
    excerpt: 'Nach anfänglich mäßigem Saisonstart läuft es wieder gut. Der Verein zählt 45 Mitglieder und hat eine neue Jugendgruppe – mittwochabends im Billard Cafe Neumayr.',
    date: '2010-11-22',
    category: 'Verein',
    slug: 'saisonstart-2010',
    content: `Nach teilweise mäßigem Start in die neue Saison sieht es mittlerweile doch wieder recht gut aus. Eine gute Platzierung zur Halbzeit sollte bei allen Mannschaften möglich sein.

Neue Presseartikel sind in der Rubrik „Presse" zu finden. Aktuelle Infos und Fotos auch auf Facebook.

Mittlerweile hat der Verein nach gut zwei Jahren bereits 45 Mitglieder! Seit einigen Wochen gibt es außerdem eine Jugendgruppe, die mittwochabends im Billard Cafe Neumayr trainiert – mit Unterstützung von vier Gruppen der Pooldragons aus Erding. Die Weihnachtsfeier findet am 3. Dezember statt – Details folgen per Facebook und E-Mail.`,
  },

  // ── Neue Artikel zu Bildern ohne bisherigen Artikel ────────────────────────
  {
    id: 'h04b',
    title: 'Turnier-Serie 2022 startet im Stardust',
    excerpt: 'Die neue Turnier-Serie 2022 im Stardust Casino Erding nimmt Gestalt an – Termine und Details für die kommende Saison.',
    date: '2022-01-20',
    category: 'Turnier',
    slug: 'turnierserie-2022',
    content: `Das neue Jahr startet sportlich: Im Stardust Casino Erding läuft die Planung für die Turnier-Serie 2022 auf Hochtouren. Die Serie richtet sich an alle Billard-Begeisterten aus der Region – Vereinsmitglieder und Gastspieler gleichsam.

Gespielt wird im bewährten Einzel-KO-Format, wöchentlich wechselnd zwischen 8-Ball und 9-Ball. Das Startgeld wird vollständig als Preisgeld ausgeschüttet. Näheres zu Terminen und Anmeldung folgt in Kürze.

Wer mitmachen möchte: einfach dienstags vorbeikommen oder sich beim Verein melden. Plätze sind begrenzt.`,
    images: [
      { src: '2022-01-20.jpg', alt: 'Turnier-Serie 2022 im Stardust Erding' },
    ],
  },
  {
    id: 'h12b',
    title: 'Vereinsabend im Stardust – Gemeinschaft abseits des Wettkampfs',
    excerpt: 'Geselligkeit und Billard: Ein Abend im Stardust Casino, der zeigt, was den PBC Erding als Gemeinschaft ausmacht.',
    date: '2025-02-18',
    category: 'Verein',
    slug: 'vereinsabend-stardust-2025',
    content: `Nicht nur Ligabetrieb und Turniere gehören zum PBC Erding – auch gemeinschaftliche Abende, bei denen Billard im Mittelpunkt steht, aber das Miteinander genauso wichtig ist. Ein solcher Abend fand im Februar 2025 im Stardust Casino statt.

Die Atmosphäre im Stardust, das der Verein seit 2012 als Heimat kennt, ist für viele Mitglieder längst vertraut: die Geräusche der Queue-Stöße, das Lachen nach einer gelungenen Kombination, die Gespräche an der Bar. Momente wie diese halten eine Vereinsgemeinschaft zusammen.

Der PBC Erding dankt dem Stardust-Team einmal mehr für die herzliche Bewirtung und die bereitgestellten Tische.`,
    images: [
      { src: '2025-02-18.jpg', alt: 'Vereinsabend im Stardust Casino Erding Februar 2025' },
    ],
  },
  {
    id: 'h26',
    title: 'Starte durch beim PBC Erding – Billard für junge und alte Talente',
    excerpt: 'Neuer Standort, neue Chancen: Der PBC Erding lädt im Bowling Castle Erding zum Schnuppertraining ein.',
    date: '2026-01-16',
    category: 'Verein',
    slug: 'starte-durch-pbc-erding',
    content: `Der PBC Erding hat eine neue Heimat – und mit ihr neue Möglichkeiten: Im Bowling Castle Erding bietet der Verein regelmäßiges Training für alle, die Pool-Billard kennenlernen oder ihr Spiel verbessern möchten. Ob jung oder alt, Anfänger oder Fortgeschrittener – beim PBC Erding ist jeder willkommen.

Das offene Schnuppertraining findet jeden Sonntag von 13:00 bis 16:00 Uhr statt. Kein Startgeld, keine Vereinsmitgliedschaft nötig – einfach vorbeikommen, Queue in die Hand nehmen und loslegen. Erfahrene Vereinsspieler stehen als Ansprechpartner zur Verfügung.

Wer Gefallen findet und regelmäßig mitmachen möchte, kann jederzeit Mitglied werden. Weitere Trainingszeiten für Mitglieder: Dienstag und Donnerstag ab 18:00 Uhr. Informationen unter info@pbc-erding.de.`,
    images: [
      { src: '2026-01-16.jpg', alt: 'Training im Bowling Castle Erding – Billard für alle' },
    ],
  },
  {
    id: 'h27',
    title: 'Mittwoch Cup 2026 – jeden letzten Mittwoch im Bowling Castle',
    excerpt: 'Der Mittwoch Cup startet am 25. Februar 2026 – offene Turnierserie jeden letzten Mittwoch des Monats.',
    date: '2026-01-16',
    category: 'Turnier',
    slug: 'mittwoch-cup-ankuendigung-2026',
    content: `Die Turnierserie 2026 nimmt Form an: Der Mittwoch Cup findet jeden letzten Mittwoch im Monat im Bowling Castle Erding statt. Startschuss ist am 25. Februar 2026 um 18:30 Uhr.

Das Format ist offen für Vereinsmitglieder und Gastspieler. Gespielt wird im Gruppen- und KO-System, der genaue Modus (8-Ball oder 9-Ball) wird vor dem Turnier bekanntgegeben. Startgeld: 10 € bei voller Ausschüttung.

Anmeldung unter turnier@pbc-erding.de oder direkt vor Ort ab 18:00 Uhr. Plätze sind begrenzt – wer sicher dabei sein möchte, sollte sich frühzeitig anmelden.`,
    images: [
      { src: '2026-01-16-2.jpg', alt: 'Mittwoch Cup 2026 – Ankündigung' },
    ],
  },
]

// ─── Chronik ─────────────────────────────────────────────────────────────────

export type ChronikEntry = {
  title: string
  date: string    // YYYY-MM-DD
  slug?: string   // interne News-Seite
  url?: string    // externer Archiv-Link
}

export const chronik: ChronikEntry[] = [
  // 2026
  { title: 'Saisonabschluss: Erding II – Kreisliga 2025/26 ungeschlagen abgeschlossen', date: '2026-05-16', slug: 'saisonabschluss-erding-2-2025-26'   },
  { title: 'Trainer-Fortbildung: Bart Claessen erfolgreich zertifiziert',               date: '2026-05-09', slug: 'trainer-fortbildung-bart-claessen'   },
  { title: 'Saisonabschluss: PBC Erding III – Kreisliga 2025/26',                       date: '2026-05-09', slug: 'saisonabschluss-erding-3-2025-26'   },
  { title: 'Saisonabschluss: PBC Erding I gewinnt 8:2 – Bezirksliga 2025/26',          date: '2026-05-09', slug: 'saisonabschluss-erding-1-2025-26'   },
  { title: 'Mittwoch-Cup April – Seppi Bendl holt den Sieg',                    date: '2026-04-29', slug: 'mittwoch-cup-april-2026'                 },
  { title: 'Spieltag im Bowling Castle – Teamgeist an allen Tischen',           date: '2026-04-05', slug: 'heimspieltag-bowling-castle-april-2026'   },
  { title: 'Mittwoch-Cup: Zweiter Abend – Hütti holt den Sieg',        date: '2026-03-25', slug: 'mittwoch-cup-zweiter-abend-maerz-2026'    },
  { title: 'Mittwoch Cup 2026 – jeden letzten Mittwoch im Bowling Castle', date: '2026-01-16', slug: 'mittwoch-cup-ankuendigung-2026'        },
  { title: 'Starte durch beim PBC Erding – Billard für junge und alte Talente', date: '2026-01-16', slug: 'starte-durch-pbc-erding'         },
  // 2025
  { title: 'PBC Erding zieht ins Bowling Castle Erding um',            date: '2025-12-20', slug: 'umzug-bowling-castle-erding'               },
  { title: 'Vereinsabend im Stardust – Gemeinschaft abseits des Wettkampfs', date: '2025-02-18', slug: 'vereinsabend-stardust-2025'          },
  { title: 'Herzlichen Dank an das Stardust-Team',                     date: '2025-12-20', slug: 'herzlichen-dank-stardust'                  },
  { title: 'Mittwochsturnier – offenes Turnier im PBC Erding',         date: '2025-12-01', slug: 'mittwochsturnier'                          },
  // 2024
  { title: 'Bezirksmeisterschaft Senioren 10-Ball in Erding',                              date: '2024-04-14', slug: 'bezirksmeisterschaft-senioren-2024'      },
  { title: 'Spieltag gegen Dingolfing',                                                    date: '2024-04-14', slug: 'spieltag-gegen-dingolfing'               },
  // 2023
  { title: 'DiCup 23/24 – Turnierserie für Jedermann',                                    date: '2023-10-15', slug: 'dicup-2324'                              },
  { title: 'Stardust Open 2023',                                                           date: '2023-10-15', slug: 'stardust-open-2023'                      },
  // 2022
  { title: 'Stardust Open 2022',                                                           date: '2022-11-03', slug: 'stardust-open-2022'                      },
  { title: 'Turnier-Serie 2022 startet im Stardust',                                       date: '2022-01-20', slug: 'turnierserie-2022'                        },
  // 2021
  { title: 'Neujahrsturnier am 1. Januar 2022',                                           date: '2021-12-30', slug: 'neujahrsturnier-2022'                    },
  { title: 'Tournierserienauftakt im Stardust: 14 Spieler, Sepp Scharl gewinnt',          date: '2021-10-28', slug: 'tournierserienauftakt-2021'               },
  { title: 'Dienstags-Turnierserie wieder gestartet',                                     date: '2021-10-03', slug: 'dienstags-turnierserie-2021'              },
  // 2013
  { title: 'Aktueller Stand der Hausturnierserie',                                        date: '2013-10-09', slug: 'hausturnierserie-update-2013'             },
  { title: 'Neue Presseartikel zur Vereinsmeisterschaft 2013',                            date: '2013-07-10', slug: 'presseartikel-vereinsmeisterschaft-2013'  },
  { title: '2. Mannschaft steigt vorzeitig in die Landesliga auf',                        date: '2013-03-18', slug: 'aufstieg-landesliga-2013'                 },
  { title: 'HC-Turnierserie startet am 19. März 2013 im Stardust',                       date: '2013-02-28', slug: 'hc-turnierserie-2013'                     },
  // 2012
  { title: 'Trainingsbetrieb nach Sommerpause wieder aufgenommen',                        date: '2012-09-14', slug: 'sommerpause-2012'                         },
  { title: 'Neue Pool-Billard-Turnierserie im Stardust Erding',                           date: '2012-08-01', slug: 'turnierserie-stardust-2012'               },
  { title: 'Spiellokal wechselt ins Stardust Casino Erding',                              date: '2012-04-12', slug: 'lokalwechsel-stardust-2012'               },
  { title: 'Außerordentliche Mitgliederversammlung zum Lokalwechsel',                    date: '2012-04-03', slug: 'mitgliederversammlung-2012'                },
  // 2011
  { title: '2. Offene Erdinger Stadtmeisterschaft am 2. Oktober',                         date: '2011-09-09', slug: 'erdinger-stadtmeisterschaft-2011'          },
  { title: 'Dienstags-Cup startet in die 8. Runde',                                      date: '2011-07-27', slug: 'dienstags-cup-8-runde-2011'               },
  { title: 'Bayerischer Meister: 1. Mannschaft gewinnt 8-Ball-Cup-Mannschaftsmeisterschaft', date: '2011-06-27', slug: 'bayerischer-meister-2011'              },
  { title: 'Vereinsmeisterschaft 2011: Josef „Seppi" Bendl erneut Vereinsmeister',       date: '2011-05-05', slug: 'vereinsmeisterschaft-2011'                 },
  { title: 'Aufstieg in die Verbandsliga perfekt',                                        date: '2011-05-04', slug: 'aufstieg-verbandsliga-2011'                },
  { title: '3. Mannschaft steigt direkt in die Bezirksliga auf',                          date: '2011-04-12', slug: 'aufstieg-bezirksliga-2011'                 },
  { title: 'Dienstags-Cup: Super-Seppi gewinnt die Turnierserie',                         date: '2011-01-11', slug: 'dienstags-cup-news-2011'                  },
  // 2010
  { title: 'Frohe Weihnachten vom PBC Erding',                                           date: '2010-12-23', slug: 'weihnachten-2010'                         },
  { title: 'PBC Erding unterstützt Münchens Olympia-Bewerbung 2018',                     date: '2010-12-05', slug: 'olympia-bewerbung-2010'                   },
  { title: 'Saisonstart 2010: PBC Erding wächst auf 45 Mitglieder',                      date: '2010-11-22', slug: 'saisonstart-2010'                         },
]

// ─── Events ──────────────────────────────────────────────────────────────────

export type Event = {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'turnier' | 'training' | 'vereinsabend' | 'liga'
  description: string
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Schnuppertraining im Bowling Castle',
    date: '2026-01-04',
    time: '13:00 - 16:00 Uhr',
    location: 'Bowling Castle Erding',
    type: 'training',
    description: 'Offenes Schnuppertraining fuer Interessierte jeden Alters in der neuen Spielstaette.',
  },
  {
    id: '2',
    title: 'Vereinstraining',
    date: '2026-01-06',
    time: 'ab 18:30 Uhr',
    location: 'Bowling Castle Erding',
    type: 'training',
    description: 'Regelmaessiges Training und freies Spiel fuer Mitglieder und Interessierte.',
  },
  {
    id: '3',
    title: 'Vereinstraining',
    date: '2026-01-08',
    time: 'ab 18:30 Uhr',
    location: 'Bowling Castle Erding',
    type: 'training',
    description: 'Zweiter woechentlicher Trainingstermin in der neuen Spielstaette.',
  },
  {
    id: '4',
    title: 'Bezirksmeisterschaft Senioren 10-Ball',
    date: '2024-04-14',
    time: 'Turnierbeginn laut Ausschreibung',
    location: 'PBC Erding',
    type: 'turnier',
    description: 'Ein Beispiel fuer das Turnierleben des Vereins und seine Rolle als Ausrichter.',
  },
]

// ─── Teams ───────────────────────────────────────────────────────────────────

export type Team = {
  id: string
  name: string
  league: string
  leagueUrl?: string
  season: string
  position: number | null
  players: string[]
}

export const teams: Team[] = [
  {
    id: '1',
    name: 'PBC Erding I',
    league: 'Bezirksliga Oberbayern Nord',
    leagueUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=990',
    season: '2025/2026',
    position: null,
    players: [
      'Baumschlager',
      'Merz',
      'Weber',
      'Weidinger',
    ],
  },
  {
    id: '2',
    name: 'PBC Erding II',
    league: 'Kreisliga Oberbayern D',
    leagueUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=1011',
    season: '2025/2026',
    position: null,
    players: [
      'Claessen',
      'Gilik',
      'Hecht',
      'Mittermüller',
    ],
  },
  {
    id: '3',
    name: 'PBC Erding III',
    league: 'Kreisliga Oberbayern D',
    leagueUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=1011',
    season: '2025/2026',
    position: null,
    players: [
      'Fläxl',
      'Glaubitz',
      'Haase',
      'Herrera',
    ],
  },
]

// ─── Sponsors ─────────────────────────────────────────────────────────────────

export type Sponsor = {
  id: string
  name: string
  tier: 'gold' | 'silber' | 'bronze'
  website?: string
  description?: string
  logo?: string   // Dateiname in /images/sponsoren/, z.B. "bowling-castle.png"
}

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Bowling Castle Erding',
    tier: 'gold',
    website: 'https://www.bowling-castle.de',
    description: 'Neue Spielstätte des PBC Erding seit Januar 2026',
    logo: 'bowling-castle.png',
  },
  {
    id: '2',
    name: 'Stardust Spielsalon',
    tier: 'gold',
    website: 'https://www.stardust.de',
    description: 'Langjähriger Gastgeber und Partner des Vereins',
    logo: 'stardust.png',
  },
  {
    id: '3',
    name: 'Bayerischer Billardverband',
    tier: 'silber',
    website: 'https://bbv.billardarea.de',
    logo: 'bbv.png',
  },
  {
    id: '4',
    name: 'Deutsche Billard Union',
    tier: 'silber',
    website: 'https://portal.billardarea.de',
    logo: 'dbu.png',
  },
  {
    id: '7',
    name: 'Auto Baumschlager',
    tier: 'bronze',
    description: 'Autoreparatur in Wörth',
    logo: 'auto-baumschlager.jpg',
  },
  {
    id: '8',
    name: 'Bendl Investment',
    tier: 'bronze',
    description: 'Finanzdienstleistungen auf einem anderen Level',
    logo: 'bendl-investment.jpg',
  },
  {
    id: '9',
    name: 'Atom Billard',
    tier: 'bronze',
    website: 'https://www.atom-billard.de',
    description: 'Fachhandel für Billardtische & Queues',
    logo: 'atom-billard.png',
  },
  {
    id: '5',
    name: 'Billard-Aktuell',
    tier: 'bronze',
    website: 'https://www.billard-aktuell.de',
  },
  {
    id: '6',
    name: 'Ortmann Billiards',
    tier: 'bronze',
    website: 'https://www.ortmann-billiards.com',
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const clubStats = [
  { label: 'Gründung',          value: '2008', suffix: '',        href: '/verein' },
  { label: 'Neue Spielstätte',  value: '2026', suffix: '',        href: '/galerie' },
  { label: 'Schnuppertraining', value: '3',    suffix: ' Termine', href: '/kontakt?betreff=training' },
  { label: 'Downloads',         value: '9',    suffix: '+',        href: '/downloads' },
]

export type DownloadItem = {
  title: string
  href: string
  group: string
  filename?: string
  htmlHref?: string
}

export const downloads: DownloadItem[] = [
  { title: 'Satzung PBC Erding e.V.',                           group: 'Verein',    filename: 'PBC-Erding_Satzung.pdf',                                href: '/downloads/PBC-Erding_Satzung.pdf',                          htmlHref: '/schriftstuecke/satzung.html' },
  { title: 'Aufnahmeantrag PBC Erding e.V.',                    group: 'Verein',    filename: 'PBC-Erding_Aufnahmeantrag.pdf',                         href: '/downloads/PBC-Erding_Aufnahmeantrag.pdf',                    htmlHref: '/schriftstuecke/aufnahmeantrag.html' },
  { title: 'Einzugsermächtigung PBC Erding e.V.',               group: 'Verein',    filename: 'PBC-Erding_Einzugsermaechtigung-SEPA_Vorlage.pdf',       href: '/downloads/PBC-Erding_Einzugsermaechtigung-SEPA_Vorlage.pdf', htmlHref: '/schriftstuecke/sepa.html' },
  { title: 'Informationsblatt PBC Erding e.V.',                 group: 'Verein',    filename: 'PBC-Erding_Informationsblatt.pdf',                       href: '/downloads/PBC-Erding_Informationsblatt.pdf',                 htmlHref: '/schriftstuecke/informationsblatt.html' },
  { title: 'Fahrtkostenzuschuss 2024/2025',                     group: 'Liga',      filename: 'PBC-Erding_Fahrtkostenzuschuss-2024-2025.pdf',           href: '/downloads/PBC-Erding_Fahrtkostenzuschuss-2024-2025.pdf',     htmlHref: '/schriftstuecke/fahrtkosten.html' },
  { title: 'Spielregeln Pool (8-Ball / 9-Ball / 10-Ball / 14-1)', group: 'Regelwerk', filename: 'Spielregeln-Pool_DBU_Stand-2009-03.pdf',              href: '/downloads/Spielregeln-Pool_DBU_Stand-2009-03.pdf' },
  { title: 'Sport- und Turnierordnung BBV-Pool',                group: 'Regelwerk', filename: 'Aktuelle_Sportordnung_BBV-Pool_24-04-01.pdf',          href: '/downloads/Aktuelle_Sportordnung_BBV-Pool_24-04-01.pdf' },
  { title: 'Spielberichtsvorlage Pool BBV',                     group: 'Vorlagen',  filename: 'BBV_Vorlage-Spielbericht-Pool.pdf',                     href: '/downloads/BBV_Vorlage-Spielbericht-Pool.pdf' },
  { title: 'Spielberichtsvorlage Pool BBV (selbstrechnend)',    group: 'Vorlagen',  filename: 'BBV_Vorlage-Spielbericht-Pool_selbstrechnend.pdf',      href: '/downloads/BBV_Vorlage-Spielbericht-Pool_selbstrechnend.pdf' },
  { title: '14-1 Endlos Spielberichtsvorlage',                  group: 'Vorlagen',  filename: '14-1-Endlos_Vorlage.pdf',                               href: '/downloads/14-1-Endlos_Vorlage.pdf' },
  { title: 'Turnier im Schweizer System (Excel-Anwendung)',     group: 'Vorlagen',  filename: 'SchweizerSystem_XLSM.zip',                          href: '/downloads/SchweizerSystem_XLSM.zip' },
  { title: 'Turnierpläne Doppel-KO 16er, 32er und 64er-Feld',   group: 'Vorlagen',  filename: 'Turnierplan-dko_16_32_64.zip', href: '/downloads/Turnierplan-dko_16_32_64.zip' },
]

// ─── Mannschaften / Spielplan ────────────────────────────────────────────────

export type Wertung = 'sieg' | 'niederlage' | 'unentschieden' | 'offen'

export type Spiel = {
  datum: string
  uhrzeit: string
  heim: string
  gast: string
  ergebnis: string | null
  wertung: Wertung
}

export type Mannschaft = {
  name: string
  liga: string
  ligaUrl?: string
  rang: number
  siege: number
  unentschieden: number
  niederlagen: number
  spiele: string
  diff: string
  punkte: string
  spielplan: Spiel[]
}

export const mannschaften: Mannschaft[] = [
  {
    name: 'PBC Erding I',
    liga: 'Bezirksliga Oberbayern-Nord',
    ligaUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=990',
    rang: 3,
    siege: 6,
    unentschieden: 1,
    niederlagen: 3,
    spiele: '52:48',
    diff: '+4',
    punkte: '13:7',
    spielplan: [
      { datum: '2025-09-27', uhrzeit: '14:00', heim: 'BSV 1912 München III',  gast: 'PBC Erding I',         ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2025-10-25', uhrzeit: '14:00', heim: '1. PBC Moosburg',        gast: 'PBC Erding I',         ergebnis: '9:1', wertung: 'niederlage'    },
      { datum: '2025-11-22', uhrzeit: '14:00', heim: '1. PBC Mühldorf III',    gast: 'PBC Erding I',         ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2025-12-20', uhrzeit: '14:00', heim: 'BC Mainburg II',         gast: 'PBC Erding I',         ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2026-01-24', uhrzeit: '10:00', heim: '1. PBC Freising III',    gast: 'PBC Erding I',         ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2026-02-07', uhrzeit: '14:00', heim: 'PBC Erding I',           gast: 'BSV 1912 München III', ergebnis: '4:6', wertung: 'niederlage'    },
      { datum: '2026-03-07', uhrzeit: '14:00', heim: 'PBC Erding I',           gast: '1. PBC Moosburg',      ergebnis: '6:4', wertung: 'sieg'          },
      { datum: '2026-03-21', uhrzeit: '14:00', heim: 'PBC Erding I',           gast: '1. PBC Mühldorf III',  ergebnis: '5:5', wertung: 'unentschieden' },
      { datum: '2026-04-18', uhrzeit: '14:00', heim: 'PBC Erding I',           gast: 'BC Mainburg II',       ergebnis: '4:6', wertung: 'niederlage'    },
      { datum: '2026-05-09', uhrzeit: '14:00', heim: 'PBC Erding I',           gast: '1. PBC Freising III',  ergebnis: '8:2', wertung: 'sieg'          },
    ],
  },
  {
    name: 'PBC Erding II',
    liga: 'Kreisliga Oberbayern D',
    ligaUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=1011',
    rang: 1,
    siege: 10,
    unentschieden: 0,
    niederlagen: 0,
    spiele: '71:29',
    diff: '+42',
    punkte: '20:0',
    spielplan: [
      { datum: '2025-09-20', uhrzeit: '14:00', heim: 'PBC Erding III',          gast: 'PBC Erding II',        ergebnis: '4:6', wertung: 'sieg' },
      { datum: '2025-11-15', uhrzeit: '14:00', heim: 'PBC Markt Schwaben II',   gast: 'PBC Erding II',        ergebnis: '4:6', wertung: 'sieg' },
      { datum: '2025-11-22', uhrzeit: '14:00', heim: 'PBC Lerchenau II',        gast: 'PBC Erding II',        ergebnis: '1:9', wertung: 'sieg' },
      { datum: '2025-12-06', uhrzeit: '11:00', heim: 'BSV PB München III',      gast: 'PBC Erding II',        ergebnis: '3:7', wertung: 'sieg' },
      { datum: '2026-01-10', uhrzeit: '11:00', heim: 'BSV PB München IV',       gast: 'PBC Erding II',        ergebnis: '1:9', wertung: 'sieg' },
      { datum: '2026-01-31', uhrzeit: '14:00', heim: 'PBC Erding II',           gast: 'PBC Erding III',       ergebnis: '6:4', wertung: 'sieg' },
      { datum: '2026-02-28', uhrzeit: '14:00', heim: 'PBC Erding II',           gast: 'PBC Lerchenau II',     ergebnis: '8:2', wertung: 'sieg' },
      { datum: '2026-03-14', uhrzeit: '14:00', heim: 'PBC Erding II',           gast: 'PBC Markt Schwaben II', ergebnis: '7:3', wertung: 'sieg' },
      { datum: '2026-04-11', uhrzeit: '14:00', heim: 'PBC Erding II',           gast: 'BSV PB München III',   ergebnis: '6:4', wertung: 'sieg'  },
      { datum: '2026-05-16', uhrzeit: '14:00', heim: 'PBC Erding II',           gast: 'BSV PB München IV',    ergebnis: '7:3', wertung: 'sieg'  },
    ],
  },
  {
    name: 'PBC Erding III',
    liga: 'Kreisliga Oberbayern D',
    ligaUrl: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/groupPage?championship=BBV+Pool+25%2F26&group=1011',
    rang: 6,
    siege: 1,
    unentschieden: 0,
    niederlagen: 9,
    spiele: '36:64',
    diff: '-28',
    punkte: '2:18',
    spielplan: [
      { datum: '2025-09-20', uhrzeit: '14:00', heim: 'PBC Erding III',         gast: 'PBC Erding II',         ergebnis: '4:6', wertung: 'niederlage' },
      { datum: '2025-10-18', uhrzeit: '11:00', heim: 'BSV PB München III',     gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2025-11-08', uhrzeit: '11:00', heim: 'BSV PB München IV',      gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2025-12-13', uhrzeit: '14:00', heim: 'PBC Markt Schwaben II',  gast: 'PBC Erding III',        ergebnis: '7:3', wertung: 'niederlage' },
      { datum: '2026-01-31', uhrzeit: '14:00', heim: 'PBC Erding II',          gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2026-02-21', uhrzeit: '14:00', heim: 'PBC Erding III',         gast: 'BSV PB München III',    ergebnis: '2:8', wertung: 'niederlage' },
      { datum: '2026-03-07', uhrzeit: '14:00', heim: 'PBC Erding III',         gast: 'PBC Lerchenau II',      ergebnis: '4:6', wertung: 'niederlage' },
      { datum: '2026-03-14', uhrzeit: '14:00', heim: 'PBC Erding III',         gast: 'BSV PB München IV',     ergebnis: '6:4', wertung: 'sieg'       },
      { datum: '2026-04-25', uhrzeit: '14:00', heim: 'PBC Erding III',         gast: 'PBC Markt Schwaben II', ergebnis: '1:9', wertung: 'niederlage' },
      { datum: '2026-05-09', uhrzeit: '14:00', heim: 'PBC Lerchenau II',       gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
    ],
  },
]

export type LinkGroup = {
  title: string
  items: { label: string; href: string; newTab?: boolean }[]
}

export const links: LinkGroup[] = [
  {
    title: 'Verbände',
    items: [
      { label: 'Bayerischer Billardverband (BBV)', href: 'https://billardbayern.de/' },
      { label: 'Bayerischer Landes-Sportverband (BLSV)', href: 'https://www.blsv.de' },
      { label: 'Deutsche Billard Union (DBU)', href: 'https://billard-union.net/' },
    ],
  },
  {
    title: 'Vereine',
    items: [
      { label: 'PBC College Markt Schwaben', href: 'https://www.pbc-college.de' },
      { label: '1. PBC Freising', href: 'http://www.pbc-freising.de/' },
      { label: 'BSC Ingolstadt', href: 'https://bsci.de/cms/' },
      { label: 'BSC Pfaffenhofen', href: 'https://www.bsc-paf.de' },
      { label: '1. PBC Teuflische 8 Moosburg', href: 'https://www.billard-moosburg.de' },
      { label: 'SC Dingolfing (Billard)', href: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/clubInfoDisplay?club=397' },
      { label: 'BC 73 Pfeffenhausen', href: 'https://bc73.de/' },
      { label: 'BSV Fortuna Pfeffenhausen', href: 'https://bbv-billard.liga.nu/cgi-bin/WebObjects/nuLigaBILLARDDE.woa/wa/clubInfoDisplay?club=344' },
      { label: '1. PBC Simbach/Inn', href: 'http://www.pbcsimbach.de' },
    ],
  },
  {
    title: 'Infos',
    items: [
      { label: 'Billard-Aktuell', href: 'https://www.billard-aktuell.de' },
      { label: 'Billard Magazin touch', href: 'https://billard1.net/' },
      { label: 'ED-live', href: 'https://www.ed-live.de' },
      { label: 'Ortmann Billiards', href: 'https://www.ortmann-billiards.com' },
      { label: 'Ralf Souquet', href: 'https://ralf-souquet.com' },
      { label: 'Wikipedia – Billard', href: 'https://de.wikipedia.org/wiki/Billard' },
    ],
  },
  {
    title: 'Sonstiges',
    items: [
      { label: 'Bowling Castle Erding', href: 'https://www.bowling-castle.de' },
      { label: 'Stardust Casinos', href: 'https://www.stardust.de' },
      { label: 'Atom Billard', href: 'https://www.atom-billard.de' },
      { label: 'Open Heaven e.V.', href: 'https://open-heaven.com/' },
    ],
  },
  {
    title: 'Spiel & Spaß',
    items: [
      { label: 'Pool Billard – 8-Ball & 9-Ball (Browser-Spiel)', href: '/spiel-spass/billardapp/index.html', newTab: true },
    ],
  },
]

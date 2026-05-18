import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { getNextMittwochsturnier } from '@/lib/turnier-utils'
import HidePastCalendarEvents from './HidePastCalendarEvents'

export const metadata: Metadata = {
  title: 'Veranstaltungen',
  description: 'Trainingszeiten, Mittwochsturnier und Veranstaltungskalender des PBC Erding.',
}

// ─── Typen ────────────────────────────────────────────────────────────────────

type EventType = 'probetraining' | 'training' | 'turnier'

type CalEvent = {
  date: Date
  title: string
  time: string
  type: EventType
  note: string
}

// ─── Kalender-Generierung (läuft zur Build-Zeit) ──────────────────────────────

function buildMonthEvents(year: number, month: number): CalEvent[] {
  const result: CalEvent[] = []
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  let lastWednesday: Date | null = null

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day)
    const wd = d.getDay() // 0=So, 1=Mo, 2=Di, 3=Mi, 4=Do, 5=Fr, 6=Sa

    if (wd === 0) {
      result.push({
        date: d,
        title: 'Schnuppertraining & Vereinstraining',
        time: '13:00 – 16:00 Uhr',
        type: 'probetraining',
        note: 'Offen für Mitglieder und Interessierte',
      })
    } else if (wd === 2) {
      result.push({
        date: d,
        title: 'Vereinstraining',
        time: '18:00 – 21:00 Uhr',
        type: 'training',
        note: 'Training und freies Spiel',
      })
    } else if (wd === 4) {
      result.push({
        date: d,
        title: 'Vereinstraining',
        time: '18:00 – 21:00 Uhr',
        type: 'training',
        note: 'Training und Ligavorbereitung',
      })
    } else if (wd === 3) {
      lastWednesday = d
    }
  }

  if (lastWednesday) {
    result.push({
      date: lastWednesday,
      title: 'Mittwochsturnier',
      time: '18:30 Uhr',
      type: 'turnier',
      note: 'Offenes Turnier für Vereins- und Hobbyspieler',
    })
  }

  return result.sort((a, b) => a.date.getTime() - b.date.getTime())
}

// Aktueller Monat + nächster Monat
function getTwoMonths(): { year: number; month: number }[] {
  const now = new Date()
  const m0 = { year: now.getFullYear(), month: now.getMonth() }
  const m1 = now.getMonth() === 11
    ? { year: now.getFullYear() + 1, month: 0 }
    : { year: now.getFullYear(), month: now.getMonth() + 1 }
  return [m0, m1]
}

// ─── Darstellung ──────────────────────────────────────────────────────────────

const badgeCfg: Record<EventType, { label: string; variant: 'green' | 'gold' | 'neutral' }> = {
  probetraining: { label: 'Schnuppertraining', variant: 'neutral' },
  training:      { label: 'Training',      variant: 'neutral' },
  turnier:       { label: 'Turnier',        variant: 'gold'    },
}

function EventRow({ ev }: { ev: CalEvent }) {
  const d = ev.date
  const weekday = d.toLocaleDateString('de-DE', { weekday: 'short' })
  const day     = d.toLocaleDateString('de-DE', { day: '2-digit' })
  const monthShort = d.toLocaleDateString('de-DE', { month: 'short' })
  const badge   = badgeCfg[ev.type]
  const isTurnier = ev.type === 'turnier'

  return (
    <div
      data-cal-date={d.toISOString().slice(0, 10)}
      className={`group relative flex items-center gap-5 rounded-[1.5rem] border bg-white/[0.02] px-5 py-4 sm:gap-6 sm:px-6 overflow-hidden ${
        isTurnier
          ? 'border-gold-500/20 hover:border-gold-500/40 hover:bg-gold-500/[0.04]'
          : 'border-white/6 hover:border-white/12 hover:bg-white/[0.035]'
      } transition-colors`}
    >
      {/* Linke Akzentlinie */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${isTurnier ? 'bg-gold-500' : 'bg-white/10'}`} />

      {/* Datum-Block */}
      <div className="flex w-14 shrink-0 flex-col items-center text-center rounded-xl py-1">
        <span className="text-[0.65rem] text-white/60 uppercase tracking-wide">{weekday}</span>
        <span className="text-2xl font-black text-white leading-none">{day}</span>
        <span className={`text-xs uppercase ${isTurnier ? 'text-gold-500' : 'text-white/60'}`}>{monthShort}</span>
      </div>

      <div className="w-px self-stretch bg-white/10" />

      {/* Inhalt */}
      <div className="flex-1 min-w-0">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <Badge variant={badge.variant}>{badge.label}</Badge>
          <span className="text-xs text-white/70 tabular-nums">{ev.time}</span>
        </div>
        <p className={`font-bold leading-tight ${isTurnier ? 'text-gold-300' : 'text-white'}`}>
          {ev.title}
        </p>
        <p className="mt-0.5 text-xs text-white/70">{ev.note}</p>
      </div>
    </div>
  )
}

function MonthBlock({ year, month, today }: { year: number; month: number; today: Date }) {
  const allEvents = buildMonthEvents(year, month)
  const events = allEvents.filter(ev => ev.date >= today)
  if (events.length === 0) return null

  const monthName = new Date(year, month, 1).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  const trainingCount = events.filter(e => e.type !== 'turnier').length
  const turnierCount  = events.filter(e => e.type === 'turnier').length

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/6">
      {/* Monats-Header */}
      <div className="relative flex items-center justify-between gap-4 bg-charcoal-900 px-7 py-5 border-b border-white/6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700" />
        <div>
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-white leading-none">{monthName}</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            Bowling Castle Erding
          </p>
        </div>
        <div className="flex gap-3 text-right">
          <div className="text-center">
            <p className="text-xl font-black text-white leading-none">{trainingCount}</p>
            <p className="text-[0.65rem] uppercase tracking-wide text-white/65 mt-0.5">Trainings</p>
          </div>
          <div className="w-px self-stretch bg-white/15" />
          <div className="text-center">
            <p className="text-xl font-black text-gold-400 leading-none">{turnierCount}</p>
            <p className="text-[0.65rem] uppercase tracking-wide text-white/65 mt-0.5">Turnier</p>
          </div>
        </div>
      </div>

      {/* Event-Liste */}
      <div className="p-4 flex flex-col gap-2 bg-charcoal-950">
        {events.map((ev, i) => (
          <EventRow key={i} ev={ev} />
        ))}
      </div>
    </div>
  )
}

// ─── Liga-Spielplan ───────────────────────────────────────────────────────────

type Spieltag = {
  datum: string
  uhrzeit: string
  heim: string
  gast: string
  ergebnis: string | null
  wertung: 'sieg' | 'niederlage' | 'unentschieden' | 'offen'
}

type LigaTeam = {
  name: string
  liga: string
  spielplan: Spieltag[]
}

const ligaTeams: LigaTeam[] = [
  {
    name: 'PBC Erding I',
    liga: 'Bezirksliga Oberbayern-Nord',
    spielplan: [
      { datum: '2025-09-27', uhrzeit: '14:00', heim: 'BSV 1912 München III', gast: 'PBC Erding I',          ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2025-10-25', uhrzeit: '14:00', heim: '1. PBC Moosburg',       gast: 'PBC Erding I',          ergebnis: '9:1', wertung: 'niederlage'    },
      { datum: '2025-11-22', uhrzeit: '14:00', heim: '1. PBC Mühldorf III',   gast: 'PBC Erding I',          ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2025-12-20', uhrzeit: '14:00', heim: 'BC Mainburg II',        gast: 'PBC Erding I',          ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2026-01-24', uhrzeit: '10:00', heim: '1. PBC Freising III',   gast: 'PBC Erding I',          ergebnis: '4:6', wertung: 'sieg'          },
      { datum: '2026-02-07', uhrzeit: '14:00', heim: 'PBC Erding I',          gast: 'BSV 1912 München III',  ergebnis: '4:6', wertung: 'niederlage'    },
      { datum: '2026-03-07', uhrzeit: '14:00', heim: 'PBC Erding I',          gast: '1. PBC Moosburg',       ergebnis: '6:4', wertung: 'sieg'          },
      { datum: '2026-03-21', uhrzeit: '14:00', heim: 'PBC Erding I',          gast: '1. PBC Mühldorf III',   ergebnis: '5:5', wertung: 'unentschieden' },
      { datum: '2026-04-18', uhrzeit: '14:00', heim: 'PBC Erding I',          gast: 'BC Mainburg II',        ergebnis: '4:6', wertung: 'niederlage'    },
      { datum: '2026-05-09', uhrzeit: '14:00', heim: 'PBC Erding I',          gast: '1. PBC Freising III',   ergebnis: '8:2', wertung: 'sieg'          },
    ],
  },
  {
    name: 'PBC Erding II',
    liga: 'Kreisliga Oberbayern D',
    spielplan: [
      { datum: '2025-09-20', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'PBC Erding II',         ergebnis: '4:6', wertung: 'sieg'  },
      { datum: '2025-11-15', uhrzeit: '14:00', heim: 'PBC Markt Schwaben II', gast: 'PBC Erding II',         ergebnis: '4:6', wertung: 'sieg'  },
      { datum: '2025-11-22', uhrzeit: '14:00', heim: 'PBC Lerchenau II',      gast: 'PBC Erding II',         ergebnis: '1:9', wertung: 'sieg'  },
      { datum: '2025-12-06', uhrzeit: '11:00', heim: 'BSV PB München III',    gast: 'PBC Erding II',         ergebnis: '3:7', wertung: 'sieg'  },
      { datum: '2026-01-10', uhrzeit: '11:00', heim: 'BSV PB München IV',     gast: 'PBC Erding II',         ergebnis: '1:9', wertung: 'sieg'  },
      { datum: '2026-01-31', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'sieg'  },
      { datum: '2026-02-28', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'PBC Lerchenau II',      ergebnis: '8:2', wertung: 'sieg'  },
      { datum: '2026-03-14', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'PBC Markt Schwaben II', ergebnis: '7:3', wertung: 'sieg'  },
      { datum: '2026-04-11', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'BSV PB München III',    ergebnis: '6:4', wertung: 'sieg'  },
      { datum: '2026-05-16', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'BSV PB München IV',     ergebnis: '7:3', wertung: 'sieg'  },
    ],
  },
  {
    name: 'PBC Erding III',
    liga: 'Kreisliga Oberbayern D',
    spielplan: [
      { datum: '2025-09-20', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'PBC Erding II',         ergebnis: '4:6', wertung: 'niederlage' },
      { datum: '2025-10-18', uhrzeit: '11:00', heim: 'BSV PB München III',    gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2025-11-08', uhrzeit: '11:00', heim: 'BSV PB München IV',     gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2025-12-13', uhrzeit: '14:00', heim: 'PBC Markt Schwaben II', gast: 'PBC Erding III',        ergebnis: '7:3', wertung: 'niederlage' },
      { datum: '2026-01-31', uhrzeit: '14:00', heim: 'PBC Erding II',         gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
      { datum: '2026-02-21', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'BSV PB München III',    ergebnis: '2:8', wertung: 'niederlage' },
      { datum: '2026-03-07', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'PBC Lerchenau II',      ergebnis: '4:6', wertung: 'niederlage' },
      { datum: '2026-03-14', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'BSV PB München IV',     ergebnis: '6:4', wertung: 'sieg'       },
      { datum: '2026-04-25', uhrzeit: '14:00', heim: 'PBC Erding III',        gast: 'PBC Markt Schwaben II', ergebnis: '1:9', wertung: 'niederlage' },
      { datum: '2026-05-09', uhrzeit: '14:00', heim: 'PBC Lerchenau II',      gast: 'PBC Erding III',        ergebnis: '6:4', wertung: 'niederlage' },
    ],
  },
]

const wertungCfg: Record<Spieltag['wertung'], { textColor: string; dotColor: string }> = {
  sieg:          { textColor: 'text-green-400',  dotColor: 'bg-green-500'  },
  niederlage:    { textColor: 'text-red-400',    dotColor: 'bg-red-500'    },
  unentschieden: { textColor: 'text-gold-400',   dotColor: 'bg-gold-500'   },
  offen:         { textColor: 'text-white/35',   dotColor: 'bg-white/20'   },
}

function SpieltagRow({ s, today }: { s: Spieltag; today: Date }) {
  const date = new Date(s.datum + 'T00:00:00')
  const isPast = date < today
  const w = wertungCfg[s.wertung]
  const weekday   = date.toLocaleDateString('de-DE', { weekday: 'short' })
  const day       = date.toLocaleDateString('de-DE', { day: '2-digit' })
  const monthShort = date.toLocaleDateString('de-DE', { month: 'short' })
  const isErding  = (n: string) => n.startsWith('PBC Erding')

  return (
    <div className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 sm:gap-4 sm:px-5 transition-colors ${
      isPast
        ? 'border-white/4 bg-transparent'
        : 'border-white/10 bg-white/[0.025] hover:border-white/18'
    }`}>
      {/* Datum */}
      <div className={`flex w-11 shrink-0 flex-col items-center text-center ${isPast ? 'opacity-45' : ''}`}>
        <span className="text-[0.58rem] uppercase tracking-wide text-white/50">{weekday}</span>
        <span className="text-lg font-black leading-tight text-white">{day}</span>
        <span className="text-[0.58rem] uppercase text-white/50">{monthShort}</span>
      </div>

      <div className="w-px self-stretch bg-white/8 shrink-0" />

      {/* Paarung */}
      <p className={`flex-1 min-w-0 text-sm leading-snug ${isPast ? 'text-white/50' : ''}`}>
        <span className={isErding(s.heim) ? 'font-bold text-white' : 'text-white/55'}>{s.heim}</span>
        <span className="text-white/25 mx-1">–</span>
        <span className={isErding(s.gast) ? 'font-bold text-white' : 'text-white/55'}>{s.gast}</span>
      </p>

      {/* Ergebnis / Uhrzeit */}
      <div className="shrink-0 text-right min-w-[3.5rem]">
        {s.ergebnis ? (
          <div className="flex items-center justify-end gap-1.5">
            <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${w.dotColor}`} />
            <span className={`text-sm font-bold tabular-nums ${w.textColor}`}>{s.ergebnis}</span>
          </div>
        ) : (
          <span className="text-xs text-white/35 tabular-nums">{s.uhrzeit}</span>
        )}
      </div>
    </div>
  )
}

function LigaTeamSection({ team, today }: { team: LigaTeam; today: Date }) {
  const siege        = team.spielplan.filter(s => s.wertung === 'sieg').length
  const niederlagen  = team.spielplan.filter(s => s.wertung === 'niederlage').length
  const unentschieden = team.spielplan.filter(s => s.wertung === 'unentschieden').length
  const gespielt     = siege + niederlagen + unentschieden

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/6">
      <div className="relative flex flex-wrap items-center justify-between gap-4 bg-charcoal-900 px-7 py-5 border-b border-white/6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700" />
        <div>
          <h3 className="font-display text-2xl sm:text-3xl uppercase text-white leading-none">{team.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">{team.liga} · Saison 2025/26</p>
        </div>
        <div className="flex items-center gap-4 text-center">
          <div>
            <p className="text-xl font-black text-green-400 leading-none">{siege}</p>
            <p className="text-[0.6rem] uppercase tracking-wide text-white/45 mt-0.5">S</p>
          </div>
          <div>
            <p className="text-xl font-black text-gold-400 leading-none">{unentschieden}</p>
            <p className="text-[0.6rem] uppercase tracking-wide text-white/45 mt-0.5">U</p>
          </div>
          <div>
            <p className="text-xl font-black text-red-400 leading-none">{niederlagen}</p>
            <p className="text-[0.6rem] uppercase tracking-wide text-white/45 mt-0.5">N</p>
          </div>
          <div className="w-px self-stretch bg-white/15" />
          <div>
            <p className="text-xl font-black text-white/55 leading-none">{gespielt}/{team.spielplan.length}</p>
            <p className="text-[0.6rem] uppercase tracking-wide text-white/45 mt-0.5">Spiele</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1.5 bg-charcoal-950">
        {team.spielplan.map((s, i) => (
          <SpieltagRow key={i} s={s} today={today} />
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TurnierePage() {
  const months = getTwoMonths()
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const nextTurnier = getNextMittwochsturnier(now)
  const nextTurnierStr = nextTurnier.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const nextTurnierWd = nextTurnier.toLocaleDateString('de-DE', { weekday: 'long' })

  return (
    <>
      <HidePastCalendarEvents />
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Veranstaltungen"
            title="Liga, Turniere, Training & Kalender"
            subtitle="Regelmäßige Trainingszeiten, monatliches Mittwochsturnier und alle Vereinstermine im Überblick."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="space-y-10">

          {/* Info-Karten */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/6 bg-white/[0.02] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65 mb-4">Wöchentliches Training</p>
              <div className="space-y-3">
                {[
                  { tag: 'Sonntag',    zeit: '13:00 – 16:00 Uhr', info: 'Schnuppertraining & Vereinstraining' },
                  { tag: 'Dienstag',   zeit: '18:00 – 21:00 Uhr', info: 'Vereinstraining' },
                  { tag: 'Donnerstag', zeit: '18:00 – 21:00 Uhr', info: 'Training & Ligavorbereitung' },
                ].map(({ tag, zeit, info }) => (
                  <div key={tag} className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-charcoal-900 px-4 py-3">
                    <div>
                      <p className="text-sm font-bold text-white">{tag}</p>
                      <p className="text-xs text-white/70">{info}</p>
                    </div>
                    <p className="text-sm font-semibold text-gold-500 tabular-nums whitespace-nowrap">{zeit}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/60">
                Bowling Castle Erding · Robert-Bosch-Straße 3 · 85055 Erding
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-gold-500/20 bg-gold-500/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 mb-4">Mittwochsturnier</p>
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white leading-none mb-3">Jeden letzten<br />Mittwoch im Monat</h3>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-gold-500/15 bg-gold-500/[0.06] px-4 py-3">
                <span className="text-2xl font-black text-gold-400">18:30</span>
                <div>
                  <p className="text-sm font-bold text-white">Turnierbeginn</p>
                  <p className="text-xs text-white/70">Bowling Castle Erding</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-gold-500" aria-hidden="true">
                  <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 5h12M4 1v2M10 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <p className="text-xs text-white/75">
                  Nächstes Turnier: <span className="font-bold text-white">{nextTurnierWd}, {nextTurnierStr}</span>
                </p>
              </div>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Offenes Turnier für Vereins- und Hobbyspieler. Startgebühr 10 €,
                Ausschüttung vollständig an die Platzierten.
                Anmeldung direkt vor Ort.
              </p>
            </div>
          </div>

          {/* Monatskalender */}
          {months.map(({ year, month }) => (
            <MonthBlock key={`${year}-${month}`} year={year} month={month} today={today} />
          ))}

          {/* Liga-Spielplan */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white mb-6 pl-1">Ligaspieltage 2025/26</h2>
            <div className="flex flex-col gap-4">
              {ligaTeams.map(team => (
                <LigaTeamSection key={team.name} team={team} today={today} />
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-white/55">
            Kalender automatisch generiert · Stand: {new Date().toLocaleDateString('de-DE')} · Alle Angaben ohne Gewähr
          </p>

        </Container>
      </section>
    </>
  )
}

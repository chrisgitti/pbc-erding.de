'use client'

import { useState, useEffect } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { getNextMittwochsturnier, getNextTrainingDays } from '@/lib/turnier-utils'
import { mannschaften, vereinstermine, type Vereinstermin } from '@/lib/data'

// ─── Typen ───────────────────────────────────────────────────────────────────

type RegularType = 'turnier' | 'probetraining' | 'training'

type RegularEntry = { kind: 'regular'; date: Date; type: RegularType }

type SpieltagEntry = {
  kind: 'spieltag'
  date: Date
  teamName: string
  gegner: string
  liga: string
  uhrzeit: string
  heimspiel: boolean
}

type VereinsterminEntry = {
  kind: 'vereinstermin'
  date: Date
  data: Vereinstermin
}

type Entry = RegularEntry | SpieltagEntry | VereinsterminEntry

// ─── Konfiguration reguläre Zeilen ───────────────────────────────────────────

const rowConfig: Record<RegularType, {
  label: string
  badgeVariant: 'gold' | 'neutral'
  title: string
  time: string
  note: string
  accent: string
}> = {
  turnier: {
    label: 'Turnier',
    badgeVariant: 'gold',
    title: 'Mittwochsturnier',
    time: '18:30 Uhr',
    note: 'Bowling Castle Erding · Startgebühr 10 € · Ausschüttung vollständig',
    accent: 'bg-gold-500',
  },
  probetraining: {
    label: 'Schnuppertraining',
    badgeVariant: 'neutral',
    title: 'Schnuppertraining & Vereinstraining',
    time: '13:00 – 16:00 Uhr',
    note: 'Bowling Castle Erding · Offen für alle Interessierten',
    accent: 'bg-white/10',
  },
  training: {
    label: 'Training',
    badgeVariant: 'neutral',
    title: 'Vereinstraining',
    time: '18:00 – 21:00 Uhr',
    note: 'Bowling Castle Erding',
    accent: 'bg-white/10',
  },
}

// ─── Datum-Hilfsfunktion ──────────────────────────────────────────────────────

function dateParts(date: Date) {
  return {
    wd:    date.toLocaleDateString('de-DE', { weekday: 'short' }),
    day:   date.toLocaleDateString('de-DE', { day: '2-digit' }),
    month: date.toLocaleDateString('de-DE', { month: 'short' }),
  }
}

// ─── Datumsberechnung (läuft zur Laufzeit im Browser) ────────────────────────

function computeEntries(): Entry[] {
  const now   = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const turnier   = getNextMittwochsturnier(now)
  const trainings = getNextTrainingDays(now, 3)

  const entries: Entry[] = [
    { kind: 'regular', date: turnier, type: 'turnier' },
    ...trainings.map((t): Entry => ({ kind: 'regular', date: t.date, type: t.type })),
  ]

  // Sondertermine (JHV, Vereinsmeisterschaft …) – nur kommende Termine
  for (const v of vereinstermine) {
    const d = new Date(v.date + 'T00:00:00')
    if (d >= today) {
      entries.push({ kind: 'vereinstermin', date: d, data: v })
    }
  }

  // Nächster offener Spieltag je Mannschaft
  for (const m of mannschaften) {
    const next = m.spielplan
      .filter(s => s.wertung === 'offen')
      .map(s => ({ s, d: new Date(s.datum + 'T00:00:00') }))
      .filter(({ d }) => d > today)
      .sort((a, b) => a.d.getTime() - b.d.getTime())[0]

    if (next) {
      const heimspiel = next.s.heim.includes('Erding')
      const gegner    = heimspiel ? next.s.gast : next.s.heim
      entries.push({
        kind: 'spieltag',
        date: next.d,
        teamName: m.name,
        gegner,
        liga: m.liga,
        uhrzeit: next.s.uhrzeit,
        heimspiel,
      })
    }
  }

  entries.sort((a, b) => a.date.getTime() - b.date.getTime())
  return entries
}

// ─── Zeilen-Komponenten ───────────────────────────────────────────────────────

function RegularRow({ date, type }: { date: Date; type: RegularType }) {
  const { wd, day, month } = dateParts(date)
  const cfg = rowConfig[type]
  const isTurnier = type === 'turnier'

  return (
    <div className={`group relative flex items-center gap-5 rounded-[1.5rem] border bg-white/[0.02] px-5 py-5 transition-all sm:gap-6 sm:px-6 overflow-hidden ${
      isTurnier
        ? 'border-gold-500/20 hover:border-gold-500/40 hover:bg-gold-500/[0.04]'
        : 'border-white/6 hover:border-gold-500/20 hover:bg-white/[0.035]'
    }`}>
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${cfg.accent}`} />
      <div className="flex w-14 shrink-0 flex-col items-center text-center rounded-xl py-1">
        <span className="text-xs text-white/60 uppercase tracking-wide">{wd}</span>
        <span className="text-2xl font-black text-white leading-none">{day}</span>
        <span className={`text-xs uppercase ${isTurnier ? 'text-gold-500' : 'text-white/60'}`}>{month}</span>
      </div>
      <div className="w-px self-stretch bg-white/10" />
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <Badge variant={cfg.badgeVariant}>{cfg.label}</Badge>
          <span className="text-xs text-white/70">{cfg.time}</span>
        </div>
        <h3 className={`truncate font-bold transition-colors ${
          isTurnier ? 'text-gold-300 group-hover:text-gold-400' : 'text-white group-hover:text-gold-400'
        }`}>{cfg.title}</h3>
        <p className="mt-0.5 text-xs text-white/65">{cfg.note}</p>
      </div>
      <span aria-hidden="true" className="text-lg text-white/50 transition-all group-hover:translate-x-1 group-hover:text-gold-500">→</span>
    </div>
  )
}

function SpieltagRow({ entry }: { entry: SpieltagEntry }) {
  const { wd, day, month } = dateParts(entry.date)
  const ort = entry.heimspiel ? 'Heimspiel' : 'Auswärtsspiel'

  return (
    <div className="group relative flex items-center gap-5 rounded-[1.5rem] border border-white/6 bg-white/[0.02] px-5 py-5 transition-all sm:gap-6 sm:px-6 overflow-hidden hover:border-gold-500/20 hover:bg-white/[0.035]">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-700" />
      <div className="flex w-14 shrink-0 flex-col items-center text-center rounded-xl py-1">
        <span className="text-xs text-white/60 uppercase tracking-wide">{wd}</span>
        <span className="text-2xl font-black text-white leading-none">{day}</span>
        <span className="text-xs uppercase text-white/60">{month}</span>
      </div>
      <div className="w-px self-stretch bg-white/10" />
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <Badge variant="green">Liga</Badge>
          <span className="text-xs text-white/70">{entry.uhrzeit} Uhr</span>
          <span className="text-xs text-white/40">{ort}</span>
        </div>
        <h3 className="truncate font-bold text-white transition-colors group-hover:text-gold-400">
          {entry.teamName}
        </h3>
        <p className="mt-0.5 text-xs text-white/65">
          vs. {entry.gegner} · {entry.liga}
        </p>
      </div>
      <span aria-hidden="true" className="text-lg text-white/50 transition-all group-hover:translate-x-1 group-hover:text-gold-500">→</span>
    </div>
  )
}

function VereinsterminRow({ entry }: { entry: VereinsterminEntry }) {
  const { wd, day, month } = dateParts(entry.date)
  const v = entry.data
  const badgeVariant: 'gold' | 'neutral' = v.badge === 'Turnier' ? 'gold' : 'neutral'

  const inner = (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-700" />
      <div className="flex w-14 shrink-0 flex-col items-center text-center rounded-xl py-1">
        <span className="text-xs text-white/60 uppercase tracking-wide">{wd}</span>
        <span className="text-2xl font-black text-white leading-none">{day}</span>
        <span className="text-xs uppercase text-white/60">{month}</span>
      </div>
      <div className="w-px self-stretch bg-white/10" />
      <div className="flex-1 min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <Badge variant={badgeVariant}>{v.badge}</Badge>
          <span className="text-xs text-white/70">{v.time}</span>
        </div>
        <h3 className="truncate font-bold text-white transition-colors group-hover:text-gold-400">
          {v.title}
        </h3>
        <p className="mt-0.5 text-xs text-white/65">{v.note}</p>
      </div>
      <span aria-hidden="true" className="text-lg text-white/50 transition-all group-hover:translate-x-1 group-hover:text-gold-500">→</span>
    </>
  )

  const className = 'group relative flex items-center gap-5 rounded-[1.5rem] border border-white/6 bg-white/[0.02] px-5 py-5 transition-all sm:gap-6 sm:px-6 overflow-hidden hover:border-gold-500/20 hover:bg-white/[0.035]'

  return v.slug
    ? <a href={`/news/${v.slug}`} className={className}>{inner}</a>
    : <div className={className}>{inner}</div>
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function EventsSection() {
  const [entries, setEntries] = useState<Entry[] | null>(null)

  useEffect(() => {
    setEntries(computeEntries())
  }, [])

  return (
    <section className="bg-charcoal-950 py-24" aria-labelledby="events-heading">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading id="events-heading" label="Kalender" title="Kommende Veranstaltungen" />
          <Button href="/veranstaltungen" variant="outline" size="sm">Alle Veranstaltungen</Button>
        </div>

        <div className="flex flex-col gap-4">
          {entries === null ? (
            // Platzhalter während der Browser-seitige Datumscheck läuft (minimal)
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-[88px] rounded-[1.5rem] border border-white/6 bg-white/[0.02] animate-pulse" />
            ))
          ) : (
            entries.map((e, i) => {
              if (e.kind === 'spieltag')      return <SpieltagRow      key={i} entry={e} />
              if (e.kind === 'vereinstermin') return <VereinsterminRow key={i} entry={e} />
              return <RegularRow key={i} date={e.date} type={e.type} />
            })
          )}
        </div>
      </Container>
    </section>
  )
}

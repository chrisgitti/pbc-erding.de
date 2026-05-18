'use client'

import { useState } from 'react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import type { Wertung, Spiel, Mannschaft } from '@/lib/data'

export type { Mannschaft }

// ─── Hilfsfunktionen ─────────────────────────────────────────────────────────

const wertungBadge: Record<Wertung, { label: string; variant: 'green' | 'red' | 'neutral' | 'gold' }> = {
  sieg:          { label: 'Sieg',          variant: 'green'   },
  niederlage:    { label: 'Niederlage',    variant: 'red'     },
  unentschieden: { label: 'Unentschieden', variant: 'neutral' },
  offen:         { label: 'Offen',         variant: 'neutral' },
}

const ergebnisColor: Record<Wertung, string> = {
  sieg:          'text-green-400',
  niederlage:    'text-red-400',
  unentschieden: 'text-gold-400',
  offen:         'text-white/55',
}

function formatDatum(iso: string) {
  const d = new Date(iso)
  const wd = d.toLocaleDateString('de-DE', { weekday: 'short' })
  return `${wd}. ${d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
}

function isPBC(name: string) {
  return name.startsWith('PBC Erding')
}

// ─── Komponente ──────────────────────────────────────────────────────────────

export function TeamSection({ m }: { m: Mannschaft }) {
  const [open, setOpen] = useState(false)

  const statsItems = [
    { label: 'Rang',        value: `${m.rang}.`,              highlight: true  },
    { label: 'Siege',       value: String(m.siege),           highlight: false },
    { label: 'Unentsch.',   value: String(m.unentschieden),   highlight: false },
    { label: 'Niederlagen', value: String(m.niederlagen),     highlight: false },
    { label: 'Spiele',      value: m.spiele,                  highlight: false },
    { label: '+/−',         value: m.diff,                    highlight: false },
    { label: 'Punkte',      value: m.punkte,                  highlight: false },
  ]

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/6">

      {/* ── Header (immer sichtbar, klickbar) ── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${m.name} ${open ? 'zuklappen' : 'aufklappen'}`}
        className="group w-full relative flex items-center gap-4 bg-charcoal-900 px-7 py-5 border-b border-white/6 text-left hover:bg-charcoal-900/70 transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-green-700" />

        {/* Team-Name + Liga */}
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-white leading-none">{m.name}</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 flex items-center gap-2">
            BBV Pool 2025/26 · {m.liga}
            {m.ligaUrl && (
              <Link
                href={m.ligaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Ligatabelle ${m.liga} auf BBV-Portal (öffnet in neuem Tab)`}
                className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-white/10 text-white/75 hover:bg-gold-500/20 hover:text-gold-400 transition-colors text-[0.6rem] leading-none shrink-0"
              >
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </p>
        </div>

        {/* Mini-Stats (sichtbar wenn eingeklappt) */}
        {!open && (
          <div className="hidden sm:flex items-center gap-3 mr-2">
            <div className="text-center">
              <span className="text-lg font-black text-gold-400 tabular-nums">{m.rang}.</span>
              <span className="ml-1 text-xs text-white/65">Rang</span>
            </div>
            <div aria-hidden="true" className="w-px h-6 bg-white/15" />
            <div className="text-center">
              <span className="text-lg font-black text-white tabular-nums">{m.punkte}</span>
              <span className="ml-1 text-xs text-white/65">Pkte</span>
            </div>
            <div aria-hidden="true" className="w-px h-6 bg-white/15" />
            <div className="text-center">
              <span className="text-sm text-white/75 tabular-nums">{m.siege}S · {m.unentschieden}U · {m.niederlagen}N</span>
            </div>
          </div>
        )}

        {/* Chevron */}
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          aria-hidden="true"
          className={`shrink-0 text-white/60 group-hover:text-white transition-all duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Aufklappbarer Inhalt ── */}
      {open && (
        <>
          {/* Tabellenstand */}
          <div className="flex flex-wrap gap-2 px-6 py-5 border-b border-white/5 bg-white/[0.01]">
            {statsItems.map((s) => (
              <div
                key={s.label}
                className={`flex flex-col items-center rounded-xl px-4 py-2.5 min-w-[60px] text-center ${
                  s.highlight
                    ? 'bg-gold-500/12 border border-gold-500/25'
                    : 'bg-white/[0.03] border border-white/6'
                }`}
              >
                <span className={`text-xl font-black leading-none tabular-nums ${s.highlight ? 'text-gold-400' : 'text-white'}`}>
                  {s.value}
                </span>
                <span className="mt-1 text-[0.65rem] uppercase tracking-wide text-white/70">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Spielplan */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.015]">
                  <th className="px-5 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wide text-white/70">Datum</th>
                  <th className="px-3 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wide text-white/70 hidden sm:table-cell">Uhr</th>
                  <th className="px-3 py-3 text-left text-[0.7rem] font-semibold uppercase tracking-wide text-white/70">Begegnung</th>
                  <th className="px-3 py-3 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-white/70">Ergebnis</th>
                  <th className="px-5 py-3 text-right text-[0.7rem] font-semibold uppercase tracking-wide text-white/70">Resultat</th>
                </tr>
              </thead>
              <tbody>
                {m.spielplan.map((s, i) => {
                  const istOffen = s.wertung === 'offen'
                  const heimIstPBC = isPBC(s.heim)
                  return (
                    <tr
                      key={i}
                      className={`border-b border-white/5 last:border-0 transition-colors ${
                        istOffen ? 'opacity-45' : 'hover:bg-white/[0.025]'
                      }`}
                    >
                      <td className="px-5 py-3.5 text-sm text-white/75 tabular-nums whitespace-nowrap">
                        {formatDatum(s.datum)}
                      </td>
                      <td className="px-3 py-3.5 text-sm text-white/65 tabular-nums hidden sm:table-cell">
                        {s.uhrzeit}
                      </td>
                      <td className="px-3 py-3.5 text-sm">
                        <span className="flex items-center gap-1.5 flex-wrap">
                          <span className={isPBC(s.heim) ? 'font-bold text-gold-400' : 'text-white/80'}>
                            {s.heim}
                          </span>
                          {heimIstPBC && (
                            <span className="text-[0.6rem] text-white/60 border border-white/20 rounded px-1 py-px" aria-label="Heimspiel" title="Heimspiel">H</span>
                          )}
                          <span aria-hidden="true" className="text-white/50 mx-0.5">vs</span>
                          <span className={isPBC(s.gast) ? 'font-bold text-gold-400' : 'text-white/80'}>
                            {s.gast}
                          </span>
                          {!heimIstPBC && (
                            <span className="text-[0.6rem] text-white/60 border border-white/20 rounded px-1 py-px" aria-label="Auswaertsspiel" title="Auswaertsspiel">A</span>
                          )}
                        </span>
                      </td>
                      <td className={`px-3 py-3.5 text-center text-base font-black tabular-nums ${ergebnisColor[s.wertung]}`}>
                        {s.ergebnis ?? '–'}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <Badge variant={wertungBadge[s.wertung].variant}>
                          {wertungBadge[s.wertung].label}
                        </Badge>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

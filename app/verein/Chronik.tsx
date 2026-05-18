'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { ChronikEntry } from '@/lib/data'

const STORAGE_YEARS  = 'chronik-open-years'
const STORAGE_MONTHS = 'chronik-open-months'

const MONTH_NAMES = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
]

type YearGroup = { year: number; months: { month: number; entries: ChronikEntry[] }[] }

function group(entries: ChronikEntry[]): YearGroup[] {
  const map = new Map<number, Map<number, ChronikEntry[]>>()
  for (const e of entries) {
    const [y, m] = e.date.split('-').map(Number)
    if (!map.has(y)) map.set(y, new Map())
    const mm = map.get(y)!
    if (!mm.has(m)) mm.set(m, [])
    mm.get(m)!.push(e)
  }
  return [...map.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, mm]) => ({
      year,
      months: [...mm.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([month, es]) => ({
          month,
          entries: [...es].sort((a, b) => a.date.localeCompare(b.date)),
        })),
    }))
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

export default function Chronik({ entries }: { entries: ChronikEntry[] }) {
  const grouped = group(entries)
  const latestYear = grouped[0]?.year
  const latestMonthKey = grouped[0] ? `${grouped[0].year}-${grouped[0].months[0]?.month}` : ''

  const [openYears, setOpenYears] = useState<Set<number>>(
    latestYear ? new Set([latestYear]) : new Set()
  )
  const [openMonths, setOpenMonths] = useState<Set<string>>(
    latestMonthKey ? new Set([latestMonthKey]) : new Set()
  )
  const [ready, setReady] = useState(false)

  // Restore accordion state from sessionStorage after mount
  useEffect(() => {
    try {
      const sy = sessionStorage.getItem(STORAGE_YEARS)
      if (sy) setOpenYears(new Set(JSON.parse(sy) as number[]))
      const sm = sessionStorage.getItem(STORAGE_MONTHS)
      if (sm) setOpenMonths(new Set(JSON.parse(sm) as string[]))
    } catch {}
    setReady(true)
  }, [])

  // Persist accordion state whenever it changes (only after initial restore)
  useEffect(() => {
    if (!ready) return
    try { sessionStorage.setItem(STORAGE_YEARS, JSON.stringify([...openYears])) } catch {}
  }, [openYears, ready])

  useEffect(() => {
    if (!ready) return
    try { sessionStorage.setItem(STORAGE_MONTHS, JSON.stringify([...openMonths])) } catch {}
  }, [openMonths, ready])

  const toggleYear = (y: number) =>
    setOpenYears(prev => { const s = new Set(prev); s.has(y) ? s.delete(y) : s.add(y); return s })

  const toggleMonth = (key: string) =>
    setOpenMonths(prev => { const s = new Set(prev); s.has(key) ? s.delete(key) : s.add(key); return s })

  return (
    <div className="flex flex-col gap-2 max-w-2xl">
      {grouped.map(({ year, months }) => {
        const yearOpen = openYears.has(year)
        return (
          <div key={year} className="overflow-hidden rounded-[1rem] border border-white/6">
            <button
              type="button"
              onClick={() => toggleYear(year)}
              aria-expanded={yearOpen}
              className="flex w-full items-center justify-between gap-4 bg-charcoal-900 px-6 py-4 text-left transition-colors hover:bg-charcoal-800"
            >
              <span className="font-display text-2xl uppercase tracking-wide text-white">{year}</span>
              <span className="text-gold-500"><Chevron open={yearOpen} /></span>
            </button>

            {yearOpen && (
              <div className="divide-y divide-white/[0.04] bg-charcoal-950">
                {months.map(({ month, entries: es }) => {
                  const key = `${year}-${month}`
                  const monthOpen = openMonths.has(key)
                  const label = es.length === 1 ? '1 Eintrag' : `${es.length} Einträge`
                  return (
                    <div key={month}>
                      <button
                        type="button"
                        onClick={() => toggleMonth(key)}
                        aria-expanded={monthOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-3 text-left transition-colors hover:bg-charcoal-900/50"
                      >
                        <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white/65">
                          {MONTH_NAMES[month - 1]}
                        </span>
                        <div className="flex items-center gap-3 text-white/35">
                          <span className="text-xs">{label}</span>
                          <span className="text-gold-500/60"><Chevron open={monthOpen} /></span>
                        </div>
                      </button>

                      {monthOpen && (
                        <ul className="divide-y divide-white/[0.04]">
                          {es.map((e) => {
                            const day = e.date.slice(8)
                            const key = e.slug ?? e.url ?? `${e.date}-${e.title}`
                            const inner = (
                              <>
                                <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-white/30">{day}.</span>
                                <span className="flex-1 text-sm leading-snug text-white/75 transition-colors group-hover:text-white">{e.title}</span>
                                <span className="shrink-0 text-xs text-gold-500/50 transition-all group-hover:translate-x-0.5 group-hover:text-gold-500">→</span>
                              </>
                            )
                            if (e.slug) return (
                              <li key={key}>
                                <Link href={`/news/${e.slug}?from=chronik`} className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-charcoal-900/40">
                                  {inner}
                                </Link>
                              </li>
                            )
                            if (e.url) return (
                              <li key={key}>
                                <a href={e.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-charcoal-900/40">
                                  {inner}
                                </a>
                              </li>
                            )
                            return (
                              <li key={key} className="flex items-center gap-4 px-6 py-3.5">
                                <span className="w-6 shrink-0 font-mono text-xs tabular-nums text-white/30">{day}.</span>
                                <span className="flex-1 text-sm leading-snug text-white/75">{e.title}</span>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

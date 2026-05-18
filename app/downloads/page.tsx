import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { downloads } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Wichtige Vereinsunterlagen, Formulare und Billard-Dokumente des PBC Erding.',
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const infos = [
  {
    title: 'Für Neumitglieder',
    text: 'Satzung, Aufnahmeantrag, Einzugsermächtigung und Informationsblatt – alles für einen reibungslosen Vereinseinstieg.',
    anchor: '#verein',
  },
  {
    title: 'Für Mannschaften',
    text: 'Spielberichtsvorlagen und Fahrtkostenzuschuss – die wichtigsten organisatorischen Unterlagen für den Ligabetrieb.',
    anchor: '#liga',
  },
  {
    title: 'Regelwerk & Vorlagen',
    text: 'Offizielle DBU-Spielregeln, Turnierordnung und Turnierpläne für 16 bis 128 Teilnehmer.',
    anchor: '#regelwerk',
  },
]

export default function DownloadsPage() {
  const groups = Array.from(new Set(downloads.map((item) => item.group)))

  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Unterlagen"
            title="Downloads"
            subtitle="Vereinsdokumente, Formulare und Billard-Unterlagen des PBC Erding e.V."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="space-y-12">
          <div className="grid gap-4 lg:grid-cols-3">
            {infos.map((item) => (
              <a key={item.title} href={item.anchor} className="group rounded-[1.5rem] border border-white/6 bg-white/[0.02] p-6 h-full block hover:border-gold-500/30 hover:bg-gold-500/[0.04] transition-colors">
                <h2 className="font-display text-2xl sm:text-3xl uppercase text-white group-hover:text-gold-400 transition-colors">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
              </a>
            ))}
          </div>

          {groups.map((group) => (
            <div key={group} id={group.toLowerCase()}>
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
                {group}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {downloads.filter((item) => item.group === group).map((item) => {
                  const isLocal = !!item.filename
                  const href = isLocal ? `${base}${item.href}` : item.href
                  return (
                    <a
                      key={item.title}
                      href={href}
                      download={isLocal ? item.filename : undefined}
                      target={isLocal ? undefined : '_blank'}
                      rel={isLocal ? undefined : 'noopener noreferrer'}
                      className="group flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/6 bg-white/[0.02] px-6 py-5 text-white transition-colors hover:border-gold-500/30 hover:bg-gold-500/[0.04]"
                    >
                      <div className="min-w-0">
                        <span className="block text-sm font-semibold leading-relaxed group-hover:text-gold-400 transition-colors">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-white/40">
                          {isLocal ? (item.filename?.endsWith('.zip') ? 'ZIP · Download' : 'PDF · Download') : 'Externer Link'}
                        </span>
                      </div>
                      <svg
                        className="shrink-0 text-white/30 group-hover:text-gold-500 transition-colors"
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        {isLocal ? (
                          <>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </>
                        ) : (
                          <>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </>
                        )}
                      </svg>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}

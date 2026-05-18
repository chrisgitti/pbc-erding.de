import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'
import { teams } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mannschaften',
  description: 'Sportliche Entwicklung und Mannschaftstradition des PBC Erding.',
}

export default function MannschaftenPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Liga-Betrieb"
            title="Unsere Mannschaften"
            subtitle="Aktuell nehmen drei Mannschaften des PBC Erding am Ligabetrieb teil."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <article key={team.id} className="rounded-[1.75rem] border border-white/6 bg-white/[0.02] p-8 flex flex-col gap-6 h-full hover:border-gold-500/20 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="green">{team.league}</Badge>
                    {team.leagueUrl && (
                      <Link
                        href={team.leagueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ligainformationen zu ${team.league} auf externer Seite (oeffnet in neuem Tab)`}
                        title="Link verweist auf externe Seite"
                        className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/10 text-white/75 hover:bg-gold-500/20 hover:text-gold-400 transition-colors text-xs leading-none"
                      >
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl uppercase text-white">{team.name}</h2>
                  <p className="text-sm text-white/65 mt-1">Saison {team.season}</p>
                </div>
                {team.position && (
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-xs uppercase tracking-wide text-white/65 mb-1">Aktuelle Position</p>
                    <p className="text-4xl font-black text-gold-500">
                      {team.position}.{' '}
                      <span className="text-base font-medium text-white/70">Platz</span>
                    </p>
                  </div>
                )}
                <div className="border-t border-white/5 pt-4 flex-1">
                  <p className="text-xs uppercase tracking-wide text-white/65 mb-3">Kader</p>
                  <ul className="space-y-2">
                    {team.players.map((player) => (
                      <li key={player} className="flex items-center gap-2 text-sm text-white/80">
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold-500/60 shrink-0" />
                        {player}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

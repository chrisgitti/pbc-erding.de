import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { TeamSection } from './TeamSection'
import { mannschaften } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ergebnisse',
  description: 'Spielergebnisse und Tabellen aller Mannschaften des PBC Erding. Saison 2025/26.',
}

export default function ErgebnissePage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Spielbetrieb"
            title="Ergebnisse"
            subtitle="Alle Mannschaften des PBC Erding in der Saison 2025/26 · BBV Pool"
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="space-y-4">
          {mannschaften.map((m) => (
            <TeamSection key={m.name} m={m} />
          ))}
          <p className="text-center text-xs text-white/55 pt-4">
            Datenquelle: BBV Pool 2025/26 · Stand: 26.04.2026
          </p>
        </Container>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/site-config'
import { chronik } from '@/lib/data'
import Chronik from './Chronik'

export const metadata: Metadata = {
  title: 'Verein',
  description: `Alles über den ${siteConfig.fullName}: Geschichte, Vorstand, Training und Mitgliedschaft.`,
}

const vorstand = [
  { name: 'Ludwig Weidinger', rolle: '1. Vorsitzender' },
  { name: 'Robert Flaexl', rolle: '2. Vorsitzender' },
  { name: 'Michael Gilik', rolle: 'Kassenwart' },
  { name: 'Patrick Mittermueller', rolle: 'Schriftführer' },
  { name: 'Björn Haase', rolle: 'Sportwart' },
]

const training = [
  { tag: 'Sonntag', uhrzeit: '13:00 - 16:00 Uhr', typ: 'Schnuppertraining im Bowling Castle' },
  { tag: 'Dienstag', uhrzeit: '18:00 - 21:00 Uhr', typ: 'Training & freies Spiel' },
  { tag: 'Donnerstag', uhrzeit: '18:00 - 21:00 Uhr', typ: 'Training & Ligavorbereitung' },
]

export default function VereinPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Wir sind PBC Erding"
            title="Der Verein"
            subtitle="Gegründet 2008, heute zuhause im Bowling Castle Erding und weiterhin mit voller Leidenschaft für den Billardsport aktiv."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-6">Geschichte</h2>
            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>
                Der Pool Billard Club Erding wurde am 27. Juni 2008 von Richard Bendl,
                Heike Brinkmann, Hansjoerg Daebritz, Markus Forstner, Marcel Kupsch,
                Stefan Mooser, Guenter Neumayr und Ludwig Weidinger in Erding gegründet.
                Ziel war und ist es, den Billardsport im Großraum Erding zu fördern
                und möglichst vielen Interessierten attraktive Bedingungen für ihr
                Hobby zu bieten.
              </p>
              <p>
                Schon kurz nach der Gründung konnte der Verein mehrere Mannschaften
                für den Bayerischen Billardverband melden. In den ersten Jahren folgten
                Aufstiege, Meisterschaftserfolge und der sportliche Ausbau bis hin zur
                Verbandsliga.
              </p>
              <p>
                Seit dem 4. Januar 2026 findet der Trainings- und Spielbetrieb im
                Bowling Castle Erding statt. Die neue Spielstätte bietet dem Verein
                zeitgemäße Bedingungen für Training, Ligaspiele und Vereinsabende.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="vorstand" className="py-20 bg-charcoal-900 border-t border-white/5">
        <Container>
          <SectionHeading label="Führung" title="Vorstand" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {vorstand.map((person) => (
              <div key={person.name} className="bg-charcoal-900 p-8 h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-500 mb-2">
                  {person.rolle}
                </p>
                <p className="text-xl font-bold text-white">{person.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="training" className="py-20 bg-charcoal-950 border-t border-white/5">
        <Container>
          <SectionHeading label="Spielbetrieb" title="Trainingszeiten" className="mb-12" />
          <div className="flex flex-col gap-px bg-white/5 max-w-2xl">
            {training.map((t) => (
              <div key={t.tag} className="bg-charcoal-950 flex items-center justify-between px-8 py-6">
                <div>
                  <p className="font-bold text-white">{t.tag}</p>
                  <p className="text-sm text-white/70">{t.typ}</p>
                </div>
                <p className="text-sm font-semibold text-gold-500 tabular-nums">{t.uhrzeit}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/65">
            Adresse: {siteConfig.location.venue}, {siteConfig.location.street}, {siteConfig.location.zip} {siteConfig.location.city}
          </p>
        </Container>
      </section>

      <section id="chronik" className="py-20 bg-charcoal-900 border-t border-white/5">
        <Container>
          <SectionHeading label="Vereinsgeschehen" title="Chronik" subtitle="Nachrichten und Meldungen aus dem Vereinsleben – chronologisch geordnet." className="mb-12" />
          <Chronik entries={chronik} />
        </Container>
      </section>
    </>
  )
}

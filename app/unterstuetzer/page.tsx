import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { sponsors } from '@/lib/data'
import type { Sponsor } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Unterstützer',
  description: 'Unsere Unterstützer, Partner und Förderer. Werden Sie Partner des PBC Erding.',
}

function SponsorLink({
  s,
  className,
  children,
}: {
  s: Sponsor
  className: string
  children: React.ReactNode
}) {
  if (s.website) {
    return (
      <a href={s.website} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return <div className={className}>{children}</div>
}

export default function UnterstuetzerPage() {
  const gold   = sponsors.filter((s) => s.tier === 'gold')
  const silber = sponsors.filter((s) => s.tier === 'silber')
  const bronze = sponsors.filter((s) => s.tier === 'bronze')
  const packages = [
    { name: 'Präsenz im Club',       text: 'Platzierung auf Aushängen und Werbematerial, Nennung bei Veranstaltungen.' },
    { name: 'Digitale Sichtbarkeit', text: 'Darstellung auf der Vereinswebsite und in den sozialen Medien des PBC Erding.' },
    { name: 'Turnier-Unterstützung', text: 'Namensnennung bei Vereinsformaten, Turnieren und Vereinsberichten.' },
  ]

  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Partner & Förderer"
            title="Unsere Unterstützer"
            subtitle="Wir freuen uns über jede Unterstützung – ob als Partner, Förderer oder durch persönliches Engagement."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="space-y-16">

          {/* Was wir bieten */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-6">Was wir bieten</h2>
            <div className="grid gap-4 lg:grid-cols-3">
              {packages.map((item) => (
                <div key={item.name} className="rounded-[1.5rem] border border-white/6 bg-white/[0.02] p-6 h-full">
                  <h2 className="font-display text-2xl sm:text-3xl uppercase text-white">{item.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gold */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-8">Hauptunterstützer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {gold.map((s) => (
                <SponsorLink
                  key={s.id}
                  s={s}
                  className="bg-charcoal-950 p-10 flex flex-col gap-5 transition-colors hover:bg-charcoal-800"
                >
                  {s.logo && (
                    <div className="bg-white rounded-xl px-5 py-4 w-fit">
                      <img
                        src={`/images/sponsoren/${s.logo}`}
                        alt={s.name}
                        className="h-48 w-auto object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-2xl font-bold text-white">{s.name}</p>
                    {s.description && <p className="mt-1 text-sm text-white/70">{s.description}</p>}
                  </div>
                </SponsorLink>
              ))}
            </div>
          </div>

          {/* Silber */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-8">Partner</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {silber.map((s) => (
                <SponsorLink
                  key={s.id}
                  s={s}
                  className="bg-charcoal-950 p-8 flex flex-col gap-4 transition-colors hover:bg-charcoal-800"
                >
                  {s.logo && (
                    <div className="bg-white rounded-lg px-4 py-3 w-fit">
                      <img
                        src={`/images/sponsoren/${s.logo}`}
                        alt={s.name}
                        className="h-36 w-auto object-contain"
                      />
                    </div>
                  )}
                  <p className="text-lg font-bold text-white/90">{s.name}</p>
                </SponsorLink>
              ))}
            </div>
          </div>

          {/* Bronze */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-8">Förderer</h2>
            <div className="flex flex-wrap gap-px bg-white/5">
              {bronze.map((s) => (
                <SponsorLink
                  key={s.id}
                  s={s}
                  className="bg-charcoal-950 px-8 py-6 flex-1 min-w-[200px] flex flex-col gap-3 transition-colors hover:bg-charcoal-800"
                >
                  {s.logo && (
                    <div className="bg-white rounded-lg px-3 py-2 w-fit">
                      <img
                        src={`/images/sponsoren/${s.logo}`}
                        alt={s.name}
                        className="h-30 w-auto object-contain"
                      />
                    </div>
                  )}
                  <p className="text-base font-semibold text-white/80">{s.name}</p>
                  {s.description && <p className="text-sm text-white/55">{s.description}</p>}
                </SponsorLink>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[1.5rem] border border-gold-500/20 bg-gold-500/5 p-10">
            <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-4">Den Verein unterstützen</h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mb-8">
              Sie möchten den PBC Erding unterstützen? Wir freuen uns über Ihre Anfrage –
              ganz ohne vertragliche Verpflichtung, einfach aus Freude am Sport in der Region.
            </p>
            <Button href="/kontakt?betreff=unterstuetzung" variant="primary">Jetzt anfragen</Button>
          </div>

        </Container>
      </section>
    </>
  )
}

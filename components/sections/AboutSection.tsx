import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/site-config'

const highlights = [
  {
    title: 'Neue Spielstätte',
    text: 'Seit Januar 2026 trainiert und spielt der Verein im Bowling Castle Erding in der Robert-Bosch-Straße 3.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.988 17 13.493 17 10a7 7 0 10-14 0c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433c.118.07.223.131.312.178l.012.006.012.006.018.008.006.003zM10 11.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Starke Gründungsjahre',
    text: 'Bereits kurz nach der Gründung 2008 startete der PBC mit mehreren Mannschaften im BBV und feierte zahlreiche Aufstiege.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.172a.75.75 0 010 1.06l-1.061 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.061 0zm5.656 0a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.061l-1.06-1.06a.75.75 0 010-1.061zM10 13a3 3 0 100-6 3 3 0 000 6zm0 1.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Offen für Einsteiger',
    text: 'Schnuppertraining ist sonntags von 13 bis 16 Uhr sowie dienstags und donnerstags von 18 bis 21 Uhr möglich.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.046 15.253c-.058.468.172.92.57 1.152A9.953 9.953 0 008 17.5c1.861 0 3.601-.512 5.083-1.401a1.125 1.125 0 00.403-1.534 6.484 6.484 0 00-11.44.688zM15.5 8.5a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0v-1h1a.5.5 0 000-1h-1v-1z" />
      </svg>
    ),
  },
]

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal-900 py-24"
      aria-labelledby="about-heading"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 0% 20%, rgba(19,77,34,0.16), transparent 30%), radial-gradient(circle at 100% 80%, rgba(212,160,67,0.08), transparent 28%)',
        }}
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-heading"
              label="Über uns"
              title="Billard in Erding seit 2008"
              subtitle={`Der ${siteConfig.fullName} wurde am 27. Juni 2008 in Erding gegründet. Ziel des Vereins war und ist es, den Billardsport in der Region zu fördern und Interessierten faire Bedingungen für Training, Liga und Turniere zu bieten.`}
            />
            <div className="mt-8">
              <Button href="/verein" variant="secondary">Mehr über den Verein</Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="group flex gap-5 rounded-[1.5rem] border border-white/6 bg-charcoal-950/92 p-6 transition-colors hover:border-gold-500/25">
                <div aria-hidden="true" className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/12 text-gold-500 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

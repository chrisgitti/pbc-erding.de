import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum des Pool Billard Club Erding e.V.',
}

export default function ImpressumPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Rechtliches"
            title="Impressum"
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="max-w-3xl space-y-10 text-white/70">
          <div>
            <h2 className="mb-4 text-xl font-black uppercase text-white">Angaben gemäß § 5 DDG</h2>
            <div className="space-y-1 text-sm leading-relaxed">
              <p>PBC Erding e. V.</p>
              <p>c/o Bowling-Castle</p>
              <p>Robert-Bosch-Straße 3</p>
              <p>85435 Erding</p>
            </div>
            <div className="space-y-1 text-sm leading-relaxed mt-4">
              <p>Telefon: 08122 54432</p>
              <p>E-Mail: info@pbc-erding.de</p>
            </div>
            <div className="space-y-1 text-sm leading-relaxed mt-4">
              <p>Web: www.pbc-erding.de</p>
            </div>
            <div className="space-y-1 text-sm leading-relaxed mt-4">
              <p>Eingetragen im Vereinsregister beim Amtsgericht München unter VR 201769</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-black uppercase text-white">Vertreten durch</h2>
            <ul className="space-y-2 text-sm">
              <li>Ludwig Weidinger – 1. Vorsitzender</li>
              <li>Robert Fläxl – 2. Vorsitzender</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-black uppercase text-white">Weitere Vorstandsmitglieder</h2>
            <ul className="space-y-2 text-sm">
              <li>Michael Gilik – Kassenwart</li>
              <li>Björn Haase – Sportwart</li>
              <li>Patrick Mittermüller – Schriftführer</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}

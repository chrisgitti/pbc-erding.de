import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/site-config'
import KontaktForm from './KontaktForm'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: `Kontakt zum ${siteConfig.fullName}. Mitgliedschaft, Fragen, Anfahrt.`,
}

export default function KontaktPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Schreib uns"
            title="Kontakt"
            subtitle="Fragen, Schnuppertraining oder Mitgliedschaft: Der PBC Erding freut sich auf neue Gesichter im Bowling Castle."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Formular */}
            <div id="mitgliedschaft">
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-8">Nachricht senden</h2>
              <KontaktForm />
            </div>

            {/* Infos */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-6">Adresse</h2>
                <address className="not-italic space-y-1 text-white/75">
                  <p className="font-semibold text-white">{siteConfig.fullName}</p>
                  <p>c/o Bowling-Castle</p>
                  <p>{siteConfig.location.street}</p>
                  <p>{siteConfig.location.zip} {siteConfig.location.city}</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block mt-3 text-gold-500 hover:text-gold-400 transition-colors"
                    aria-label={`E-Mail an ${siteConfig.contact.email}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[\s-]/g, '')}`}
                    className="block text-gold-500 hover:text-gold-400 transition-colors"
                    aria-label={`Telefon: ${siteConfig.contact.phone}`}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </address>
              </div>

              <div className="border-t border-white/5 pt-10">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/65 mb-4">Öffnungszeiten Clubheim</h3>
                <ul className="space-y-2 text-sm text-white/75">
                  {[
                    { tag: 'Sonntag', zeit: '13:00 - 16:00 Uhr' },
                    { tag: 'Dienstag', zeit: 'ab 18:00 Uhr' },
                    { tag: 'Donnerstag', zeit: 'ab 18:00 Uhr' },
                  ].map(({ tag, zeit }) => (
                    <li key={tag} className="flex justify-between">
                      <span>{tag}</span>
                      <span className="text-white">{zeit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/5 pt-10">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/65 mb-4">Mitgliedsbeitrag</h3>
                <ul className="space-y-2 text-sm text-white/75">
                  <li className="text-white">Aktuelle Unterlagen und Vereinsdokumente stehen auf unserer Download-Seite bereit.</li>
                  <li className="text-white/70">Bitte die aktuelle Satzung und den Aufnahmeantrag für verbindliche Angaben nutzen.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

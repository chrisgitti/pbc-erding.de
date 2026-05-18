import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
  description:
    'Die gesuchte Seite wurde nicht gefunden. Zurueck zur Startseite des Pool Billard Club Erding e.V.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-charcoal-950 py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
            Fehler 404
          </p>
          <h1
            className="mb-6 font-display uppercase leading-[0.95] text-white"
            style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
          >
            Seite
            <br />
            <span className="text-gold-500">nicht gefunden</span>
          </h1>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/75">
            Die gewuenschte Seite existiert nicht oder wurde verschoben. Ueber die Navigation findest du alles
            rund um den PBC Erding &ndash; oder springe direkt zur Startseite.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Zur Startseite
            </Button>
            <Button href="/kontakt" variant="outline" size="lg">
              Kontakt
            </Button>
          </div>
          <p className="mt-10 text-xs text-white/55">
            Falls Sie einen Link von einer Suchmaschine oder aus einem Lesezeichen aufgerufen haben, ist dieser
            eventuell veraltet. Schauen Sie gern in der{' '}
            <Link href="/" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-2">
              Hauptnavigation
            </Link>{' '}
            nach.
          </p>
        </div>
      </Container>
    </section>
  )
}

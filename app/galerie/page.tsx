import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import GalerieGrid, { type Photo } from './GalerieGrid'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Fotos und Eindrücke aus dem Vereinsleben des PBC Erding – Mannschaftsfotos, Training und Spieltage.',
}

const QUOTES = [
  'Billard spielt man nicht nur mit der Hand – sondern mit Kopf, Gefühl und Geduld.',
  'Jeder Stoß ist eine Entscheidung. Jeder Lauf eine neue Chance.',
  'Billard ist der Moment, in dem Konzentration alles andere ausblendet.',
  'Ich spiele Billard, weil ein guter Stoß mehr sagt als tausend Worte.',
  'Am Tisch zählt nicht, wer laut ist – sondern wer ruhig bleibt.',
  'Billard ist Präzision, Taktik und Leidenschaft.',
  'Manchmal reicht eine Kugel, um den ganzen Abend zu drehen.',
  'Billard ist nicht nur Zeitvertreib. Es ist ein Spiel mit Blick fürs Detail.',
  'Jeder Stoß ist eine kleine Entscheidung zwischen Gefühl, Technik und Strategie.',
  'Der Tisch ist klein – aber die Möglichkeiten sind endlos.',
]

function q(i: number) { return QUOTES[i % QUOTES.length] }

const photos: Photo[] = [
  { src: '/images/galerie/billardhalle.jpg',  alt: 'Billardtische im Bowling Castle Erding', label: 'Spielstätte', quote: 'Von außen ein Hingucker – innen dein neues Billard-Zuhause.' },
  { src: '/images/galerie/billardhalle2.jpg', alt: 'Billardhalle im Bowling Castle Erding',  label: 'Spielstätte', quote: 'Top-Tische, starke Gemeinschaft, echtes Spielgefühl – komm vorbei und spiel mit!' },
  { src: '/images/galerie/erding2.jpg', alt: 'PBC Erding – Mannschaftsfoto', label: 'Mannschaft', quote: 'Jeder Stoß zählt, jeder Punkt verbindet – als Team sind wir stärker.' },
  { src: '/images/galerie/erding3.jpg', alt: 'PBC Erding – Mannschaftsfoto', label: 'Mannschaft', quote: 'Mit Leidenschaft am Tisch und Zusammenhalt im Rücken wächst jedes Spiel.' },
  { src: '/images/galerie/spieler1.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(0) },
  { src: '/images/galerie/spieler2.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(1) },
  { src: '/images/galerie/spieler3.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(2) },
  { src: '/images/galerie/spieler4.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(3) },
  { src: '/images/galerie/spieler5.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(4) },
  { src: '/images/galerie/spieler6.jpg',  alt: 'Konzentrierter Stoß am Billardtisch', label: 'Spielszene', quote: q(5) },
  { src: '/images/galerie/spieler7.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(6) },
  { src: '/images/galerie/spieler8.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(7) },
  { src: '/images/galerie/spieler9.jpg',  alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(8) },
  { src: '/images/galerie/spieler10.jpg', alt: 'Spielszene am Billardtisch',           label: 'Spielszene', quote: q(9) },
]

export default function GaleriePage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Einblicke"
            title="Galerie"
            subtitle="Eindrücke rund um den PBC Erding."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container>
          <GalerieGrid photos={photos} />
          <div className="mt-10 flex justify-center">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/75 transition-colors hover:border-gold-500/40 hover:text-gold-400"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Mehr Bilder auf Facebook
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}

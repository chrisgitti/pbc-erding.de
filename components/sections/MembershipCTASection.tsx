'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/lib/site-config'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function MembershipCTASection() {
  return (
    <section
      className="relative overflow-hidden bg-green-900 py-28"
      aria-labelledby="cta-heading"
    >
      {/* Static gradient base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(10,10,11,0.14), transparent 45%)',
        }}
      />

      {/* Animated orb 1 – gold */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '28rem',
          height: '28rem',
          background: 'rgba(212,160,67,0.15)',
          filter: 'blur(80px)',
          top: '-4rem',
          right: '-4rem',
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated orb 2 – green */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '20rem',
          height: '20rem',
          background: 'rgba(19,77,34,0.35)',
          filter: 'blur(64px)',
          bottom: '-3rem',
          left: '-3rem',
        }}
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <Container className="relative">
        <div className="rounded-[2rem] border border-white/10 bg-black/10 px-6 py-12 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:px-10 sm:py-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Werde Teil des Clubs
          </p>
          <h2
            id="cta-heading"
            className="mb-6 font-display uppercase leading-[0.95] text-white"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Spielst du schon
            <br />
            oder{' '}
            <a
              href={`${base}/spiel-spass/billardapp/index.html`}
              target="_blank"
              rel="noopener noreferrer"
              title="Jetzt online spielen"
              className="underline decoration-gold-500/40 underline-offset-4 hover:decoration-gold-400 transition-colors"
            >
              schaust du noch zu
            </a>
            ?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80">
            Als Mitglied des {siteConfig.fullName} hast du vergünstigten Zugang zu den acht Billardtischen im Bowling Castle,
            nimmst an Liga-Spielen und Turnieren teil und wirst Teil einer lebendigen
            Sportgemeinschaft in Erding. Dienstags, donnerstags und sonntags trainieren Mitglieder kostenlos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/kontakt?betreff=mitgliedschaft#mitgliedschaft" size="lg" variant="primary">Jetzt Mitglied werden</Button>
            <Button href="/kontakt" size="lg" variant="outline">Fragen? Schreib uns</Button>
          </div>
          <p className="mt-8 text-xs text-white/65">
            Jahresbeitrag ab 60 EUR · Keine Aufnahmegebühr · Schnuppertraining kostenlos
          </p>
        </div>
      </Container>
    </section>
  )
}

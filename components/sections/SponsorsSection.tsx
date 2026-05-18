'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { sponsors } from '@/lib/data'

function monogram(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function SponsorsSection() {
  const goldSponsors = sponsors.filter((s) => s.tier === 'gold')
  const otherSponsors = sponsors.filter((s) => s.tier !== 'gold')

  return (
    <section
      className="border-y border-white/5 bg-charcoal-900 py-20"
      aria-labelledby="sponsors-heading"
    >
      <Container>
        <p
          id="sponsors-heading"
          className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/65"
        >
          Unsere Unterstützer & Partner
        </p>

        <div className="mb-4 flex flex-wrap justify-center gap-4">
          {goldSponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex min-w-[220px] flex-1 flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-gold-500/18 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] px-12 py-10 text-center transition-all hover:border-gold-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-500 text-sm font-black tracking-wider">
                {monogram(sponsor.name)}
              </div>
              <Badge variant="gold">Hauptsponsor</Badge>
              <span className="text-xl font-bold text-white">{sponsor.name}</span>
              {sponsor.description && <span className="text-xs text-white/60">{sponsor.description}</span>}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {otherSponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex min-w-[160px] flex-1 flex-col items-center gap-2 justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.02] px-8 py-6 transition-colors hover:border-white/25">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08] text-white/70 text-xs font-bold tracking-wider">
                {monogram(sponsor.name)}
              </div>
              <span className="text-center text-sm font-semibold text-white/75 transition-colors hover:text-white">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/65">
          Interesse an einer Partnerschaft?{' '}
          <Link href="/kontakt?betreff=sponsoring" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4 decoration-gold-500/40">Jetzt anfragen</Link>
        </p>
      </Container>
    </section>
  )
}

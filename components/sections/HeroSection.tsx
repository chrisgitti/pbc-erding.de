'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

const balls = [
  { n: 1,  color: '#FBD23C', x: '72%', y: '12%', size: 52 },
  { n: 2,  color: '#224DA0', x: '83%', y: '22%', size: 46 },
  { n: 3,  color: '#C12219', x: '65%', y: '28%', size: 50 },
  { n: 5,  color: '#F47720', x: '78%', y: '38%', size: 44 },
  { n: 6,  color: '#196B24', x: '88%', y: '14%', size: 48 },
  { n: 8,  color: '#1a1a1a', x: '70%', y: '44%', size: 56 },
  { n: 4,  color: '#5C2D91', x: '91%', y: '32%', size: 42 },
]

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center bg-charcoal-950 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/billardhalle.jpg`}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(8,10,12,0.72)' }} />
      </div>

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 60%, rgba(19,77,34,0.45) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(212,160,67,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(19,77,34,0.2) 0%, transparent 60%)
          `,
        }}
      />

      {/* Felt texture lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 56px, rgba(255,255,255,1) 56px, rgba(255,255,255,1) 57px)',
        }}
      />

      {/* Large background word */}
      <motion.div
        className="absolute right-[-2%] bottom-[-2%] font-black uppercase leading-none select-none pointer-events-none hidden sm:block"
        style={{ fontSize: 'clamp(8rem, 20vw, 20rem)', color: 'rgba(255,255,255,0.055)' }}
        aria-hidden="true"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      >
        BILLARD
      </motion.div>

      {/* SVG Billiard Ball Cluster */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        {balls.map((ball, i) => (
          <motion.div
            key={ball.n}
            className="absolute"
            style={{ left: ball.x, top: ball.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 14,
              delay: 0.4 + i * 0.08,
            }}
          >
            <svg
              width={ball.size}
              height={ball.size}
              viewBox="0 0 60 60"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
            >
              <defs>
                <radialGradient id={`bg${ball.n}`} cx="38%" cy="32%" r="60%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
                </radialGradient>
              </defs>
              <circle cx="30" cy="30" r="29" fill={ball.color} />
              <circle cx="30" cy="30" r="29" fill={`url(#bg${ball.n})`} />
              <circle cx="30" cy="30" r="11" fill="white" opacity="0.92" />
              <text
                x="30"
                y="35"
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill={ball.color}
                fontFamily="system-ui, sans-serif"
              >
                {ball.n}
              </text>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Green accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700/60" />

      <Container className="relative pb-16 sm:pb-20 pt-14 sm:pt-18">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            className="mb-5 sm:mb-7 flex items-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block h-px w-8 bg-gold-500/50 mt-3 shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl sm:text-3xl font-black tracking-[0.12em] uppercase text-white leading-tight">
                Pool Billard Club
              </span>
              <span className="text-3xl sm:text-4xl font-black tracking-[0.08em] uppercase text-white leading-tight">
                Erding e.V.
              </span>
              <span className="mt-1 text-xs font-semibold tracking-[0.25em] uppercase text-gold-500">
                Im Bowling Castle seit 2026
              </span>
            </div>
          </motion.div>

          {/* Headline with Bebas Neue */}
          <motion.h1
            className="font-display uppercase text-white"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 9rem)',
              lineHeight: '0.95',
              letterSpacing: '0.01em',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Spiel.
            <br />
            <span className="text-gold-500">Leidenschaft.</span>
            <br />
            Gemeinschaft.
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="mt-8 sm:mt-10 mb-6 sm:mb-8 h-px w-16 bg-gold-500/40"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          />

          {/* Subline */}
          <motion.p
            className="max-w-lg text-base sm:text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Billard in Erding mit neuer Heimat: Seit dem 4. Januar 2026 trainiert
            und spielt der PBC Erding im Bowling Castle. Schnuppertraining ist
            sonntags sowie dienstags und donnerstags möglich.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <Button href="/kontakt?betreff=training#mitgliedschaft" size="lg" variant="primary">
              Schnuppertraining anfragen
            </Button>
            <Button href="/verein" size="lg" variant="outline">
              Über den Verein
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 0%, rgba(212,160,67,0.5) 40%, rgba(212,160,67,0.5) 60%, transparent 100%)' }}
      />
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { clubStats } from '@/lib/data'

function useCountUp(target: number, start: number, duration: number, active: boolean) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!active) return
    let startTime: number | null = null
    const diff = target - start

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + diff * eased))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [active, target, start, duration])

  return count
}

function StatCard({ stat }: { stat: (typeof clubStats)[number] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const numericTarget = parseInt(stat.value, 10)
  const start = numericTarget > 100 ? numericTarget - 18 : 0
  const count = useCountUp(numericTarget, start, 1.2, inView)

  return (
    <div
      ref={ref}
      className="group relative rounded-[1.75rem] border border-white/6 bg-white/[0.02] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm transition-colors hover:border-gold-500/25 hover:bg-gold-500/[0.03]"
    >
      {stat.href && (
        <Link href={stat.href} className="absolute inset-0 rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500" aria-label={stat.label} />
      )}
      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70 transition-colors group-hover:text-gold-400">
        {stat.label}
      </dt>
      <dd
        className="mt-3 font-black leading-none text-white"
        style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
      >
        {count}
        <span className="text-gold-500">{stat.suffix}</span>
      </dd>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section
      className="relative border-y border-white/5 bg-charcoal-900/95 py-8 sm:py-10"
      aria-label="Kennzahlen"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(255,255,255,0.015), transparent 50%, rgba(255,255,255,0.015))',
        }}
      />
      <Container className="relative">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {clubStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </dl>
      </Container>
    </section>
  )
}

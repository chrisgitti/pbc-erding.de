'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { mainNav } from '@/lib/navigation'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      role="banner"
      animate={{
        backgroundColor: scrolled ? 'rgba(10,10,11,0.92)' : 'rgba(10,10,11,0)',
        borderBottomColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
      }}
      style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
            aria-label="PBC Erding - Startseite"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo_pbced.png`}
              alt=""
              width={36}
              height={36}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="rounded-full"
            />
            <span className="sr-only">PBC Erding</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`px-3 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-colors ${
                  pathname === item.href ? 'text-gold-500' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-4">
            <Link
              href="/kontakt?betreff=mitgliedschaft#mitgliedschaft"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase text-charcoal-950 bg-gold-500 hover:bg-gold-400 transition-colors"
            >
              Mitglied werden
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer rounded-md"
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-transform duration-200 origin-center ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span aria-hidden="true" className={`block h-0.5 w-6 bg-white transition-transform duration-200 origin-center ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav id="mobile-navigation" className="lg:hidden border-t border-white/5 bg-charcoal-900" aria-label="Mobile Navigation">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`px-3 py-3 text-sm font-medium tracking-wide uppercase border-b border-white/5 transition-colors ${
                  pathname === item.href ? 'text-gold-500' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt?betreff=mitgliedschaft#mitgliedschaft"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal-950 bg-gold-500 hover:bg-gold-400 transition-colors"
            >
              Mitglied werden
            </Link>
          </div>
        </nav>
      )}
    </motion.header>
  )
}

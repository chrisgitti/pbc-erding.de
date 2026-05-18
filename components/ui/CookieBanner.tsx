'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'pbc_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
    >
      <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-gold-500/25 bg-charcoal-900 p-5 sm:p-6 shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-1 min-w-0">
            <p id="cookie-banner-title" className="text-sm font-bold text-white mb-1">Cookie-Einstellungen</p>
            <p id="cookie-banner-text" className="text-xs text-white/70 leading-relaxed">
              Diese Website speichert Ihre Einwilligungsentscheidung lokal in Ihrem Browser.
              Weitere Informationen finden Sie in der{' '}
              <Link href="/datenschutz" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-2">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={reject}
              className="rounded-xl border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:text-white cursor-pointer"
            >
              Ablehnen
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0a0a0b] transition-colors hover:bg-gold-400 cursor-pointer"
            >
              Zustimmen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

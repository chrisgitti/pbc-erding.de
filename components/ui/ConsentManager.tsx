'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'pbc_cookie_consent'

export default function ConsentManager() {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'rejected') setConsent(stored)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
  }

  return (
    <div className="rounded-[1.5rem] border border-white/8 bg-charcoal-800 p-6">
      <div className="mb-3 flex items-center gap-3">
        <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-full shrink-0 ${
          consent === 'accepted' ? 'bg-green-500' :
          consent === 'rejected' ? 'bg-red-400'   : 'bg-white/40'
        }`} />
        <p className="text-sm font-bold text-white">
          Aktueller Status:{' '}
          <span className={
            consent === 'accepted' ? 'text-green-400' :
            consent === 'rejected' ? 'text-red-400'   : 'text-white/70'
          }>
            {consent === 'accepted' ? 'Zugestimmt' :
             consent === 'rejected' ? 'Abgelehnt'  : 'Noch keine Angabe'}
          </span>
        </p>
      </div>
      <p className="text-xs text-white/75 mb-5 leading-relaxed">
        Sie können Ihre Einwilligung jederzeit ändern.
        Die Änderung gilt ab sofort für dieses Gerät und diesen Browser.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={reject}
          disabled={consent === 'rejected'}
          className="rounded-xl border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/40 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Ablehnen
        </button>
        <button
          type="button"
          onClick={accept}
          disabled={consent === 'accepted'}
          className="rounded-xl bg-gold-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#0a0a0b] transition-colors hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Zustimmen
        </button>
      </div>
    </div>
  )
}

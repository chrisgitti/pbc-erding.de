'use client'

import { Suspense, useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const BETREFF_OPTIONS = [
  { value: '',               label: 'Bitte wählen…' },
  { value: 'mitgliedschaft', label: 'Mitgliedschaft' },
  { value: 'training',       label: 'Schnuppertraining' },
  { value: 'turnier',        label: 'Turnieranmeldung' },
  { value: 'sponsoring',     label: 'Sponsoring/Partnerschaft' },
  { value: 'sonstiges',      label: 'Sonstiges' },
]

const EMPFAENGER = 'info@pbc-erding.de'

const inputClass = 'w-full bg-charcoal-900 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-gold-500/60 focus:ring-2 focus:ring-gold-500/20 transition-colors'

function KontaktFormInner() {
  const searchParams = useSearchParams()

  const [vorname,   setVorname]   = useState('')
  const [nachname,  setNachname]  = useState('')
  const [email,     setEmail]     = useState('')
  const [betreff,   setBetreff]   = useState('')
  const [nachricht, setNachricht] = useState('')

  useEffect(() => {
    const pre = searchParams.get('betreff') ?? ''
    if (BETREFF_OPTIONS.some(o => o.value === pre)) setBetreff(pre)
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const betreffLabel = BETREFF_OPTIONS.find(o => o.value === betreff)?.label ?? betreff

    const subject = `PBC Erding – ${betreffLabel}`

    const body = [
      `Betreff: ${betreffLabel}`,
      '',
      `Von: ${vorname} ${nachname}`.trim(),
      `E-Mail: ${email}`,
      '',
      'Nachricht:',
      nachricht,
      '',
      '---',
      'Gesendet über das Kontaktformular auf www.pbc-erding.de',
    ].join('\n')

    const mailto = `mailto:${EMPFAENGER}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {([
          { id: 'vorname',  label: 'Vorname',  auto: 'given-name',  placeholder: 'Max',        value: vorname,  set: setVorname },
          { id: 'nachname', label: 'Nachname', auto: 'family-name', placeholder: 'Mustermann', value: nachname, set: setNachname },
        ] as const).map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              {f.label}
            </label>
            <input
              type="text" id={f.id} name={f.id}
              autoComplete={f.auto} placeholder={f.placeholder}
              value={f.value}
              onChange={e => f.set(e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">E-Mail</label>
        <input
          type="email" id="email" name="email" autoComplete="email"
          placeholder="max@beispiel.de"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="betreff" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Betreff</label>
        <select
          id="betreff" name="betreff"
          value={betreff}
          onChange={e => setBetreff(e.target.value)}
          className={inputClass}
        >
          {BETREFF_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">Nachricht</label>
        <textarea
          id="nachricht" name="nachricht" rows={5}
          placeholder="Ihre Nachricht…"
          value={nachricht}
          onChange={e => setNachricht(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold-500 hover:bg-gold-400 text-[#0a0a0b] font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-colors cursor-pointer"
      >
        Nachricht per E-Mail senden
      </button>

      <p className="text-xs text-white/55 text-center leading-relaxed">
        Ihr E-Mail-Programm öffnet sich mit einer vorausgefüllten Nachricht –
        diese müssen Sie nur noch absenden.
      </p>
    </form>
  )
}

export default function KontaktForm() {
  return (
    <Suspense fallback={null}>
      <KontaktFormInner />
    </Suspense>
  )
}

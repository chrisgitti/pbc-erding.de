'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const cls =
  'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-500 hover:text-gold-400 transition-colors'

export default function NewsBackLink() {
  const from = useSearchParams().get('from')
  return from === 'chronik' ? (
    <Link href="/verein#chronik" className={cls}>
      <span>←</span>
      <span>Zurück zur Chronik</span>
    </Link>
  ) : (
    <Link href="/#news" className={cls}>
      <span>←</span>
      <span>Zurück zu den Neuigkeiten</span>
    </Link>
  )
}

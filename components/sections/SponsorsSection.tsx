import Link from 'next/link'
import Container from '@/components/ui/Container'
import { sponsors } from '@/lib/data'
import type { Sponsor } from '@/lib/data'

function SponsorLink({
  s,
  className,
  children,
}: {
  s: Sponsor
  className: string
  children: React.ReactNode
}) {
  if (s.website) {
    return (
      <a href={s.website} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return <div className={className}>{children}</div>
}

export default function SponsorsSection() {
  const gold   = sponsors.filter((s) => s.tier === 'gold')
  const others = sponsors.filter((s) => s.tier !== 'gold')

  return (
    <section
      className="border-y border-white/5 bg-charcoal-900 py-16"
      aria-labelledby="sponsors-heading"
    >
      <Container>
        <p
          id="sponsors-heading"
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/65"
        >
          Unsere Unterstützer &amp; Partner
        </p>

        {/* Gold – Hauptunterstützer */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gold.map((s) => (
            <SponsorLink
              key={s.id}
              s={s}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-gold-500/18 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-8 transition-all hover:border-gold-500/40"
            >
              {s.logo && (
                <div className="w-fit rounded-xl bg-white px-4 py-3">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/sponsoren/${s.logo}`}
                    alt={s.name}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              )}
              <div>
                <p className="font-bold text-white">{s.name}</p>
                {s.description && (
                  <p className="mt-1 text-xs text-white/60">{s.description}</p>
                )}
              </div>
            </SponsorLink>
          ))}
        </div>

        {/* Silber + Bronze – kompakte Logo-Zeile */}
        <div className="flex flex-wrap justify-center gap-3">
          {others.map((s) =>
            s.logo ? (
              <SponsorLink
                key={s.id}
                s={s}
                className="flex items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/25"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/sponsoren/${s.logo}`}
                  alt={s.name}
                  className="h-10 w-auto object-contain opacity-75 transition-opacity hover:opacity-100"
                />
              </SponsorLink>
            ) : (
              <div
                key={s.id}
                className="flex items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.02] px-5 py-4"
              >
                <span className="text-sm font-semibold text-white/60">{s.name}</span>
              </div>
            )
          )}
        </div>

        <p className="mt-10 text-center text-sm text-white/65">
          <Link
            href="/unterstuetzer"
            className="text-gold-500 transition-colors hover:text-gold-400"
          >
            Alle Unterstützer ansehen →
          </Link>
          {' · '}
          <Link
            href="/kontakt?betreff=unterstuetzung"
            className="underline underline-offset-4 decoration-white/20 transition-colors hover:text-white/90"
          >
            Jetzt Partner werden
          </Link>
        </p>
      </Container>
    </section>
  )
}

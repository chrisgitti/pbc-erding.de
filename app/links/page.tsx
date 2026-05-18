import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { links } from '@/lib/data'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Links',
  description: 'Verbände, Partner, Vereine und Informationsquellen rund um den PBC Erding.',
}

export default function LinksPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Netzwerk"
            title="Links"
            subtitle="Verbandsseiten, befreundete Vereine und hilfreiche Quellen rund um den PBC Erding und den Billardsport."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {links.map((group) => (
              <article key={group.title} className="rounded-[1.5rem] border border-white/6 bg-white/[0.02] p-8 h-full">
                <h2 className="mb-6 font-display text-3xl sm:text-4xl uppercase text-white">{group.title}</h2>
                <ul className="space-y-2">
                  {group.items.map((item) => {
                    const isInternal = item.href.startsWith('/')
                    const href = isInternal ? `${base}${item.href}` : item.href
                    const openNewTab = item.newTab || !isInternal
                    return (
                    <li key={item.label}>
                      <a
                        href={href}
                        target={openNewTab ? '_blank' : undefined}
                        rel={openNewTab ? 'noopener noreferrer' : undefined}
                        aria-label={openNewTab ? `${item.label} (oeffnet in neuem Tab)` : item.label}
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3 transition-colors hover:border-gold-500/30 hover:bg-gold-500/[0.05]"
                      >
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors leading-relaxed">
                          {item.label}
                        </span>
                        <svg
                          width="14" height="14" viewBox="0 0 14 14" fill="none"
                          className="shrink-0 ml-3 text-white/50 group-hover:text-gold-500 transition-colors"
                          aria-hidden="true"
                        >
                          <path d="M2 2h10M12 2v10M2 12l10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                    )
                  })}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

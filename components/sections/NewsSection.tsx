import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { news } from '@/lib/data'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

const categoryGradient: Record<string, string> = {
  Verein:       'from-green-900/20 to-transparent',
  Turnier:      'from-gold-500/[0.07] to-transparent',
  Liga:         'from-charcoal-800/80 to-transparent',
  Vereinsleben: 'from-white/[0.015] to-transparent',
}

export default function NewsSection() {
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <section id="news" className="bg-charcoal-950 py-24" aria-labelledby="news-heading">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading id="news-heading" label="Aktuelles" title="Neuigkeiten aus dem Verein" />
          <Button href="/verein#chronik" variant="outline" size="sm">Alle Nachrichten</Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {latest.map((item) => {
            const gradient = categoryGradient[item.category] ?? categoryGradient.Vereinsleben
            return (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className={`group flex h-full flex-col gap-5 rounded-[1.75rem] border border-t-2 border-white/6 border-t-gold-500/40 bg-gradient-to-b ${gradient} p-8 transition-all hover:-translate-y-1 hover:border-gold-500/20 hover:border-t-gold-500/70 hover:shadow-[0_20px_60px_rgba(212,160,67,0.10)]`}
              >
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="neutral">{item.category}</Badge>
                  <time dateTime={item.date} className="text-xs text-white/60 tabular-nums">
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-gold-400 transition-colors">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/70">{item.excerpt}</p>
                <div className="flex items-center justify-between pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  <span>Weiterlesen</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

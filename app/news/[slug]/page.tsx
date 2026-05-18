import type { Metadata } from 'next'
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Badge from '@/components/ui/Badge'
import { news } from '@/lib/data'
import NewsBackLink from '../NewsBackLink'
import NewsGallery from '../NewsGallery'

// Für statischen Export: alle Slugs vorab bekannt machen
export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }))
}

// Dynamische Metadata pro Artikel
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = news.find((n) => n.slug === slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      type: 'article',
      title: item.title,
      description: item.excerpt,
      publishedTime: item.date,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = news.find((n) => n.slug === slug)
  if (!item) notFound()

  // Absätze aufteilen (durch doppelter Zeilenumbruch getrennt)
  const paragraphs = item.content.split('\n\n').filter(Boolean)

  return (
    <>
      {/* Hero / Titel-Bereich */}
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="neutral">{item.category}</Badge>
              <time dateTime={item.date} className="text-xs text-white/70 tabular-nums">
                {formatDate(item.date)}
              </time>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl uppercase text-white leading-tight mb-4">
              {item.title}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">{item.excerpt}</p>
          </div>
        </Container>
      </div>

      {/* Artikeltext */}
      <section className="py-20 bg-charcoal-950">
        <Container>
          <div className="max-w-2xl">
            {/* Fotogalerie */}
            {item.images && item.images.length > 0 && (
              <NewsGallery images={item.images} />
            )}

            <div className="space-y-5 text-white/80 leading-relaxed text-[1.0625rem]">
              {paragraphs.map((para, i) => {
                // Listenzeilen (beginnen mit –) als ul rendern
                if (para.includes('\n–')) {
                  const [intro, ...lines] = para.split('\n')
                  return (
                    <div key={i}>
                      {intro && <p className="mb-3">{intro}</p>}
                      <ul className="space-y-1.5 pl-2">
                        {lines.map((line, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-gold-500 mt-0.5 shrink-0">–</span>
                            <span>{line.replace(/^–\s*/, '')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                return <p key={i}>{para}</p>
              })}
            </div>

            {/* Zurück-Link – Ziel hängt davon ab, woher der Nutzer kam */}
            <div className="mt-14 pt-8 border-t border-white/8">
              <Suspense
                fallback={
                  <Link href="/#news" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-500 hover:text-gold-400 transition-colors">
                    <span>←</span><span>Zurück</span>
                  </Link>
                }
              >
                <NewsBackLink />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

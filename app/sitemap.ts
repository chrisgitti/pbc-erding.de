import type { MetadataRoute } from 'next'
import { news } from '@/lib/data'
import { siteConfig } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const base = `${siteConfig.url}${basePath}`
  const lastmod = new Date()

  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/verein', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/mannschaften', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/veranstaltungen', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/ergebnisse', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/downloads', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/links', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/galerie', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/unterstuetzer', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: lastmod,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const newsEntries: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${base}/news/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticEntries, ...newsEntries]
}

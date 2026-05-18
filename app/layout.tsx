import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import { siteConfig } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const ogImageUrl = `${siteConfig.url}${basePath}/images/billardhalle.jpg`

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.fullName,
  keywords: [
    'Pool Billard',
    'Billardverein',
    'Erding',
    'PBC Erding',
    'Bowling Castle Erding',
    'Billard Bayern',
    'Pool Billiards',
    'Bezirksliga',
    'Kreisliga Oberbayern',
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: ogImageUrl,
        width: 1920,
        height: 1072,
        alt: `${siteConfig.fullName} - Bowling Castle Erding`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: `${basePath}/images/logo_pbced.png`,
    apple: `${basePath}/images/logo_pbced.png`,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${basePath}/images/logo_pbced.png`,
  image: ogImageUrl,
  description: siteConfig.description,
  foundingDate: String(siteConfig.founded),
  sport: 'Pool Billiards',
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.location.street,
    addressLocality: siteConfig.location.city,
    postalCode: siteConfig.location.zip,
    addressRegion: siteConfig.location.state,
    addressCountry: 'DE',
  },
  location: {
    '@type': 'Place',
    name: siteConfig.location.venue,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      postalCode: siteConfig.location.zip,
      addressCountry: 'DE',
    },
  },
  sameAs: [siteConfig.social.facebook],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // JSON-LD fuer strukturierte Daten (SportsClub-Schema)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-charcoal-950"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="hauptinhalt" className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

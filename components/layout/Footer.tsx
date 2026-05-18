import Link from 'next/link'
import { mainNav } from '@/lib/navigation'
import { siteConfig } from '@/lib/site-config'
import Container from '@/components/ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-charcoal-950 text-white/75" role="contentinfo">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo_pbced.png`}
                alt="PBC Erding Logo"
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="shrink-0"
              />
              <div>
                <div className="text-xl font-black uppercase tracking-widest text-white leading-tight">
                  Pool Billard Club
                </div>
                <div className="text-base text-gold-500 font-semibold tracking-[0.15em] uppercase mt-1">
                  Erding
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Leidenschaft für das Spiel. Gemeinschaft im Verein. Seit{' '}
              {siteConfig.founded} zuhause in Erding.
            </p>
            <address className="mt-6 text-sm space-y-1 not-italic">
              <p>{siteConfig.location.street}</p>
              <p>{siteConfig.location.zip} {siteConfig.location.city}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block mt-2 text-gold-500 hover:text-gold-400 transition-colors"
                aria-label={`E-Mail an ${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-white/60 hover:text-gold-500 transition-colors"
                aria-label="PBC Erding auf Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.271h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-500 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verein */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white mb-4">
              Verein
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/verein#vorstand" className="hover:text-gold-500 transition-colors">Vorstand</Link></li>
              <li><Link href="/verein#training" className="hover:text-gold-500 transition-colors">Trainingszeiten</Link></li>
              <li><Link href="/kontakt#mitgliedschaft" className="hover:text-gold-500 transition-colors">Mitglied werden</Link></li>
              <li><Link href="/kontakt" className="hover:text-gold-500 transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <p>© {year} {siteConfig.fullName} · Alle Rechte vorbehalten</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-gold-500 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gold-500 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

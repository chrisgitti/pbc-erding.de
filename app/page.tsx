import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import NewsSection from '@/components/sections/NewsSection'
import AboutSection from '@/components/sections/AboutSection'
import EventsSection from '@/components/sections/EventsSection'
import SponsorsSection from '@/components/sections/SponsorsSection'
import MembershipCTASection from '@/components/sections/MembershipCTASection'

export const metadata: Metadata = {
  title: 'Pool Billard Club Erding – Leidenschaft für das Spiel',
  description:
    'Der PBC Erding ist der führende Billardverein in der Region Erding. Drei Mannschaften, regelmäßige Turniere und ein offenes Clubheim.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <NewsSection />
      <EventsSection />
      <AboutSection />
      <SponsorsSection />
      <MembershipCTASection />
    </>
  )
}

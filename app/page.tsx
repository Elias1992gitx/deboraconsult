'use client'

import CTA from '@/components/cta'
import HeroSection from '@/components/hero-section'
import LandingBlog from '@/components/landing-blog'
import PromoSection from '@/components/promo-section'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <CTA />
      <LandingBlog />
      <PromoSection />
    </main>
  )
}

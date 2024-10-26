import CTA from '@/components/cta'
import HeroSection from '@/components/hero-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <CTA />
    </div>
  )
}

'use client'

import MainServices from './mainservices'
import HeroSection from './heroser'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f0e9e3]">
      <HeroSection />
      <MainServices />
    </main>
  )
}

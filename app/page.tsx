'use client'

import { Suspense } from 'react';
import CTA from '@/components/cta'
import HeroSection from '@/components/hero-section'
import LandingBlog from '@/components/landing-blog'
import PromoSection from '@/components/promo-section'
import { Testimonials } from '@/components/testimonial/index'
import { MarqueeDemo } from '@/components/marquee'
// import GlobeDemo from '@/components/globedemo'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <CTA />
      <MarqueeDemo />
      <LandingBlog />
      <PromoSection />
      <Testimonials />
      {/* <Suspense fallback={
        <div className="w-full h-[40rem] flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#30745c]"></div>
        </div>
      }>
        <GlobeDemo />
      </Suspense> */}
    </main>
  )
}











// 'use client'

// import CTA from '@/components/cta'
// import HeroSection from '@/components/hero-section'
// import LandingBlog from '@/components/landing-blog'
// import PromoSection from '@/components/promo-section'
// import {Testimonials} from '@/components/testimonial/index'
// import { MarqueeDemo } from '@/components/marquee';
// // import { GlobeDemo } from '@/components/globedemo';

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
//       <HeroSection />
//       <CTA />
//       <MarqueeDemo />
//       <LandingBlog />
//       <PromoSection />
//       <Testimonials />
//       {/* <GlobeDemo/> */}
//     </main>
//   )
// }

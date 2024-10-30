'use client'

import CTA from '@/components/cta'
import HeroSection from '@/components/hero-section'
import LandingBlog from '@/components/landing-blog'
import PromoSection from '@/components/promo-section'
// import { Testimonials } from '@/components/testimonial/index'
import { MarqueeDemo } from '@/components/marquee'
import HeroSectionAlt from '@/components/hero-section-alt'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <HeroSection />
      <CTA />
      <MarqueeDemo />
      <HeroSectionAlt />
      <LandingBlog />
      <PromoSection />
      
      {/* <Testimonials /> */}
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


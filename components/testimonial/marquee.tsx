// import { testimonials } from '@/constants/page-testimonials'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import React from 'react'
// import Marquee from 'react-fast-marquee'
// // import { AmbientColor } from '../ambient-color'
// import { FeatureIconContainer } from '@/components/features/feature-icon-container'
// import { TbLocationBolt } from 'react-icons/tb'
// import { Heading } from '../heading'
// import { Subheading } from '../subheading'

// export const TestimonialsMarquee = () => {
//   return (
//     <div className="relative pb-40">
//       <div className="pb-20">
//         <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
//           <TbLocationBolt className="h-6 w-6 text-cyan-500" />
//         </FeatureIconContainer>
//         {/* <Heading className="pt-4">Used by entreprenurs</Heading>
//         <Subheading>
//           Proactiv is used by serial entrepreneurs and overachievers.
//         </Subheading>
//       </div> */}

//       <div className="relative">
//         <div className="h-full w-10 md:w-80 absolute left-0 inset-y-0 bg-gradient-to-r from-charcoal to-transparent pointer-events-none z-40"></div>
//         <div className="h-full w-10 md:w-80 absolute right-0 inset-y-0 bg-gradient-to-l from-charcoal to-transparent pointer-events-none z-40"></div>
//         <Marquee pauseOnHover className="h-full">
//           {testimonials.map((testimonial, index) => (
//             <Card key={`testimonial-${testimonial.src}-${index}-left`}>
//               <Quote>{testimonial.quote}</Quote>
//               <div className="flex gap-2 items-center mt-8">
//                 <Image
//                   src={testimonial.src}
//                   alt="Manu Arora"
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <QuoteDescription className="text-neutral-300">
//                     {testimonial.name}
//                   </QuoteDescription>
//                   <QuoteDescription className="text-neutral-400">
//                     {testimonial.designation}
//                   </QuoteDescription>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </Marquee>
//         <Marquee
//           direction="right"
//           className="mt-8 h-full"
//           speed={40}
//           pauseOnHover
//         >
//           {testimonials.map((testimonial, index) => (
//             <Card key={`testimonial-${testimonial.src}-${index}-right`}>
//               <Quote>{testimonial.quote}</Quote>
//               <div className="flex gap-2 items-center mt-8">
//                 <Image
//                   src={testimonial.src}
//                   alt="Manu Arora"
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <QuoteDescription className="text-neutral-300">
//                     {testimonial.name}
//                   </QuoteDescription>
//                   <QuoteDescription className="text-neutral-400">
//                     {testimonial.designation}
//                   </QuoteDescription>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   )
// }

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string
//   children: React.ReactNode
// }) => {
//   return (
//     <div
//       className={cn(
//         'p-8 rounded-xl mx-2 relative',
//         'bg-[rgba(28,28,28,0.95)]',
//         'border border-[rgba(255,255,255,0.18)]',
//         'shadow-[0_4px_24px_rgba(0,0,0,0.25)]',
//         'group hover:bg-[rgba(32,32,32,0.95)]',
//         'transition-all duration-300',
//         className
//       )}
//     >
//       {children}
//     </div>
//   )
// }

// export const Quote = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode
//   className?: string
// }) => {
//   return (
//     <h3
//       className={cn(
//         'text-base font-bold text-white py-2 leading-relaxed',
//         className
//       )}
//     >
//       {children}
//     </h3>
//   )
// }

// export const QuoteDescription = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode
//   className?: string
// }) => {
//   return (
//     <p
//       className={cn(
//         'text-sm font-medium text-neutral-300 max-w-sm leading-normal',
//         className
//       )}
//     >
//       {children}
//     </p>
//   )
// }


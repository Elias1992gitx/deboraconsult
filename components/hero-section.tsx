'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  // Add client-side only state
  const [isMounted, setIsMounted] = useState(false)

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Return null or a loading state until client-side code is ready
  if (!isMounted) {
    return <div className="min-h-screen" /> // Placeholder with same height
  }

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 min-h-[calc(100svh-4rem)] items-center py-8 sm:py-10 md:py-12">
            {/* Left Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight pl-4 sm:pl-6 md:pl-8">
                Your Journey to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Global Education
                </span>{' '}
                Starts Here
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-800/80 max-w-2xl pl-4 sm:pl-6 md:pl-8">
                Expert guidance for international education, test preparation,
                and visa assistance. Transform your academic dreams into
                reality.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/consultation"
                  className="group relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ml-4 sm:ml-6 md:ml-8 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Expert Consultation
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/70 backdrop-blur-lg text-blue-900 rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
                {[
                  { number: '15k+', label: 'Students Placed' },
                  { number: '50+', label: 'Universities' },
                  { number: '25+', label: 'Countries' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 sm:p-3 md:p-4 text-center"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-950">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-blue-700">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] -mt-0 sm:-mt-8 md:-mt-16 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img.jpg"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -left-4 sm:-left-6 md:-left-10 bg-white rounded-2xl p-3 sm:p-4 shadow-xl max-w-[280px] sm:max-w-sm backdrop-blur-lg"
              >
                <h2 className="text-lg sm:text-xl font-bold mb-1 text-blue-950">
                  Expert Guidance Available
                </h2>
                <p className="text-xs sm:text-sm text-blue-700 mb-2 sm:mb-3">
                  Get personalized support throughout your journey
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-blue-50 rounded-full text-blue-700 text-xs sm:text-sm">
                      Study Abroad
                    </span>
                    <span className="px-2 py-0.5 bg-purple-50 rounded-full text-purple-700 text-xs sm:text-sm">
                      Test Prep
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-medium text-blue-950">
                    01
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

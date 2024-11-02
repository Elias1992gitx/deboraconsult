'use client'

import { motion } from 'framer-motion'
import { BookOpen, Globe, GraduationCap, Plane } from 'lucide-react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'

const animatedFlags = [
  {
    code: 'GB',
    position:
      'top-8 right-4 scale-50 sm:top-10 sm:right-20 md:right-32 lg:right-40 sm:scale-75 md:scale-90 lg:scale-100',
  },
  {
    code: 'US',
    position:
      'bottom-16 right-4 scale-50 sm:right-12 md:right-16 lg:right-20 sm:scale-75 md:scale-90 lg:scale-100',
  },
  {
    code: 'CA',
    position:
      'top-8 left-4 scale-50 sm:left-6 md:left-8 lg:left-10 sm:scale-75 md:scale-90 lg:scale-100',
  },
  {
    code: 'DE',
    position: 'bottom-28 left-4 scale-50 sm:bottom-40 sm:left-20 sm:scale-100',
  },
]

const animatedIcons = [
  {
    Icon: Plane,
    position: 'top-20 right-2 scale-50 sm:top-20 sm:right-10 sm:scale-100',
    color: 'text-blue-500',
  },
  {
    Icon: GraduationCap,
    position:
      'bottom-4 right-20 scale-50 sm:bottom-10 sm:right-40 sm:scale-100',
    color: 'text-purple-500',
  },
  {
    Icon: BookOpen,
    position: 'top-52 left-2 scale-50 sm:top-10 sm:left-20 sm:scale-100',
    color: 'text-green-500',
  },
  {
    Icon: Globe,
    position: 'bottom-12 left-20 scale-50 sm:bottom-20 sm:left-40 sm:scale-100',
    color: 'text-orange-500',
  },
]

export default function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-12 md:mt-12 lg:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-4 lg:gap-8 items-center py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-2 sm:px-4"
          >
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800">
                🎓 COMPREHENSIVE STUDY ABROAD SERVICES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Deborah's</span>
              <span className="block">Study Abroad</span>
              <span className="text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg">
              Expert guidance for international education and personalized study
              abroad consultancy services.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-medium hover:shadow-[0_0_25px_rgba(48,116,92,0.7)] transition-all duration-300">
                Get Consultation
              </button>
              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white border-2 border-[#95a7ea] text-black rounded-full text-sm sm:text-base font-medium hover:bg-[#30745c]/5 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 sm:mt-0"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
              {/* Decorative shapes - Responsive sizes */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-10 right-20 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 rounded-full bg-purple-400/30"></div>
                <div className="absolute bottom-20 left-10 w-16 sm:w-24 md:w-28 lg:w-32 h-16 sm:h-24 md:h-28 lg:h-32 rounded-full bg-yellow-400/40"></div>
                <div className="absolute top-40 left-20 w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24 rounded-full bg-pink-400/30"></div>
                <div className="absolute bottom-40 right-10 w-8 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-12 md:h-14 lg:h-16 rounded-full bg-green-400/30"></div>
              </div>

              {/* Main image */}
              <div className="relative z-10 h-5/6 w-full mt-6">
                <Image
                  src="/images/gradu.png" // Make sure to add this image to your public folder
                  alt="Professional with laptop"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 right-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-purple-600">Q</span>
              </div>
              {/* <div className="absolute bottom-20 left-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-purple-600">😊</span>
              </div> */}

              {/* Animated Flags */}
              {animatedFlags.map((flag, index) => (
                <motion.div
                  key={`flag-${index}`}
                  className={`absolute ${flag.position} z-20`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    },
                  }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-1 rounded-lg shadow-lg">
                    <ReactCountryFlag
                      countryCode={flag.code}
                      svg
                      style={{
                        width: '2em',
                        height: '2em',
                        borderRadius: '0.2em',
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Animated Icons */}
              {animatedIcons.map((item, index) => (
                <motion.div
                  key={`icon-${index}`}
                  className={`absolute ${item.position} z-20`}
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <div
                    className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg ${item.color}`}
                  >
                    <item.Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

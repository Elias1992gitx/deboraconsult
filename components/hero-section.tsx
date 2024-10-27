'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden pt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 min-h-[calc(100vh-6rem)] items-center py-12">
            {/* Left Column */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight">
                Your Journey to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Global Education
                </span>{' '}
                Starts Here
              </h1>
              <p className="text-xl text-blue-800/80 max-w-2xl">
                Expert guidance for international education, test preparation,
                and visa assistance. Transform your academic dreams into
                reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/consultation"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  className="px-8 py-4 bg-white/70 backdrop-blur-lg text-blue-900 rounded-2xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Services
                </Link>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8 pt-8">
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
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-950">
                      {stat.number}
                    </div>
                    <div className="text-blue-700 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-white rounded-3xl p-6 shadow-xl max-w-md backdrop-blur-lg"
              >
                <h2 className="text-2xl font-bold mb-2 text-blue-950">
                  Expert Guidance Available
                </h2>
                <p className="text-blue-700 mb-4">
                  Get personalized support throughout your journey
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-blue-50 rounded-full text-blue-700">
                      Study Abroad
                    </span>
                    <span className="px-3 py-1 bg-purple-50 rounded-full text-purple-700">
                      Test Prep
                    </span>
                  </div>
                  <span className="text-xl font-medium text-blue-950">01</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="fixed bottom-8 right-8 group"
        >
          <div className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="absolute -top-12 right-0 whitespace-nowrap bg-white px-4 py-2 rounded-xl text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Contact Us
            </span>
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
              />
            </svg>
          </div>
        </motion.button>
      </div>
    </section>
  )
}

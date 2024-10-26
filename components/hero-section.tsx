'use client'

import { BackgroundLines } from '@/components/ui/background-lines'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Globe,
  GraduationCap,
  MapPin,
  Plane,
  Star,
} from 'lucide-react'
import Image from 'next/image'

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const features = [
  {
    icon: GraduationCap,
    text: 'Expert University Guidance',
    color: 'from-blue-600 to-blue-400',
    description: '1000+ Universities',
  },
  {
    icon: Globe,
    text: 'Global Education Network',
    color: 'from-purple-600 to-purple-400',
    description: '50+ Countries',
  },
  {
    icon: BookOpen,
    text: 'Personalized Course Selection',
    color: 'from-pink-600 to-pink-400',
    description: '500+ Courses',
  },
  {
    icon: Plane,
    text: 'Visa Application Support',
    color: 'from-indigo-600 to-indigo-400',
    description: '99% Success Rate',
  },
]

const destinations = [
  { name: 'USA', count: '500+', icon: MapPin },
  { name: 'UK', count: '300+', icon: MapPin },
  { name: 'Canada', count: '250+', icon: MapPin },
  { name: 'Australia', count: '200+', icon: MapPin },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400 to-yellow-200 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-10"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3.5 rounded-full shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-4 h-4 text-white animate-pulse" />
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  #1 Education Consultancy in India
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-3 h-3 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Heading and Description */}
            <div className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                  Your Gateway to
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Global Excellence
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 max-w-xl leading-relaxed"
              >
                Transform your academic journey with expert guidance. Let us
                help you navigate the path to world-class universities with
                personalized support at every step.
              </motion.p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Button
                  size="pill-lg"
                  variant="gradient"
                  className="relative flex items-center gap-2 group/button"
                >
                  <span className="relative z-10">Check Eligibility!</span>
                  <span className="relative z-10">
                    <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-0 group-hover/button:opacity-100 transition-all duration-500 bg-[length:200%] animate-gradient rounded-full" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-blue-100 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <Button
                  size="pill-lg"
                  variant="modern"
                  className="relative group/button border-slate-200 hover:border-blue-200 backdrop-blur-sm"
                >
                  <span className="relative z-10 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                    Book FREE counselling session!
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="grid grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-300`}
                  />
                  <div className="relative flex flex-col gap-2 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-50">
                    <div className="flex items-center gap-3">
                      <div
                        className={`bg-gradient-to-r ${feature.color} p-2.5 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 pl-12">
                      {feature.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6 shadow-2xl border border-blue-100">
                {/* Background Lines */}
                <div className="absolute inset-0 -z-10">
                  <BackgroundLines
                    className="opacity-[0.15]"
                    svgOptions={{ duration: 15 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />
                  </BackgroundLines>
                </div>

                <Image
                  src="/images/student-hero.png"
                  alt="Student with graduation aspirations"
                  width={600}
                  height={700}
                  className="relative z-10 rounded-2xl transform transition-transform duration-500 hover:scale-105"
                  priority
                />

                {/* Floating Elements */}
                <AnimatePresence>
                  {destinations.map((dest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.2 },
                      }}
                      className={`absolute ${getPosition(
                        index
                      )} bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center gap-2">
                        <dest.icon className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-blue-600">
                          {dest.count}
                        </span>
                        <span className="text-sm text-gray-600">
                          {dest.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Decorative Elements */}
                <motion.div
                  variants={floatingAnimation}
                  className="absolute top-10 right-10 bg-gradient-to-r from-blue-600 to-blue-400 p-3 rounded-full shadow-lg text-white"
                >
                  <GraduationCap className="w-6 h-6" />
                </motion.div>
                <motion.div
                  variants={floatingAnimation}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-20 left-10 bg-gradient-to-r from-purple-600 to-purple-400 p-3 rounded-full shadow-lg text-white"
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
                <motion.div
                  variants={floatingAnimation}
                  transition={{ delay: 0.4 }}
                  className="absolute top-20 left-10 bg-gradient-to-r from-pink-600 to-pink-400 p-3 rounded-full shadow-lg text-white"
                >
                  <Plane className="w-6 h-6" />
                </motion.div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper function to position the destination cards
function getPosition(index: number) {
  const positions = [
    'top-10 right-10',
    'bottom-20 right-10',
    'bottom-20 left-10',
    'top-20 left-10',
  ]
  return positions[index]
}

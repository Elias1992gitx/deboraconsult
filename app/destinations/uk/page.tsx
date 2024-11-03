'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ukImages = [
  {
    url: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=3000&auto=format&fit=crop',
    title: 'University of Oxford',
    description: 'World-renowned institution with centuries of academic excellence'
  },
  {
    url: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=3000&auto=format&fit=crop',
    title: 'University of Cambridge',
    description: 'Leading research university with historic collegiate system'
  },
  {
    url: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=3000&auto=format&fit=crop',
    title: 'London School of Economics',
    description: 'Global center for social science excellence'
  },
  {
    url: 'https://images.unsplash.com/photo-1544060729-37f187aff344?q=80&w=3000&auto=format&fit=crop',
    title: 'Imperial College London',
    description: 'Leading science and technology institution'
  }
]

export default function UKPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ukImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={ukImages[currentIndex].url}
              alt={ukImages[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl font-bold mb-4"
              >
                {ukImages[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-white/90 max-w-2xl text-center"
              >
                {ukImages[currentIndex].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {ukImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  )
} 
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const travelCards = [
  {
    title: 'Secrets of Europe:',
    subtitle: 'Uncovering Hidden Delights',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=3432&auto=format&fit=crop',
    description:
      'Europe, with its rich history, stunning landscapes, and vibrant culture.',
  },
  {
    title: 'Europe Uncovered:',
    subtitle: 'The Top Hidden Gems to Explore',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=3420&auto=format&fit=crop',
    description:
      'Discover the hidden treasures and unexplored destinations across Europe.',
  },
  {
    title: 'Hidden Gems of Europe:',
    subtitle: 'Exploring Beyond the Tourist Trail',
    image:
      'https://images.unsplash.com/photo-1493707553966-283afac8c358?q=80&w=3540&auto=format&fit=crop',
    description:
      'Venture off the beaten path to discover authentic European experiences.',
  },
  {
    title: 'Hidden Charms:',
    subtitle: "Exploring Europe's Lesser-Known Destinations",
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=3540&auto=format&fit=crop',
    description:
      "Uncover the charm of Europe's best-kept secrets and hidden locations.",
  },
]

export default function TravelCards() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {travelCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[300px] overflow-hidden rounded-[32px] cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-lg text-white/90">{card.subtitle}</p>
                <p className="text-sm text-white/80 max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { DestinationCard, DestinationsCarousel } from './destinations-carousel'

const destinations = [
  {
    src: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=3389&auto=format&fit=crop',
    title: 'Study in USA',
    category: 'Popular Destination',
    stats: {
      universities: '200+',
      courses: '2000+',
      students: '15K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience world-class education in the United States with diverse
          opportunities and cutting-edge research facilities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Top-ranked universities</li>
          <li>Flexible education system</li>
          <li>Optional Practical Training (OPT)</li>
          <li>Diverse campus culture</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=3400&auto=format&fit=crop',
    title: 'Study in China',
    category: 'Featured Destination',
    stats: {
      universities: '150+',
      courses: '1500+',
      students: '10K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Discover the blend of ancient culture and modern education in China's
          top universities.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable education</li>
          <li>Scholarship opportunities</li>
          <li>Rich cultural experience</li>
          <li>Growing economic opportunities</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=3270&auto=format&fit=crop',
    title: 'Study in Italy',
    category: 'Historic Excellence',
    stats: {
      universities: '100+',
      courses: '1000+',
      students: '8K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Study in the birthplace of Renaissance with a perfect blend of art,
          culture, and academic excellence.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Historic universities</li>
          <li>Art and design excellence</li>
          <li>Rich cultural heritage</li>
          <li>Quality of life</li>
        </ul>
      </div>
    ),
  },
  {
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=3271&auto=format&fit=crop',
    title: 'Study in Turkey',
    category: 'Emerging Hub',
    stats: {
      universities: '120+',
      courses: '1200+',
      students: '12K+',
    },
    content: (
      <div className="space-y-4">
        <p>
          Experience the crossroads of Europe and Asia with Turkey's modern
          educational infrastructure.
        </p>
        <p>Key benefits include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Affordable living costs</li>
          <li>Modern facilities</li>
          <li>Cultural diversity</li>
          <li>Strategic location</li>
        </ul>
      </div>
    ),
  },
]

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Choose Your Study Destination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore top educational destinations worldwide and find the perfect
            place to pursue your academic dreams
          </motion.p>
        </div>

        <DestinationsCarousel
          items={destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              destination={destination}
              index={index}
              layout={true}
            />
          ))}
        />
      </div>
    </section>
  )
}

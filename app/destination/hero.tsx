'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const countryData = {
  'Study in UK': { code: 'GB', name: 'United Kingdom' },
  'Study in USA': { code: 'US', name: 'United States' },
  'Study in Canada': { code: 'CA', name: 'Canada' },
  'Study in Croatia': { code: 'HR', name: 'Croatia' },
  'Study in South Korea': { code: 'KR', name: 'South Korea' },
  'Study in South Africa': { code: 'ZA', name: 'South Africa' },
  'Study in Qatar': { code: 'QA', name: 'Qatar' },
  'Study in Spain': { code: 'ES', name: 'Spain' },
  'Study in Argentina': { code: 'AR', name: 'Argentina' },
  'Study in Germany': { code: 'DE', name: 'Germany' },
  'Study in Netherlands': { code: 'NL', name: 'Netherlands' },
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', // Modern university campus
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f', // International students studying
  'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd', // Global education concept
]

export default function DestinationHero() {
  const [selectedTab, setSelectedTab] = useState('University')
  const [filters, setFilters] = useState(['Europe'])
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value)
  }

  const toggleFilter = (filter: string) => {
    setFilters(
      filters.includes(filter)
        ? filters.filter((f) => f !== filter)
        : [...filters, filter]
    )
  }

  return (
    <main className="min-h-screen relative mt-28">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImages[0]}
          alt="Modern university campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-4xl"
        >
          <h1 className="text-7xl font-light mb-4">
            Discover Your Next
            <br />
            Study Adventure
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore curated study abroad opportunities that fulfill your academic dreams,
            offering unforgettable moments of learning, cultural immersion, and personal
            growth at prestigious universities worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light">Find your ideal program & University</h2>
            <div className="flex gap-2">
              {['University', 'Language School', 'Exchange'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all text-sm ${
                    selectedTab === tab
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Program Type
              </label>
              <input
                type="text"
                placeholder="e.g., Business, Arts"
                className="w-full p-3 rounded-lg bg-gray-50 border-none"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Duration
              </label>
              <select className="w-full p-3 rounded-lg bg-gray-50 border-none appearance-none">
                <option>Select Duration</option>
                <option>1 Semester</option>
                <option>2 Semesters</option>
                <option>Full Year</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Location
              </label>
              <select 
                className="w-full p-3 rounded-lg bg-gray-50 border-none appearance-none"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <option value="">All Countries</option>
                {Object.entries(countryData).map(([studyIn, { code, name }]) => (
                  <option key={code} value={code}>
                    {studyIn}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm text-gray-600">
                Start Date
              </label>
              <select className="w-full p-3 rounded-lg bg-gray-50 border-none appearance-none">
                <option>Any Semester</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Filter:</span>
              <div className="flex gap-2">
                {['Europe', 'North America', 'Asia', 'Africa', 'South America', 'Popular'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      filters.includes(filter)
                        ? 'bg-gray-900 text-white'
                        : 'border border-gray-200 text-gray-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                Clear Filter
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg flex items-center gap-2"
            >
              Search Programs
              <svg
                className="w-5 h-5"
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
            </motion.button>
          </div>
        </motion.div>
      </div>
      
    </main>
   
  )
}

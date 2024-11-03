'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useFilters } from './FilterContext'
import { StudyCard } from './types'

const allStudyCards: StudyCard[] = [
  {
    title: 'Business Studies at Oxford',
    dates: 'September 2024 - June 2025',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Business & Economics',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe'
  },
  {
    title: 'Computer Science at MIT',
    dates: 'August 2024 - May 2025',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Technology & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'August 2024',
    region: 'North America'
  },
  {
    title: 'Language Studies in Paris',
    dates: 'October 2024 - March 2025',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    category: 'Arts & Humanities',
    programType: 'Language School',
    duration: '1 Semester',
    startDate: 'October 2024',
    region: 'Europe'
  },
  {
    title: 'Engineering at TU Munich',
    dates: 'October 2024 - July 2025',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510',
    category: 'Technology & Engineering',
    programType: 'University',
    duration: 'Full Year',
    startDate: 'October 2024',
    region: 'Europe'
  },
  {
    title: 'Medicine at University of Toronto',
    dates: 'September 2024 - April 2025',
    location: 'Canada',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831',
    category: 'Medical Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'North America'
  },
  {
    title: 'Korean Language Program',
    dates: 'March 2025 - July 2025',
    location: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451',
    category: 'Language & Culture',
    programType: 'Language School',
    duration: '1 Semester',
    startDate: 'March 2025',
    region: 'Asia'
  },
  {
    title: 'Economics at LSE',
    dates: 'September 2024 - June 2025',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5',
    category: 'Business & Economics',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe'
  },
  {
    title: 'Environmental Science in Melbourne',
    dates: 'February 2025 - November 2025',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    category: 'Environmental Studies',
    programType: 'University',
    duration: 'Full Year',
    startDate: 'February 2025',
    region: 'Asia'
  },
  {
    title: 'Art & Design in Florence',
    dates: 'September 2024 - January 2025',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1534445967719-8ae7b972b1a5',
    category: 'Arts & Humanities',
    programType: 'Exchange',
    duration: '1 Semester',
    startDate: 'September 2024',
    region: 'Europe'
  },
  {
    title: 'Psychology at University of Cape Town',
    dates: 'January 2025 - November 2025',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Social Sciences',
    programType: 'University',
    duration: 'Full Year',
    startDate: 'January 2025',
    region: 'Africa'
  },
  {
    title: 'Data Science at ETH Zurich',
    dates: 'September 2024 - June 2025',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9',
    category: 'Technology & Engineering',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe'
  },
  {
    title: 'Japanese Studies in Tokyo',
    dates: 'April 2025 - July 2025',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
    category: 'Language & Culture',
    programType: 'Language School',
    duration: '1 Semester',
    startDate: 'April 2025',
    region: 'Asia'
  },
  {
    title: 'Marine Biology in Great Barrier Reef',
    dates: 'February 2025 - June 2025',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0',
    category: 'Environmental Studies',
    programType: 'University',
    duration: '1 Semester',
    startDate: 'February 2025',
    region: 'Asia'
  },
  {
    title: 'International Relations in Geneva',
    dates: 'September 2024 - June 2025',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8',
    category: 'Social Sciences',
    programType: 'University',
    duration: '2 Semesters',
    startDate: 'September 2024',
    region: 'Europe'
  }
]

export default function DestinationGrid() {
  const { filters } = useFilters()
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 6

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const filteredCards = allStudyCards.filter(card => {
    const matchesSearch = !filters.searchQuery || 
      card.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      card.category.toLowerCase().includes(filters.searchQuery.toLowerCase())
    
    const matchesProgramType = !filters.programType || 
      card.programType === filters.programType
    
    const matchesDuration = !filters.duration || 
      card.duration === filters.duration
    
    const matchesLocation = !filters.location || 
      card.location === filters.location
    
    const matchesStartDate = !filters.startDate || 
      card.startDate === filters.startDate
    
    const matchesRegions = filters.regions.length === 0 || 
      filters.regions.includes(card.region)

    return matchesSearch && 
      matchesProgramType && 
      matchesDuration && 
      matchesLocation && 
      matchesStartDate && 
      matchesRegions
  })

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard)
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage)

  return (
    <section className="py-16 bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={filters.toString()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-normal mb-4">
                20 Unforgettable Travel Discoveries
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our carefully selected study abroad programs at prestigious universities worldwide. 
                Each program offers unique opportunities for academic excellence and cultural immersion.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort By:</span>
              <select className="p-2 rounded-lg bg-transparent border border-gray-200">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration</option>
              </select>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {currentCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-sm">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-normal mb-2">{card.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{card.dates}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{card.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center items-center gap-2 mt-12">
            <button 
              onClick={handlePrevPage}
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
              }`}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-full ${
                  page === currentPage 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={handleNextPage}
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
              }`}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

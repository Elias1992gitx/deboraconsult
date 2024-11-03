'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface StudyCard {
  title: string
  dates: string
  location: string
  image: string
  category: string
}

const allStudyCards: StudyCard[] = [
  {
    title: 'Business Studies at Oxford',
    dates: 'September 2024 - June 2025',
    location: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    category: 'Business & Economics'
  },
  {
    title: 'Computer Science at MIT',
    dates: 'August 2024 - May 2025',
    location: 'United States',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585',
    category: 'Technology & Engineering'
  },
  {
    title: 'Arts & Design in Paris',
    dates: 'October 2024 - July 2025',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    category: 'Arts & Humanities'
  },
  {
    title: 'Medicine at University of Toronto',
    dates: 'September 2024 - June 2025',
    location: 'Canada',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    category: 'Medical Sciences'
  },
  {
    title: 'Environmental Science in Melbourne',
    dates: 'February 2025 - November 2025',
    location: 'Australia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    category: 'Environmental Studies'
  },
  {
    title: 'International Relations in Berlin',
    dates: 'October 2024 - July 2025',
    location: 'Germany',
    image: 'https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd',
    category: 'Social Sciences'
  },
  {
    title: 'Psychology at University of Amsterdam',
    dates: 'September 2024 - June 2025',
    location: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    category: 'Social Sciences'
  },
  {
    title: 'Engineering at ETH Zurich',
    dates: 'September 2024 - July 2025',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72',
    category: 'Technology & Engineering'
  }
]

export default function DestinationGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 6
  
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = allStudyCards.slice(indexOfFirstCard, indexOfLastCard)
  const totalPages = Math.ceil(allStudyCards.length / cardsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-normal mb-4">
              Featured Study Programs Worldwide
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
      </div>
    </section>
  )
}

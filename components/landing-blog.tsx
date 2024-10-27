'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Beautiful Italy. Let\'s Travelling!',
    description:
      'Italy in one of the most popular vacation destinations in the world, and it\'s no wonder.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=3286&auto=format&fit=crop',
    category: 'Italy',
  },
  {
    id: 2,
    title: 'Romantic moments under Eiffel Tower',
    description:
      'Italy in one of the most popular vacation destinations in the world, and it\'s no wonder.',
    image:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=3387&auto=format&fit=crop',
    category: 'France',
  },
  {
    id: 3,
    title: 'Let\'s Have an Adventure Outside Canada',
    description:
      'Canada in one of the most popular vacation destinations in the world, and it\'s no wonder.',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=3411&auto=format&fit=crop',
    category: 'Canada',
  },
  {
    id: 4,
    title: 'New experience on desert island with your friends',
    description:
      'The Eiffel Tower is best background for a romantic paris honeymoom portrait',
    image:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=3368&auto=format&fit=crop',
    category: 'Adventure',
  },
]

const categories = ['All', 'Cappadocia', 'Thailand', 'Turkey', 'Italy']

export default function LandingBlog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our best blogs ?
          </h2>
          <p className="text-lg text-gray-600">
            An insight to the incredible experiences in the world
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base font-medium ${
                activeCategory === category
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row gap-6 group"
            >
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="flex items-center text-[#FF5722] font-medium group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
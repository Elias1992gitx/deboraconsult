'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Organization {
  name: string
  description: string
  contributors: number
  color: string
  logo: string
}

const organizations: Organization[] = [
  {
    name: 'Adobe',
    description: 'Changing our world thanks to digital solutions.',
    contributors: 329,
    color: '#FF4B85',
    logo: '/logos/adobe.svg'
  },
  {
    name: 'Intercom',
    description: 'We make customer messaging apps on one platform.',
    contributors: 193,
    color: '#2196F3',
    logo: '/logos/intercom.svg'
  },
  {
    name: 'Zendesk',
    description: 'Customer service software and support ticket system.',
    contributors: 246,
    color: '#03BFB5',
    logo: '/logos/zendesk.svg'
  },
  {
    name: 'Stripe',
    description: 'A suite of APIs that powers commerce for businesses.',
    contributors: 573,
    color: '#6772E5',
    logo: '/logos/stripe.svg'
  }
]

export default function OrganizationCards() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {organizations.map((org, index) => (
                <motion.div
                  key={org.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{ backgroundColor: org.color }}
                >
                  <div className="h-12 w-12 mb-4">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {org.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {org.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm">
                      {org.contributors} Contributors
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-cyan-200/30 blur-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-purple-200/30 blur-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-500 font-medium"
            >
              Handling with ease
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-gray-900"
            >
              Manage organizations
              <br />
              in one place.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 leading-relaxed"
            >
              Ability to change your organization allows you to track all your public contributions within just one application, in quick, easy and pleasant way.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 text-cyan-500 font-medium hover:text-cyan-600 transition-colors"
            >
              <svg 
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M4 4h16v16H4V4z"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12h6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 9v6"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Change organization
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
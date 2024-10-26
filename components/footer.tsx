'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const footerSections = [
  {
    title: 'Countries',
    links: [
      'Study in UK',
      'Study in Canada',
      'Study in Australia',
      'Study in USA',
      'Study in Europe',
      'Explore All Countries',
    ],
  },
  {
    title: 'Exams',
    links: ['GMAT', 'GRE', 'IELTS', 'TOEFL', 'SAT', 'DET'],
  },
  {
    title: 'Colleges',
    links: [
      'MBA Colleges',
      'MS Colleges',
      'BE/BTECH Colleges',
      'BBA Colleges',
      'Masters in Hospitality',
      'Masters in Journalism',
    ],
  },
  {
    title: 'Apply',
    links: ['SOP', 'LOR', 'Student Visa', 'Education Loans'],
  },
]

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSection(section.title)}
              onHoverEnd={() => setHoveredSection(null)}
              className="relative"
            >
              <h3 className="font-bold text-white mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                  >
                    <a
                      href="#"
                      className="hover:text-teal-400 transition-colors duration-200 relative group"
                    >
                      <span className="relative z-10">{link}</span>
                      <motion.span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"
                        initial={false}
                        animate={{
                          width:
                            hoveredSection === section.title ? '100%' : '0%',
                        }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <AnimatePresence>
                {hoveredSection === section.title && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gray-900 rounded-lg -z-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Deborah Consultancy. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                  whileHover={{ y: -5, color: '#4fd1c5' }}
                  whileTap={{ scale: 0.95 }}
                ></motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500 to-blue-500" />
        <svg
          className="absolute top-0 left-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor">
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer

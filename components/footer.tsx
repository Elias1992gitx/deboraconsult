'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { TextGenerateEffect } from './ui/text-generate-effect'
import ReactCountryFlag from 'react-country-flag'

// Define interfaces for our data structure
interface CountryLink {
  name: string
  code: string
}

interface CountrySection {
  title: 'Countries'
  links: CountryLink[]
}

interface RegularSection {
  title: 'Exams' | 'Colleges' | 'Apply'
  links: string[]
}

type FooterSection = CountrySection | RegularSection

const footerSections: FooterSection[] = [
  {
    title: 'Countries',
    links: [
      { name: 'Study in UK', code: 'GB' },
      { name: 'Study in USA', code: 'US' },
      { name: 'Study in Canada', code: 'CA' },
      { name: 'Study in Croatia', code: 'HR' },
      { name: 'Study in South Korea', code: 'KR' },
      { name: 'Study in South Africa', code: 'ZA' },
      { name: 'Study in Spain', code: 'ES' },
      { name: 'Study in Argentina', code: 'AR' },
      { name: 'Study in Germany', code: 'DE' },
      { name: 'Study in Netherlands', code: 'NL' },
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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <footer className="relative overflow-hidden bg-black text-white py-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(45,45,45,0.1),rgba(0,0,0,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <TextGenerateEffect
            words="Connect With Us Globally"
            className="text-6xl font-bold text-white tracking-tight mb-4"
          />
          <p className="text-neutral-400 text-lg leading-relaxed">
            Join our community of international students and education
            enthusiasts. Stay connected for the latest updates and
            opportunities.
          </p>

          {/* Contact Information */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <a
              href="tel:+17179801615"
              className="text-neutral-400 hover:text-white flex items-center gap-2"
            >
              <FaPhone /> +1 717 980 1615
            </a>
            <a
              href="mailto:dawit.dessie@fora.travel"
              className="text-neutral-400 hover:text-white flex items-center gap-2"
            >
              <FaEnvelope /> dawit.dessie@fora.travel
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
              className={`flex flex-col ${
                section.title === 'Countries'
                  ? 'lg:mr-6'
                  : section.title === 'Exams'
                  ? 'lg:ml-20'
                  : ''
              }`}
            >
              <h3 className="font-semibold text-lg text-white mb-6 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.title === 'Countries' ? (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {section.links.map((link) => (
                      <motion.li key={link.name} className="relative list-none">
                        <motion.a
                          href={`https://www.google.com/search?q=${encodeURIComponent(
                            link.name
                          )}`}
                          target="_blank" // Opens in a new tab
                          className="text-neutral-400 block relative z-10 transition-colors duration-200 hover:text-white text-[15px] flex items-center gap-2"
                          onHoverStart={() => setHoveredLink(link.name)}
                          onHoverEnd={() => setHoveredLink(null)}
                        >
                          <ReactCountryFlag
                            countryCode={link.code}
                            svg
                            style={{
                              width: '1.2em',
                              height: '1.2em',
                              borderRadius: '0.2em',
                            }}
                          />
                          <span>{link.name}</span>
                          <AnimatePresence>
                            {hoveredLink === link.name && (
                              <motion.span
                                layoutId="linkBackground"
                                className="absolute -inset-x-3 -inset-y-1.5 bg-neutral-800/50 rounded-md -z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                              />
                            )}
                          </AnimatePresence>
                        </motion.a>
                      </motion.li>
                    ))}
                  </div>
                ) : (
                  section.links.map((link) => (
                    <motion.li key={link} className="relative">
                      <motion.a
                        href="#"
                        className="text-neutral-400 block relative z-10 transition-colors duration-200 hover:text-white text-[15px]"
                        onHoverStart={() => setHoveredLink(link)}
                        onHoverEnd={() => setHoveredLink(null)}
                      >
                        <AnimatePresence>
                          {hoveredLink === link && (
                            <motion.span
                              layoutId="linkBackground"
                              className="absolute -inset-x-3 -inset-y-1.5 bg-neutral-800/50 rounded-md -z-10"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.15 }}
                            />
                          )}
                        </AnimatePresence>
                        {link}
                      </motion.a>
                    </motion.li>
                  ))
                )}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-8 border-t border-neutral-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-neutral-500 relative p-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <div className="w-[18px] h-[18px]">
                    <Icon size={18} />
                  </div>
                  <motion.span className="absolute -inset-2 bg-neutral-800/50 rounded-full -z-10" />
                </motion.a>
              ))}
            </div>
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} All rights reserved, Deborah Study Abroad
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

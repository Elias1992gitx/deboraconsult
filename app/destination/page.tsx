'use client'

import { motion } from 'framer-motion'
import DestinationGrid from './countries'
import DestinationHero from './hero'

export default function DestinationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <DestinationHero />
      <DestinationGrid />
    </motion.div>
  )
}

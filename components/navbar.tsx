'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ChevronDown, Globe, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const navVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(5px)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  }

  const NavLink = ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <Link
      href={href}
      className="relative text-gray-600 hover:text-[#30745c] group py-2"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#30745c] opacity-0"
        whileHover={{ width: '100%', opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )

  const DropdownNavItem = ({
    trigger,
    items,
  }: {
    trigger: string
    items: string[]
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#30745c] group py-2">
        <span className="relative z-10">{trigger}</span>
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#30745c] opacity-0"
          whileHover={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="animate-in fade-in-80 zoom-in-95 bg-white/80 backdrop-blur-md"
        sideOffset={8}
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="hover:bg-[#30745c]/10 transition-colors duration-200"
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  const NavItems = () => (
    <>
      <NavLink href="/about-us">About Us</NavLink>
      <DropdownNavItem
        trigger="Destination"
        items={['Study in UK', 'Study in USA', 'Study in Canada']}
      />
      <DropdownNavItem trigger="Training" items={['IELTS', 'PTE', 'TOEFL']} />
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact-us">Contact us</NavLink>
    </>
  )

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300"
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <motion.div
            className="relative h-10 w-10 overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#30745c] to-[#19533e]"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <Globe className="absolute inset-0 h-full w-full p-2 text-white transition-transform group-hover:scale-110" />
          </motion.div>
          <motion.span
            className="text-xl font-semibold text-[#30745c]"
            whileHover={{ scale: 1.02 }}
          >
            Debora Consultancy
          </motion.span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <NavItems />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Search"
          className="text-gray-600 hover:text-[#30745c] transition-colors duration-200"
        >
          <Search className="h-5 w-5" />
        </motion.button>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className={cn(
              'bg-gradient-to-r from-orange-500 to-orange-600',
              'hover:from-orange-600 hover:to-orange-700',
              'text-white font-medium',
              'shadow-lg hover:shadow-orange-500/25',
              'transition-all duration-300'
            )}
          >
            CONTACT NOW
          </Button>
        </motion.div>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#30745c]/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white/80 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-6 mt-8">
              <NavItems />
              <div className="flex items-center justify-between pt-4 border-t">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Search"
                  className="text-gray-600 hover:text-[#30745c]"
                >
                  <Search className="h-5 w-5" />
                </motion.button>
                <Button
                  className={cn(
                    'bg-gradient-to-r from-[#30745c] to-[#19533e]',
                    'hover:from-[#19533e] hover:to-[#30745c]',
                    'text-white font-medium',
                    'shadow-lg hover:shadow-[#30745c]/25',
                    'transition-all duration-300'
                  )}
                >
                  COURSE FINDER
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
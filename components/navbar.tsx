'use client'

import { ChevronDown, Menu, Search, X } from 'lucide-react'
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavItems = () => (
    <>
      <Link
        href="/about-us"
        className="text-gray-600 hover:text-[#30745c] hover:underline"
      >
        About Us
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#30745c] hover:underline">
          Destination
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
          <DropdownMenuItem>Option 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-[#30745c] hover:underline">
          Training
          <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Course 1</DropdownMenuItem>
          <DropdownMenuItem>Course 2</DropdownMenuItem>
          <DropdownMenuItem>Course 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link
        href="/blog"
        className="text-gray-600 hover:text-[#30745c] hover:underline"
      >
        Blog
      </Link>
      <Link
        href="/contact-us"
        className="text-gray-600 hover:text-[#19533e] hover:underline"
      >
        Contact us
      </Link>
    </>
  )

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md rounded-lg shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            alt="The Student Helpline Logo"
            className="h-10 w-10"
            src="/images/logo.png?height=80&width=80"
          />
          <span className="text-xl font-semibold text-[#30745c]">
            Debora Consultancy
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <NavItems />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button
          aria-label="Search"
          className="text-gray-600 hover:text-blue-600"
        >
          <Search className="h-5 w-5" />
        </button>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          CONTACT NOW
        </Button>
      </div>
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-4">
              <NavItems />
              <div className="flex items-center justify-between mt-4">
                <button
                  aria-label="Search"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Search className="h-5 w-5" />
                </button>
                <Button className="bg-[#30745c] hover:bg-[#30745c] text-white">
                  COURSE FINDER
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
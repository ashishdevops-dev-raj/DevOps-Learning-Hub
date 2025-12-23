'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200 cursor-pointer"
          >
            DevOps Hub
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-primary-600 transition">
              Topics
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary-600 transition">
              Projects
            </Link>
            <Link href="/roadmap" className="text-gray-700 hover:text-primary-600 transition">
              Roadmap
            </Link>
            <Link href="/interview" className="text-gray-700 hover:text-primary-600 transition">
              Interview Prep
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/topics" 
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Topics
            </Link>
            <Link 
              href="/projects" 
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/roadmap" 
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <Link 
              href="/interview" 
              className="block text-gray-700 hover:text-primary-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Interview Prep
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}


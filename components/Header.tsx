'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      )}
    >
  <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" aria-label="Poligap Home" className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 lobster-two-regular">
              Poligap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs / Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {clerkEnabled ? (
              <>
                <SignedOut>
                  <Link href="/sign-in" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                    Sign In
                  </Link>
                  <Link href="/sign-up" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                    Get Started
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </>
            ) : (
              <>
                <Link href="/sign-in" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                  Sign In
                </Link>
                <Link href="/sign-up" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                {clerkEnabled ? (
                  <>
                    <SignedOut>
                      <Link href="/sign-in" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-left">
                        Sign In
                      </Link>
                      <Link href="/sign-up" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-center">
                        Get Started
                      </Link>
                    </SignedOut>
                    <SignedIn>
                      <div className="pt-2">
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </SignedIn>
                  </>
                ) : (
                  <>
                    <Link href="/sign-in" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-left">
                      Sign In
                    </Link>
                    <Link href="/sign-up" className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-center">
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail, Calendar, ArrowUp } from 'lucide-react'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const actionItems = [
    {
      icon: Calendar,
      label: 'Schedule Demo',
      color: 'bg-primary-600 hover:bg-primary-700',
      action: () => console.log('Schedule demo')
    },
    {
      icon: Phone,
      label: 'Call Us',
      color: 'bg-green-600 hover:bg-green-700',
      action: () => window.open('tel:+1-555-012-3456')
    },
    {
      icon: Mail,
      label: 'Email Us',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => window.open('mailto:hello@contractai.com')
    }
  ]

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Items */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 space-y-3">
              {actionItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0, 
                    y: 20,
                    transition: { delay: (actionItems.length - index - 1) * 0.1 }
                  }}
                  onClick={item.action}
                  className={`${item.color} text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 group`}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.createElement(item.icon, { className: "w-5 h-5" })}
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden group-hover:block hidden"
                  >
                    {item.label}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'
          } text-white p-4 rounded-full shadow-lg transition-all duration-200`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-primary-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
    </>
  )
}

export default FloatingActionButton

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Download, MessageCircle, Sparkles } from 'lucide-react'

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Get Demo',
      description: 'Schedule a personalized demo with our team',
      buttonText: 'Book Demo',
      buttonStyle: 'bg-white text-primary-900 hover:bg-gray-100 shadow-lg font-bold',
      popular: true
    },
    {
      icon: Sparkles,
      title: 'Start Free Trial',
      description: '14-day free trial with full platform access',
      buttonText: 'Try Free',
      buttonStyle: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg font-bold',
      popular: false
    },
    {
      icon: Download,
      title: 'Download Guide',
      description: 'AI in Document Processing: Complete Guide 2024',
      buttonText: 'Download',
      buttonStyle: 'border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-bold',
      popular: false
    },
    {
      icon: MessageCircle,
      title: 'Contact Sales',
      description: 'Speak with our enterprise solutions team',
      buttonText: 'Contact Us',
      buttonStyle: 'border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-bold',
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

  <div className="relative max-w-none mx-auto px-2 sm:px-4 lg:px-6">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lobster-two-regular">
            Ready to Transform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300">
              Your Workflow?
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who have transformed their workflow with AI-powered document analysis. 
            Start your journey today and experience the future of productivity.
          </p>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-xl ${
                option.popular ? 'ring-2 ring-secondary-400 bg-white/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                {React.createElement(option.icon, { className: "w-6 h-6" })}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-gray-200 text-sm mb-6 font-medium">
                {option.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${option.buttonStyle}`}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise Solutions Available
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto font-medium">
              Need custom integrations, dedicated support, or volume pricing? 
              Our enterprise team is ready to help you scale your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="flex items-center space-x-4 text-gray-200">
                <span className="text-sm font-medium">or call</span>
                <a href="tel:+1-555-0123" className="text-secondary-300 hover:text-secondary-200 font-bold">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators removed per request */}
      </div>
    </section>
  )
}

export default CTASection

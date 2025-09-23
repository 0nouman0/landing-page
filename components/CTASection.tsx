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
      buttonStyle: 'bg-primary-600 text-white hover:bg-primary-700',
      popular: true
    },
    {
      icon: Sparkles,
      title: 'Start Free Trial',
      description: '14-day free trial with full platform access',
      buttonText: 'Try Free',
      buttonStyle: 'bg-secondary-600 text-white hover:bg-secondary-700',
      popular: false
    },
    {
      icon: Download,
      title: 'Download Guide',
      description: 'AI in Document Processing: Complete Guide 2024',
      buttonText: 'Download',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600',
      popular: false
    },
    {
      icon: MessageCircle,
      title: 'Contact Sales',
      description: 'Speak with our enterprise solutions team',
      buttonText: 'Contact Us',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-secondary-600 hover:text-secondary-600',
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-accent-300">
              Your Workflow?
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who have transformed their workflow with AI-powered document analysis. 
            Start your journey today and experience the future of productivity.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-300 mb-2">Fast</div>
              <div className="text-gray-300">Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-300 mb-2">Smart</div>
              <div className="text-gray-300">Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">1000+</div>
              <div className="text-gray-300">Happy Users</div>
            </div>
          </motion.div>
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
              className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${
                option.popular ? 'ring-2 ring-secondary-400' : ''
              }`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
                {React.createElement(option.icon, { className: "w-6 h-6" })}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise Solutions Available
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
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
              
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="text-sm">or call</span>
                <a href="tel:+1-555-0123" className="text-secondary-300 hover:text-secondary-200 font-medium">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">SOC 2 compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection

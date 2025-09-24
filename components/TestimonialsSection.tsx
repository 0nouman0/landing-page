'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight, Building2, Users, Scale, Play, Pause } from 'lucide-react'

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Operations Manager',
      company: 'Tech Solutions Inc.',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      quote: 'Poligap has streamlined our document review process significantly. The AI suggestions are helpful and the interface is intuitive to use.',
      metrics: 'Improved efficiency',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Jordan Smith',
      role: 'Team Lead',
      company: 'Business Solutions Group',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      quote: 'The collaborative features and document analysis capabilities have made our workflow much more efficient. Great tool for teams.',
      metrics: 'Enhanced collaboration',
      industry: 'Business Services'
    },
    {
      id: 3,
      name: 'Taylor Brown',
      role: 'Project Manager',
      company: 'Enterprise Corp',
      avatar: '/api/placeholder/64/64',
      rating: 5,
      quote: 'The analytics and reporting features provide valuable insights. The platform is reliable and user-friendly.',
      metrics: 'Better insights',
      industry: 'Enterprise'
    }
  ]

  const useCases = [
    {
      icon: Building2,
      title: 'Large Enterprise',
      description: 'Streamlined document workflows across multiple departments',
      results: [
        'Improved document processing efficiency',
        'Faster approval workflows',
        'Standardized processes across divisions'
      ],
      industry: 'Enterprise',
      color: 'bg-blue-500'
    },
    {
      icon: Scale,
      title: 'Professional Services',
      description: 'Enhanced service delivery with AI-powered document analysis',
      results: [
        'Increased document processing capacity',
        'Improved client satisfaction',
        'Reduced manual workload'
      ],
      industry: 'Professional Services',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Growing Business',
      description: 'Scaled operations without expanding team size',
      results: [
        'Handled increased document volume',
        'Maintained quality with existing team',
        'Accelerated processing times'
      ],
      industry: 'Business',
      color: 'bg-green-500'
    }
  ]

  const complianceStandards = [
    'GDPR', 'CCPA', 'HIPAA', 'ISO 27001', 'ISO 9001', 'SOX',
    'PCI DSS', 'NIST', 'SOC 2', 'FERPA', 'GLBA', 'PIPEDA',
    'LGPD', 'PDPA', 'CPRA', 'FISMA', 'FedRAMP', 'ITAR',
    'EAR', 'GDPR-UK', 'Basel III', 'MiFID II', 'COSO',
    'COBIT', 'ITIL'
  ]

  const companyLogos = [
    { name: 'Company A', logo: 'CA' },
    { name: 'Business B', logo: 'BB' },
    { name: 'Enterprise C', logo: 'EC' },
    { name: 'Solutions D', logo: 'SD' },
    { name: 'Group E', logo: 'GE' },
    { name: 'Corp F', logo: 'CF' }
  ]

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }, [testimonials.length])

  const goToTestimonial = useCallback((index: number) => {
    setActiveTestimonial(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume auto-play after 10 seconds
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying)
    setIsPaused(false)
  }, [isAutoPlaying])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused, testimonials.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevTestimonial()
      } else if (event.key === 'ArrowRight') {
        nextTestimonial()
      } else if (event.key === ' ') {
        event.preventDefault()
        toggleAutoPlay()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextTestimonial, prevTestimonial, toggleAutoPlay])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lobster-two-regular">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Teams Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading organizations are transforming their document workflows 
            with our AI-powered platform.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            title={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
          >
            {isAutoPlaying && !isPaused ? (
              <Pause className="w-4 h-4 text-gray-600" />
            ) : (
              <Play className="w-4 h-4 text-gray-600" />
            )}
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 z-10 group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 z-10 group"
          >
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
          </button>

          {/* Progress Bar */}
          {isAutoPlaying && !isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-3xl overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full bg-primary-500"
              />
            </div>
          )}

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6" />

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-lg">
                  {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].role}
                </div>
                <div className="text-primary-600 font-medium">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
              {testimonials[activeTestimonial].metrics}
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'w-8 h-3 bg-primary-600 rounded-full' 
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
              >
                {index === activeTestimonial && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Testimonial Counter */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {activeTestimonial + 1} of {testimonials.length}
          </div>
        </motion.div>

        {/* Compliance Standards Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Compliance Coverage
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built-in support for global regulatory standards and compliance frameworks
            </p>
          </div>
          
          {/* Enhanced Marquee Container */}
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-50 via-legal-50 to-secondary-50 rounded-3xl py-12 shadow-2xl border border-primary-200/30">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-legal-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-legal-50 to-transparent z-10"></div>
            
            {/* Floating Background Elements */}
            <div className="absolute top-4 left-8 w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-15 animate-pulse"></div>
            <div className="absolute bottom-4 right-12 w-12 h-12 bg-gradient-to-br from-secondary-300 to-secondary-400 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-8 right-24 w-8 h-8 bg-gradient-to-br from-accent-300 to-accent-400 rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center space-x-8 mr-8">
                  {complianceStandards.map((standard, index) => (
                    <motion.div
                      key={`${setIndex}-${index}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg border border-legal-200 hover:shadow-xl hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                        {standard.charAt(0)}
                      </div>
                      <span className="font-bold text-legal-800 group-hover:text-primary-700 transition-colors duration-300 text-sm md:text-base">
                        {standard}
                      </span>
                      {/* Compliance badge */}
                      <div className="w-2 h-2 bg-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm"></div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Bottom Text */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-100 via-legal-100 to-secondary-100 rounded-full px-8 py-4 border border-primary-300/50 shadow-lg">
              <div className="w-3 h-3 bg-secondary-500 rounded-full animate-pulse shadow-sm"></div>
              <span className="font-bold text-legal-800">
                Supporting <span className="text-primary-700 font-black text-lg">25+</span> compliance frameworks worldwide
              </span>
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-lg hover:bg-primary-100 hover:text-primary-600 transition-all duration-200 cursor-pointer"
              >
                {company.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

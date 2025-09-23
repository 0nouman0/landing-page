'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Upload, 
  Brain, 
  Edit3, 
  Download,
  CheckCircle,
  ArrowRight,
  FileText,
  Sparkles
} from 'lucide-react'

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const demoSteps = [
    {
      id: 1,
      icon: Upload,
      title: 'Upload Document',
      description: 'Simply drag and drop your policy or contract document',
      details: 'Supports major document formats including PDF, Word, and plain text files for both policies and contracts',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Brain,
      title: 'AI Analysis',
      description: 'Advanced AI analyzes your document for compliance and risks',
      details: 'Intelligent processing identifies compliance gaps, contract clauses, policy violations, and regulatory requirements',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      icon: Edit3,
      title: 'Review Insights',
      description: 'Interactive interface shows compliance insights and recommendations',
      details: 'Clear presentation of compliance analysis, risk assessment, and actionable recommendations for both policies and contracts',
      color: 'bg-green-500'
    },
    {
      id: 4,
      icon: Download,
      title: 'Export Results',
      description: 'Download compliance reports and analyzed documents',
      details: 'Export compliance reports, annotated documents, or integrate findings with your legal management systems',
      color: 'bg-orange-500'
    }
  ]

  const competitiveAdvantages = [
    'Advanced AI Legal Models',
    'Real-time Compliance Updates',
    'Custom Knowledge Base',
    'Enterprise-grade Security',
    'Automated Audit Trails',
    'Multi-jurisdiction Support'
  ]

  // Auto-advance through steps
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length)
      setProgress(0)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, demoSteps.length])

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + (100 / 40) // 4 seconds = 40 intervals of 100ms
      })
    }, 100)
    
    return () => clearInterval(progressInterval)
  }, [activeStep, isAutoPlaying])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsAutoPlaying(false)
    setProgress(0)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch how our AI-powered platform transforms policy compliance analysis and contract review 
            with intelligent processing and seamless legal workflows.
          </p>
          
          {/* Demo Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-16"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-8 hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-16 h-16 text-white ml-2" />
                </motion.button>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm">Policy & Contract Analysis Demo</span>
                  <span className="text-sm">2:30</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="text-sm font-semibold">Live Demo</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Simple 4-Step Process
            </h3>
            
            {demoSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className={`flex items-start space-x-4 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-primary-300 bg-primary-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}>
                  {/* Step Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white relative`}>
                    {React.createElement(step.icon, { className: "w-6 h-6" })}
                    {/* Progress Ring for Active Step */}
                    {activeStep === index && isAutoPlaying && (
                      <div className="absolute inset-0 rounded-xl">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="22"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                            fill="none"
                          />
                          <motion.circle
                            cx="24"
                            cy="24"
                            r="22"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={138.23} // 2 * π * 22
                            initial={{ strokeDashoffset: 138.23 }}
                            animate={{ strokeDashoffset: 138.23 - (138.23 * progress / 100) }}
                            transition={{ duration: 0.1 }}
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-500">Step {step.id}</span>
                      {activeStep === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary-500 rounded-full"
                        />
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      {step.description}
                    </p>
                    {activeStep === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-gray-500"
                      >
                        {step.details}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className={`w-5 h-5 transition-colors duration-300 ${
                    activeStep === index ? 'text-primary-600' : 'text-gray-400'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-600">
                    Poligap Demo - {demoSteps[activeStep].title}
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                  {/* Step Visualization */}
                  <div className={`w-16 h-16 rounded-2xl ${demoSteps[activeStep].color} flex items-center justify-center text-white mb-4`}>
                    {React.createElement(demoSteps[activeStep].icon, { className: "w-8 h-8" })}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900">
                    {demoSteps[activeStep].title}
                  </h4>
                  
                  <p className="text-gray-600">
                    {demoSteps[activeStep].details}
                  </p>

                  {/* Mock Interface Elements */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {activeStep === 0 && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Drop your policy or contract here</p>
                      </div>
                    )}
                    
                    {activeStep === 1 && (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '75%' }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="h-full bg-purple-500"
                            />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Analyzing for compliance...</p>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 2 && (
                      <div className="space-y-2">
                        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded">
                          <p className="text-sm text-yellow-800">
                            <strong>Compliance Alert:</strong> Policy gap identified
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Accept</button>
                          <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm">Reject</button>
                        </div>
                      </div>
                    )}
                    
                    {activeStep === 3 && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-700">compliance-report.pdf</span>
                        </div>
                        <button className="bg-primary-600 text-white px-4 py-2 rounded text-sm">
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            What Makes Us Stand Out From Competitors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg mr-4"
          >
            Try It Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
          >
            Watch Full Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoSection

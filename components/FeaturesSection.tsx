'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  FileText, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  CheckCircle2,
  Download
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced document analysis with intelligent suggestions and automated insights for better decision making.',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: FileText,
      title: 'Smart Document Processing',
      description: 'Upload documents and get instant parsing with professional formatting and structure recognition.',
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      icon: Zap,
      title: 'Interactive Editing',
      description: 'Accept, reject, or modify AI suggestions with our intuitive editor and real-time collaboration tools.',
      color: 'bg-accent-100 text-accent-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Industry-standard encryption and secure cloud infrastructure to protect your sensitive documents.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Advanced analytics for document insights, scoring, and automated reporting dashboards.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools with role-based permissions and comprehensive audit trails.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle2,
      title: 'Template Management',
      description: 'Customizable document templates with pre-configured workflows and approval processes.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Download,
      title: 'Export & Integration',
      description: 'Export to PDF, Word, or integrate with your existing tech stack via comprehensive APIs.',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-white">
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
            Powerful Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your document workflow with cutting-edge AI technology 
            and enterprise-grade security.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(feature.icon, { className: "w-6 h-6" })}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Interactive "Learn More" that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-primary-600 font-medium text-sm flex items-center space-x-1">
                    <span>Learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection

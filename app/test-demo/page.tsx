'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'

const TestDemoPage = () => {
  const testSteps = [
    {
      title: "Homepage Demo Button",
      description: "Click 'Book a Demo Call' on the homepage",
      link: "/",
      status: "ready"
    },
    {
      title: "Authentication Flow", 
      description: "Sign up or sign in when redirected",
      link: "/sign-up?redirect_url=/book",
      status: "ready"
    },
    {
      title: "Demo Booking Form",
      description: "Fill out the comprehensive demo request form",
      link: "/book",
      status: "requires_auth"
    },
    {
      title: "Dashboard Access",
      description: "Access dashboard after skipping or completing form",
      link: "/dashboard", 
      status: "requires_auth"
    }
  ]

  const features = [
    "✅ Authentication-gated demo booking",
    "✅ Comprehensive form with all requested fields", 
    "✅ Google Sheets integration ready",
    "✅ Skip functionality implemented",
    "✅ Form validation and error handling",
    "✅ Responsive design and animations",
    "✅ Success flow with dashboard redirect"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 lobster-two-regular">
            Demo Booking System Test
          </h1>
          <p className="text-xl text-gray-600">
            Test the complete demo booking flow with authentication
          </p>
        </motion.div>

        {/* Test Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Steps</h2>
          <div className="space-y-4">
            {testSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    step.status === 'ready' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {step.status === 'ready' ? 'Ready' : 'Requires Auth'}
                  </span>
                  <Link
                    href={step.link}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Implemented */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features Implemented</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Google Sheets Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Next: Google Sheets Setup</h2>
          <p className="text-primary-100 mb-6">
            Complete the Google Sheets integration to start collecting demo requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/DEMO_BOOKING_SETUP.md"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Setup Instructions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open('https://sheets.google.com', '_blank')
                }
              }}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center space-x-2"
            >
              <span>Open Google Sheets</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              ← Back to Homepage
            </Link>
            <Link
              href="/dashboard"
              className="text-primary-600 hover:text-primary-700 underline"
            >
              Go to Dashboard →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TestDemoPage

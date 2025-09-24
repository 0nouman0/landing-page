'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Star, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'

export default function PricingPage() {
  // Handle anchor scrolling on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
      }
    }
  }, [])
  const plans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small legal teams getting started with AI contract review',
      features: [
        'Up to 50 contracts/month',
        'Basic AI analysis',
        'PDF upload & export',
        'Email support',
        'Standard templates',
        '2 team members'
      ],
      limitations: [
        'Advanced analytics',
        'Custom integrations',
        'Priority support',
        'Custom templates'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 149,
      period: 'month',
      description: 'Ideal for growing law firms and legal departments',
      features: [
        'Up to 500 contracts/month',
        'Advanced AI analysis',
        'Real-time collaboration',
        'Priority support',
        'Custom templates',
        '10 team members',
        'Advanced analytics',
        'API access',
        'Compliance reporting'
      ],
      limitations: [
        'White-label solution',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex needs',
      features: [
        'Unlimited contracts',
        'Custom AI training',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited team members',
        'Advanced security',
        'SLA guarantees',
        'On-premise deployment',
        'Custom workflows'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What happens if I exceed my contract limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or purchase additional contract credits.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start.'
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes, annual plans receive a 20% discount. Enterprise customers can discuss custom pricing with our sales team.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We\'re SOC 2 compliant with bank-grade encryption, regular security audits, and GDPR compliance. Your data is always secure.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
  <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lobster-two-regular">
              Simple, Transparent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your legal team. Start with a free trial, 
              scale as you grow, and get enterprise features when you need them.
            </p>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('plans')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              >
                View Plans
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('features')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              >
                Enterprise Features
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('faq')
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              >
                FAQ
              </motion.button>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className="text-gray-600">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
              </div>
              <span className="text-gray-600">Annual</span>
              <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="plans" className="py-16">
  <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary-500 shadow-xl scale-105' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center space-x-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="features" className="py-16 bg-gray-50">
  <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get advanced capabilities designed for large organizations with complex legal workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Custom AI Training', description: 'Train AI models on your specific contract types and legal requirements' },
              { icon: Zap, title: 'White-Label Solution', description: 'Fully branded platform with your company logo and colors' },
              { icon: Zap, title: 'Dedicated Support', description: '24/7 priority support with dedicated account manager' },
              { icon: Zap, title: 'Advanced Security', description: 'SOC 2 Type II, HIPAA compliance, and custom security controls' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                {React.createElement(feature.icon, { className: "w-12 h-12 text-primary-600 mb-4" })}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Contract Review?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven contract analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors duration-200"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  )
}

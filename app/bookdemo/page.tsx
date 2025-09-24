"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Mail, Phone, User, Send, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const company = String(data.get('company') || '').trim()
    const email = String(data.get('email') || '').trim()

    const newErrors: Record<string, string> = {}
    if (!name) newErrors.name = 'Please enter your full name.'
    if (!company) newErrors.company = 'Please enter your company.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    // TODO: Wire up to your backend or a service like Formspree/Resend.
    setSubmitted(true)
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />

      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lobster-two-regular">
            Book a Demo Call
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us a bit about your team and what you want to achieve. We’ll reach out to confirm a time and tailor the demo to your needs.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center"
          >
            <div className="mx-auto mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Request received</h2>
            <p className="text-gray-600 mb-6">Thanks! We’ll be in touch shortly to book your demo.</p>
            <div className="flex justify-center gap-3">
              <Link href="/" className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600">Back to Home</Link>
              <Link href="/" className="px-5 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700">Explore Product</Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      required
                      name="name"
                      aria-invalid={!!errors.name}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Jane Doe"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-red-500">*</span></label>
                  <input
                    required
                    name="company"
                    aria-invalid={!!errors.company}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Acme Corp"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      name="email"
                      aria-invalid={!!errors.email}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="you@company.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input name="phone" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input type="date" name="date" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input type="time" name="time" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">What would you like to focus on?</label>
                <textarea name="message" rows={4} className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Briefly describe your use case" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center gap-2 shadow-md">
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
                <span className="text-xs text-gray-500">By submitting, you agree to our <Link href="/privacy" className="underline hover:text-primary-600">Privacy Policy</Link>.</span>
              </div>
            </motion.form>

            {/* Side panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What’s included in the demo</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Tailored walkthrough for your use case</li>
                <li>Live policy and contract analysis showcase</li>
                <li>Security and compliance Q&A</li>
                <li>Pricing and rollout recommendations</li>
              </ul>
              <div className="mt-6 text-sm text-gray-500">
                Prefer email? Contact us at <a href="mailto:hello@poligap.com" className="text-primary-600 underline">hello@poligap.com</a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

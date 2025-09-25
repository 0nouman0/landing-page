'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { ArrowRight, ArrowLeft, Calendar, Clock, Mail, Phone, User, Building, CheckCircle, X, Briefcase, Hash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Layout from '@/components/Layout'

const BookDemoPage = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    focusArea: '',
    domain: '',
    useCases: [] as string[],
    documentCount: ''
  })

  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const steps = [
    { id: 'personal', title: 'Personal Info', subtitle: 'Tell us about yourself', fields: ['fullName', 'company', 'email', 'phone'] },
    { id: 'scheduling', title: 'Work Info', subtitle: 'When would you like to meet?', fields: ['preferredDate', 'preferredTime'] },
    { id: 'business', title: 'Use Case Info', subtitle: 'Help us understand your needs', fields: ['focusArea', 'domain', 'useCases', 'documentCount'] },
    { id: 'review', title: 'Review', subtitle: 'Confirm your details', fields: [] }
  ]

  // Populate email and name from Clerk user data
  React.useEffect(() => {
    if (user && isLoaded) {
      setFormData(prev => ({
        ...prev,
        fullName: user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.primaryEmailAddress?.emailAddress || ''
      }))
    }
  }, [user, isLoaded])

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const focusOptions = [
    'Contract Analysis & Review',
    'Compliance Monitoring',
    'Risk Assessment',
    'Document Automation',
    'Legal Workflow Optimization',
    'Enterprise Integration',
    'Security & Data Protection',
    'Custom AI Training'
  ]

  const domainOptions = [
    'Legal Services',
    'Financial Services',
    'Healthcare',
    'Insurance',
    'Real Estate',
    'Government',
    'Education',
    'Technology',
    'Manufacturing',
    'Retail',
    'Other'
  ]

  const useCaseOptions = [
    'Contract Review & Analysis',
    'Legal Document Processing',
    'Compliance Documentation',
    'Risk Assessment Reports',
    'Regulatory Filing',
    'Due Diligence',
    'Policy Documentation',
    'Audit Trail Management',
    'Legal Research',
    'Document Classification'
  ]

  const documentCountOptions = [
    '1-100 documents/month',
    '101-500 documents/month',
    '501-1,000 documents/month',
    '1,001-5,000 documents/month',
    '5,001-10,000 documents/month',
    '10,000+ documents/month'
  ]

  const validateStep = (stepIndex: number) => {
    const newErrors: {[key: string]: string} = {}
    const currentStepFields = steps[stepIndex].fields

    currentStepFields.forEach(field => {
      if (field === 'fullName' && !formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required'
      }
      if (field === 'company' && !formData.company.trim()) {
        newErrors.company = 'Company name is required'
      }
      if (field === 'email') {
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
      }
      if (field === 'phone' && formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleUseCaseChange = (useCase: string) => {
    setFormData(prev => ({
      ...prev,
      useCases: prev.useCases.includes(useCase)
        ? prev.useCases.filter(uc => uc !== useCase)
        : [...prev.useCases, useCase]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all steps before submission
    let allValid = true
    for (let i = 0; i < steps.length - 1; i++) {
      if (!validateStep(i)) {
        allValid = false
        break
      }
    }
    
    if (!allValid) {
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Submit to Google Sheets
      // This will be implemented when you provide the sheet credentials
      const response = await fetch('/api/submit-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: user?.id,
          submittedAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error appropriately
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSkip = () => {
    router.push('/')
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    router.push('/sign-in?redirect_url=/book')
    return null
  }

  // Step Components
  const renderPersonalInfo = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative group">
          <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.fullName ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              errors.fullName 
                ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500 text-red-900' 
                : 'bg-white text-gray-900 placeholder-gray-500 hover:border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
        </div>
        {errors.fullName && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center space-x-1"
          >
            <span className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">!</span>
            <span>{errors.fullName}</span>
          </motion.p>
        )}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Company *
        </label>
        <div className="relative group">
          <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.company ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              errors.company 
                ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500 text-red-900' 
                : 'bg-white text-gray-900 placeholder-gray-500 hover:border-gray-300'
            }`}
            placeholder="Enter your company name"
          />
        </div>
        {errors.company && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center space-x-1"
          >
            <span className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">!</span>
            <span>{errors.company}</span>
          </motion.p>
        )}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email *
        </label>
        <div className="relative group">
          <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.email ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              errors.email 
                ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500 text-red-900' 
                : 'bg-white text-gray-900 placeholder-gray-500 hover:border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center space-x-1"
          >
            <span className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">!</span>
            <span>{errors.email}</span>
          </motion.p>
        )}
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <div className="relative group">
          <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.phone ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              errors.phone 
                ? 'border-red-300 bg-red-50 focus:ring-red-500 focus:border-red-500 text-red-900' 
                : 'bg-white text-gray-900 placeholder-gray-500 hover:border-gray-300'
            }`}
            placeholder="Enter your phone number"
          />
        </div>
        {errors.phone && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-600 flex items-center space-x-1"
          >
            <span className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">!</span>
            <span>{errors.phone}</span>
          </motion.p>
        )}
      </motion.div>
    </div>
  )

  const renderScheduling = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Date
        </label>
        <div className="relative group">
          <Calendar className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.preferredDate ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-300"
          />
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Preferred Time
        </label>
        <div className="relative group">
          <Clock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.preferredTime ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-300 appearance-none"
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </motion.div>
    </div>
  )

  const renderBusinessDetails = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          What would you like to focus on?
        </label>
        <select
          name="focusArea"
          value={formData.focusArea}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-300"
        >
          <option value="">Select your primary focus area</option>
          {focusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          What is your domain?
        </label>
        <div className="relative group">
          <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.domain ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <select
            name="domain"
            value={formData.domain}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-300 appearance-none"
          >
            <option value="">Select your industry domain</option>
            {domainOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Number of documents processed monthly
        </label>
        <div className="relative group">
          <Hash className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            formData.documentCount ? 'text-primary-500' : 'text-gray-400'
          }`} />
          <select
            name="documentCount"
            value={formData.documentCount}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white text-gray-900 hover:border-gray-300 appearance-none"
          >
            <option value="">Select document volume</option>
            {documentCountOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          What are your use cases? (Select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-40 overflow-y-auto border border-gray-200 rounded-xl p-4">
          {useCaseOptions.map((useCase) => (
            <label key={useCase} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <input
                type="checkbox"
                checked={formData.useCases.includes(useCase)}
                onChange={() => handleUseCaseChange(useCase)}
                className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700">{useCase}</span>
            </label>
          ))}
        </div>
      </motion.div>
    </div>
  )

  const renderReview = () => (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
          <div className="space-y-3">
            <div className="text-gray-700"><span className="font-medium text-gray-900">Name:</span> {formData.fullName}</div>
            <div className="text-gray-700"><span className="font-medium text-gray-900">Company:</span> {formData.company}</div>
            <div className="text-gray-700"><span className="font-medium text-gray-900">Email:</span> {formData.email}</div>
            {formData.phone && <div className="text-gray-700"><span className="font-medium text-gray-900">Phone:</span> {formData.phone}</div>}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduling</h3>
          <div className="space-y-3">
            {formData.preferredDate && <div className="text-gray-700"><span className="font-medium text-gray-900">Date:</span> {formData.preferredDate}</div>}
            {formData.preferredTime && <div className="text-gray-700"><span className="font-medium text-gray-900">Time:</span> {formData.preferredTime}</div>}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {formData.focusArea && <div className="text-gray-700"><span className="font-medium text-gray-900">Focus Area:</span> {formData.focusArea}</div>}
            {formData.domain && <div className="text-gray-700"><span className="font-medium text-gray-900">Domain:</span> {formData.domain}</div>}
            {formData.documentCount && <div className="text-gray-700"><span className="font-medium text-gray-900">Document Volume:</span> {formData.documentCount}</div>}
          </div>
          {formData.useCases.length > 0 && (
            <div>
              <div className="font-medium text-gray-900 mb-2">Use Cases:</div>
              <div className="flex flex-wrap gap-2">
                {formData.useCases.map((useCase) => (
                  <span key={useCase} className="bg-primary-100 text-primary-700 px-2 py-1 rounded-lg text-sm">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <Layout showFooter={true}>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Skip Button - Outside Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex justify-end">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleSkip}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 text-sm shadow-sm border border-gray-200"
            >
              <span>Skip, I&apos;ll do it later</span>
              <X className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest. We&apos;ll reach out within 24 hours to confirm your demo time.
              </p>
              <Link
                href="/dashboard"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Header Section */}
              <div className="px-8 md:px-12 pt-8 pb-6 border-b border-gray-100">
                <div className="text-center">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  >
                    {steps[currentStep].title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 text-base"
                  >
                    {steps[currentStep].subtitle}
                  </motion.p>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Form Content */}
              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[300px] flex flex-col justify-center"
                  >
                    {currentStep === 0 && renderPersonalInfo()}
                    {currentStep === 1 && renderScheduling()}
                    {currentStep === 2 && renderBusinessDetails()}
                    {currentStep === 3 && renderReview()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="bg-white px-8 md:px-12 py-6 flex justify-between items-center border-t border-gray-100">
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  whileHover={{ scale: currentStep === 0 ? 1 : 1.02 }}
                  whileTap={{ scale: currentStep === 0 ? 1 : 0.98 }}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </motion.button>

                <div className="text-sm text-gray-500 font-medium">
                  {currentStep + 1} of {steps.length}
                </div>

                {currentStep === steps.length - 1 ? (
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={nextStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BookDemoPage

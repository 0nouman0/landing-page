"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  FileCheck, 
  FileEdit, 
  Database, 
  Brain, 
  Activity,
  BarChart3,
  Shield
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: 'Policy Analyser',
      description: 'Intelligent policy analysis with automated compliance checking, gap identification, and regulatory alignment assessment.',
      color: 'bg-primary-100 text-primary-600',
      image: 'https://picsum.photos/seed/policy/640/360',
      details: 'Analyze policies for compliance gaps, regulatory alignment, and risk exposure. Generate actionable insights and suggested remediations to keep documents up-to-date with current standards.'
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'Comprehensive contract analysis with clause identification, risk assessment, and compliance verification.',
      color: 'bg-secondary-100 text-secondary-600',
      image: 'https://picsum.photos/seed/contract/640/360',
      details: 'Automatically identify key clauses, risky terms, and missing provisions. Compare against playbooks and ensure contracts adhere to internal and external requirements.'
    },
    {
      icon: FileEdit,
      title: 'Policy Generator',
      description: 'AI-powered policy creation with customizable templates, regulatory compliance, and automated formatting.',
      color: 'bg-accent-100 text-accent-600',
      image: 'https://picsum.photos/seed/generator/640/360',
      details: 'Create compliant policies from curated templates, customized to your organization. Auto-formatting and clause recommendations speed up publication.'
    },
    {
      icon: Database,
      title: 'Rulebase',
      description: 'Centralized rule management system with version control, approval workflows, and automated updates.',
      color: 'bg-green-100 text-green-600',
      image: 'https://picsum.photos/seed/rulebase/640/360',
      details: 'Manage regulatory rules and internal controls in one place with versioning, approval workflows, and automatic notifications for changes.'
    },
    {
      icon: Brain,
      title: 'Custom Knowledge Analysis',
      description: 'Tailored knowledge base analysis with domain-specific insights and intelligent recommendations.',
      color: 'bg-purple-100 text-purple-600',
      image: 'https://picsum.photos/seed/knowledge/640/360',
      details: 'Bring your own knowledge base for domain-tuned results. The system learns from your corpus to provide accurate, contextual insights.'
    },
    {
      icon: Activity,
      title: 'Audit Log Tracker',
      description: 'Comprehensive audit trail monitoring with real-time tracking and compliance reporting capabilities.',
      color: 'bg-blue-100 text-blue-600',
      image: 'https://picsum.photos/seed/audit/640/360',
      details: 'Track all compliance activities with immutable logs. Produce audit-ready reports and monitor changes in real time.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Interactive dashboards with compliance metrics, risk visualization, and performance analytics.',
      color: 'bg-indigo-100 text-indigo-600',
      image: 'https://picsum.photos/seed/analytics/640/360',
      details: 'Visualize compliance KPIs and risk trends. Drill down into departments, documents, and themes to uncover insights.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Legal-grade security with encryption, access controls, and compliance with industry standards.',
      color: 'bg-pink-100 text-pink-600',
      image: 'https://picsum.photos/seed/security/640/360',
      details: 'Zero-trust architecture, encryption in transit and at rest, SSO, and fine-grained access controls to protect sensitive legal data.'
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

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const selected = selectedIndex !== null ? features[selectedIndex] : null

  // Simple, responsive SVG illustration for the card header
  const CardIllustration = ({ idx, title }: { idx: number; title: string }) => {
    const g1 = ['#eef2ff', '#ecfeff', '#f0fdf4', '#fff7ed', '#fdf2f8', '#eff6ff', '#f5f3ff', '#fefce8'][idx % 8]
    const g2 = ['#c7d2fe', '#a5f3fc', '#86efac', '#fed7aa', '#fbcfe8', '#bfdbfe', '#ddd6fe', '#fde68a'][idx % 8]
    const id = `grad-${idx}`
    return (
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={g1} />
            <stop offset="100%" stopColor={g2} />
          </linearGradient>
          <pattern id={`dots-${idx}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="rgba(0,0,0,0.06)" />
          </pattern>
        </defs>
        <rect width="640" height="360" fill={`url(#${id})`} />
        <rect width="640" height="360" fill={`url(#dots-${idx})`} />
        <g opacity="0.15">
          <circle cx="520" cy="80" r="60" fill="#000" />
          <rect x="60" y="220" width="140" height="20" rx="10" fill="#000" />
          <rect x="60" y="250" width="220" height="20" rx="10" fill="#000" />
          <rect x="60" y="280" width="180" height="20" rx="10" fill="#000" />
        </g>
        <text x="60" y="120" fill="rgba(0,0,0,0.35)" fontSize="28" fontWeight="700">
          {title}
        </text>
      </svg>
    )
  }

  return (
    <section id="features" className="py-20 bg-white">
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
            Comprehensive Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Legal & Compliance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for legal document analysis, compliance monitoring, and risk assessment 
            with cutting-edge AI technology and legal-grade security.
          </p>
        </motion.div>

        {/* Features Grid as cards (responsive: 1/2/3/4 columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Illustration header */}
              <div className="relative rounded-t-2xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <CardIllustration idx={index} title={feature.title} />
                </div>
                {/* Icon badge */}
                <div className={`absolute left-4 -bottom-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} shadow-md` }>
                  {React.createElement(feature.icon, { className: 'w-6 h-6' })}
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 lobster-two-regular">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Skeletal card: More features coming soon */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white rounded-2xl border border-dashed border-gray-300 overflow-hidden"
          >
            <div className="relative rounded-t-2xl overflow-hidden">
              <div className="aspect-[16/9] bg-gray-100 animate-pulse" />
            </div>
            <div className="p-6">
              <div className="h-6 w-2/3 bg-gray-200 rounded mb-3 animate-pulse" />
              <div className="h-4 w-full bg-gray-100 rounded mb-2 animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
              <div className="mt-4 inline-flex items-center text-gray-500 text-sm">
                More features coming soon
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature details popup */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-modal="true"
              role="dialog"
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIndex(null)}
              />

              {/* Dialog */}
              <motion.div
                className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="relative">
                  <div className="relative aspect-[16/9]">
                    {selected && <CardIllustration idx={selectedIndex!} title={selected.title} />}
                  </div>
                  {selected && (
                    <div className={`absolute left-4 -bottom-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${selected.color} shadow-md` }>
                      {React.createElement(selected.icon, { className: 'w-6 h-6' })}
                    </div>
                  )}
                </div>
                {selected && (
                  <div className="p-6 pt-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 lobster-two-regular mb-2">{selected.title}</h3>
                        <p className="text-gray-700 mb-2">{selected.description}</p>
                      </div>
                      <button
                        aria-label="Close"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setSelectedIndex(null)}
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {selected.details}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FeaturesSection

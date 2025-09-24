'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Shield,
  Target,
  Zap
} from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Faster',
      subtitle: 'Processing',
      description: 'Streamline your document review workflow',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Better',
      subtitle: 'Accuracy',
      description: 'AI-powered analysis reduces manual errors',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Time',
      subtitle: 'Savings',
      description: 'Focus on high-value work, not repetitive tasks',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Cost',
      subtitle: 'Efficiency',
      description: 'Optimize your operational expenses',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const chartData = {
    labels: ['Processing Speed', 'Accuracy', 'Time Efficiency', 'Cost Optimization'],
    datasets: [{
      label: 'Improvement Areas',
      data: [85, 92, 78, 70],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(249, 115, 22, 0.8)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(139, 92, 246, 1)',
        'rgba(249, 115, 22, 1)'
      ],
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    }]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Transform Your Document Workflow',
        font: {
          size: 18,
          weight: 'bold' as const
        },
        color: '#1f2937'
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `Score: ${context.parsed.y}`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value
          },
          color: '#6b7280',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        title: {
          display: true,
          text: 'Performance Score',
          color: '#374151',
          font: {
            size: 14,
            weight: 'bold' as const
          }
        }
      },
      x: {
        ticks: {
          color: '#6b7280',
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

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
            Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Document Workflow
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact of AI-powered document analysis on your team&apos;s efficiency, 
            accuracy, and productivity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(benefit.icon, { className: "w-6 h-6" })}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {benefit.subtitle}
                  </div>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="h-96">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Faster Analysis Speed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-2">99.2%</div>
            <div className="text-gray-600">AI Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600 mb-2">85%</div>
            <div className="text-gray-600">Time Reduction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection

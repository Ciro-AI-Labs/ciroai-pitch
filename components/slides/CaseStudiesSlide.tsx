'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

export default function CaseStudiesSlide() {
  const [animatedRevenue, setAnimatedRevenue] = useState(2185)

  useEffect(() => {
    // Animate revenue counter
    const timer = setInterval(() => {
      setAnimatedRevenue(prev => prev + Math.floor(Math.random() * 30) + 15)
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slide-container">
      <div className="slide-content">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            From Chaos to Control
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            In Weeks, Not Years
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Wrong charges. Quality slips. Overproduction. Wrong routes.{' '}
            <span className="text-red-400 font-semibold">These aren't edge cases.</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text font-semibold">They're everyday headaches that CIRO solves.</span>
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {[
            {
              industry: 'Food Processing',
              problem: 'Quality issues slip through',
              solution: 'Real-time defect detection',
              impact: '24hrs → 3min',
              metric: 'Detection Time',
              icon: '🍕',
              color: 'border-green-500/30 bg-green-500/10'
            },
            {
              industry: 'Digital Lending',
              problem: 'Fraud goes undetected',
              solution: 'Pattern recognition alerts',
              impact: '$200K+',
              metric: 'Fraud Blocked',
              icon: '💳',
              color: 'border-blue-500/30 bg-blue-500/10'
            },
            {
              industry: 'Energy Utilities',
              problem: 'Reactive customer support',
              solution: 'Predictive analytics',
              impact: '8%',
              metric: 'Reduced Support Calls',
              icon: '⚡',
              color: 'border-purple-500/30 bg-purple-500/10'
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className={`${study.color} border rounded-lg p-4`}
            >
              {/* Industry Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{study.icon}</span>
                <h3 className="text-white font-bold text-sm">{study.industry}</h3>
              </div>

              {/* Problem → Solution Flow */}
              <div className="space-y-3 mb-4">
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3">
                  <div className="text-xs text-red-400 font-semibold mb-1">PROBLEM</div>
                  <div className="text-xs text-gray-200">{study.problem}</div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-3">
                  <div className="text-xs text-green-400 font-semibold mb-1">SOLUTION</div>
                  <div className="text-xs text-gray-200">{study.solution}</div>
                </div>
              </div>

              {/* Impact Metric */}
              <div className="bg-dark-700/50 border border-dark-600 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">{study.metric}</div>
                <div className="text-2xl font-bold text-white mb-1">
                  {study.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-dark-800/40 border border-dark-600 rounded-xl p-6"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">
                Measurable ROI in{' '}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">under 6 months</span>
              </h3>
            </div>
            
            <p className="text-base text-gray-300 mb-6">
              For most teams, it's the first time their data actually talks back.
            </p>

            {/* Live ROI Counter */}
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 inline-block">
              <div className="text-sm text-gray-400 mb-2">Real-time value generated this session:</div>
              <div className="text-3xl font-bold text-green-400 font-mono">
                ${animatedRevenue.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
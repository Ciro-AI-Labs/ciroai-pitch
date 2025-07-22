'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Zap, BarChart3 } from 'lucide-react'

export default function TractionSlide() {
  const [currentMRR, setCurrentMRR] = useState(0)

  useEffect(() => {
    // Animate to current MRR (June: $17K)
    const targetMRR = 17000
    const timer = setInterval(() => {
      setCurrentMRR(prev => {
        if (prev < targetMRR) {
          return prev + 300
        }
        clearInterval(timer)
        return targetMRR
      })
    }, 50)

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
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Growing Fast,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
            Scaling Smart
          </h2>
          
          {/* Pre-Launch Note */}
          <div className="bg-gradient-to-r from-ciro-600/20 via-orange-600/20 to-yellow-600/20 border border-ciro-500/30 rounded-lg px-4 py-2 max-w-3xl mx-auto">
            <p className="text-sm text-gray-200">
              <span className="text-ciro-400 font-semibold">Pre-Launch Revenue</span> • 
              Enterprise Beta Users • Subscription-Only • 
              <span className="text-orange-400 font-semibold"> Lifelong Client Relationships</span>
            </p>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6"
        >
          <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-3 text-center">
            <DollarSign className="w-6 h-6 text-ciro-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-ciro-400 mb-1 font-mono">
              ${currentMRR.toLocaleString()}
            </div>
            <p className="text-gray-300 text-xs">Monthly Recurring Revenue</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400 mb-1">7+</div>
            <p className="text-gray-300 text-xs">Active Clients</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 text-center">
            <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 mb-1">$100K+</div>
            <p className="text-gray-300 text-xs">Integration Contracts</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-3 text-center">
            <Zap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
            <p className="text-gray-300 text-xs">Data Connectors</p>
          </div>
        </motion.div>

        {/* Growth Chart - Simplified Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-dark-700/30 to-dark-800/30 border border-dark-600 rounded-xl p-6 mb-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
            <BarChart3 className="w-6 h-6 text-ciro-400" />
            Revenue Growth Trajectory
          </h3>
          
          {/* Simple Visual Chart */}
          <div className="relative h-32 bg-dark-900/30 rounded-lg p-4">
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 h-full">
              {/* Feb */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-gray-600 h-1 rounded-t opacity-50"></div>
                <span className="text-xs text-gray-400 mt-2">Feb</span>
                <span className="text-xs text-gray-500">Building</span>
              </div>
              {/* Mar */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-gradient-to-t from-ciro-600 to-ciro-400 h-6 rounded-t"></div>
                <span className="text-xs text-gray-400 mt-2">Mar</span>
                <span className="text-xs text-ciro-400">$4K</span>
              </div>
              {/* Apr */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-gradient-to-t from-orange-600 to-orange-400 h-12 rounded-t"></div>
                <span className="text-xs text-gray-400 mt-2">Apr</span>
                <span className="text-xs text-orange-400">$8K</span>
              </div>
              {/* May */}
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-gradient-to-t from-yellow-600 to-yellow-400 h-20 rounded-t"></div>
                <span className="text-xs text-gray-400 mt-2">May</span>
                <span className="text-xs text-yellow-400">$13K</span>
              </div>
                             {/* Jun */}
               <div className="flex flex-col items-center flex-1">
                 <div className="w-full bg-gradient-to-t from-green-600 to-green-400 h-24 rounded-t glow"></div>
                 <span className="text-xs text-gray-400 mt-2">Jun</span>
                 <span className="text-xs text-green-400 font-bold">$17K</span>
               </div>
                             {/* Jul (Projected) */}
               <div className="flex flex-col items-center flex-1">
                 <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 h-28 rounded-t opacity-60 border-2 border-purple-400 border-dashed"></div>
                 <span className="text-xs text-gray-400 mt-2">Jul</span>
                 <span className="text-xs text-purple-400 font-bold">$25K*</span>
               </div>
            </div>
            
            {/* Growth Arrow */}
            <div className="absolute top-2 right-2">
              <div className="flex items-center gap-1 text-green-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">↗ 325%</span>
              </div>
            </div>
            
            {/* Projected Note */}
            <div className="absolute top-2 left-2">
              <span className="text-xs text-purple-400">*Projected</span>
            </div>
          </div>
        </motion.div>

        {/* Business Model - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-4 text-center">
            <div className="text-ciro-400 font-semibold mb-1">SaaS Model</div>
            <div className="text-xl font-bold text-white mb-1">$6K - $120K</div>
            <p className="text-gray-300 text-xs">Annual subscription tiers</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <div className="text-blue-400 font-semibold mb-1">ROI Timeline</div>
            <div className="text-xl font-bold text-white mb-1">{"< 6 months"}</div>
            <p className="text-gray-300 text-xs">Measurable returns</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-green-400 font-semibold mb-1">Growth Rate</div>
            <div className="text-xl font-bold text-green-400 mb-1">
              325% MoM
            </div>
            <p className="text-gray-300 text-xs">Mar to Jun growth</p>
          </div>
        </motion.div>

        {/* Bottom Quote - Compact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-lg text-gray-300 max-w-4xl mx-auto"
        >
          "For the cost of a smart camera system—
          <span className="text-ciro-400 font-semibold"> CIRO gives you two top-tier engineers working full-time.</span>"
        </motion.p>
      </div>
    </div>
  )
} 
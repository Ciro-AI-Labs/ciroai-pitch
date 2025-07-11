'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Shield, Clock, Target, Eye } from 'lucide-react'

export default function WhyNowSlide() {
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
            Why CIRO, Why Now
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            AI-native infrastructure isn't a future trend—
            <span className="text-ciro-400 font-semibold"> it's here.</span>
          </p>
        </motion.div>

        {/* Industry Pressures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            The Perfect Storm
          </h3>
          
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-3 text-center">
              <TrendingUp className="w-5 h-5 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-red-400 mb-1">Inflation</div>
              <p className="text-xs text-gray-300">Rising costs demand efficiency</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Critical</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-lg p-3 text-center">
              <Users className="w-5 h-5 text-orange-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-orange-400 mb-1">Talent Shortages</div>
              <p className="text-xs text-gray-300">Skilled operators are scarce</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Critical</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/30 rounded-lg p-3 text-center">
              <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-yellow-400 mb-1">Energy Volatility</div>
              <p className="text-xs text-gray-300">Real-time optimization needed</p>
              <div className="mt-2 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">High</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-lg p-3 text-center">
              <Shield className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-purple-400 mb-1">Regulatory</div>
              <p className="text-xs text-gray-300">Constant monitoring required</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Critical</div>
            </div>
          </div>
        </motion.div>

        {/* Industry Can't Wait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-xl p-4 mb-6"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-ciro-400" />
            Industry Can't Wait
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Eye className="w-6 h-6 text-ciro-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Visibility Now</div>
              <p className="text-xs text-gray-300">Can't afford blind spots</p>
            </div>
            
            <div className="text-center">
              <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Decisions Now</div>
              <p className="text-xs text-gray-300">Can't wait hours for reports</p>
            </div>
            
            <div className="text-center">
              <Target className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Action Now</div>
              <p className="text-xs text-gray-300">Real-time response standard</p>
            </div>
          </div>
        </motion.div>

        {/* Our Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-4"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            We've Been Here Before
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-blue-400 mb-1">Kraken</div>
              <div className="text-xs text-white mb-2">Real-time Trading</div>
              <p className="text-xs text-gray-300">Millions of transactions</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-green-400 mb-1">Industrial</div>
              <div className="text-xs text-white mb-2">Vision Systems</div>
              <p className="text-xs text-gray-300">Harsh environments</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-purple-400 mb-1">Multi-sector</div>
              <div className="text-xs text-white mb-2">Compliance</div>
              <p className="text-xs text-gray-300">Automated across industries</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            "CIRO brings that same{' '}
            <span className="text-ciro-400 font-semibold">speed and precision</span>{' '}
            to industrial intelligence.{' '}
            <span className="text-blue-400 font-semibold">NEC X</span>{' '}
            is the perfect launch partner."
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
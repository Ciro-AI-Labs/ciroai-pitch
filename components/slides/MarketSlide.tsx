'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Globe, Factory, Zap, Eye, Cpu, Target } from 'lucide-react'

export default function MarketSlide() {
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
            A $300B Shift—
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-3">
            And We're at the Center
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            The global Industry 4.0 transformation is{' '}
            <span className="text-red-400 font-semibold">massive—and urgent.</span>
          </p>
        </motion.div>

        {/* Market Data - Simple Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-dark-700/30 to-dark-800/30 border border-dark-600 rounded-xl p-6 mb-6"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Market Opportunity
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {/* TAM */}
            <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-purple-400 font-bold mb-1">TAM</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">$300B+</div>
              <div className="text-xs text-white mb-1">Total Market</div>
              <p className="text-xs text-gray-300">Industry 4.0 by 2030</p>
            </div>

            {/* SAM */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-blue-400 font-bold mb-1">SAM</div>
              <div className="text-2xl font-bold text-blue-400 mb-1">$45B</div>
              <div className="text-xs text-white mb-1">Serviceable</div>
              <p className="text-xs text-gray-300">AI & streaming</p>
            </div>

            {/* SOM */}
            <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-ciro-400 font-bold mb-1">SOM</div>
              <div className="text-2xl font-bold text-ciro-400 mb-1">$1.2B</div>
              <div className="text-xs text-white mb-1">Immediate</div>
              <p className="text-xs text-gray-300">2,500+ operators</p>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-xl p-4 mb-6"
        >
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            The Next Trillion-Dollar Industrial Layer
          </h3>
          <p className="text-sm text-gray-300 text-center max-w-3xl mx-auto">
            CIRO sits at the foundation of three long-term pillars that will define 
            the next evolution of industrial intelligence
          </p>
        </motion.div>

        {/* Three Pillars - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {/* Overlay Systems */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-400 font-bold">2025-2026</span>
            </div>
            <div className="text-sm font-bold text-blue-400 mb-2">Overlay Systems</div>
            <p className="text-xs text-gray-300">Project real-time intelligence into physical world</p>
          </div>

          {/* Powered Robotics */}
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-bold">2026-2027</span>
            </div>
            <div className="text-sm font-bold text-green-400 mb-2">Powered Robotics</div>
            <p className="text-xs text-gray-300">Machines that not only move but think</p>
          </div>

          {/* Global Edge Mesh */}
          <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-400 font-bold">2027-2028</span>
            </div>
            <div className="text-sm font-bold text-purple-400 mb-2">Global Edge Mesh</div>
            <p className="text-xs text-gray-300">Distributed, self-learning network</p>
          </div>
        </motion.div>

        {/* Impact Metrics - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-red-400 mb-1">$1T</div>
            <p className="text-xs text-gray-300">Operational Waste Reduction</p>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-orange-400 mb-1">$500B</div>
            <p className="text-xs text-gray-300">Manual Labor Automation</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-green-400 mb-1">$300B+</div>
            <p className="text-xs text-gray-300">Smart Infrastructure Rollouts</p>
          </div>
        </motion.div>

        {/* Bottom Statement - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            "CIRO is building the{' '}
            <span className="text-purple-400 font-semibold">real-time operating system</span>{' '}
            for the industrial world—positioning us to lead a{' '}
            <span className="text-ciro-400 font-semibold">trillion-dollar evolution.</span>"
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
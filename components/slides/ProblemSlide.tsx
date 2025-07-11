'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react'

export default function ProblemSlide() {
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
            Where Industry
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Breaks Down
          </h2>
        </motion.div>

        {/* Key Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every factory has the same problem: <span className="text-orange-400 font-semibold">too much data, not enough clarity.</span>
            <br />
            Sensors firing, cameras recording, ERPs logging thousands of events—
            <br />
            <span className="text-red-400 font-semibold">yet most decisions still happen on gut instinct.</span>
          </p>
        </motion.div>

        {/* Problem Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: Clock, stat: '60%', label: 'of frontline actions are manual', color: 'text-red-400' },
            { icon: TrendingDown, stat: '90%', label: 'of data never gets seen in time', color: 'text-orange-400' },
            { icon: AlertTriangle, stat: '24hr', label: 'average detection delay', color: 'text-yellow-400' },
            { icon: DollarSign, stat: '$5M', label: 'yearly hidden inefficiencies', color: 'text-ciro-400' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="bg-dark-800/60 border border-dark-600 rounded-lg p-4 text-center"
            >
              <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${item.color} mb-1`}>
                {item.stat}
              </div>
              <div className="text-xs text-gray-400 leading-tight">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Current Reality Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-dark-800/40 border border-dark-600 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            The Current Reality
          </h3>
          
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {/* Data Sources */}
            <div className="flex flex-col gap-3">
              {[
                { name: 'Sensors', color: 'bg-blue-500' },
                { name: 'Cameras', color: 'bg-green-500' },
                { name: 'ERPs', color: 'bg-purple-500' }
              ].map((source, index) => (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className={`${source.color} rounded-lg px-3 py-2 text-white text-sm font-medium text-center min-w-[80px]`}
                >
                  {source.name}
                </motion.div>
              ))}
            </div>

            {/* Data Flow Lines */}
            <div className="flex-1 mx-6 relative h-16">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-2 left-0 right-8 h-0.5 bg-gradient-to-r from-blue-500 to-red-500"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute top-1/2 left-0 right-8 h-0.5 bg-gradient-to-r from-green-500 to-orange-500"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute bottom-2 left-0 right-8 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-500"
              />
              
              {/* Data Jam Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring" }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="text-xs text-red-400 mt-1 text-center font-bold whitespace-nowrap">
                  DATA JAM
                </div>
              </motion.div>
            </div>

            {/* Decision Making */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              className="bg-red-600/80 rounded-lg px-3 py-2 text-center min-w-[100px]"
            >
              <div className="text-white text-sm font-bold">Decision Making</div>
              <div className="text-red-200 text-xs">Gut Instinct</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-center mt-6"
        >
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            "Teams waste hours arguing over <span className="text-orange-400 font-semibold">what actually happened</span> instead of fixing it. When
            something breaks, the first question isn't 'how do we fix it?' — it's 'who saw it first?'"
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
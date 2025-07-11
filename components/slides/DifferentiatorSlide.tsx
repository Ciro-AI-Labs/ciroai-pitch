'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, Users, Shield, CheckCircle2, X } from 'lucide-react'

export default function DifferentiatorSlide() {
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
            Built for the Real World,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Not a Whiteboard
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
            CIRO isn't a prettier dashboard. It's the{' '}
            <span className="text-transparent bg-gradient-to-r from-ciro-400 to-orange-400 bg-clip-text font-semibold">engine room</span>{' '}
            that keeps your operation running.
          </p>
        </motion.div>

        {/* CIRO vs Legacy Systems Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-800/40 border border-dark-600 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            CIRO vs Legacy Systems
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                category: 'Processing',
                ciro: 'Streaming',
                legacy: 'ETL',
                icon: Zap,
              },
              {
                category: 'Response Time',
                ciro: 'Instant',
                legacy: 'Delayed',
                icon: Clock,
              },
              {
                category: 'Decision Making',
                ciro: 'AI Agents',
                legacy: 'Analysts',
                icon: Users,
              },
              {
                category: 'Approach',
                ciro: 'Prevention',
                legacy: 'Reaction',
                icon: Shield,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-dark-700/50 border border-dark-600 rounded-lg p-4">
                  <item.icon className="w-6 h-6 text-gray-400 mx-auto mb-3" />
                  <div className="text-xs text-gray-400 mb-3">{item.category}</div>
                  
                  {/* CIRO (Good) */}
                  <div className="flex items-center justify-center gap-2 mb-2 p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold text-xs">{item.ciro}</span>
                  </div>
                  
                  {/* Legacy (Bad) */}
                  <div className="flex items-center justify-center gap-2 p-2 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <X className="w-3 h-3 text-red-400" />
                    <span className="text-red-400 text-xs">{item.legacy}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          {[
            {
              title: 'Real-Time Event Bus',
              description: 'Processes millions of events per day—Kafka + Flink + RAG working behind the scenes',
              color: 'bg-purple-500',
              icon: Zap,
            },
            {
              title: 'Plain English Queries',
              description: 'Ask any question and get back live Python or SQL results, complete with visuals',
              color: 'bg-ciro-500',
              icon: '💬',
            },
            {
              title: 'Edge Vision AI',
              description: 'Runs on edge or cloud, detecting defects, safety violations, and risks in real time',
              color: 'bg-blue-500',
              icon: '👁️',
            },
            {
              title: 'Autonomous Agents',
              description: 'Alert supervisors instantly, send updates via Slack/Teams, follow up automatically',
              color: 'bg-green-500',
              icon: '🤖',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              className="bg-dark-800/60 border border-dark-600 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  {typeof feature.icon === 'string' ? (
                    <span className="text-lg">{feature.icon}</span>
                  ) : (
                    <feature.icon className="w-5 h-5 text-white" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <p className="text-base text-gray-400 max-w-4xl mx-auto">
            "Other systems tell you what happened yesterday. CIRO tells you what's happening{' '}
            <span className="text-ciro-400 font-semibold">right now</span> — and what to do about it."
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
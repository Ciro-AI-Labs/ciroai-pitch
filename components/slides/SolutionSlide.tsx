'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Cpu, Zap, MessageSquare, Shield, Workflow } from 'lucide-react'

export default function SolutionSlide() {
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
            The Real-Time AI
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            Command Center
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
            One system that listens to all sensors, cameras, and transactions—
            <br />
            <span className="text-transparent bg-gradient-to-r from-ciro-400 to-orange-400 bg-clip-text font-semibold">and acts in real time.</span>
          </p>
        </motion.div>

        {/* CIRO Architecture - Simple Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-800/40 border border-dark-600 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {/* CIRO Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-blue-400 font-bold text-sm mb-1">CIRO Vision</h3>
              <p className="text-xs text-gray-400 max-w-24">Computer Vision Engine</p>
            </motion.div>

            {/* Connection Arrow */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex-1 mx-4 h-0.5 bg-gradient-to-r from-blue-500 to-ciro-500"
            />

            {/* CIRO Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ciro-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-white/20">
                <img
                  src="/images/ciro-white.png"
                  alt="CIRO"
                  className="w-12 h-12 object-contain"
                  style={{ filter: 'invert(1)' }}
                />
              </div>
              <h3 className="text-ciro-400 font-bold text-sm mb-1">CIRO Core</h3>
              <p className="text-xs text-gray-400">Event Processing</p>
            </motion.div>

            {/* Connection Arrow */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex-1 mx-4 h-0.5 bg-gradient-to-r from-ciro-500 to-green-500"
            />

            {/* CIRO Agents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-green-400 font-bold text-sm mb-1">CIRO Agents</h3>
              <p className="text-xs text-gray-400 max-w-24">Autonomous Decision Makers</p>
            </motion.div>
          </div>

          {/* Event Bus Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-6 pt-4 border-t border-dark-600"
          >
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-purple-400 font-bold text-sm mb-1">Event Bus</h3>
            <p className="text-xs text-gray-400">Kafka + Flink + RAG</p>
          </motion.div>
        </motion.div>

        {/* Key Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              icon: MessageSquare,
              title: 'Ask in Plain English',
              description: 'Get live Python or SQL results with charts and forecasts',
              color: 'bg-gradient-to-r from-ciro-500 to-orange-500'
            },
            {
              icon: Eye,
              title: 'Real-Time Vision',
              description: 'Detect defects, track safety, flag violations instantly',
              color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
              icon: Workflow,
              title: 'Autonomous Action',
              description: 'Alert, update, and follow-up automatically via Slack, Teams, WhatsApp',
              color: 'bg-gradient-to-r from-green-500 to-emerald-500'
            }
          ].map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 2.0 + index * 0.1 }}
              className="bg-dark-800/60 border border-dark-600 rounded-lg p-4 text-center"
            >
              <div className={`w-12 h-12 ${capability.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{capability.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-center mt-6"
        >
          <p className="text-base text-gray-400 max-w-4xl mx-auto">
            "It's like having a team of analysts and engineers working 24/7— <span className="text-ciro-400 font-semibold">except it's all
            automated, instant, and never sleeps."</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send, Camera, User, Bot, BarChart3, Map, Play } from 'lucide-react'

export default function SolutionSlide() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showDetection, setShowDetection] = useState(false)

  const chatMessages = [
    { type: 'user', content: 'Show me production efficiency by location for the last month', timestamp: '14:32' },
    { type: 'bot', content: 'I\'ll generate a geospatial analysis for you.', timestamp: '14:32' },
    { type: 'bot', content: 'SELECT location_id, AVG(efficiency_rate) as avg_efficiency, COUNT(*) as total_operations FROM production_data WHERE date >= DATE_SUB(NOW(), INTERVAL 1 MONTH) GROUP BY location_id', timestamp: '14:33', isCode: true },
    { type: 'bot', content: 'Here\'s your geospatial visualization:', timestamp: '14:33', hasChart: true }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const detectionInterval = setInterval(() => {
      setShowDetection(prev => !prev)
    }, 2000)
    return () => clearInterval(detectionInterval)
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            CIRO AI in Action
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            Live Product Demo
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            See how CIRO processes natural language, generates code, and detects real-time events
            <br />
            <span className="text-transparent bg-gradient-to-r from-ciro-400 to-orange-400 bg-clip-text font-semibold">in action across your operations.</span>
          </p>
        </motion.div>

        {/* Split Demo Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        >
          {/* Left Side - Chat Interface with SQL & Geospatial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-dark-800/60 border border-dark-600 rounded-xl p-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-5 h-5 text-ciro-400" />
              <h3 className="text-white font-bold text-lg">Natural Language → SQL & Maps</h3>
            </div>
            
            {/* Chat Messages */}
            <div className="space-y-3 mb-4 h-64 overflow-hidden">
              {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-ciro-500 text-white' 
                      : 'bg-dark-700 text-gray-200'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot className="w-4 h-4 text-ciro-400 mt-0.5" />}
                      {message.type === 'user' && <User className="w-4 h-4 text-white mt-0.5" />}
                      <div className="flex-1">
                        {message.isCode ? (
                          <div className="bg-dark-900 rounded p-2 mt-1">
                            <code className="text-xs text-green-400 font-mono">
                              {message.content}
                            </code>
                          </div>
                        ) : message.hasChart ? (
                          <div>
                            <p className="text-sm">{message.content}</p>
                            <div className="bg-dark-900 rounded p-3 mt-2 flex items-center justify-center">
                              <div className="relative w-full h-16">
                                <Map className="w-6 h-6 text-blue-400 absolute top-2 left-2" />
                                <BarChart3 className="w-6 h-6 text-green-400 absolute top-2 right-2" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded" />
                                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                                  Geospatial Production Map
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm">{message.content}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Chat Input */}
            <div className="flex items-center space-x-2 bg-dark-700 rounded-lg p-2">
              <input 
                type="text" 
                placeholder="Ask anything about your data..."
                className="flex-1 bg-transparent text-white text-sm outline-none"
                disabled
              />
              <Send className="w-4 h-4 text-gray-400" />
            </div>
          </motion.div>

          {/* Right Side - Camera with YOLO Detection */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-dark-800/60 border border-dark-600 rounded-xl p-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-5 h-5 text-green-400" />
              <h3 className="text-white font-bold text-lg">Real-Time Vision Detection</h3>
              <div className="flex-1" />
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs text-red-400">LIVE</span>
              </div>
            </div>
            
            {/* Camera Feed Simulation */}
            <div className="relative bg-black rounded-lg overflow-hidden h-72">
              {/* Background grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="border border-gray-600/30" />
                  ))}
                </div>
              </div>
              
              {/* Moving Detection Boxes */}
              <motion.div
                animate={{ 
                  x: showDetection ? [20, 180, 100] : [100, 20, 180],
                  y: showDetection ? [30, 80, 120] : [120, 30, 80]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute w-16 h-16 border-2 border-green-400 rounded"
              >
                <div className="absolute -top-6 left-0 bg-green-400 text-black text-xs px-1 rounded">
                  Person 98%
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: showDetection ? [200, 120, 250] : [250, 200, 120],
                  y: showDetection ? [60, 140, 40] : [40, 60, 140]
                }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute w-20 h-12 border-2 border-blue-400 rounded"
              >
                <div className="absolute -top-6 left-0 bg-blue-400 text-black text-xs px-1 rounded">
                  Vehicle 94%
                </div>
              </motion.div>
              
              {/* Detection Statistics */}
              <div className="absolute bottom-2 left-2 bg-black/80 rounded p-2">
                <div className="text-green-400 text-xs">✓ Motion Detected</div>
                <div className="text-blue-400 text-xs">⚡ Processing: 30 FPS</div>
                <div className="text-yellow-400 text-xs">🎯 Accuracy: 98.2%</div>
              </div>
              
              {/* Camera Info */}
              <div className="absolute top-2 right-2 bg-black/80 rounded p-2">
                <div className="text-white text-xs">Camera 01</div>
                <div className="text-gray-400 text-xs">Production Floor</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Real-Time Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              icon: MessageSquare,
              title: 'Natural Language Processing',
              description: 'Ask complex questions in plain English, get SQL, Python, and visualizations instantly',
              color: 'bg-gradient-to-r from-ciro-500 to-orange-500'
            },
            {
              icon: Camera,
              title: 'Computer Vision',
              description: 'YOLO-powered object detection with 98%+ accuracy for safety and quality monitoring',
              color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
            },
            {
              icon: Bot,
              title: 'Autonomous Agents',
              description: 'AI agents that learn, decide, and act without human intervention',
              color: 'bg-gradient-to-r from-green-500 to-emerald-500'
            }
          ].map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
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

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-4"
        >
          <p className="text-base text-white font-semibold max-w-3xl mx-auto">
            <span className="text-ciro-400">See CIRO in action.</span> From conversation to code to detection.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            One platform. Infinite possibilities. Real-time results.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
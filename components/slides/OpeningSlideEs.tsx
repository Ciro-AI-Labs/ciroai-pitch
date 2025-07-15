'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function OpeningSlideEs() {
  const [cost, setCost] = useState(11250)
  const [isVisible, setIsVisible] = useState(false)

  // Animate cost counter
  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCost(prev => prev + Math.floor(Math.random() * 50) + 25)
    }, 300)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slide-container">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-ciro-500/8 via-orange-500/6 to-red-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-blue-500/6 via-purple-500/8 to-ciro-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="slide-content relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white leading-tight">
            El Costo Real
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6 leading-tight">
            de la demora.
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            ¿Qué pasaría si el próximo desastre industrial no fuera causado por incendio, inundación o fraude...
            <br />
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold text-xl md:text-2xl">Sino por el silencio?</span>
          </motion.p>
        </motion.div>

        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
          className="mb-8 flex justify-center relative"
        >
          <div className="relative">
            {/* Pulsing rings */}
            <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-ciro-500/50 animate-ping opacity-75"></div>
            <div className="absolute inset-0 w-24 h-24 rounded-full border border-orange-500/50 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main CIRO hub */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-xl border-2 border-ciro-500/50">
              <img
                src="/images/ciro-white.png"
                alt="CIRO"
                className="w-14 h-14 object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>
            
            {/* Data flow connectors */}
            {[
              { angle: 0, length: 60 },    // Right
              { angle: 90, length: 60 },   // Down  
              { angle: 180, length: 60 },  // Left
              { angle: 270, length: 60 },  // Up
              { angle: 45, length: 45 },   // Top-right
              { angle: 135, length: 45 },  // Bottom-right
              { angle: 225, length: 45 },  // Bottom-left
              { angle: 315, length: 45 },  // Top-left
            ].map((connector, index) => (
              <motion.div
                key={index}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  transform: `translate(-50%, -50%) rotate(${connector.angle}deg)`,
                  width: `${connector.length}px`,
                  height: '2px',
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-ciro-500 via-orange-500 to-transparent rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative max-w-2xl mx-auto mb-8"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/30 to-ciro-500/20 rounded-2xl blur-lg"></div>
          
          <div className="relative bg-dark-800/60 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6">
            <p className="text-lg text-gray-200 mb-3 text-center">
              El costo del silencio en operaciones industriales:
            </p>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-ciro-400 bg-clip-text text-transparent font-mono heartbeat">
                ${cost.toLocaleString()}
              </div>
              <p className="text-sm text-gray-300 mt-2">
                por minuto, acumulándose...
              </p>
            </div>
            
            {/* Real-time indicators */}
            <div className="flex justify-center gap-6 mt-4">
              {[
                { color: 'bg-red-500', label: 'Tiempo muerto' },
                { color: 'bg-orange-500', label: 'Defectos' },
                { color: 'bg-yellow-500', label: 'Ineficiencia' }
              ].map((indicator, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.2, type: "spring" }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-2 h-2 ${indicator.color} rounded-full animate-pulse`}></div>
                  <span className="text-xs text-gray-300">{indicator.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { stat: '60%', label: 'Procesos Manuales', color: 'text-red-400' },
            { stat: '90%', label: 'Datos Nunca Vistos a Tiempo', color: 'text-orange-400' },
            { stat: '24hr', label: 'Demoras Promedio de Detección', color: 'text-yellow-400' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1, ease: "backOut" }}
              className="bg-dark-800/40 backdrop-blur-sm border border-dark-600 rounded-xl p-4 text-center hover:border-opacity-80 transition-all duration-300"
            >
              <div className={`text-2xl font-black ${item.color} mb-1`}>
                {item.stat}
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 
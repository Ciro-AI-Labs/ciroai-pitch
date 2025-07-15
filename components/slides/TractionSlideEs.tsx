'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp, Zap, BarChart3 } from 'lucide-react'

export default function TractionSlideEs() {
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
            Crecimiento Rápido,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
            Escalabilidad Inteligente
          </h2>
          
          {/* Pre-Launch Note */}
          <div className="bg-gradient-to-r from-ciro-600/20 via-orange-600/20 to-yellow-600/20 border border-ciro-500/30 rounded-lg px-4 py-2 max-w-3xl mx-auto">
            <p className="text-sm text-gray-200">
              <span className="text-ciro-400 font-semibold">Ingresos Pre-Lanzamiento</span> • 
              Usuarios Beta Empresariales • Solo Suscripciones • 
              <span className="text-orange-400 font-semibold"> Relaciones de Clientes de por Vida</span>
            </p>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-3 text-center">
            <DollarSign className="w-6 h-6 text-ciro-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-ciro-400 mb-1 font-mono">
              ${currentMRR.toLocaleString()}
            </div>
            <p className="text-gray-300 text-xs">Ingresos Recurrentes Mensuales</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400 mb-1">7+</div>
            <p className="text-gray-300 text-xs">Clientes Activos</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 text-center">
            <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 mb-1">$100K+</div>
            <p className="text-gray-300 text-xs">Contratos de Integración</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-3 text-center">
            <Zap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
            <p className="text-gray-300 text-xs">Conectores de Datos</p>
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
            Trayectoria de Crecimiento de Ingresos
          </h3>
          
          {/* Simple Visual Chart */}
          <div className="relative h-32 bg-dark-900/30 rounded-lg p-4">
            <div className="flex items-end justify-between h-full">
              {[
                { month: 'Ene', value: 2, color: 'bg-gray-500' },
                { month: 'Feb', value: 4, color: 'bg-gray-400' },
                { month: 'Mar', value: 7, color: 'bg-blue-500' },
                { month: 'Abr', value: 11, color: 'bg-ciro-500' },
                { month: 'May', value: 14, color: 'bg-orange-500' },
                { month: 'Jun', value: 17, color: 'bg-green-500' },
              ].map((data, index) => (
                <motion.div
                  key={data.month}
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.value / 17) * 100}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className={`${data.color} w-8 rounded-t-sm relative`}
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white">
                    ${data.value}K
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                    {data.month}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">💰 Modelo de Suscripción</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• $500-$5,000/mes por sitio</li>
              <li>• Contratos anuales</li>
              <li>• Precios por escala de operaciones</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">🔧 Servicios de Integración</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• $50,000-$200,000 por configuración</li>
              <li>• Conectores personalizados</li>
              <li>• Modelos IA específicos del dominio</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
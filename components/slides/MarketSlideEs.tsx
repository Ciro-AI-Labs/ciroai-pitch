'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Globe, Factory, Zap, Eye, Cpu, Target } from 'lucide-react'

export default function MarketSlideEs() {
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
            Un Cambio de $300B—
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent mb-3">
            Y Estamos en el Centro
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            La transformación global de la Industria 4.0 es{' '}
            <span className="text-red-400 font-semibold">masiva—y urgente.</span>
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
            Oportunidad de Mercado
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            {/* TAM */}
            <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-purple-400 font-bold mb-1">TAM</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">$300B+</div>
              <div className="text-xs text-white mb-1">Mercado Total</div>
              <p className="text-xs text-gray-300">Industria 4.0 para 2030</p>
            </div>

            {/* SAM */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-blue-400 font-bold mb-1">SAM</div>
              <div className="text-2xl font-bold text-blue-400 mb-1">$45B</div>
              <div className="text-xs text-white mb-1">Servible</div>
              <p className="text-xs text-gray-300">IA & streaming</p>
            </div>

            {/* SOM */}
            <div className="bg-gradient-to-br from-ciro-600/20 to-orange-600/20 border border-ciro-500/30 rounded-lg p-4 text-center">
              <div className="text-xs text-ciro-400 font-bold mb-1">SOM</div>
              <div className="text-2xl font-bold text-ciro-400 mb-1">$1.2B</div>
              <div className="text-xs text-white mb-1">Inmediato</div>
              <p className="text-xs text-gray-300">2,500+ operadores</p>
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
            La Próxima Capa Industrial de un Billón de Dólares
          </h3>
          <p className="text-sm text-gray-300 text-center max-w-3xl mx-auto">
            CIRO se sitúa en la base de tres pilares a largo plazo que definirán 
            la próxima evolución de la inteligencia industrial
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
            <div className="text-sm font-bold text-blue-400 mb-2">Sistemas Superpuestos</div>
            <p className="text-xs text-gray-300">Proyectar inteligencia tiempo real al mundo físico</p>
          </div>

          {/* Autonomous Operations */}
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-bold">2027-2029</span>
            </div>
            <div className="text-sm font-bold text-green-400 mb-2">Operaciones Autónomas</div>
            <p className="text-xs text-gray-300">Agentes IA operando plantas completas independientemente</p>
          </div>

          {/* Digital Twins */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-400 font-bold">2030+</span>
            </div>
            <div className="text-sm font-bold text-purple-400 mb-2">Gemelos Digitales</div>
            <p className="text-xs text-gray-300">Simulaciones completas que predicen el futuro</p>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-base text-gray-400 max-w-4xl mx-auto">
            "No estamos construyendo solo un producto. Estamos construyendo{' '}
            <span className="text-ciro-400 font-semibold">la capa fundamental</span>{' '}
            sobre la cual se construirá la próxima generación de operaciones industriales."
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
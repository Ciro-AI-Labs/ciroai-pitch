'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Shield, Clock, Target, Eye } from 'lucide-react'

export default function WhyNowSlideEs() {
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
            Por Qué CIRO, Por Qué Ahora
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            La infraestructura nativa de IA no es una tendencia futura—
            <span className="text-ciro-400 font-semibold"> está aquí.</span>
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
            La Tormenta Perfecta
          </h3>
          
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-gradient-to-br from-red-600/20 to-red-700/20 border border-red-500/30 rounded-lg p-3 text-center">
              <TrendingUp className="w-5 h-5 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-red-400 mb-1">Inflación</div>
              <p className="text-xs text-gray-300">Costos crecientes exigen eficiencia</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Crítico</div>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-lg p-3 text-center">
              <Users className="w-5 h-5 text-orange-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-orange-400 mb-1">Escasez de Talento</div>
              <p className="text-xs text-gray-300">Operadores calificados son escasos</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Crítico</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/30 rounded-lg p-3 text-center">
              <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-yellow-400 mb-1">Volatilidad Energética</div>
              <p className="text-xs text-gray-300">Optimización tiempo real necesaria</p>
              <div className="mt-2 px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Alto</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-lg p-3 text-center">
              <Shield className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-purple-400 mb-1">Regulatorio</div>
              <p className="text-xs text-gray-300">Monitoreo constante requerido</p>
              <div className="mt-2 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">Crítico</div>
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
            La Industria No Puede Esperar
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Eye className="w-6 h-6 text-ciro-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Visibilidad Ahora</div>
              <p className="text-xs text-gray-300">No pueden permitirse puntos ciegos</p>
            </div>
            
            <div className="text-center">
              <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Decisiones Ahora</div>
              <p className="text-xs text-gray-300">No pueden esperar horas por reportes</p>
            </div>
            
            <div className="text-center">
              <Target className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-white mb-1">Acción Ahora</div>
              <p className="text-xs text-gray-300">Respuesta tiempo real estándar</p>
            </div>
          </div>
        </motion.div>

        {/* Technology Finally Ready */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl p-4"
        >
          <h3 className="text-xl font-bold text-white mb-3 text-center">
            La Tecnología Finalmente Está Lista
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• <span className="text-green-400 font-semibold">Streaming AI</span> puede procesar millones de eventos</li>
                <li>• <span className="text-blue-400 font-semibold">Visión por computadora</span> es confiable en producción</li>
                <li>• <span className="text-purple-400 font-semibold">LLMs</span> entienden datos industriales complejos</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• <span className="text-orange-400 font-semibold">Edge computing</span> permite tiempo real real</li>
                <li>• <span className="text-cyan-400 font-semibold">APIs</span> conectan cualquier sistema</li>
                <li>• <span className="text-pink-400 font-semibold">Costos de nube</span> hacen viable la escalabilidad</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
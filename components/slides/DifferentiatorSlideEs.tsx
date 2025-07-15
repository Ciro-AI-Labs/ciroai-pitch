'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Clock, Users, Shield, CheckCircle2, X } from 'lucide-react'

export default function DifferentiatorSlideEs() {
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
            Construido para el Mundo Real,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ciro-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            No para una Pizarra
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
            CIRO no es un dashboard más bonito. Es la{' '}
            <span className="text-transparent bg-gradient-to-r from-ciro-400 to-orange-400 bg-clip-text font-semibold">sala de máquinas</span>{' '}
            que mantiene tu operación funcionando.
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
            CIRO vs Sistemas Heredados
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                category: 'Procesamiento',
                ciro: 'Streaming',
                legacy: 'ETL',
                icon: Zap,
              },
              {
                category: 'Tiempo de Respuesta',
                ciro: 'Instantáneo',
                legacy: 'Retrasado',
                icon: Clock,
              },
              {
                category: 'Toma de Decisiones',
                ciro: 'Agentes IA',
                legacy: 'Analistas',
                icon: Users,
              },
              {
                category: 'Enfoque',
                ciro: 'Prevención',
                legacy: 'Reacción',
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
              title: 'Bus de Eventos en Tiempo Real',
              description: 'Procesa millones de eventos por día—Kafka + Flink + RAG trabajando tras bambalinas',
              color: 'bg-purple-500',
              icon: Zap,
            },
            {
              title: 'Consultas en Español Simple',
              description: 'Haz cualquier pregunta y obtén resultados Python o SQL en vivo, completos con visuales',
              color: 'bg-ciro-500',
              icon: '💬',
            },
            {
              title: 'IA de Visión en el Borde',
              description: 'Ejecuta en borde o nube, detectando defectos, violaciones de seguridad y riesgos en tiempo real',
              color: 'bg-blue-500',
              icon: '👁️',
            },
            {
              title: 'Agentes Autónomos',
              description: 'Alerta supervisores al instante, envía actualizaciones vía Slack/Teams, da seguimiento automáticamente',
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
            "Otros sistemas te dicen qué pasó ayer. CIRO te dice qué está pasando{' '}
            <span className="text-ciro-400 font-semibold">ahora mismo</span> — y qué hacer al respecto."
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
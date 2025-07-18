'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Eye, Shield, BarChart3, Clock, Cpu, MessageSquare, Zap, TrendingUp, Camera, Database, Bot } from 'lucide-react'

export default function SolutionSlideNewEs() {
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
            Tu científico de datos,
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ciro-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            operando 24/7
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
            Imagina tener un científico de datos, un ingeniero de visión y un analista operativo
            <br />
            <span className="text-transparent bg-gradient-to-r from-ciro-400 to-orange-400 bg-clip-text font-semibold">trabajando juntos — todos los días, todo el tiempo.</span>
          </p>
        </motion.div>

        {/* 24/7 AI Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        >
          {[
            {
              icon: Brain,
              title: 'Científico de datos 24/7',
              description: 'Analiza patrones, genera insights y crea modelos predictivos automáticamente',
              gradient: 'from-purple-500 to-indigo-500'
            },
            {
              icon: Shield,
              title: 'Vigilantes de seguridad 24/7',
              description: 'Monitorea amenazas, detecta anomalías y responde a incidentes en tiempo real',
              gradient: 'from-red-500 to-orange-500'
            },
            {
              icon: Eye,
              title: 'Ingeniero de visión 24/7',
              description: 'Vigila cámaras, identifica defectos y asegura calidad con 99.8% de precisión',
              gradient: 'from-blue-500 to-cyan-500'
            }
          ].map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="bg-dark-800/60 border border-dark-600 rounded-xl p-4 text-center relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-5`} />
              <div className={`w-12 h-12 bg-gradient-to-br ${agent.gradient} rounded-full flex items-center justify-center mx-auto mb-3 relative z-10`}>
                <agent.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-2 relative z-10">{agent.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed relative z-10">{agent.description}</p>
              
              {/* Pulse animation for "always on" effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${agent.gradient} rounded-full opacity-60`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Live Visualizations Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-dark-800/40 border border-dark-600 rounded-xl p-4 mb-6"
        >
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-white mb-1">Galería de Visualizaciones en Vivo</h3>
            <p className="text-sm text-gray-400">Dashboards e insights en tiempo real, actualizados cada segundo</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BarChart3, label: 'Métricas de Producción', color: 'bg-blue-500' },
              { icon: TrendingUp, label: 'Tendencias de Calidad', color: 'bg-green-500' },
              { icon: Camera, label: 'Analíticas de Visión', color: 'bg-purple-500' },
              { icon: Zap, label: 'Detección de Anomalías', color: 'bg-red-500' }
            ].map((viz, index) => (
              <motion.div
                key={viz.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                className="bg-dark-700/60 border border-dark-500 rounded-lg p-4 text-center relative overflow-hidden"
              >
                <div className={`w-10 h-10 ${viz.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <viz.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs text-gray-400">{viz.label}</p>
                
                {/* Animated data bars */}
                <div className="mt-2 space-y-1">
                  {[1, 2, 3].map((bar) => (
                    <motion.div
                      key={bar}
                      className="h-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded"
                      animate={{ width: ['20%', '80%', '40%', '90%', '60%'] }}
                      transition={{ duration: 3, repeat: Infinity, delay: bar * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4"
        >
          {[
            {
              icon: Cpu,
              title: 'IA en tiempo real',
              description: 'Procesamos +500,000 eventos por segundo para detectar fallas, fraudes o cuellos de botella antes que ocurran',
              color: 'text-ciro-400'
            },
            {
              icon: Bot,
              title: 'Agentes inteligentes',
              description: 'Automatizan decisiones, generan código (SQL, Python) y ejecutan tareas críticas de forma autónoma',
              color: 'text-green-400'
            },
            {
              icon: MessageSquare,
              title: 'Interfaz conversacional',
              description: 'Pregunta en lenguaje natural. Recibe gráficas, alertas y acciones sugeridas al instante',
              color: 'text-blue-400'
            },
            {
              icon: Database,
              title: 'Streaming unificado',
              description: 'Conecta sensores IoT, cámaras, sistemas ERP y procesos humanos en una capa de inteligencia',
              color: 'text-purple-400'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
              className="bg-dark-800/40 border border-dark-600 rounded-lg p-3 flex items-start space-x-3"
            >
              <div className={`${benefit.color} mt-1`}>
                <benefit.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className={`font-bold text-xs mb-1 ${benefit.color}`}>{benefit.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="text-center"
        >
          <p className="text-base text-white font-semibold max-w-3xl mx-auto">
            <span className="text-ciro-400">Inteligencia industrial en tiempo real.</span> Sin fricción.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Una plataforma. Todas tus decisiones. En milisegundos.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 
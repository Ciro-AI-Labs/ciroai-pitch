'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Heart, Users, Award, Globe, GraduationCap, Factory, Zap } from 'lucide-react'

export default function PartnersSlideEs() {
  const partners = [
    { name: 'Programa NVIDIA Inception', icon: Zap, description: 'Aceleradora de Startups de IA', color: 'text-green-400' },
    { name: 'X Founders', icon: Users, description: 'Capital de Riesgo', color: 'text-blue-400' },
    { name: 'Fundación Starknet', icon: Globe, description: 'Infraestructura Blockchain', color: 'text-purple-400' },
    { name: 'Volcano Summit', icon: Award, description: 'Cumbre de Innovación', color: 'text-orange-400' },
    { name: 'Universidad Don Bosco', icon: GraduationCap, description: 'Alianza de Investigación', color: 'text-cyan-400' }
  ]

  const clients = [
    { name: 'OI El Salvador', icon: Building2, description: 'Telecomunicaciones', color: 'text-blue-500' },
    { name: 'Grupo Campestre', icon: Factory, description: 'Conglomerado Agrícola', color: 'text-green-500' },
    { name: 'Avícola Campestre', icon: Factory, description: 'Producción Avícola', color: 'text-yellow-500' },
    { name: 'EIS Power', icon: Zap, description: 'Soluciones Energéticas', color: 'text-red-500' },
    { name: 'Quantum Technologies', icon: Globe, description: 'Servicios Tecnológicos', color: 'text-indigo-500' },
    { name: 'Gobierno de El Salvador', icon: Building2, description: 'Servicios Gubernamentales', color: 'text-gray-400' },
    { name: 'Laboratorios Vijosa', icon: Building2, description: 'Servicios de Laboratorio', color: 'text-purple-500' }
  ]

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
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Confianza de Líderes Industriales
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300">
            Socios y Clientes que Creen en Nuestra Visión
          </h2>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-ciro-400" />
            <h3 className="text-xl font-bold text-white">Socios Estratégicos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-dark-800/60 border border-dark-600 rounded-lg p-4 hover:border-ciro-400/50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`${partner.color} mt-1`}>
                    <partner.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1">{partner.name}</h4>
                    <p className="text-xs text-gray-400">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Building2 className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white">Clientes de Confianza</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.08 }}
                className="bg-dark-800/40 border border-dark-600 rounded-lg p-3 hover:border-green-400/50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`${client.color} mt-1`}>
                    <client.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1">{client.name}</h4>
                    <p className="text-xs text-gray-400">{client.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <p className="text-base text-white font-semibold max-w-3xl mx-auto">
            <span className="text-ciro-400">Desde startups hasta gobiernos</span> — organizaciones de todas las industrias
          </p>
          <p className="text-sm text-gray-400 mt-1">
            eligen CIRO para soluciones de IA críticas.
          </p>
        </motion.div>

        {/* NVIDIA Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex justify-center mt-6"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-black/20 border border-green-500/30 rounded-lg p-3">
            <img
              src="/images/nvidia-inception-program-badge-rgb-for-screen.png"
              alt="NVIDIA Inception Program"
              className="h-12 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
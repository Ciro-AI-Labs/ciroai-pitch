'use client'

import React from 'react'
import { Mail, Linkedin, Globe, MessageCircle, CheckCircle, Heart } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gloria.polio@ciroai.us',
    color: 'text-orange-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'cirolabs',
    color: 'text-blue-400',
  },
  {
    icon: Globe,
    label: 'Sitio Web',
    value: 'ciroai.us',
    color: 'text-green-400',
  },
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@vaamx',
    color: 'text-purple-400',
  },
]

const finalStats = [
  { label: 'Segundos para Desplegar', value: '< 60', color: 'text-green-400' },
  { label: 'Reducción en Tiempo de Detección', value: '99%', color: 'text-blue-400' },
  { label: 'Tasa de Respuesta Tiempo Real', value: '100%', color: 'text-orange-400' },
]

export default function ClosingSlideEs() {
  return (
    <div className="slide-container">
      <div className="slide-content py-2">
        {/* Title - Ultra Compact */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
            Lo que comenzó como una pregunta sobre <span className="text-red-400 font-bold">desastres industriales</span> se convierte en la base
          </h1>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
            para <span className="text-transparent bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text font-bold">operaciones inteligentes.</span>
          </h2>
        </div>

        {/* Key Stats - Ultra Compact */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {finalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 rounded-lg p-3 text-center"
            >
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement - Ultra Compact */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg blur-sm"></div>
            
            <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center">
              <blockquote className="text-sm text-gray-200 leading-relaxed mb-3">
                "En un mundo donde{' '}
                <span className="text-red-400 font-bold">cada segundo cuenta</span>,{' '}
                CIRO asegura que{' '}
                <span className="text-orange-400 font-bold">el silencio nunca sea una opción.</span>
                <br />
                Convertimos datos en{' '}
                <span className="text-blue-400 font-bold">decisiones</span>,{' '}
                decisiones en{' '}
                <span className="text-green-400 font-bold">acción</span>,{' '}
                y acción en{' '}
                <span className="text-purple-400 font-bold">resultados.</span>"
              </blockquote>
              
              <div className="flex justify-center items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-xs">Tiempo real. Siempre.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thank you and Contact - Ultra Compact */}
        <div className="text-center mb-3">
          <h3 className="text-lg font-bold text-white mb-3">
            ¡Gracias por escuchar!
          </h3>
          
          {/* Contact Grid - Ultra Compact */}
          <div className="grid grid-cols-4 gap-2">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-600 rounded-lg p-2"
              >
                <contact.icon className={`w-4 h-4 ${contact.color} mx-auto mb-1`} />
                <div className="text-xs text-gray-400 mb-1">{contact.label}</div>
                <div className={`text-xs font-semibold ${contact.color} break-all`}>
                  {contact.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - Ultra Compact */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg blur-sm"></div>
            
            <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-lg p-3">
              {/* CIRO Logo */}
              <div className="flex justify-center mb-2">
                <img 
                  src="/images/ciro-logo-white-complete.png" 
                  alt="CIRO AI" 
                  className="h-8 w-auto"
                />
              </div>
              
              <div className="flex justify-center items-center gap-3 mb-2">
                <Heart className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-bold text-white">¿Listo para Transformar la Inteligencia Industrial?</span>
                <Heart className="w-4 h-4 text-orange-400" />
              </div>
              
              <p className="text-xs text-gray-300">
                Construyamos el futuro de las operaciones industriales—juntos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
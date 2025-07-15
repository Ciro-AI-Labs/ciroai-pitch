'use client'

import React from 'react'

export default function FutureSlideEs() {
  const timelineSteps = [
    { year: '2025', phase: 'CIRO Core', description: 'Conectividad de datos y detección de problemas', color: 'orange' },
    { year: '2026', phase: 'Superpuesta', description: 'Perspectiva en el espacio físico', color: 'blue' },
    { year: '2027', phase: 'Robótica', description: 'Robots autónomos con agentes CIRO', color: 'purple' },
    { year: '2028', phase: 'Red Global de Borde', description: 'Red de nodos de inteligencia en el borde', color: 'pink' }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange': return {
        bg: 'bg-orange-500',
        bgLight: 'bg-orange-500/20',
        border: 'border-orange-500',
        text: 'text-orange-400'
      }
      case 'blue': return {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-500/20',
        border: 'border-blue-500',
        text: 'text-blue-400'
      }
      case 'purple': return {
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-500/20',
        border: 'border-purple-500',
        text: 'text-purple-400'
      }
      case 'pink': return {
        bg: 'bg-pink-500',
        bgLight: 'bg-pink-500/20',
        border: 'border-pink-500',
        text: 'text-pink-400'
      }
      default: return {
        bg: 'bg-gray-500',
        bgLight: 'bg-gray-500/20',
        border: 'border-gray-500',
        text: 'text-gray-400'
      }
    }
  }

  return (
    <div className="slide-container">
      <div className="slide-content py-4">
        {/* Compact Title */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center leading-tight">
          Más Que una Plataforma —
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 block">
            Una Base para el Futuro
          </span>
        </h1>
        
        {/* Compact Victor's Quote */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-6 mb-8 border border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
              V
            </div>
            <div className="flex-1">
              <blockquote className="text-lg text-gray-200 italic leading-relaxed mb-4">
                "CIRO no es solo software. Es infraestructura para el próximo salto industrial."
              </blockquote>
              
              {/* Compact Vision Points */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <p className="text-sm text-gray-300">Asistentes industriales</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-gray-300">Robots autónomos</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-sm text-gray-300">Inteligencia en el borde</p>
                </div>
              </div>
              
              <p className="text-orange-400 font-bold text-sm">— Victor, CEO</p>
            </div>
          </div>
        </div>

        {/* Compact Timeline Roadmap */}
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Nuestra Hoja de Ruta</h2>
          
          {/* Desktop Timeline - Compact */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Base Line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-blue-500 via-purple-500 to-pink-500"></div>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-4 gap-4">
                {timelineSteps.map((step, index) => {
                  const colors = getColorClasses(step.color)
                  return (
                    <div key={step.year} className="relative flex flex-col items-center">
                      {/* Timeline Node */}
                      <div className={`w-4 h-4 ${colors.bg} rounded-full border-2 border-white shadow-lg z-10 mb-3`}></div>
                      
                      {/* Year Badge */}
                      <div className={`${colors.bgLight} ${colors.border} border rounded-full px-3 py-1 mb-2`}>
                        <span className="text-white font-bold text-sm">{step.year}</span>
                      </div>
                      
                      {/* Phase Card */}
                      <div className={`${colors.bgLight} ${colors.border} border rounded-lg p-3 w-full text-center shadow backdrop-blur-sm`}>
                        <h3 className="text-white font-bold text-sm mb-1">{step.phase}</h3>
                        <p className="text-gray-300 text-xs leading-tight">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Compact */}
          <div className="md:hidden space-y-4">
            {timelineSteps.map((step, index) => {
              const colors = getColorClasses(step.color)
              return (
                <div key={step.year} className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 ${colors.bg} rounded-full border-2 border-white shadow-lg`}></div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 h-8 bg-gradient-to-b from-current to-transparent opacity-30 mt-1"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`${colors.text} font-bold text-lg`}>{step.year}</span>
                      <span className="text-white font-bold text-sm">{step.phase}</span>
                    </div>
                    <p className="text-gray-300 text-xs">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Compact Bottom CTA */}
        <div className="text-center mt-6">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg">
            Construyendo la Inteligencia Industrial del Mañana
          </div>
        </div>
      </div>
    </div>
  )
} 
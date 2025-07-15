'use client'

import React from 'react'
import { Target, Rocket, Globe, Users, DollarSign, TrendingUp, UserCheck, Zap, Brain, Activity } from 'lucide-react'

const fundingBreakdown = [
  {
    category: 'Adquisición de Clientes',
    percentage: '45%',
    amount: '$135K',
    description: 'Marketing, ventas y expansión de clientes',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    category: 'Producción y Beta',
    percentage: '30%',
    amount: '$90K',
    description: 'Expandir beta privada a producción completa',
    icon: Rocket,
    color: 'from-orange-500 to-red-600',
  },
  {
    category: 'Infraestructura y Agentes',
    percentage: '25%',
    amount: '$75K',
    description: 'Profundizar infraestructura tiempo real y ecosistema de agentes',
    icon: Activity,
    color: 'from-green-500 to-emerald-600',
  },
]

const milestones = [
  {
    timeline: 'Mes 1',
    goal: 'Lanzamiento de Marketing',
    metric: 'Campaña de Adquisición',
    details: 'Iniciar estrategia agresiva de captación',
  },
  {
    timeline: 'Mes 2',
    goal: 'Expansión de Clientes',
    metric: '10+ Clientes Nuevos',
    details: 'Acelerar ventas y incorporación',
  },
  {
    timeline: 'Mes 3',
    goal: 'Escalamiento',
    metric: '$50K+ MRR',
    details: 'Doblar ingresos recurrentes',
  },
]

export default function AskSlideEs() {
  return (
    <div className="slide-container">
      <div className="slide-content py-2">
        {/* Compact Title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-3 leading-tight">
            Construyamos el Sistema Nervioso de la Industria
          </h1>
        </div>

        {/* Compact Victor's Quote */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 mb-4 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
              V
            </div>
            <div className="flex-1">
              <blockquote className="text-sm text-gray-200 italic leading-relaxed mb-2">
                "Buscamos recaudar $300,000 inicialmente de un programa acelerador sólido"
              </blockquote>
              
              <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                Pero más que capital, buscamos colaboradores. Socios que entiendan la urgencia de esta transformación.
              </p>
              
              <p className="text-orange-400 font-bold text-xs">— Victor, CEO</p>
            </div>
          </div>
        </div>

        {/* Investment Ask - Ultra Compact */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg blur-sm"></div>
            
            <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Brain className="w-6 h-6 text-orange-400" />
                <h3 className="text-lg font-bold text-white">
                  Ronda Inicial de Acelerador
                </h3>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <DollarSign className="w-6 h-6 text-orange-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  300,000
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4">
                Para acelerar adquisición de clientes y escalamiento comercial
              </p>
              
              {/* Funding Breakdown - Ultra Compact */}
              <div className="grid grid-cols-3 gap-2">
                {fundingBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${item.color} bg-opacity-10 border border-current border-opacity-20 rounded-lg p-2`}
                  >
                    <item.icon className="w-4 h-4 text-white mx-auto mb-1" />
                    <div className="text-xs font-bold text-white mb-1">
                      {item.percentage}
                    </div>
                    <div className="text-xs text-gray-300 mb-1">
                      {item.amount}
                    </div>
                    <div className="text-xs text-gray-400 leading-tight">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Milestones - Ultra Compact */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-3 text-center">
            Hitos de 3 Meses
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 rounded-lg p-3"
              >
                <div className="text-xs text-ciro-400 font-bold mb-1">
                  {milestone.timeline}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {milestone.goal}
                </div>
                <div className="text-xs text-orange-400 font-semibold mb-1">
                  {milestone.metric}
                </div>
                <div className="text-xs text-gray-400">
                  {milestone.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer - Ultra Compact */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-3 text-center">
            Lo Que Ofrecemos
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-green-600/10 to-green-700/10 rounded-lg p-3 border border-green-500/20">
              <UserCheck className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-green-400 mb-1 text-center">Tracción Comprobada</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• 7+ clientes activos</li>
                <li>• $17K MRR actual</li>
                <li>• $100K+ en contratos</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600/10 to-purple-700/10 rounded-lg p-3 border border-purple-500/20">
              <Zap className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-purple-400 mb-1 text-center">Ventaja Técnica</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Stack de streaming en tiempo real</li>
                <li>• Agentes IA especializados</li>
                <li>• Infraestructura probada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA - Ultra Compact */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg p-3 border border-gray-600/50">
            <p className="text-sm text-gray-300 mb-2">
              <span className="text-orange-400 font-semibold">Juntos</span>, podemos transformar como la industria toma decisiones.
            </p>
            <p className="text-xs text-gray-400">
              ¿Listo para construir el futuro de las operaciones industriales?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
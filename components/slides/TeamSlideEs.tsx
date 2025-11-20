'use client'

import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Diego Aparicio',
    title: 'CEO',
    subtitle: 'Líder en Capital y Estrategia',
    background: 'Lideró levantamiento de capital, búsqueda de acuerdos, despliegue de capital, desarrollo de negocios y construcción de equipos multifuncionales en private equity, portafolios institucionales y ventures tecnológicos en J.P. Morgan, Clark Street Capital y The Pulse',
    expertise: ['Operaciones y Finanzas', 'Estrategia Comercial', 'Levantamiento y Estructuración de Capital'],
    companies: ['J.P. Morgan', 'Clark Street Capital', 'The Pulse'],
    color: 'from-orange-500 to-red-600',
    image: '/images/Diegoaparicio.jpeg',
  },
  {
    name: 'Victor Amaya',
    title: 'CTO',
    subtitle: 'Fundador con 2 Exits',
    background: 'Arquitectó motores tiempo real para Kraken, Skalex, ViRSE, Nvidia',
    expertise: ['Sistemas Tiempo Real', 'Arquitectura Escalable', 'Fintech'],
    companies: ['Kraken', 'Skalex', 'ViRSE', 'Nvidia'],
    color: 'from-blue-500 to-cyan-600',
    image: '/images/UgY3lK5y_400x400.jpg',
  },
]

const advisors = [
  { company: 'XFounders', expertise: 'Aceleradora de Startups', icon: '🚀' },
  { company: 'Grupo Campestre', expertise: 'Operaciones Industriales', icon: '🏭' },
  { company: 'Diana El Salvador', expertise: 'Manufactura de Alimentos', icon: '🏢' },
  { company: 'Nvidia Inception', expertise: 'Programa de Socios en IA', icon: 'nvidia-badge', image: '/images/nvidia-inception-program-badge-rgb-for-screen.png' },
]

export default function TeamSlideEs() {
  return (
    <div className="slide-container">
      <div className="slide-content py-4">
        {/* Compact Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
            Construido por Operadores,
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight">
            No Solo Ingenieros
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Nuestro liderazgo combina{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold">tecnología profunda</span>{' '}
            y{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-bold">experiencia de primera línea</span>
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-10 rounded-xl blur-lg`}></div>
              
              <div className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6">
                {/* Avatar & Basic Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className={`text-xl font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-1`}>
                      {member.name}
                    </div>
                    <div className="text-lg font-bold text-white mb-0.5">
                      {member.title}
                    </div>
                    <div className="text-sm text-gray-400">
                      {member.subtitle}
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div className="mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.background}
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 font-semibold mb-2">EXPERIENCIA</div>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Experience */}
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-2">EXPERIENCIA EMPRESARIAL</div>
                  <div className="flex gap-2">
                    {member.companies.map((company, companyIndex) => (
                      <div
                        key={companyIndex}
                        className={`bg-gradient-to-r ${member.color} bg-opacity-20 border border-current border-opacity-30 text-white text-xs px-2 py-1 rounded-lg font-semibold`}
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisors & Support Network */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Red de Asesores y Soporte
          </h3>
          
          <div className="grid grid-cols-4 gap-4">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center"
              >
                <div className="mb-2 flex justify-center items-center h-8">
                  {advisor.icon === 'nvidia-badge' && advisor.image ? (
                    <Image
                      src={advisor.image}
                      alt={advisor.company}
                      width={60}
                      height={30}
                      className="object-contain"
                    />
                  ) : (
                    <div className="text-2xl">{advisor.icon}</div>
                  )}
                </div>
                <div className="text-white font-bold text-sm mb-1">
                  {advisor.company}
                </div>
                <div className="text-gray-400 text-xs">
                  {advisor.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg p-4 border border-gray-600/50">
            <p className="text-base text-gray-300">
              "Entendemos tanto el{' '}
              <span className="text-orange-400 font-semibold">piso de fábrica</span>{' '}
              como los{' '}
              <span className="text-blue-400 font-semibold">sistemas distribuidos</span>.{' '}
              Esta combinación es lo que hace a CIRO{' '}
              <span className="text-green-400 font-semibold">diferente</span>."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import React from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Victor Amaya',
    title: 'CEO',
    subtitle: '2x Exited Founder',
    background: 'Architected real-time engines for Kraken, Meta, Epic',
    expertise: ['Real-time Systems', 'Scalable Architecture', 'Financial Tech'],
    companies: ['Meta', 'Kraken', 'Epic'],
    color: 'from-orange-500 to-red-600',
    image: '/images/UgY3lK5y_400x400.jpg',
  },
  {
    name: 'Gloria Polio',
    title: 'COO',
    subtitle: 'Industrial Operations Leader',
    background: 'Implemented ISO/HACCP systems at Diana, Vitali',
    expertise: ['Industrial Operations', 'Compliance Systems', 'Process Optimization'],
    companies: ['Diana', 'Vitali'],
    color: 'from-blue-500 to-cyan-600',
    image: '/images/gloriaheadhost.jpeg',
  },
]

const advisors = [
  { company: 'XFounders', expertise: 'Startup Accelerator', icon: '🚀' },
  { company: 'Grupo Campestre', expertise: 'Industrial Operations', icon: '🏭' },
  { company: 'Diana El Salvador', expertise: 'Food Manufacturing', icon: '🏢' },
]

export default function TeamSlide() {
  return (
    <div className="slide-container">
      <div className="slide-content py-4">
        {/* Compact Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
            Built by Operators,
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight">
            Not Just Engineers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our leadership blends{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold">deep tech</span>{' '}
            and{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-bold">frontline experience</span>
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
                  <div className="text-xs text-gray-400 font-semibold mb-2">EXPERTISE</div>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Experience */}
                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-2">EXPERIENCE</div>
                  <div className="flex gap-2">
                    {member.companies.map((company, companyIndex) => (
                      <div
                        key={companyIndex}
                        className="px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-600 border border-gray-500 rounded-md text-xs font-bold text-white"
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

        {/* Advisors - Compact */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/10 to-green-500/5 rounded-xl blur-lg"></div>
            
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Backed by Industry Leaders
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {advisors.map((advisor, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/40 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center"
                  >
                    <div className="text-3xl mb-3">{advisor.icon}</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {advisor.company}
                    </div>
                    <div className="text-sm text-gray-400">
                      {advisor.expertise}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement - Compact */}
        <div className="text-center">
          <blockquote className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "From real-time trading floors to factory production lines—
            we've built systems that{' '}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold">handle the pressure</span>{' '}
            and{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text font-bold">deliver results</span>{' '}
            when it matters most."
          </blockquote>
        </div>
      </div>
    </div>
  )
} 
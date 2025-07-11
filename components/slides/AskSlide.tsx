'use client'

import React from 'react'
import { Target, Rocket, Globe, Users, DollarSign, TrendingUp, UserCheck, Zap, Brain, Activity } from 'lucide-react'

const fundingBreakdown = [
  {
    category: 'Production & Beta',
    percentage: '40%',
    amount: '$80K',
    description: 'Expand private beta into full production',
    icon: Rocket,
    color: 'from-orange-500 to-red-600',
  },
  {
    category: 'Customer Success',
    percentage: '35%',
    amount: '$70K',
    description: 'Accelerate onboarding and customer success',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    category: 'Infrastructure & Agents',
    percentage: '25%',
    amount: '$50K',
    description: 'Deepen real-time infrastructure and agent ecosystem',
    icon: Activity,
    color: 'from-green-500 to-emerald-600',
  },
]

const milestones = [
  {
    timeline: 'Month 1',
    goal: 'Production Launch',
    metric: 'Beta → Production',
    details: 'Complete private beta transition',
  },
  {
    timeline: 'Month 2',
    goal: 'Customer Acceleration',
    metric: '3 Active Customers',
    details: 'Streamlined onboarding process',
  },
  {
    timeline: 'Month 3',
    goal: 'Infrastructure Scale',
    metric: 'Real-time Agent Ecosystem',
    details: 'Enhanced infrastructure capabilities',
  },
]

export default function AskSlide() {
  return (
    <div className="slide-container">
      <div className="slide-content py-2">
        {/* Compact Title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-blue-400 to-green-400 bg-clip-text text-transparent mb-3 leading-tight">
            Let's Build the Nervous System of Industry
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
                "We're looking to raise $200,000 initially from a strong accelerator program like Elev X."
              </blockquote>
              
              <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                But more than capital, we're looking for collaborators. Partners who understand the urgency of this transformation.
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
                  Initial Accelerator Round
                </h3>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <DollarSign className="w-6 h-6 text-orange-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  $200K
                </div>
              </div>

              {/* Elev X Badge */}
              <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-md font-bold text-xs">
                🚀 Elev X Ignite Partner Opportunity
              </div>
            </div>
          </div>
        </div>

        {/* Funding Breakdown - Ultra Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {fundingBreakdown.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-md blur-sm`}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-md p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-md flex items-center justify-center`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.percentage}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">
                  {item.category}
                </div>
                
                <div className={`text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                  {item.amount}
                </div>
                
                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6-Month Roadmap - Ultra Compact */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-3 text-center">
            3-Month Milestones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-600 rounded-md p-3 text-center"
              >
                <div className="text-xs text-orange-400 font-bold mb-1">
                  {milestone.timeline}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {milestone.goal}
                </div>
                <div className="text-sm font-bold text-green-400 mb-1">
                  {milestone.metric}
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {milestone.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Ultra Compact */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/15 to-green-500/10 rounded-lg blur-sm"></div>
            
            <div className="relative bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4">
              <div className="flex justify-center items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-orange-400" />
                <span className="text-lg font-bold text-white">Ready to Shape the Industrial Future?</span>
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                Join us in building the{' '}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text font-bold">nervous system</span>{' '}
                of modern industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

// Import slide components - English
import OpeningSlide from '../components/slides/OpeningSlide'
import ProblemSlide from '../components/slides/ProblemSlide'
import SolutionSlide from '../components/slides/SolutionSlide'
import SolutionSlideNew from '../components/slides/SolutionSlideNew'
import DifferentiatorSlide from '../components/slides/DifferentiatorSlide'
import CaseStudiesSlide from '../components/slides/CaseStudiesSlide'
import TractionSlide from '../components/slides/TractionSlide'
import PartnersSlide from '../components/slides/PartnersSlide'
import WhyNowSlide from '../components/slides/WhyNowSlide'
import MarketSlide from '../components/slides/MarketSlide'
import FutureSlide from '../components/slides/FutureSlide'
import TeamSlide from '../components/slides/TeamSlide'
import AskSlide from '../components/slides/AskSlide'
import ClosingSlide from '../components/slides/ClosingSlide'

// Import slide components - Spanish
import OpeningSlideEs from '../components/slides/OpeningSlideEs'
import ProblemSlideEs from '../components/slides/ProblemSlideEs'
import SolutionSlideEs from '../components/slides/SolutionSlideEs'
import SolutionSlideNewEs from '../components/slides/SolutionSlideNewEs'
import DifferentiatorSlideEs from '../components/slides/DifferentiatorSlideEs'
import CaseStudiesSlideEs from '../components/slides/CaseStudiesSlideEs'
import TractionSlideEs from '../components/slides/TractionSlideEs'
import PartnersSlideEs from '../components/slides/PartnersSlideEs'
import WhyNowSlideEs from '../components/slides/WhyNowSlideEs'
import MarketSlideEs from '../components/slides/MarketSlideEs'
import FutureSlideEs from '../components/slides/FutureSlideEs'
import TeamSlideEs from '../components/slides/TeamSlideEs'
import AskSlideEs from '../components/slides/AskSlideEs'
import ClosingSlideEs from '../components/slides/ClosingSlideEs'

const slidesData = {
  en: [
    { id: 1, title: 'Opening Statement', component: OpeningSlide },
    { id: 2, title: 'Problem Statement', component: ProblemSlide },
    { id: 3, title: 'Our Solution - CIRO AI', component: SolutionSlide },
    { id: 4, title: 'Your 24/7 AI Team', component: SolutionSlideNew },
    { id: 5, title: 'What Makes CIRO Different', component: DifferentiatorSlide },
    { id: 6, title: 'Case Studies & Real Impact', component: CaseStudiesSlide },
    { id: 7, title: 'Business Model & Traction', component: TractionSlide },
    { id: 8, title: 'Partners & Clients', component: PartnersSlide },
    { id: 9, title: 'Why Now & Why Us', component: WhyNowSlide },
    { id: 10, title: 'Market Opportunity', component: MarketSlide },
    { id: 11, title: 'The Future of CIRO', component: FutureSlide },
    { id: 12, title: 'Our Team', component: TeamSlide },
    { id: 13, title: 'The Ask', component: AskSlide },
    { id: 14, title: 'Closing Statement', component: ClosingSlide },
  ],
  es: [
    { id: 1, title: 'El Costo Real de las demoras', component: OpeningSlideEs },
    { id: 2, title: 'Declaración del Problema', component: ProblemSlideEs },
    { id: 3, title: 'Nuestra Solución - CIRO AI', component: SolutionSlideEs },
    { id: 4, title: 'Tu Equipo de IA 24/7', component: SolutionSlideNewEs },
    { id: 5, title: 'Lo que Hace a CIRO Diferente', component: DifferentiatorSlideEs },
    { id: 6, title: 'Casos de Estudio e Impacto Real', component: CaseStudiesSlideEs },
    { id: 7, title: 'Modelo de Negocio y Tracción', component: TractionSlideEs },
    { id: 8, title: 'Socios y Clientes', component: PartnersSlideEs },
    { id: 9, title: 'Por Qué Ahora y Por Qué Nosotros', component: WhyNowSlideEs },
    { id: 10, title: 'Oportunidad de Mercado', component: MarketSlideEs },
    { id: 11, title: 'El Futuro de CIRO', component: FutureSlideEs },
    { id: 12, title: 'Nuestro Equipo', component: TeamSlideEs },
    { id: 13, title: 'La Propuesta', component: AskSlideEs },
    { id: 14, title: 'Declaración de Cierre', component: ClosingSlideEs },
  ]
}

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)
  const [timeOnSlide, setTimeOnSlide] = useState(0)
  const [language, setLanguage] = useState('en') // 'en' or 'es'
  
  // Get slides for current language
  const slides = slidesData[language as keyof typeof slidesData]

  // Fullscreen functionality
  const enterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen()
      } else if ((document.documentElement as any).msRequestFullscreen) {
        await (document.documentElement as any).msRequestFullscreen()
      }
    } catch (error) {
      console.log('Fullscreen not supported or failed:', error)
    }
  }

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen()
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen()
      }
    } catch (error) {
      console.log('Exit fullscreen failed:', error)
    }
  }

  const togglePresentation = useCallback(async () => {
    if (!isPresenting) {
      setIsPresenting(true)
      await enterFullscreen()
    } else {
      setIsPresenting(false)
      await exitFullscreen()
    }
  }, [isPresenting])

  // Timer for tracking time on each slide
  useEffect(() => {
    if (isPresenting) {
      const timer = setInterval(() => {
        setTimeOnSlide(prev => prev + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPresenting, currentSlide])

  // Reset timer when slide changes
  useEffect(() => {
    setTimeOnSlide(0)
  }, [currentSlide])

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen = Boolean(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      )
      
      if (!isFullscreen && isPresenting) {
        setIsPresenting(false)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('msfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('msfullscreenchange', handleFullscreenChange)
    }
  }, [isPresenting])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        if (isPresenting) {
          togglePresentation()
        }
      } else if (e.key === 'f' || e.key === 'F') {
        togglePresentation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, isPresenting, togglePresentation])

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const CurrentSlideComponent = slides[currentSlide]?.component

  return (
    <div className="h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Presentation Mode Toggle and Language Selector */}
      <div className={`fixed top-4 left-4 z-50 transition-opacity duration-300 ${isPresenting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-3">
          <button
            onClick={togglePresentation}
            className="flex items-center gap-2 px-4 py-2 bg-ciro-500 hover:bg-ciro-600 rounded-lg transition-colors"
          >
            {isPresenting ? <Pause size={16} /> : <Play size={16} />}
            Present
          </button>
          
          {/* Language Selector */}
          <div className="flex items-center bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600 p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === 'en' 
                  ? 'bg-ciro-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                language === 'es' 
                  ? 'bg-ciro-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${isPresenting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="px-4 py-2 bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600">
          <span className="text-sm font-mono">
            {currentSlide + 1} / {slides.length}
          </span>
          {isPresenting && (
            <span className="ml-3 text-xs text-gray-400">
              {Math.floor(timeOnSlide / 60)}:{(timeOnSlide % 60).toString().padStart(2, '0')}
            </span>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      {!isPresenting && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center gap-4 px-6 py-3 bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-600">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-dark-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-ciro-500 w-8' : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 hover:bg-dark-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Slide Navigation Menu */}
      {!isPresenting && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600 p-2 max-w-64">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  index === currentSlide
                    ? 'bg-ciro-500 text-white'
                    : 'hover:bg-dark-700 text-gray-300'
                }`}
              >
                <span className="font-mono text-xs mr-2">{slide.id}.</span>
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Slide Container */}
      <main className="h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            {CurrentSlideComponent && <CurrentSlideComponent />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Keyboard shortcuts hint */}
      {!isPresenting && (
        <div className="fixed bottom-4 right-4 z-40 text-xs text-gray-500">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded p-2 border border-dark-600">
            <div>← → Arrow keys to navigate</div>
            <div>F for fullscreen • ESC to exit</div>
          </div>
        </div>
      )}
    </div>
  )
} 
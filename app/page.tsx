'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, Menu, X, Lock } from 'lucide-react'

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
    { id: 13, title: 'Closing Statement', component: ClosingSlide },
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
    { id: 13, title: 'Declaración de Cierre', component: ClosingSlideEs },
  ]
}

export default function PitchDeck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)
  const [timeOnSlide, setTimeOnSlide] = useState(0)
  const [language, setLanguage] = useState('en') // 'en' or 'es'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(false)
  
  // Touch/swipe handling refs
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchEndY = useRef<number>(0)
  
  // Get slides for current language
  const slides = slidesData[language as keyof typeof slidesData]

  // Check for saved authentication on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('ciro_pitch_auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'Ciro25') {
      setIsAuthenticated(true)
      localStorage.setItem('ciro_pitch_auth', 'true')
      setShowError(false)
    } else {
      setShowError(true)
      setPassword('')
    }
  }

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/Ciro Logo Full White.svg" 
              alt="CIRO AI" 
              className="h-12 w-auto"
            />
          </div>

          {/* Login Card */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 rounded-xl p-8 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">
              Protected Content
            </h1>
            <p className="text-gray-400 text-center mb-6">
              Enter password to access the pitch deck
            </p>

            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  autoFocus
                />
              </div>

              {showError && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm text-center">
                    Incorrect password. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
              >
                Access Pitch Deck
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              © 2025 CIRO AI Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }

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

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

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
  }, [nextSlide, prevSlide, isPresenting, togglePresentation])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    
    // Show swipe hint briefly on first touch in presentation mode
    if (isPresenting && window.innerWidth < 768) {
      setShowSwipeHint(true)
      setTimeout(() => setShowSwipeHint(false), 2000)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
    touchEndY.current = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return
    
    const deltaX = touchStartX.current - touchEndX.current
    const deltaY = touchStartY.current - touchEndY.current
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    // Only process horizontal swipes that are primarily horizontal (not vertical scrolling)
    if (absDeltaX > absDeltaY && absDeltaX > 50) {
      if (deltaX > 0) {
        // Swipe left - next slide
        nextSlide()
      } else {
        // Swipe right - previous slide
        prevSlide()
      }
    }
  }

  const CurrentSlideComponent = slides[currentSlide]?.component

  return (
    <div 
      className="h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Menu Button / Exit Presentation */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        {isPresenting ? (
          <button
            onClick={togglePresentation}
            className="p-3 bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600 hover:bg-dark-700 transition-all opacity-60 hover:opacity-100"
            aria-label="Exit presentation"
          >
            <X size={20} />
          </button>
        ) : (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600 hover:bg-dark-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Desktop Presentation Mode Toggle and Language Selector */}
      <div className={`fixed top-4 left-4 z-50 transition-opacity duration-300 ${isPresenting ? 'opacity-0' : 'opacity-100'} hidden md:block`}>
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
      <div className={`fixed top-4 right-4 z-50 transition-opacity duration-300 ${isPresenting ? 'opacity-60 hover:opacity-100 md:opacity-0' : 'opacity-100'}`}>
        <div className="px-3 py-2 md:px-4 md:py-2 bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600">
          <span className="text-xs md:text-sm font-mono">
            {currentSlide + 1} / {slides.length}
          </span>
          {isPresenting && (
            <span className="ml-2 md:ml-3 text-xs text-gray-400">
              {Math.floor(timeOnSlide / 60)}:{(timeOnSlide % 60).toString().padStart(2, '0')}
            </span>
          )}
        </div>
      </div>

      {/* Swipe Hint for Mobile Presentation Mode */}
      {isPresenting && showSwipeHint && (
        <div className="fixed inset-0 z-30 pointer-events-none md:hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-800/90 backdrop-blur-sm rounded-lg px-6 py-3 border border-dark-600">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="flex items-center gap-1">
                <ChevronLeft size={16} />
                <span className="text-sm">Swipe</span>
                <ChevronRight size={16} />
              </div>
              <span className="text-sm">to navigate</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Controls - Bottom (Always visible) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className={`flex items-center gap-4 px-4 py-3 bg-dark-800/80 backdrop-blur-sm rounded-full border border-dark-600 transition-opacity duration-300 ${
          isPresenting ? 'opacity-60 hover:opacity-100' : 'opacity-100'
        }`}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 hover:bg-dark-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="text-xs font-mono text-gray-300 px-2">
            {currentSlide + 1} / {slides.length}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 hover:bg-dark-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Desktop Navigation Controls */}
      {!isPresenting && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
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

      {/* Mobile Slide Navigation Menu */}
      {!isPresenting && (
        <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className={`absolute top-0 left-0 w-80 max-w-[90vw] h-full bg-dark-900 border-r border-dark-600 p-4 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Slides</h3>
              
              {/* Language Selector - Mobile */}
              <div className="flex items-center bg-dark-800/80 backdrop-blur-sm rounded-lg border border-dark-600 p-1 mb-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-ciro-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                    language === 'es' 
                      ? 'bg-ciro-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Español
                </button>
              </div>

              {/* Present Button - Mobile */}
              <button
                onClick={() => {
                  togglePresentation()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-ciro-500 hover:bg-ciro-600 rounded-lg transition-colors mb-4"
              >
                {isPresenting ? <Pause size={16} /> : <Play size={16} />}
                Present
              </button>
            </div>

            {/* Slide List */}
            <div className="space-y-1 max-h-[60vh] overflow-y-auto">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                    index === currentSlide
                      ? 'bg-ciro-500 text-white'
                      : 'hover:bg-dark-700 text-gray-300'
                  }`}
                >
                  <span className="font-mono text-xs mr-3 opacity-70">{slide.id}.</span>
                  <span className="leading-tight">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Slide Navigation Menu */}
      {!isPresenting && (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
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
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

// Import slide components
import OpeningSlide from '../components/slides/OpeningSlide'
import ProblemSlide from '../components/slides/ProblemSlide'
import SolutionSlide from '../components/slides/SolutionSlide'
import DifferentiatorSlide from '../components/slides/DifferentiatorSlide'
import CaseStudiesSlide from '../components/slides/CaseStudiesSlide'
import TractionSlide from '../components/slides/TractionSlide'
import WhyNowSlide from '../components/slides/WhyNowSlide'
import MarketSlide from '../components/slides/MarketSlide'
import FutureSlide from '../components/slides/FutureSlide'
import TeamSlide from '../components/slides/TeamSlide'
import AskSlide from '../components/slides/AskSlide'
import ClosingSlide from '../components/slides/ClosingSlide'

const slides = [
  { id: 1, title: 'Opening Statement', component: OpeningSlide },
  { id: 2, title: 'Problem Statement', component: ProblemSlide },
  { id: 3, title: 'Our Solution - CIRO AI', component: SolutionSlide },
  { id: 4, title: 'What Makes CIRO Different', component: DifferentiatorSlide },
  { id: 5, title: 'Case Studies & Real Impact', component: CaseStudiesSlide },
  { id: 6, title: 'Business Model & Traction', component: TractionSlide },
  { id: 7, title: 'Why Now & Why Us', component: WhyNowSlide },
  { id: 8, title: 'Market Opportunity', component: MarketSlide },
  { id: 9, title: 'The Future of CIRO', component: FutureSlide },
  { id: 10, title: 'Our Team', component: TeamSlide },
  { id: 11, title: 'The Ask', component: AskSlide },
  { id: 12, title: 'Closing Statement', component: ClosingSlide },
]

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)
  const [timeOnSlide, setTimeOnSlide] = useState(0)

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
      {/* Presentation Mode Toggle */}
      <div className={`fixed top-4 left-4 z-50 transition-opacity duration-300 ${isPresenting ? 'opacity-0' : 'opacity-100'}`}>
        <button
          onClick={togglePresentation}
          className="flex items-center gap-2 px-4 py-2 bg-ciro-500 hover:bg-ciro-600 rounded-lg transition-colors"
        >
          {isPresenting ? <Pause size={16} /> : <Play size={16} />}
          Present
        </button>
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
import type { Metadata, Viewport } from 'next'
import React, { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'CIRO AI Labs - Dynamic Pitch Deck',
  description: 'Real-time AI Command Center for Industrial Intelligence',
  keywords: 'AI, Industrial Intelligence, Real-time Analytics, Computer Vision, Autonomous Agents',
  authors: [{ name: 'CIRO AI Labs' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 
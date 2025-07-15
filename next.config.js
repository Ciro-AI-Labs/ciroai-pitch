/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for Vercel's native Next.js support
  // Removed trailingSlash and unoptimized images for better Vercel optimization
  images: {
    domains: [], // Add any external image domains if needed
  },
  eslint: {
    // Ignore ESLint during builds for faster deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Also ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 
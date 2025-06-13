import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PersonasSection from './components/PersonasSection'
import MintMigrationBanner from './components/MintMigrationBanner'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PersonasSection />
      <MintMigrationBanner />
      <TrustSection />
      <Footer />
    </main>
  )
} 
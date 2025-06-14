import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PersonasSection from './components/PersonasSection'
import MintMigrationBanner from './components/MintMigrationBanner'
import TrustSection from './components/TrustSection'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PersonasSection />
      <MintMigrationBanner />
      <TrustSection />
      <div id="newsletter-signup">
        <NewsletterSignup />
      </div>
      <Footer />
    </main>
  )
} 
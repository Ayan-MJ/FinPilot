'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Download, CheckCircle, Gift, Users, TrendingUp } from 'lucide-react'

const leadMagnets = [
  {
    id: 'mint-guide',
    title: 'Free Mint Migration Guide',
    description: 'Step-by-step guide to export and transfer your Mint data',
    icon: Download,
    cta: 'Download Free Guide'
  },
  {
    id: 'nomad-budget',
    title: 'Digital Nomad Budget Template',
    description: 'Excel template for managing multi-currency income',
    icon: Gift,
    cta: 'Get Free Template'
  },
  {
    id: 'early-access',
    title: 'Early Access Waitlist',
    description: 'Be first to try FinPilot when we launch',
    icon: Users,
    cta: 'Join Waitlist'
  }
]

interface NewsletterSignupProps {
  variant?: 'default' | 'hero' | 'footer'
  leadMagnet?: string
}

export default function NewsletterSignup({ variant = 'default', leadMagnet }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [selectedLead, setSelectedLead] = useState(leadMagnet || 'early-access')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 3000)
  }

  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
      >
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-accent" />
          Get Early Access
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading || isSubmitted}
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-dark-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-dark-base/30 border-t-dark-base rounded-full animate-spin" />
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Joined!
                </>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </div>
        </form>
        
        <p className="text-sm text-white/70 mt-3">
          🎁 Get free Mint migration guide + early access to FinPilot
        </p>
      </motion.div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className="max-w-md">
        <h3 className="font-semibold mb-4 text-white">Stay updated</h3>
        <p className="text-gray-400 text-sm mb-4">
          Get product updates, financial tips, and exclusive early access.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading || isSubmitted}
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || isSubmitted}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSubmitted ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>
      </div>
    )
  }

  // Default variant - full lead magnet selector
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-success py-20">
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-scale-4 lg:text-scale-5 font-inter font-bold mb-6">
              Ready to take control of your finances?
            </h2>
            <p className="text-scale-2 text-white/90 font-space-grotesk leading-relaxed mb-12 max-w-2xl mx-auto">
              Choose your path to smarter money management. Get exclusive resources and early access to FinPilot.
            </p>

            {/* Lead Magnet Selection */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {leadMagnets.map((magnet, index) => (
                <motion.div
                  key={magnet.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedLead(magnet.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedLead === magnet.id
                      ? 'bg-white/20 border-2 border-accent shadow-lg'
                      : 'bg-white/10 border-2 border-white/20 hover:bg-white/15'
                  }`}
                >
                  <magnet.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{magnet.title}</h3>
                  <p className="text-sm text-white/80">{magnet.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading || isSubmitted}
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white text-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className="px-8 py-4 bg-accent hover:bg-accent/90 text-dark-base font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 disabled:opacity-50 flex items-center justify-center gap-2 min-w-[180px]"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-dark-base/30 border-t-dark-base rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        Success!
                      </>
                    ) : (
                      <>
                        {leadMagnets.find(m => m.id === selectedLead)?.cta || 'Get Started'}
                        <TrendingUp className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-sm text-white/70 mt-4">
                No spam, ever. Unsubscribe anytime. 
                {selectedLead === 'early-access' && ' • Priority access to beta features'}
                {selectedLead === 'mint-guide' && ' • Instant download link'}
                {selectedLead === 'nomad-budget' && ' • Excel + Google Sheets formats'}
              </p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-8 mt-12 text-sm text-white/80"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2,847 people waiting</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Growing daily</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Launching Q1 2025</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
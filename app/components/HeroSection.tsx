'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Shield, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-dark-base text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-base via-slate-gray to-dark-base opacity-90" />
      
      {/* Content */}
      <div className="relative section-padding py-20 lg:py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo and Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center gap-4 mb-4"
              >
                <img 
                  src="/logo.png" 
                  alt="FinPilot Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-inter font-bold text-white">FinPilot</span>
                  <span className="text-sm text-gray-400">Budget Without Borders</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                Ex-Mint users welcome
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-scale-5 lg:text-scale-6 font-inter font-bold leading-tight"
              >
                The Smartest Money Hub for a{' '}
                <span className="text-accent">Borderless Life</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-scale-2 text-gray-300 font-space-grotesk leading-relaxed max-w-lg"
              >
                AI-powered budgeting for freelancers, nomads, and multi-currency pros. 
                Never lose sync again.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-8 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>99% Sync Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <span>50+ Currencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span>SOC2 Secure</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold text-scale-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2">
                  Start Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="border-2 border-gray-600 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-2xl font-semibold text-scale-2 transition-all duration-300">
                  Watch Demo
                </button>
              </motion.div>

              {/* Trust indicators */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-sm text-gray-400"
              >
                No credit card required • Import Mint data in 2 minutes
              </motion.p>
            </motion.div>

            {/* Early Access Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                  Get Early Access + Free Resources
                </h3>
                
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent hover:bg-accent/90 text-dark-base font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2 min-w-[140px]"
                    >
                      Join Waitlist
                    </button>
                  </div>
                </form>
                
                <p className="text-sm text-white/70 mt-3">
                  🎁 Free Mint migration guide + early beta access
                </p>
              </div>
            </motion.div>

            {/* Right content - App mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="relative"
            >
              <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                {/* Phone mockup */}
                <div className="relative bg-slate-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gray-100 rounded-2xl overflow-hidden">
                    {/* App screen content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-text-primary font-semibold">Dashboard</h3>
                        <div className="w-8 h-8 bg-success rounded-full animate-pulse-slow" />
                      </div>
                      
                      <div className="bg-dark-base rounded-xl p-4 text-white">
                        <div className="text-2xl font-bold text-accent">$24,567</div>
                        <div className="text-sm text-gray-300">Net Worth • USD</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-text-primary">🇺🇸 Chase Bank</span>
                          <span className="text-sm font-semibold text-success">$8,234</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-text-primary">🇪🇺 Revolut EUR</span>
                          <span className="text-sm font-semibold text-success">€12,450</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm text-text-primary">💰 Crypto Wallet</span>
                          <span className="text-sm font-semibold text-success">$3,883</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-accent text-dark-base px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
                >
                  +$127 saved
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 -left-4 bg-success text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
                >
                  ✓ Synced
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Clock, ArrowRight, CheckCircle } from 'lucide-react'

export default function MintMigrationBanner() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
      <div className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            {/* Main content */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                Mint is gone, but your data isn't
              </motion.div>

              <h2 className="text-scale-4 lg:text-scale-5 font-inter font-bold mb-6">
                Import your Mint data in{' '}
                <span className="text-accent">2 minutes</span>
              </h2>
              
              <p className="text-scale-2 text-white/90 font-space-grotesk leading-relaxed max-w-2xl mx-auto">
                Don't lose years of financial history. FinPilot's migration wizard preserves your 
                categories, budgets, and transaction history seamlessly.
              </p>
            </div>

            {/* Migration steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mb-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Download className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">1. Export from Mint</h3>
                <p className="text-sm text-white/80">Download your CSV files before Mint closes</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">2. Auto-import</h3>
                <p className="text-sm text-white/80">Our wizard maps categories and cleans data</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">3. You're done!</h3>
                <p className="text-sm text-white/80">Start budgeting with familiar shortcuts</p>
              </div>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Keep all transaction history</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Preserve custom categories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Maintain budget targets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Same keyboard shortcuts</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group bg-accent hover:bg-accent/90 text-dark-base px-8 py-4 rounded-2xl font-bold text-scale-2 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2">
                Try Migration Wizard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-scale-2 transition-all duration-300">
                Download Guide
              </button>
            </motion.div>

            {/* Urgency note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-white/70 mt-6"
            >
              ⏰ Don't wait – Mint data export becomes unavailable soon
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Award, Zap, Brain } from 'lucide-react'

const trustFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Enterprise-grade security standards'
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'Your data is encrypted in transit and at rest'
  },
  {
    icon: Eye,
    title: 'GDPR Compliant',
    description: 'Full privacy rights and data portability'
  },
  {
    icon: Award,
    title: 'Regular Audits',
    description: 'Pen-tests and bug bounty programs'
  }
]

const aiFeatures = [
  {
    icon: Brain,
    title: 'Predictive Cash Flow',
    description: 'AI forecasts your income patterns and suggests optimal savings amounts'
  },
  {
    icon: Zap,
    title: 'Smart Categorization',
    description: 'Machine learning automatically categorizes transactions with 95% accuracy'
  }
]

const integrations = [
  { name: 'Plaid', logo: '🏦' },
  { name: 'Truelayer', logo: '🔗' },
  { name: 'Akoya', logo: '🔄' },
  { name: 'Stripe', logo: '💳' },
  { name: 'AWS', logo: '☁️' },
  { name: 'OpenAI', logo: '🤖' }
]

export default function TrustSection() {
  return (
    <section className="bg-dark-base text-white py-20 lg:py-32">
      <div className="section-padding">
        <div className="container-max">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-scale-4 lg:text-scale-5 font-inter font-bold mb-6">
              AI you can <span className="text-accent">trust</span>
            </h2>
            <p className="text-scale-2 text-gray-300 font-space-grotesk leading-relaxed">
              Bank-grade security meets cutting-edge AI. We predict your financial future 
              while keeping your data private and secure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Security features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-scale-3 font-inter font-bold mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-success" />
                Bank-Grade Security
              </h3>
              <div className="grid gap-6">
                {trustFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-white/10 rounded-lg">
                      <feature.icon className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-scale-3 font-inter font-bold mb-8 flex items-center gap-3">
                <Brain className="w-8 h-8 text-primary" />
                Intelligent Automation
              </h3>
              <div className="space-y-6">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-scale-2 font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-scale-2 font-inter font-semibold mb-8 text-gray-400">
              Trusted by leading financial institutions
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-xl transition-colors"
                >
                  <div className="text-2xl">{integration.logo}</div>
                  <span className="text-sm text-gray-400 font-medium">{integration.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-scale-3 font-inter font-bold mb-4">
                Ready to experience the future of budgeting?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join thousands of professionals who trust FinPilot with their financial data.
              </p>
              <button className="bg-accent hover:bg-accent/90 text-dark-base px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
                Start Your Free Trial
              </button>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required • Full data export anytime
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Globe2, 
  DollarSign, 
  Brain, 
  Target, 
  Shield,
  Zap,
  TrendingUp 
} from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Sync Health Monitor',
    description: 'Multi-aggregator fallback ensures your accounts never break connection. Real-time status dashboard.',
    badge: '99% Uptime',
    color: 'text-success'
  },
  {
    icon: Globe2,
    title: 'Multi-Currency Dashboard',
    description: 'Track 50+ currencies with real-time FX rates. See your true net worth across all accounts.',
    badge: '50+ Currencies',
    color: 'text-primary'
  },
  {
    icon: DollarSign,
    title: 'Bill Negotiation AI',
    description: 'Human-verified savings on subscriptions and bills. No savings = no fee guarantee.',
    badge: 'Avg $25/mo saved',
    color: 'text-accent'
  },
  {
    icon: Brain,
    title: 'Income Smoothing AI',
    description: 'Perfect for freelancers. AI predicts cash flow and suggests weekly "pay yourself" amounts.',
    badge: 'Smart Forecasts',
    color: 'text-primary'
  },
  {
    icon: Target,
    title: 'Savings Challenges',
    description: 'Gamified milestones with social sharing. Stay motivated with community-driven goals.',
    badge: 'Social Proof',
    color: 'text-success'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'SOC2 Type II, GDPR compliant, end-to-end encryption. Your data stays private and secure.',
    badge: 'SOC2 Certified',
    color: 'text-slate-gray'
  }
]

export default function FeaturesSection() {
  return (
    <section className="bg-light-base py-20 lg:py-32">
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
            <h2 className="text-scale-4 lg:text-scale-5 font-inter font-bold text-text-primary mb-6">
              Built for the way you actually{' '}
              <span className="text-primary">work and live</span>
            </h2>
            <p className="text-scale-2 text-text-secondary font-space-grotesk leading-relaxed">
              Every feature designed to solve real problems faced by freelancers, 
              nomads, and multi-currency professionals.
            </p>
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 card-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon and badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-scale-3 font-inter font-semibold text-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary font-space-grotesk leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect indicator */}
                  <div className="mt-6">
                    <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-0 h-full bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 card-shadow">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-dark-base" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-text-primary">
                  Ready to take control?
                </p>
                <p className="text-xs text-text-secondary">
                  Join thousands already saving money
                </p>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, MapPin, Briefcase, Home, Users } from 'lucide-react'

const personas = [
  {
    name: 'Dana',
    title: 'Digital Nomad',
    age: 29,
    job: 'UX Designer',
    location: 'Bangkok → Berlin → Bali',
    avatar: '👩‍💻',
    icon: MapPin,
    quote: "I need one dashboard that handles USD income and EUR/THB spending without breaking my flow.",
    pain: 'App outages, FX fees, manual tracking',
    goal: 'Single dashboard, fair FX, reliable sync',
    savings: '$127/month saved on FX fees',
    gradient: 'from-primary to-accent'
  },
  {
    name: 'Raj',
    title: 'Freelance Developer',
    age: 34,
    job: 'Full-stack Developer',
    location: 'Mumbai',
    avatar: '👨‍💻',
    icon: Briefcase,
    quote: "Variable income means I never know how much to save for taxes. FinPilot handles it automatically.",
    pain: 'Budget swings, tax surprises, 4 bank accounts',
    goal: 'Income smoothing, automated tax buffer',
    savings: '$2,400/year in organized tax savings',
    gradient: 'from-success to-primary'
  },
  {
    name: 'Sam',
    title: 'Side Hustler',
    age: 26,
    job: '9-to-5 + Etsy Store',
    location: 'Austin, TX',
    avatar: '🎨',
    icon: Home,
    quote: "Between my day job and side business, I'm too busy for manual expense tracking.",
    pain: 'Time-poor, hates manual expense entry',
    goal: 'Auto-sync & instant insights',
    savings: '$89/month in subscription optimization',
    gradient: 'from-accent to-success'
  },
  {
    name: 'Farah',
    title: 'Growing Family',
    age: 38,
    job: 'Marketing Manager',
    location: 'Toronto, CA',
    avatar: '👩‍👧‍👦',
    icon: Users,
    quote: "Planning for parental leave while managing family subscriptions was overwhelming until FinPilot.",
    pain: 'Subscription overload, bill anxiety, shared budgets',
    goal: 'Bill negotiation, family budget coordination',
    savings: '$156/month through bill negotiations',
    gradient: 'from-primary to-success'
  }
]

export default function PersonasSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
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
              Built for real people with{' '}
              <span className="text-primary">real challenges</span>
            </h2>
            <p className="text-scale-2 text-text-secondary font-space-grotesk leading-relaxed">
              From digital nomads to growing families, FinPilot adapts to your unique financial journey.
            </p>
          </motion.div>

          {/* Personas grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="gradient-border">
                  <div className="gradient-border-inner p-6 h-full space-y-6">
                    {/* Avatar and info */}
                    <div className="text-center">
                      <div className="text-4xl mb-3">{persona.avatar}</div>
                      <h3 className="text-scale-3 font-inter font-bold text-text-primary">
                        {persona.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-1">
                        {persona.title}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-text-secondary">
                        <persona.icon className="w-3 h-3" />
                        {persona.location}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="w-4 h-4 text-primary/40 absolute -top-2 -left-1" />
                      <p className="text-sm text-text-secondary font-space-grotesk leading-relaxed pl-4">
                        "{persona.quote}"
                      </p>
                    </div>

                    {/* Key stats */}
                    <div className="space-y-3">
                      <div className="p-3 bg-light-base rounded-lg">
                        <p className="text-xs font-semibold text-text-primary mb-1">Pain Point</p>
                        <p className="text-sm text-text-secondary">{persona.pain}</p>
                      </div>
                      <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                        <p className="text-xs font-semibold text-success mb-1">Monthly Savings</p>
                        <p className="text-sm text-text-primary font-semibold">{persona.savings}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gray-50 hover:bg-primary hover:text-white text-text-primary py-3 rounded-xl font-semibold text-sm transition-all duration-300 group-hover:shadow-lg">
                      See {persona.name}'s Setup
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-light-base rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-scale-3 font-inter font-bold text-text-primary mb-4">
                Which persona matches your journey?
              </h3>
              <p className="text-text-secondary font-space-grotesk mb-6 leading-relaxed">
                FinPilot adapts to your unique needs, whether you're managing multiple currencies, 
                variable income, or complex family budgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Find Your Perfect Setup
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Take the Quiz
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
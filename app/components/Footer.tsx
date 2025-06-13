'use client'

import React from 'react'
import { Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'API', href: '#api' }
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Blog', href: '#blog' }
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
    { name: 'Status', href: '#status' }
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#github' },
  { name: 'Twitter', icon: Twitter, href: '#twitter' },
  { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@finpilot.app' }
]

export default function Footer() {
  return (
    <footer className="bg-dark-base text-white">
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-6 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="FinPilot Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-scale-3 font-inter font-bold">FinPilot</span>
              </div>
              <p className="text-gray-400 font-space-grotesk leading-relaxed mb-6 max-w-sm">
                Budget without borders. The smartest money hub for freelancers, nomads, 
                and multi-currency professionals.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="font-semibold mb-4 text-white">Stay updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get product updates, financial tips, and exclusive early access.
              </p>
              
              <form className="space-y-3">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                <p>© 2025 FinPilot. Budget Without Borders.</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Made with ❤️ in Toronto, Berlin & Mumbai</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-success">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow" />
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
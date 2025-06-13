import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinPilot - Budget Without Borders',
  description: 'AI-powered budgeting for freelancers, nomads, and multi-currency professionals. Never break sync again.',
  keywords: 'budgeting, finance, multi-currency, freelancers, digital nomads, AI, mint alternative',
  authors: [{ name: 'FinPilot Team' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563EB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-light-base">
        {children}
      </body>
    </html>
  )
} 
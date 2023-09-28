import Navigation from '@/components/Navigation'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fermeture sans souci',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [darkMode, setDarkMode] = useState(true)
  const darkMode = false;
  return (
    <html lang="fr">
      <body className={darkMode ? 'dark bg-gray-800' : 'bg-white'}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

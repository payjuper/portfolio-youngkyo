import type { Metadata } from 'next'
import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Young · Portfolio',
  description: 'CS @ UW–Madison · Projects, blog, and contact.',
  openGraph: {
    title: 'Young · Portfolio',
    description: 'CS @ UW–Madison · Projects, blog, and contact.',
    images: ['/og-image.png']
  },
  metadataBase: new URL('https://your-domain.example')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        <div className="container">{children}</div>
      </body>
    </html>
  )
}
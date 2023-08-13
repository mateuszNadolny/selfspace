// app/layout.tsx
import './globals.css'
import { Inter, Alegreya, Alegreya_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
})

const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya-sans',
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Selfspace',
  description: 'Take care of yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${alegreya.variable} ${alegreyaSans.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

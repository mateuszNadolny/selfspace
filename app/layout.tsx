import './globals.css'
import { Alegreya, Alegreya_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from './providers'

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
                <body
                    className={`${alegreya.variable} ${alegreyaSans.variable}`}
                >
                    <Providers>
                        <main className="w-full max-w-screen max-h-screen bg-gradient-to-b from-startGradient from-1% to-endGradient to-95%">
                            {children}
                        </main>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    )
}

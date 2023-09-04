'use client'

import { useUser } from '@clerk/nextjs'

import { MoodSelectorSection } from '@/components/moodSelectorSection'

export default function DashboardPage() {
    const { user } = useUser()
    return (
        <main className="w-full h-screen bg-gradient-to-b from-startGradient from-1% to-endGradient to-95% lg:flex lg:justify-center">
            <div className="w-full m-0 p-10 md:p-24 lg:w-3/5 ">
                <h1 className="text-2xl md:text-5xl text-slate-50 font-alegreya mb-2">
                    Welcome back, {user?.firstName}
                </h1>
                <h3 className="text-slate-500 text-xl md:text-2xl font-sans">
                    How are you feeling today?
                </h3>
                <MoodSelectorSection />
            </div>
        </main>
    )
}

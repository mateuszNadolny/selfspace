'use client'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import ToolsSection from '@/components/custom/ToolsSection'
import LogoSVG from '@/components/SVGanimations/LogoSVG'
import { DotWave } from '@uiball/loaders'

export default function DashboardPage() {
    const { isSignedIn, user, isLoaded } = useUser()

    let content = <></>

    if (!isLoaded) {
        content = <DotWave size={60} speed={1.4} color="gray" />
    } else if (!isSignedIn) {
        content = (
            <h1 className="text-3xl md:text-5xl text-slate-50 font-alegreya mb-2 lg:mb-4 animate-slide-down">
                Welcome to Selfspace
            </h1>
        )
    } else if (user) {
        content = (
            <h1 className="text-3xl md:text-5xl text-slate-50 font-alegreya mb-2 lg:mb-4 animate-slide-down">
                Welcome back {user.firstName}
            </h1>
        )
    }

    return (
        <section className="flex justify-center max-w-screen relative max-h-screen h-screen overflow-scroll lg:overflow-hidden">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-start lg:justify-center">
                <LogoSVG width={800} height={800} opacity={16} />
            </div>
            <div className="max-w-screen relative max-h-screen flex flex-col items-start">
                <div className="m-0 pl-4 pt-12 md:pt-24 mt-8 mb-8">
                    {content}

                    <h3 className="text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down">
                        {user && 'How are you feeling today?'}
                    </h3>
                </div>
                <div className="p-4">
                    <ToolsSection />
                </div>
            </div>
        </section>
    )
}

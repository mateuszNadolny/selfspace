'use client'
import { useUser } from '@clerk/nextjs'
import ToolsSection from '@/components/custom/ToolsSection'
import LogoSVG from '@/components/SVGanimations/LogoSVG'
import { DotWave } from '@uiball/loaders'

export default function DashboardPage() {
    const { user } = useUser()
    return (
        <section className="flex justify-center w-screen max-w-screen h-screen max-h-screen overflow-hidden">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-start lg:justify-center">
                <LogoSVG width={800} height={800} opacity={16} />
            </div>
            <div className="max-w-screen relative max-h-screen flex flex-col items-start">
                <div className="m-0 pl-4 pt-4 md:pt-24 mt-8 mb-8">
                    <h1 className="text-3xl md:text-5xl text-slate-50 font-alegreya mb-2 animate-slide-down">
                        {!user ? (
                            <DotWave size={60} speed={1.4} color="gray" />
                        ) : (
                            ` Welcome back, ${user.firstName}`
                        )}
                    </h1>
                    <h3 className="text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down">
                        {user && 'How are you feeling today?'}
                    </h3>
                </div>
                <div className="p-4">{user && <ToolsSection />}</div>
            </div>
        </section>
    )
}

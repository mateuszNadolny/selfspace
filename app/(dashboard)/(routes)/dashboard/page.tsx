'use client'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

import ToolsSection from '@/components/custom/ToolsSection'
import { DotWave } from '@uiball/loaders'

export default function DashboardPage() {
    const { user } = useUser()
    return (
        <section className="flex justify-center w-full ">
            <div className="absolute h-full w-full animate-slide-down flex flex-col items-center justify-center pointer-events-none">
                <Image
                    src="/leaves.svg"
                    width={900}
                    height={900}
                    alt="Leaves"
                    className="mb-3 opacity-[1%] z-[0]"
                />
            </div>
            <div className="max-w-full relative h-screen flex flex-col items-start ">
                <div className="m-0 p-4  pt-10 md:pt-24 mt-8  mb-8">
                    <h1 className="text-4xl md:text-5xl text-slate-50 font-alegreya mb-2 animate-slide-down">
                        {!user ? (
                            <DotWave size={60} speed={1.4} color="gray" />
                        ) : (
                            ` Welcome back, ${user.firstName}`
                        )}
                    </h1>
                    <h3 className="text-slate-500 text-2xl md:text-3xl font-sans ">
                        {user && 'How are you feeling today?'}
                    </h3>
                </div>
                <div className="p-4 animate-slide-down">
                    {user && <ToolsSection />}
                </div>
            </div>
        </section>
    )
}

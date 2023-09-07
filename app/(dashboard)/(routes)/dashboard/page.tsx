'use client'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

import { DotWave } from '@uiball/loaders'

export default function DashboardPage() {
    const { user } = useUser()
    return (
        <div className="max-w-full relative h-screen">
            <div className="absolute h-full w-full animate-slide-down flex flex-col items-center justify-center">
                <Image
                    src="/leaves.svg"
                    width={500}
                    height={500}
                    alt="Leaves"
                    className="mb-3 opacity-[1%]"
                />
            </div>
            <div className="w-full m-0 p-10 md:p-24 lg:ml-36 lg:w-4/5">
                <h1 className="text-4xl md:text-5xl text-slate-50 font-alegreya mb-2 animate-slide-down">
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
        </div>
    )
}

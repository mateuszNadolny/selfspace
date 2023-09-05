'use client'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

import { DotWave } from '@uiball/loaders'

export default function DashboardPage() {
    const { user } = useUser()
    return (
        <div>
            <div className="absolute animate-slide-down flex flex-col items-center justify-center h-full w-full ">
                <Image
                    src="/leaves.svg"
                    width={400}
                    height={400}
                    alt="Leaves"
                    className="mb-3  opacity-5"
                    priority
                />
            </div>
            <div className="w-full m-0 p-10 md:p-24 lg:w-3/5 ">
                <h1 className="text-2xl md:text-5xl text-slate-50 font-alegreya mb-2 animate-slide-down">
                    {!user ? (
                        <DotWave size={60} speed={1.4} color="gray" />
                    ) : (
                        ` Welcome back, ${user.firstName}`
                    )}
                </h1>
                <h3 className="text-slate-500 text-xl md:text-2xl font-sans animate-slide-down">
                    {user && 'How are you feeling today?'}
                </h3>
            </div>
        </div>
    )
}

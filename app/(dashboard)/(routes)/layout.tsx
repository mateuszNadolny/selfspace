'use client'

import { UserButton, useUser } from '@clerk/nextjs'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const { user } = useUser()
    return (
        <div className="max-h-screen h-screen w-full relative">
            <div className="absolute z-10 top-[15px] left-[10px] text-slate-500 text-sm font-sans">
                {pathname !== '/dashboard' && (
                    <div className="flex items-center justify-center gap-1">
                        <Image
                            src={'/arrow-left.svg'}
                            alt="arrow"
                            width={12}
                            height={12}
                        />
                        <Link href="/dashboard">Dashboard</Link>
                    </div>
                )}
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout

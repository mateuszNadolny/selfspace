'use client'

import { UserButton } from '@clerk/nextjs'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
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
            <div className="absolute z-10 top-[10px] right-[10px]">
                <UserButton />
            </div>
            {children}
        </div>
    )
}

export default DashboardLayout

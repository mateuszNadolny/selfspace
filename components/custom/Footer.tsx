'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'

const Footer = () => {
    return (
        <div className="w-full flex justify-center absolute bottom-[2rem]">
            <Card className="flex justify-center gap-[4rem] w-[10rem] bg-transparent border-none outline-none rounded-md font-sans text-slate-50 p-2 drop-shadow-xl">
                <motion.div
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center justify-center "
                >
                    <Link
                        href="/dashboard"
                        className="flex flex-col items-center drop-shadow-md"
                    >
                        <Image
                            src="/leaves.svg"
                            alt="leaf"
                            width={30}
                            height={30}
                        />
                        <p className="text-xs mt-1">Dashboard</p>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex flex-col items-center drop-shadow-md"
                >
                    <Link
                        href="/"
                        className="flex flex-col items-center drop-shadow-md"
                    >
                        <Image
                            src="/profile.svg"
                            alt="profile"
                            width={30}
                            height={30}
                        />
                        <p className="text-xs mt-1">Profile</p>
                    </Link>
                </motion.div>
            </Card>
        </div>
    )
}

export default Footer

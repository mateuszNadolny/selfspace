'use client'

import { motion } from 'framer-motion'

import { SessionHeaderComponentProps } from '@/lib/types'

const MeditationHeader = ({ isSession }: SessionHeaderComponentProps) => {
    return (
        <motion.div
            initial={{ rotate: 0, opacity: 1 }}
            animate={isSession ? { opacity: 0 } : { opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 1,
            }}
            className="w-screen relative m-0 flex pt-2 lg:pt-18 flex-col items-center mb-16 lg:mb-20"
        >
            <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                Meditation
            </h1>
            <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                Select duration time and add background sounds
            </h3>
        </motion.div>
    )
}

export default MeditationHeader

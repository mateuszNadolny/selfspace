'use client'

import { useEffect } from 'react'

import { useTimer } from 'react-timer-hook'

import { motion } from 'framer-motion'

import { MeditationSessionProps } from '@/lib/types'

const MeditationSession = ({
    isSession,
    setIsSession,
    expiryTimestamp,
}: MeditationSessionProps) => {
    const { seconds, minutes, isRunning, start, pause, resume, restart } =
        useTimer({
            expiryTimestamp,
            onExpire: () => console.warn('onExpire called'),
        })

    useEffect(() => {
        if (isSession) {
            const timerId = setTimeout(() => {
                restart(expiryTimestamp)
            }, 1200)

            return () => clearTimeout(timerId)
        } else if (!isSession && isRunning) {
            pause()
        }
    }, [isSession])

    const endSession = () => {
        if (setIsSession) {
            setIsSession(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, display: 'none' }}
            animate={isSession && { opacity: 1, display: 'block' }}
            transition={{
                stiffness: 260,
                damping: 20,
                duration: 2,
                restSpeed: 0.2,
            }}
            className="absolute z-10 h-screen w-screen max-h-screen max-w-screen bg-[#040321] top-0 left-0"
        >
            <div className="text-slate-50 p-4">
                <p>
                    {minutes} : {seconds}
                </p>

                <button onClick={pause}>Stop</button>
            </div>
        </motion.div>
    )
}

export default MeditationSession

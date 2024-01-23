'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { BreathingSessionProps, BreathingPhaseInterface } from '@/lib/types'

import { Button } from '@/components/ui/button'

const BreathingSession = ({
    isSession,
    setIsSession,
    breathingType,
}: BreathingSessionProps) => {
    const [currentPhase, setCurrentPhase] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [isFinished, setIsFinished] = useState<boolean>(false)

    let phases: BreathingPhaseInterface[] = [
        {
            name: 'inhale through your nose',
            duration: 4,
            scale: 1,
        },
        {
            name: 'hold your breath',
            duration: 4,
            scale: 1,
        },
        {
            name: 'exhale through your mouth',
            duration: 4,
            scale: 0,
        },
        {
            name: 'hold your lungs empty',
            duration: 4,
            scale: 0,
        },
    ]

    if (breathingType === 'calm') {
        phases = [
            {
                name: 'inhale through your nose',
                duration: 4,
                scale: 1,
            },
            {
                name: 'hold your breath',
                duration: 7,
                scale: 1,
            },
            {
                name: 'exhale through your mouth',
                duration: 8,
                scale: 0,
            },
        ]
    } else if (breathingType === 'awake') {
        phases = [
            {
                name: 'inhale through your nose',
                duration: 6,
                scale: 1,
            },
            {
                name: 'quickly exhale through your mouth',
                duration: 2,
                scale: 0,
            },
        ]
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (isSession) {
            setIsFinished(false)
            interval = setInterval(() => {
                setCurrentPhase((prev) => (prev + 1) % phases.length)
                if (currentPhase === phases.length - 1) {
                    setCount((prev) => prev + 1)
                }
            }, phases[currentPhase].duration * 1000)
        }

        if (count > 10 && isSession && setIsSession) {
            if (interval) clearInterval(interval)
            setIsFinished(true)
            setTimeout(() => {
                endSession()
            }, 5000)
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isSession, currentPhase, count])

    const endSession = () => {
        if (setIsSession) {
            setIsSession(false)
            setCurrentPhase(0)
            setCount(0)
        }
    }

    return (
        <AnimatePresence>
            {isSession && (
                <motion.div
                    initial={{ opacity: 0, zIndex: -10 }}
                    animate={{ opacity: 1, zIndex: 10 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1,
                    }}
                    className="absolute z-10 h-screen w-screen max-h-screen max-w-screen bg-[#040321] top-0 left-0"
                >
                    {isFinished && (
                        <div className="w-full h-full flex justify-center items-center">
                            <p className="p-10 text-slate-50 text-justify text-xl font-sans animate-slide-down">
                                Your breathing is now finished, please come back
                                slowly to your normal breathing pace
                            </p>
                        </div>
                    )}
                    {!isFinished && (
                        <div className="text-slate-50 w-screen h-screen flex flex-col items-center lg:justify-center font-alegreya relative">
                            <motion.div
                                className="rounded-full w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] absolute top-[10vh] lg:top-[17vh] bg-[#EFE6FF]"
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: phases[currentPhase].scale,
                                }}
                                transition={{
                                    duration: phases[currentPhase].duration,
                                    stiffness: 260,
                                    damping: 20,
                                    restSpeed: 0.1,
                                }}
                            ></motion.div>
                            <div className="flex flex-col items-center absolute bottom-[8vh]">
                                <p className="text-2xl lg:text-5xl z-20 pt-[5rem] ">
                                    {phases[currentPhase].name}
                                </p>
                                <p className="text-slate-500 lg:text-2xl p-2">
                                    round: {count} / 10
                                </p>
                                <Button
                                    onClick={endSession}
                                    className="bg-transparent rounded-2xl mt-4 z-20"
                                >
                                    Stop
                                </Button>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default BreathingSession

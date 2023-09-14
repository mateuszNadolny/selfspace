'use client'

import * as React from 'react'

import { useTimer } from 'react-timer-hook'

import { motion } from 'framer-motion'

import { MeditationFormProps } from '@/lib/types'

import { formatMinutes, formatTimeUnit } from '@/lib/utils'

const MeditationSession = ({
    isSession,
    setIsSession,
    sessionData,
}: MeditationFormProps) => {
    const expiryTimestamp = formatMinutes(sessionData.duration)
    const expiryTimestampRef = React.useRef(expiryTimestamp)

    const { seconds, minutes, isRunning, start, pause, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn('onExpire called'),
        autoStart: false,
    })

    React.useEffect(() => {
        expiryTimestampRef.current = expiryTimestamp

        if (isSession) {
            restart(expiryTimestampRef.current)
            console.log(isRunning)
        } else if (!isSession && isRunning) {
            pause()
        }
    }, [isSession, expiryTimestampRef])

    const endSession = () => {
        if (setIsSession) {
            setIsSession(false)
            restart(expiryTimestampRef.current)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={
                isSession
                    ? { opacity: 1, display: 'block' }
                    : { opacity: 0, display: 'none' }
            }
            transition={{
                stiffness: 260,
                damping: 20,
                duration: 2,
                restSpeed: 0.1,
            }}
            className="absolute z-10 h-screen w-screen max-h-screen max-w-screen bg-[#040321] top-0 left-0"
        >
            <div className="text-slate-50 w-screen h-screen flex flex-col items-center justify-center">
                <p className="text-5xl font-alegreya">
                    {formatTimeUnit(minutes)} : {formatTimeUnit(seconds)}
                </p>

                <button onClick={endSession}>Stop</button>
            </div>
        </motion.div>
    )
}

export default MeditationSession

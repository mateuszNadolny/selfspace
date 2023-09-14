'use client'

import * as React from 'react'

import { useTimer } from 'react-timer-hook'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

import { MeditationFormProps } from '@/lib/types'

import { formatMinutes, formatTimeUnit } from '@/lib/utils'

const MeditationSession = ({
    isSession,
    setIsSession,
    sessionData,
}: MeditationFormProps) => {
    const bgSoundRef = React.useRef(new Audio())

    const expiryTimestamp = formatMinutes(sessionData.duration)
    const expiryTimestampRef = React.useRef(expiryTimestamp)

    const { seconds, minutes, isRunning, pause, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            const bellSound = new Audio('/audio/ding.mp3')
            bellSound.loop = false
            bellSound.play()
            setTimeout(() => {
                endSession()
                bgSoundRef.current.pause()
                bgSoundRef.current.currentTime = 0
            }, 1500)
        },
        autoStart: false,
    })

    React.useEffect(() => {
        if (sessionData.sound !== 'none') {
            bgSoundRef.current.src = `/audio/${sessionData.sound}.ogg`
        }

        expiryTimestampRef.current = expiryTimestamp
        bgSoundRef.current.loop = true
        bgSoundRef.current.preload = 'auto'

        if (isSession) {
            bgSoundRef.current.play()
            restart(expiryTimestampRef.current)
        } else if (!isSession && isRunning) {
            bgSoundRef.current.pause()
            bgSoundRef.current.currentTime = 0
            pause()
        }
    }, [isSession, sessionData, expiryTimestampRef])

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
            <div className="text-slate-50 w-screen h-screen flex flex-col items-center justify-center font-alegreya">
                <p className="text-5xl">
                    {formatTimeUnit(minutes)} : {formatTimeUnit(seconds)}
                </p>

                <Button
                    onClick={endSession}
                    className="bg-transparent rounded-2xl mt-4"
                >
                    Stop
                </Button>
            </div>
        </motion.div>
    )
}

export default MeditationSession

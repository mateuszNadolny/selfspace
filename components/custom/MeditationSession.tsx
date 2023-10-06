'use client'

import { useRef, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MeditationFormProps } from '@/lib/types'
import { formatMinutes, formatTimeUnit } from '@/lib/utils'
import { Howl } from 'howler'

const MeditationSession = ({
    isSession,
    setIsSession,
    sessionData,
}: MeditationFormProps) => {
    const bgSoundRef = useRef<Howl | null>(null)

    const expiryTimestamp = formatMinutes(sessionData.duration)
    const expiryTimestampRef = useRef(expiryTimestamp)

    const { seconds, minutes, isRunning, pause, restart } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            const bellSound = new Howl({ src: '/audio/ding.ogg', loop: false })
            bellSound.play()
            setTimeout(() => {
                endSession()
                if (bgSoundRef.current) {
                    bgSoundRef.current.stop()
                }
            }, 1500)
        },
        autoStart: false,
    })

    useEffect(() => {
        if (sessionData.sound !== 'none') {
            if (bgSoundRef.current) {
                bgSoundRef.current.unload()
            }
            bgSoundRef.current = new Howl({
                src: [`/audio/${sessionData.sound}.ogg`],
                loop: true,
                preload: true,
                volume: 0,
            })
        }

        expiryTimestampRef.current = expiryTimestamp

        if (isSession) {
            if (bgSoundRef.current) {
                bgSoundRef.current.play()
                bgSoundRef.current.fade(0, 1, 2000)
            }
            restart(expiryTimestampRef.current)
        } else if (!isSession && isRunning) {
            if (bgSoundRef.current) {
                bgSoundRef.current.stop()
            }
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

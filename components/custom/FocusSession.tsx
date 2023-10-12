'use client'

import { useRef, useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { FocusFormProps } from '@/lib/types'
import { formatMinutes, formatTimeUnit } from '@/lib/utils'
import { Howl } from 'howler'
import { motion, AnimatePresence } from 'framer-motion'

import { CircularProgress } from '@nextui-org/react'
import { Button } from '@/components/ui/button'

const FocusSession = ({
    isSession,
    setIsSession,
    sessionData,
}: FocusFormProps) => {
    const [progress, setProgress] = useState<number>(100)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const [isBreak, setIsBreak] = useState<boolean>(false)
    const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(
        formatMinutes(sessionData.duration)
    )
    const expiryTimestampRef = useRef<Date>(expiryTimestamp)

    const { seconds, minutes, start, pause, restart, resume, isRunning } =
        useTimer({
            expiryTimestamp: expiryTimestamp,
            onExpire: () => {
                const bellSound = new Howl({
                    src: '/audio/ding.ogg',
                    loop: false,
                })
                bellSound.play()
                switchSession()
                setProgress(100)
            },

            autoStart: false,
        })

    const handleRestart = () => {
        if (setIsSession) {
            setIsSession(false)
            restart(formatMinutes(sessionData.duration), false)
            setProgress(100)
        }
    }

    const switchSession = () => {
        setIsBreak((prev) => {
            if (prev) {
                restart(formatMinutes(sessionData.duration), true)
            } else {
                restart(formatMinutes(sessionData.break), true)
            }
            return !prev
        })
    }

    // restart timer when changing form data
    useEffect(() => {
        expiryTimestampRef.current = formatMinutes(sessionData.duration)
        restart(expiryTimestampRef.current, false)
        setProgress(100)
    }, [sessionData.break, sessionData.duration])

    // update the UI of circular progress bar
    useEffect(() => {
        const totalDurationInSeconds = isBreak
            ? +sessionData.break * 60
            : +sessionData.duration * 60 // Make sure this picks the right value based on isBreak
        const remainingTimeInSeconds = minutes * 60 + seconds
        const progressValue =
            (remainingTimeInSeconds / totalDurationInSeconds) * 100
        setProgress(progressValue)
    }, [minutes, seconds, sessionData])

    return (
        <div className="relative">
            <CircularProgress
                size="lg"
                value={progress}
                color="success"
                formatOptions={{}}
                classNames={{
                    svg: 'w-96 h-96 drop-shadow-md',
                    indicator: 'stroke-white',
                    track: 'stroke-white/10',
                    value: ' font-semibold text-white',
                }}
                strokeWidth={2}
            />
            <div className="absolute font-sans inset-0 flex flex-col justify-center items-center z-10">
                {isRunning && (
                    <p className="font-alegreya text-2xl text-slate-500">
                        {isBreak ? 'Take a break' : 'Stay focused'}
                    </p>
                )}
                <p className="text-6xl mb-4  text-slate-50">{`${formatTimeUnit(
                    minutes
                )}:${formatTimeUnit(seconds)}`}</p>
                <div className="flex gap-4">
                    <Button
                        onClick={() => {
                            if (setIsSession) {
                                setIsSession(!isSession)
                                if (!isRunning) {
                                    if (isPaused) {
                                        setIsPaused(false)
                                        resume()
                                    } else {
                                        start()
                                    }
                                } else {
                                    setIsPaused(true)
                                    pause()
                                }
                            }
                        }}
                        className="rounded-full bg-transparent hover:none hover:bg-transparent"
                    >
                        <AnimatePresence mode="wait">
                            {!isSession ? (
                                <motion.img
                                    key="play"
                                    src="/play.svg"
                                    width={25}
                                    height={25}
                                    alt="Play button"
                                    initial={{ rotate: 50 }}
                                    animate={{ rotate: 0 }}
                                />
                            ) : (
                                <motion.img
                                    key="pause"
                                    src="/pause.svg"
                                    width={25}
                                    height={25}
                                    alt="Pause button"
                                    initial={{ rotate: -50 }}
                                    animate={{ rotate: 0 }}
                                />
                            )}
                        </AnimatePresence>
                    </Button>

                    <AnimatePresence>
                        <button onClick={handleRestart}>
                            <motion.img
                                key="restart"
                                src="/restart.svg"
                                width={34}
                                height={32}
                                alt="restart button"
                                whileTap={{
                                    rotate: 360,
                                    borderRadius: '100%',
                                }}
                            />
                        </button>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default FocusSession

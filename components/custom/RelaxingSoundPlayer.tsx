'use client'

import { useState, useEffect, useRef } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

import { Howl } from 'howler'

import { Button } from '../ui/button'

const sounds = ['forest', 'rain', 'fireplace', 'river', 'spaceship', 'noise']

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }
    },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

const RelaxingSoundPlayer = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [[page, direction], setPage] = useState<[number, number]>([0, 0])
    const bgSoundRef = useRef<Howl | null>(null)

    const soundIndex = wrap(0, sounds.length, page)

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
        setIsPlaying(false)
    }

    useEffect(() => {
        bgSoundRef.current = new Howl({
            src: [`/audio/${sounds[soundIndex]}.ogg`],
            loop: true,
            preload: true,
            volume: 0,
        })

        return () => {
            bgSoundRef.current?.stop()
        }
    }, [soundIndex])

    useEffect(() => {
        if (isPlaying) {
            bgSoundRef.current?.play()
            bgSoundRef.current?.fade(0, 1, 1000)
        } else {
            bgSoundRef.current?.stop()
        }
    }, [isPlaying])

    return (
        <div
            data-testid="sound-player"
            className="flex gap-10 flex-col items-center relative"
        >
            <div
                className="relative w-[80%] md:w-[50%] h-[50px] font-sans text-slate-50 text-3xl flex justify-around mt-6 mb-6"
                id="carousel"
            >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={page}
                        className=" text-center z-1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 500, damping: 40 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                        }}
                    >
                        {sounds[soundIndex].charAt(0).toUpperCase() +
                            sounds[soundIndex].slice(1).toLowerCase()}
                    </motion.div>
                </AnimatePresence>
                <motion.button
                    style={isPlaying ? { display: 'none' } : undefined}
                    disabled={isPlaying}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-0 z-10"
                    onClick={() => paginate(1)}
                >
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12H18M18 12L13 7M18 12L13 17"
                            stroke="#ffffff"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />{' '}
                    </svg>
                </motion.button>
                <motion.button
                    style={isPlaying ? { display: 'none' } : undefined}
                    disabled={isPlaying}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-0 z-10"
                    onClick={() => paginate(-1)}
                >
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12H18M6 12L11 7M6 12L11 17"
                            stroke="#ffffff"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </motion.button>
            </div>
            <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-[100px] w-[100px] rounded-full bg-transparent border border-slate-50 hover:none hover:bg-transparent mt-8"
            >
                <AnimatePresence mode="wait">
                    {!isPlaying ? (
                        <motion.img
                            key="play"
                            src="/play.svg"
                            width={50}
                            height={50}
                            alt="Play button"
                            initial={{ rotate: 50 }}
                            animate={{ rotate: 0 }}
                        />
                    ) : (
                        <motion.img
                            key="pause"
                            src="/pause.svg"
                            width={50}
                            height={50}
                            alt="Pause button"
                            initial={{ rotate: -50 }}
                            animate={{ rotate: 0 }}
                        />
                    )}
                </AnimatePresence>
            </Button>
        </div>
    )
}

export default RelaxingSoundPlayer

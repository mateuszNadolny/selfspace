'use client'

import * as React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { Button } from '../ui/button'

const RelaxingSoundPlayer = () => {
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
    const [position, setPosition] = React.useState<number>(0)
    const [sound, setSound] = React.useState<string>('forest')

    const sounds = [
        'forest',
        'rain',
        'fireplace',
        'river',
        'spaceship',
        'noise',
    ]

    return (
        <div className="flex gap-10 flex-col items-center relative">
            <div className="w-[60%] md:w-[40%] mt-10"></div>
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

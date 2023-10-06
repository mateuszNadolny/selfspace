'use client'

import { useRef, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FocusFormProps } from '@/lib/types'
import { formatMinutes, formatTimeUnit } from '@/lib/utils'
import { Howl } from 'howler'

const FocusSession = ({
    isSession,
    setIsSession,
    sessionData,
}: FocusFormProps) => {
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
                    {/* {formatTimeUnit(minutes)} : {formatTimeUnit(seconds)} */}
                </p>

                <Button
                    // onClick={endSession}
                    className="bg-transparent rounded-2xl mt-4"
                >
                    Stop
                </Button>
            </div>
        </motion.div>
    )
}

export default FocusSession

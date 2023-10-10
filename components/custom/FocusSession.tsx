'use client'

import { useRef, useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import { motion } from 'framer-motion'
import { FocusFormProps } from '@/lib/types'
import { formatMinutes, formatTimeUnit } from '@/lib/utils'
import { Howl } from 'howler'

import { CircularProgress } from '@nextui-org/react'
import { Button } from '@/components/ui/button'

const FocusSession = ({
    isSession,
    setIsSession,
    sessionData,
}: FocusFormProps) => {
    return (
        <div className="relative">
            <CircularProgress
                size="lg"
                value={+sessionData.duration}
                color="success"
                formatOptions={{}}
                // showValueLabel={true}
                classNames={{
                    svg: 'w-96 h-96 drop-shadow-md',
                    indicator: 'stroke-white',
                    track: 'stroke-white/10',
                    value: 'text-3xl font-semibold text-white',
                }}
                strokeWidth={4}
            />
            <div className="absolute font-sans text-slate-50 inset-0 flex justify-center items-center">
                <p className="text-4xl">test</p>
            </div>
        </div>
    )
}

export default FocusSession

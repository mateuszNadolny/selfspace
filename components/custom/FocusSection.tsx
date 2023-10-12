'use client'

import { useState } from 'react'

import FocusForm from './FocusForm'
import FocusSession from './FocusSession'

import { FocusSessionDataProps } from '@/lib/types'

const FocusSection = () => {
    const [isSession, setIsSession] = useState<boolean>(false)
    const [sessionData, setSessionData] = useState<FocusSessionDataProps>({
        duration: '25',
        break: '5',
    })
    return (
        <section>
            <div className="w-screen relative m-0 flex pt-10 lg:pt-24 flex-col items-center mb-16 lg:mb-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                    Focus timer
                </h1>
                <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Set your pomodoro session timer and dive into deep work
                </h3>
            </div>
            <div className="flex flex-col justify-center w-full">
                <div className="w-full flex justify-center">
                    <FocusSession
                        isSession={isSession}
                        setIsSession={setIsSession}
                        sessionData={sessionData}
                        setSessionData={setSessionData}
                    />
                </div>
                <div className="w-full">
                    <FocusForm
                        isSession={isSession}
                        setIsSession={setIsSession}
                        sessionData={sessionData}
                        setSessionData={setSessionData}
                    />
                </div>
            </div>
        </section>
    )
}

export default FocusSection

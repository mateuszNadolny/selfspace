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
        <div>
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
        </div>
    )
}

export default FocusSection

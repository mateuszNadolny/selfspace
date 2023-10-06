'use client'

import { useState } from 'react'

import FocusForm from './FocusForm'
import FocusHeader from './FocusHeader'
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
            <FocusHeader isSession={isSession} />
            <FocusForm
                isSession={isSession}
                setIsSession={setIsSession}
                sessionData={sessionData}
                setSessionData={setSessionData}
            />
            <FocusSession
                isSession={isSession}
                setIsSession={setIsSession}
                sessionData={sessionData}
                setSessionData={setSessionData}
            />
        </section>
    )
}

export default FocusSection

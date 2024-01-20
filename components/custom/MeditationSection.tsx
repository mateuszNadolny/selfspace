'use client'

import { useState } from 'react'

import MeditationForm from './MeditationForm'
import MeditationHeader from '@/components/custom/MeditationHeader'
import MeditationSession from './MeditationSession'

import { MeditationSessionDataProps } from '@/lib/types'

const MeditationSection = () => {
    const [isSession, setIsSession] = useState<boolean>(false)
    const [sessionData, setSessionData] = useState<MeditationSessionDataProps>({
        duration: '10',
        sound: 'none',
    })
    return (
        <div data-testid="meditation-section">
            <MeditationHeader isSession={isSession} />
            <MeditationForm
                isSession={isSession}
                setIsSession={setIsSession}
                sessionData={sessionData}
                setSessionData={setSessionData}
            />
            <MeditationSession
                isSession={isSession}
                setIsSession={setIsSession}
                sessionData={sessionData}
                setSessionData={setSessionData}
            />
        </div>
    )
}

export default MeditationSection

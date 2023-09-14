'use client'

import * as React from 'react'

import MeditationForm from './MeditationForm'
import MeditationHeader from '@/components/custom/MeditationHeader'
import MeditationSession from './MeditationSession'

import { MeditationSessionDataProps } from '@/lib/types'

import { formatMinutes } from '@/lib/utils'

const MeditationSection = () => {
    const [isSession, setIsSession] = React.useState<boolean>(false)
    const [sessionData, setSessionData] =
        React.useState<MeditationSessionDataProps>({
            duration: '10',
            sound: 'none',
        })
    return (
        <section>
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
        </section>
    )
}

export default MeditationSection

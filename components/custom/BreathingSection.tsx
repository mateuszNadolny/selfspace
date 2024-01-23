'use client'

import { useState } from 'react'

import BreathingSelection from './BreathingSelection'
import BreathingHeader from './BreathingHeader'
import BreathingSession from './BreathingSession'

const BreathingSection = () => {
    const [breathingType, setBreathingType] = useState<string>('box')
    const [isSession, setIsSession] = useState<boolean>(false)

    return (
        <>
            <BreathingHeader isSession={isSession} />
            <BreathingSelection
                breathingType={breathingType}
                setBreathingType={setBreathingType}
                isSession={isSession}
                setIsSession={setIsSession}
            />
            <BreathingSession
                isSession={isSession}
                setIsSession={setIsSession}
                breathingType={breathingType}
            />
        </>
    )
}

export default BreathingSection

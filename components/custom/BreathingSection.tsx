'use client'

import { useState } from 'react'

import BreathingSelection from './BreathingSelection'
import BreathingHeader from './BreathingHeader'
import BreathingSession from './BreathingSession'

const BreathingSection = () => {
    const [isBoxBreathing, setIsBoxBreathing] = useState<boolean>(true)
    const [isSession, setIsSession] = useState<boolean>(false)

    return (
        <>
            <BreathingHeader isSession={isSession} />
            <BreathingSelection
                isBoxBreathing={isBoxBreathing}
                setIsBoxBreathing={setIsBoxBreathing}
                isSession={isSession}
                setIsSession={setIsSession}
            />
            <BreathingSession
                isSession={isSession}
                setIsSession={setIsSession}
                isBoxBreathing={isBoxBreathing}
            />
        </>
    )
}

export default BreathingSection

'use client'

import { useState } from 'react'

import BreathingSelection from './BreathingSelection'

const BreathingSection = () => {
    const [isBoxBreathing, setIsBoxBreathing] = useState<boolean>(true)
    const [isSession, setIsSession] = useState<boolean>(false)

    return (
        <BreathingSelection
            isBoxBreathing={isBoxBreathing}
            setIsBoxBreathing={setIsBoxBreathing}
            isSession={isSession}
            setIsSession={setIsSession}
        />
    )
}

export default BreathingSection

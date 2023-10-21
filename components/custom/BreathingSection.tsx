'use client'

import { useState } from 'react'

import BreathingSelection from './BreathingSelection'

const BreathingSection = () => {
    const [isBoxBreathing, setIsBoxBreathing] = useState<boolean>(true)

    return (
        <BreathingSelection
            isBoxBreathing={isBoxBreathing}
            setIsBoxBreathing={setIsBoxBreathing}
        />
    )
}

export default BreathingSection

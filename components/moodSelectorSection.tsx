'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

import MoodSelectorButton from '@/components/moodSelectorButton'
import { MoodData } from '@/lib/types'

export const MoodSelectorSection = () => {
    const [selectedMood, setSelectedMood] = useState<string | null>(null)
    const [isMoodSelectedToday, setIsMoodSelectedToday] =
        useState<boolean>(false)
    const { user } = useUser()
    const userId = user?.id

    useEffect(() => {
        const moodData: MoodData | null = JSON.parse(
            localStorage.getItem(`moodData_${userId}`) || 'null'
        )
        if (moodData) {
            const today: string = new Date().toISOString().slice(0, 10)
            if (moodData.date === today) {
                setSelectedMood(moodData.mood)
                setIsMoodSelectedToday(true)
            }
        }
    }, [userId])

    const handleButtonClick = (mood: string) => {
        const today: string = new Date().toISOString().slice(0, 10)
        localStorage.setItem(
            `moodData_${userId}`,
            JSON.stringify({ mood, date: today })
        )
        setSelectedMood(mood)
        setIsMoodSelectedToday(true)
    }

    if (isMoodSelectedToday && selectedMood) {
        switch (selectedMood) {
            case 'Anxious':
                return (
                    <p className="mt-5 text-slate-300 text-xl font-sans">
                        Sorry to hear that, would you like to try our
                        meditations to help you with your anxiety?
                    </p>
                )
            case 'Calm':
                return (
                    <p className="mt-7 text-slate-300 text-2xl font-sans">
                        Good to hear that! Would you like to try our breathing
                        exercises to help you relax?
                    </p>
                )
            case 'Focused':
                return (
                    <p className="mt-5 text-slate-300 text-xl font-sans">
                        Good to hear that! How about listening to some deep
                        sounds to help you focus more?
                    </p>
                )
            case 'Relaxed':
                return (
                    <p className="mt-5 text-slate-300 text-xl font-sans">
                        Good to hear that! Would you like to try our meditations
                        to help clean your mind?
                    </p>
                )
        }
    }

    return (
        <div className="flex justify-start gap-5 lg:w-3/5 lg:mt-5">
            <MoodSelectorButton
                title="Anxious"
                url="/anxious.svg"
                onClick={() => handleButtonClick('Anxious')}
            />
            <MoodSelectorButton
                title="Calm"
                url="/calm.svg"
                onClick={() => handleButtonClick('Calm')}
            />
            <MoodSelectorButton
                title="Focused"
                url="/focus.svg"
                onClick={() => handleButtonClick('Focused')}
            />
            <MoodSelectorButton
                title="Relaxed"
                url="/relax.svg"
                onClick={() => handleButtonClick('Relaxed')}
            />
        </div>
    )
}

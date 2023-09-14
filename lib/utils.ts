import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatMinutes(time: string) {
    const minutes = parseInt(time, 10)
    const currentDate = new Date()
    const targetDate = new Date(currentDate.getTime() + minutes * 60000)
    return targetDate
}

export function formatTimeUnit(value: number) {
    return String(value).padStart(2, '0')
}

export function fadeInAudio(audio: HTMLAudioElement, duration: number) {
    let volume = 0
    audio.volume = volume

    const interval = setInterval(() => {
        volume += 0.05
        if (volume > 1) {
            volume = 1
            clearInterval(interval)
        }
        audio.volume = volume
    }, duration * 5)
}

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

export function minutesToMilliseconds(minutes: string) {
    return +minutes * 60 * 1000
}

export function formatTimestamp(timestamp: Date): string {
    const date = new Date(timestamp)

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function createSummaryText(text: string) {
    if (text.length <= 150) {
        return text
    }

    return text.substring(0, 150 - 3) + '...'
}

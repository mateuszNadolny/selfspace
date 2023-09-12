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

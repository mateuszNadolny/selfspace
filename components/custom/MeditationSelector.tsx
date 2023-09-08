'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
const MeditationSelector = () => {
    const [duration, setDuration] = useState<number>(10)
    const [sound, setSound] = useState<string>('none')

    return (
        <div className="w-full flex flex-col items-center">
            <Label
                htmlFor="duration"
                className="mb-2 text-xl text-slate-500 font-alegreya"
            >
                Duration (mins)
            </Label>

            <Input
                id="duration"
                type="number"
                min={1}
                max={45}
                value={duration}
                className="w-[180px] border-none outline-none focus:outline-slate-600 bg-transparent text-3xl font-alegreya text-slate-50 mb-5 invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setDuration(+e.target.value)
                    console.log(e.target.value)
                }}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (['.', ',', '-', '+'].includes(e.key)) {
                        e.preventDefault()
                    }
                }}
            />

            {duration > 45 && (
                <small className="text-pink-600 font-sans text-sm">
                    Max duration is 45 minutes
                </small>
            )}
            {duration === 0 && (
                <small className="text-pink-600 font-sans text-sm">
                    Min duration is 1 minute
                </small>
            )}
            <Label
                htmlFor="sounds"
                className="mb-2 mt-5 text-xl text-slate-500 font-alegreya"
            >
                Sound selection
            </Label>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">None</SelectItem>
                    <SelectItem value="dark">Forest</SelectItem>
                    <SelectItem value="system">Rain</SelectItem>
                </SelectContent>
            </Select>
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-[9rem] lg:bottom-[10rem] font-alegreya "
            >
                <Button className="text-xl bg-slate-50 text-black hover:text-slate-50 p-7">
                    Meditate
                </Button>
            </motion.div>
        </div>
    )
}

export default MeditationSelector

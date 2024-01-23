'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { MeditationFormProps } from '@/lib/types'

const formSchema = z.object({
    duration: z.string().regex(new RegExp('^(?:[1-9]|[1-4][0-9])$'), {
        message: 'Meditation should take between 1 and 40 minutes',
    }),
    sound: z.string(),
})

const MeditationForm = ({
    isSession,
    setIsSession,
    sessionData,
    setSessionData,
}: MeditationFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            duration: '10',
            sound: 'none',
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        if (setIsSession && setSessionData) {
            setIsSession(true)
            setSessionData(data)
        }
    }

    return (
        <motion.div
            className="w-full relative z-10"
            initial={{ rotate: 0, opacity: 1 }}
            animate={isSession ? { opacity: 0 } : { opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 1,
            }}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 flex flex-col items-center mb-4"
                >
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem className=" w-[250px] animate-slide-down">
                                <FormLabel className="mb-2 hover:border-slate-600 text-xl text-slate-500 font-alegreya mt-4">
                                    Duration (mins)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        className=" border-none outline-none focus:outline-slate-600 hover:outline-slate-600  bg-transparent text-3xl font-alegreya text-slate-50 invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600 animate-slide-down"
                                        onKeyPress={(
                                            e: React.KeyboardEvent<HTMLInputElement>
                                        ) => {
                                            if (
                                                ['.', ',', '-', '+'].includes(
                                                    e.key
                                                )
                                            ) {
                                                e.preventDefault()
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sound"
                        render={({ field }) => (
                            <FormItem className="w-[250px] animate-slide-down ease-in-out">
                                <FormLabel className="mb-2 hover:outline-slate-600  text-xl text-slate-500 font-alegreya ">
                                    Sound selection
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="..." />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="none">
                                            None
                                        </SelectItem>
                                        <SelectItem value="forest">
                                            Forest
                                        </SelectItem>
                                        <SelectItem value="rain">
                                            Rain
                                        </SelectItem>
                                        <SelectItem value="fireplace">
                                            Fireplace
                                        </SelectItem>
                                        <SelectItem value="river">
                                            River
                                        </SelectItem>
                                        <SelectItem value="spaceship">
                                            Spaceship
                                        </SelectItem>
                                        <SelectItem value="noise">
                                            Noise
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="font-alegreya pt-[2rem] lg:pt-[6rem] animate-slide-down"
                    >
                        <Button
                            type="submit"
                            className="text-xl bg-slate-50 text-black hover:text-slate-50 p-7 animate-slide-down"
                        >
                            Meditate
                        </Button>
                    </motion.div>
                </form>
            </Form>
        </motion.div>
    )
}

export default MeditationForm

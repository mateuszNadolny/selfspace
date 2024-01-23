'use client'

import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { motion } from 'framer-motion'

import Image from 'next/image'

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
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

import { FocusFormProps } from '@/lib/types'

const formSchema = z.object({
    duration: z
        .string()
        .regex(new RegExp('^(?:10|[1-4][0-9]|50|51|52|53|54|55)$'), {
            message: 'Session should take between 10 and 55 minutes',
        }),
    break: z.string().regex(new RegExp('^(?:[1-5])$'), {
        message: 'Break should take between 1 and 5 minutes',
    }),
})

const FocusForm = ({
    isSession,
    setIsSession,
    setSessionData,
}: FocusFormProps) => {
    const [formOpen, setFormOpen] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            duration: '25',
            break: '5',
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        if (setIsSession && setSessionData) {
            setSessionData(data)
        }
        setFormOpen(false)
    }

    return (
        <div className="w-full relative z-10 flex justify-center">
            <Popover open={formOpen} onOpenChange={setFormOpen}>
                <PopoverTrigger className="self-center mt-4">
                    <motion.div
                        className="w-full flex justify-center"
                        whileHover={
                            !isSession
                                ? { scale: 1.2, rotate: 90 }
                                : { scale: 1, rotate: 0 }
                        }
                        whileTap={
                            !isSession
                                ? {
                                      scale: 0.8,
                                      rotate: -90,
                                      borderRadius: '100%',
                                  }
                                : {
                                      scale: 1,
                                      rotate: 0,
                                  }
                        }
                        style={isSession ? { display: 'none' } : {}}
                    >
                        <Image
                            className="opacity-[30%]"
                            height={30}
                            width={30}
                            alt="settings"
                            src={'/settings.svg'}
                        />
                    </motion.div>
                </PopoverTrigger>
                <PopoverContent className="drop-shadow-xl">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-5 h-full flex flex-col items-center justify-center mb-4"
                        >
                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem className=" w-[250px] animate-slide-down text-center">
                                        <FormLabel className="mb-2 hover:border-slate-600 text-xl font-alegreya mt-4">
                                            Focus
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                className="focus:outline-slate-600 hover:outline-slate-600 bg-transparent text-xl lg:text-3xl font-alegreya  invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600 animate-slide-down"
                                                onKeyPress={(
                                                    e: React.KeyboardEvent<HTMLInputElement>
                                                ) => {
                                                    if (
                                                        [
                                                            '.',
                                                            ',',
                                                            '-',
                                                            '+',
                                                        ].includes(e.key)
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
                                name="break"
                                render={({ field }) => (
                                    <FormItem className=" w-[250px] animate-slide-down  text-center">
                                        <FormLabel className="mb-2 hover:border-slate-600 text-xl font-alegreya mt-4">
                                            Break
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                className="outline-slate-500 focus:outline-slate-600 hover:outline-slate-600 bg-transparent text-xl lg:text-3xl font-alegreya  invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600 animate-slide-down"
                                                onKeyPress={(
                                                    e: React.KeyboardEvent<HTMLInputElement>
                                                ) => {
                                                    if (
                                                        [
                                                            '.',
                                                            ',',
                                                            '-',
                                                            '+',
                                                        ].includes(e.key)
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

                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className="font-alegreya pt-[1rem] lg:pt-[2rem] animate-slide-down"
                            >
                                <Button
                                    type="submit"
                                    className="text-xl hover:text-slate-50 p-7"
                                >
                                    Save
                                </Button>
                            </motion.div>
                        </form>
                    </Form>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default FocusForm

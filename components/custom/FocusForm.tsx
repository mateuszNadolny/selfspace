'use client'

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
    duration: z.string().regex(new RegExp('^(?:[1-9]|[1-5][0-9]|60)$'), {
        message: 'Session should take between 1 and 70 minutes',
    }),
    break: z.string().regex(new RegExp('^(?:[1-5])$'), {
        message: 'Short break should take between 1 and 5 minutes',
    }),
})

const FocusForm = ({
    isSession,
    setIsSession,
    setSessionData,
}: FocusFormProps) => {
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
    }

    return (
        <div className="w-full relative z-10 flex justify-center">
            <Popover>
                <PopoverTrigger className="text-slate-50 self-center mt-4">
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
                <PopoverContent className="bg-gradient-to-b from-startGradient from-1% to-endGradient to-95%">
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
                                        <FormLabel className="mb-2 hover:border-slate-600 text-xl text-slate-500 font-alegreya mt-4">
                                            Focus
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
                                        <FormLabel className="mb-2 hover:border-slate-600 text-xl text-slate-500 font-alegreya mt-4">
                                            Break
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
                                    className="text-xl bg-slate-50 text-black hover:text-slate-50 p-7"
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

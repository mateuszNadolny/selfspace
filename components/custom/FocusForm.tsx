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
            setIsSession(true)
            setSessionData(data)
            console.log(data)
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
                    className="space-y-5 flex flex-col items-center mb-4"
                >
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem className=" w-[250px] animate-slide-down">
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
                        name="break"
                        render={({ field }) => (
                            <FormItem className=" w-[250px] animate-slide-down">
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

                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="font-alegreya pt-[1rem] lg:pt-[2rem] animate-slide-down"
                    >
                        <Button
                            type="submit"
                            className="text-xl bg-slate-50 text-black hover:text-slate-50 p-7 animate-slide-down"
                        >
                            Focus
                        </Button>
                    </motion.div>
                </form>
            </Form>
        </motion.div>
    )
}

export default FocusForm

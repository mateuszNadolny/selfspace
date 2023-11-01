'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useUser } from '@clerk/nextjs'

import { DotWave } from '@uiball/loaders'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
    title: z
        .string()
        .min(1, {
            message: 'Title is required.',
        })
        .max(50, { message: 'Title must not be longer than 50 characters.' }),
    entry: z
        .string()
        .min(10, {
            message: 'Entry must be at least 10 characters.',
        })
        .max(2000, {
            message: 'Entry must not be longer than 2000 characters.',
        }),
})

const JournalForm = () => {
    const [isPosting, setIsPosting] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const router = useRouter()
    const { user } = useUser()
    const userId = user?.id

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: '',
            entry: '',
        },
    })
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const { title, entry } = data

        if (title.length === 0 || entry.length === 0) {
            setErrorMessage('Title and entry are required')
            return
        } else {
            setErrorMessage('')
        }

        setIsPosting(true)

        const response = await fetch('api/create-entry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, entry, userId }),
        })

        if (response.ok) {
            form.reset()
            setIsPosting(false)

            toast({
                title: 'Entry added to journal',
                duration: 5000,
                variant: 'default',
                description: (
                    <Button onClick={() => router.push('/entries')}>
                        Click here to view all entries
                    </Button>
                ),
            })
        } else {
            setIsPosting(false)

            toast({
                title: 'Something went wrong',
                duration: 2000,
                variant: 'destructive',
            })
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 font-sans text-slate-50 w-screen flex flex-col items-center relative animate-slide-down"
            >
                <FormField
                    control={form.control}
                    name="title"
                    disabled={isPosting}
                    render={({ field }) => (
                        <FormItem className="w-4/5 md:w-3/5">
                            <FormLabel className="mb-2 text-xl text-slate-300 text-center">
                                Mood entry
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter the title"
                                    {...field}
                                    className="bg-transparent border-none outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:outline-slate-800 focus-visible:ring-slate-600 hover:border-0 disabled:cursor-not-allowed disabled:opacity-50 hover:ring-0"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="entry"
                    disabled={isPosting}
                    render={({ field }) => (
                        <FormItem className="w-4/5 md:w-3/5">
                            <FormControl>
                                <Textarea
                                    placeholder="Write whatever comes to your mind"
                                    className="resize-none lg:h-64 bg-transparent border-none outline-none"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {isPosting && <DotWave size={60} speed={1.4} color="gray" />}
                {errorMessage.length > 0 && (
                    <small className="text-rose-600	">{errorMessage}</small>
                )}
                {!isPosting && (
                    <Button
                        type="submit"
                        className="hover:bg-slate-50 hover:text-black animate-slide-down"
                    >
                        Add entry
                    </Button>
                )}
            </form>
            <Toaster />
        </Form>
    )
}

export default JournalForm

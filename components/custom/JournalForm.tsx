'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
import { Toaster } from '@/components/ui/toaster'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
    entry: z
        .string()
        .min(10, {
            message: 'Entry must be at least 10 characters.',
        })
        .max(300, {
            message: 'Entry must not be longer than 300 characters.',
        }),
})

const JournalForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'Entry added to journal',
            duration: 2000,
            variant: 'default',
        })
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 font-sans text-slate-50 w-screen flex flex-col items-center relative"
            >
                <FormField
                    control={form.control}
                    name="entry"
                    render={({ field }) => (
                        <FormItem className="w-4/5 md:w-3/5">
                            <FormLabel className="mb-2 text-xl text-slate-300 text-center">
                                Mood entry
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Write whatever comes to your mind"
                                    className="resize-none h-96 bg-transparent border-none outline-none "
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Toaster />
                <Button
                    type="submit"
                    className="hover:bg-slate-50 hover:text-black animate-slide-down"
                >
                    Add entry
                </Button>
            </form>
        </Form>
    )
}

export default JournalForm

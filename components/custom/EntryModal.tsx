'use client'

import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/react'
import { Textarea } from '@/components/ui/textarea'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import { EntryModalProps } from '@/lib/types'

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

const EntryModal = ({
    id,
    title,
    body,
    isOpenModal,
    setIsOpenModal,
}: EntryModalProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [isUpdating, setIsUpdating] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const trigger = useForm()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: title,
            entry: body,
        },
        values: {
            title: title,
            entry: body,
        },
        mode: 'onSubmit',
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('submitting')
        const { title, entry } = data

        if (title.length === 0 || entry.length === 0) {
            setErrorMessage('Title and entry are required')
            return
        } else {
            setErrorMessage('')
        }

        setIsUpdating(true)

        const response = await fetch(`api/update-entry?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, entry }),
        })

        if (response.ok) {
            setIsUpdating(false)
            setIsOpenModal(false)
        } else {
            setIsUpdating(false)
        }
    }

    return (
        <>
            <Modal
                isOpen={isOpenModal}
                onOpenChange={() => {
                    setIsOpenModal(!isOpenModal)
                }}
                onClose={() => {
                    setIsEditing(false)
                    form.reset()
                }}
                className="font-sans rounded-md z-10"
                placement="center"
                size="3xl"
                scrollBehavior="inside"
                classNames={{
                    body: 'py-6',
                    base: 'bg-[#191919]',
                    backdrop:
                        'backdrop-opacity-99 backdrop-blur-md  no-scrollbar',
                }}
            >
                <ModalContent className="h-full no-scrollbar">
                    {(onClose) => (
                        <>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <ModalHeader className="h=[20px] text-xl text-[#d4d4d4] mb-0 pb-0 cursor-default disabled-textarea">
                                        <FormField
                                            control={form.control}
                                            name="title"
                                            disabled={isUpdating || !isEditing}
                                            render={({ field }) => (
                                                <FormItem className="w-full">
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            className="h-[40px] min-h-[30px] no-scrollbar resize-none bg-[#191919] text-[#d4d4d4] text-lg cursor-default disabled-textarea"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </ModalHeader>
                                    <ModalBody className="no-scrollbar h-full disabled-textarea">
                                        <FormField
                                            control={form.control}
                                            name="entry"
                                            disabled={isUpdating || !isEditing}
                                            render={({ field }) => (
                                                <FormItem className="w-full h-full">
                                                    <FormControl>
                                                        <Textarea
                                                            {...field}
                                                            className="custom-textarea h-full no-scrollbar resize-none bg-[#191919] text-[#d4d4d4] text-lg disabled-textarea"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </ModalBody>
                                    <ModalFooter className="w-full flex justify-between">
                                        <small className="text-slate-600">
                                            Double click to edit
                                        </small>
                                        <div className="flex gap-3">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => {
                                                    form.reset()
                                                    setIsEditing(!isEditing)
                                                }}
                                                className="bg-[#191919] text-[#d4d4d4]"
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                type="reset"
                                                variant="outline"
                                                disabled={
                                                    isUpdating ||
                                                    !isEditing ||
                                                    !form.formState.isDirty
                                                }
                                                onClick={() => {
                                                    form.reset()
                                                    setIsEditing(false)
                                                }}
                                                className="bg-[#191919] text-[#d4d4d4]"
                                            >
                                                Undo
                                            </Button>

                                            <Button
                                                type="submit"
                                                disabled={
                                                    isUpdating ||
                                                    !isEditing ||
                                                    !form.formState.isDirty
                                                }
                                                variant="ghost"
                                                className="bg-[#d4d4d4] text-[#191919]"
                                            >
                                                Save
                                            </Button>
                                        </div>
                                    </ModalFooter>
                                </form>
                            </Form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default EntryModal

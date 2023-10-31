'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/react'

import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { EntryCardProps } from '@/lib/types'

import { formatTimestamp, createSummaryText } from '@/lib/utils'

const EntryCard = ({
    id,
    title,
    body,
    createdAt,
    handleDelete,
}: EntryCardProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Card className=" w-full h-[155px] max-h-[155px] my-2 font-sans bg-slate-200 outline-none cursor-pointer">
                <CardHeader className="pb-1">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-xs lg:text-sm p-0 m-0">
                        {formatTimestamp(createdAt)}
                    </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[54px] h-[54px] text-ellipsis overflow-hidden">
                    <p className="text-sm overflow-hidden">
                        {createSummaryText(body)}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-end relative">
                    <Button
                        className="bg-transparent p-0 hover:bg-transparent absolute bottom-0 right-3"
                        onClick={onOpen}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image
                                src="/delete.svg"
                                alt="delete button"
                                width={22}
                                height={22}
                            />
                        </motion.div>
                    </Button>
                </CardFooter>
            </Card>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="font-sans rounded-md"
                backdrop={'opaque'}
                classNames={{
                    backdrop:
                        'bg-gradient-to-t from-zinc-900 to-zinc-900/60 backdrop-opacity-20',
                }}
            >
                <ModalContent className="bg-slate-200">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Delete entry
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    {`Are you sure you want to delete '${title}' entry? This action cannot be reverted.`}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        handleDelete(id)
                                    }}
                                >
                                    Delete
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default EntryCard

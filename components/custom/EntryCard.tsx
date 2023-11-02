'use client'

import { useState } from 'react'

import Image from 'next/image'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/react'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
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

import EntryModal from './EntryModal'

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
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [entryTitle, setEntryTitle] = useState(title)
    const [entryBody, setEntryBody] = useState(body)

    return (
        <>
            <Card className=" w-full h-[160px] max-h-[160px] my-2 font-sans bg-slate-200 outline-none z-5">
                <CardHeader className="pb-1">
                    <CardTitle>{entryTitle}</CardTitle>
                    <CardDescription className="text-xs lg:text-sm p-0 m-0">
                        {formatTimestamp(createdAt)}
                    </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[54px] h-[54px] text-ellipsis overflow-hidden">
                    <p className="text-sm overflow-hidden">
                        {createSummaryText(entryBody)}
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col justify-end relative">
                    <Dropdown className="bg-slate-100 rounded-md font-sans">
                        <DropdownTrigger>
                            <Button
                                className="bg-transparent p-0 hover:bg-transparent absolute bottom-0 right-3 z-10"
                                onClick={() => {}}
                            >
                                <Image
                                    src="/more.svg"
                                    alt="open more button"
                                    width={22}
                                    height={22}
                                />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                                key="view"
                                onClick={() => {
                                    setIsOpenModal(true)
                                }}
                            >
                                View
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-rose-600 font-sans"
                                color="danger"
                                onClick={onOpen}
                            >
                                Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
                                    Are you sure you want to delete
                                    <span className="font-bold">
                                        {` "${entryBody}" `}
                                    </span>
                                    entry? This action cannot be reverted.
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
            <EntryModal
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                id={id}
                entryTitle={entryTitle}
                entryBody={entryBody}
                setEntryTitle={setEntryTitle}
                setEntryBody={setEntryBody}
            />
        </>
    )
}

export default EntryCard

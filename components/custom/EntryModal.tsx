'use client'

import { useState } from 'react'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Textarea,
} from '@nextui-org/react'
import { Button } from '@/components/ui/button'

import { EntryModalProps } from '@/lib/types'

const EntryModal = ({
    id,
    title,
    body,
    isOpenModal,
    setIsOpenModal,
}: EntryModalProps) => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <Modal
            isOpen={isOpenModal}
            onOpenChange={() => {
                setIsOpenModal(!isOpenModal)
            }}
            className="font-sans rounded-md z-10"
            placement="center"
            size="3xl"
            scrollBehavior="inside"
            classNames={{
                body: 'py-6 ',
                base: 'bg-[#191919] ',
                backdrop: 'backdrop-opacity-99 backdrop-blur-md',
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-xl text-[#d4d4d4]">
                            {title}
                        </ModalHeader>
                        <ModalBody className="no-scrollbar h-full">
                            <Textarea
                                size="lg"
                                cacheMeasurements={true}
                                minRows={2}
                                className="custom-textarea"
                                isReadOnly={!isEditing}
                                defaultValue={body}
                                onDoubleClick={() => {
                                    setIsEditing(true)
                                }}
                                onTouchMove={() => {
                                    setIsEditing(true)
                                }}
                                onBlur={() => {
                                    setIsEditing(false)
                                }}
                                classNames={{
                                    base: 'textarea-full-height',
                                    input: `no-scrollbar rounded-md p-2 textarea-full-height ${
                                        isEditing
                                            ? 'text-[#ffffff] textarea-ring'
                                            : 'text-[#d4d4d4]'
                                    }`,
                                    inputWrapper: 'textarea-full-height',
                                }}
                            />
                        </ModalBody>
                        <ModalFooter className="w-full flex justify-between">
                            <small className="text-slate-600">
                                Double click to edit
                            </small>
                            <Button
                                variant="ghost"
                                onClick={onClose}
                                className="bg-[#d4d4d4] text-[#191919]"
                            >
                                Done
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default EntryModal

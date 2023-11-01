'use client'

import { useState } from 'react'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@nextui-org/react'
import { Textarea } from '@/components/ui/textarea'

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
            <ModalContent className="h-full">
                {(onClose) => (
                    <>
                        <ModalHeader
                            className="h=[20px] text-xl text-[#d4d4d4] mb-0 pb-0 cursor-default disabled-textarea"
                            onDoubleClick={() => {
                                setIsEditing(true)
                            }}
                            onBlur={() => {
                                setIsEditing(false)
                            }}
                        >
                            <Textarea
                                className="h-[40px] min-h-[30px] no-scrollbar resize-none bg-[#191919] text-[#d4d4d4] text-lg cursor-default disabled-textarea"
                                disabled={!isEditing}
                                defaultValue={title}
                                onTouchMove={() => {
                                    setIsEditing(true)
                                }}
                            />
                        </ModalHeader>
                        <ModalBody
                            className="no-scrollbar h-full disabled-textarea"
                            onDoubleClick={() => {
                                setIsEditing(true)
                            }}
                            onBlur={() => {
                                setIsEditing(false)
                            }}
                        >
                            <Textarea
                                className="custom-textarea h-full no-scrollbar resize-none bg-[#191919] text-[#d4d4d4] text-lg disabled-textarea"
                                disabled={!isEditing}
                                defaultValue={body}
                                onTouchMove={() => {
                                    setIsEditing(true)
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

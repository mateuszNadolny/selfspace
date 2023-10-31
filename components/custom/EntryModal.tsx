'use client'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
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
                base: ' bg-[#191919] text-[#d4d4d4]',
                backdrop: 'backdrop-opacity-99 backdrop-blur-md',
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-xl">
                            {title}
                        </ModalHeader>
                        <ModalBody className="no-scrollbar">
                            <p>{body}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default EntryModal

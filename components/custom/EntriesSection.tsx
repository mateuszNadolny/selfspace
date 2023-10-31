'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'

import { Pagination, PaginationItem, PaginationCursor } from '@nextui-org/react'

import { DotWave } from '@uiball/loaders'

import { useUser } from '@clerk/nextjs'

import EntryCard from './EntryCard'

import { EntryInterface } from '@/lib/types'

const entriesPerPage = 3

const EntriesSection = () => {
    const [entries, setEntries] = useState<EntryInterface[]>([])
    const [currentEntries, setCurrentEntries] = useState<EntryInterface[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { user } = useUser()
    const userId = user?.id

    useEffect(() => {
        setIsLoading(true)
        const getEntries = async () => {
            if (!userId) return
            const response = await fetch(`/api/get-entries?userId=${userId}`)
            const data = await response.json()
            console.log(data)
            setEntries(data)
            setCurrentEntries(data.slice(0, entriesPerPage))
            setIsLoading(false)
        }
        getEntries()
    }, [userId])

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        const lastEntryIndex = page * entriesPerPage
        const firstEntryIndex = lastEntryIndex - entriesPerPage
        setCurrentEntries(entries.slice(firstEntryIndex, lastEntryIndex))
    }

    return (
        <div className="flex flex-col justify-start items-center w-full h-full max-h-screen absoulte">
            <div className="max-h-[58vh] lg:max-h-[60vh] overflow-y-scroll flex flex-col items-center mb-3 no-scrollbar">
                {!isLoading && entries.length === 0 && (
                    <p className="text-slate-500 font-alegreya text-lg lg:text-2xl text-center p-5">
                        No entries yet. Add your first entry in{' '}
                        <Link className="text-slate-200" href={'/journal'}>
                            here
                        </Link>
                    </p>
                )}
                {isLoading && <DotWave size={100} speed={1.4} color="gray" />}
                {!isLoading &&
                    currentEntries.map((entry) => (
                        <motion.div
                            key={entry.id}
                            layoutId={entry.id}
                            onClick={() => setSelectedId(entry.id)}
                            className="lg:w-[30%] md:w-[50%] w-[90%] flex justify-center"
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.995,
                            }}
                        >
                            <EntryCard {...entry} />
                        </motion.div>
                    ))}

                {/* <AnimatePresence>
                    {selectedId && (
                    //     <motion.div layoutId={selectedId}>
                    //     <motion.h5>{entries.selectedId.title}</motion.h5>
                    //     <motion.h2>{item.title}</motion.h2>
                    //     <motion.button onClick={() => setSelectedId(null)} />
                    //   </motion.div>
                    )}
                </AnimatePresence> */}
            </div>
            {!isLoading && entries.length > 0 && (
                <Pagination
                    loop
                    showControls
                    className="overflow-hidden text-slate-50 absolute bottom-[5vh]"
                    classNames={{
                        cursor: 'rounded-xl font-sans',
                    }}
                    size="sm"
                    color="secondary"
                    initialPage={1}
                    total={Math.ceil(entries.length / 3)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            )}
        </div>
    )
}

export default EntriesSection

'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { Pagination } from '@nextui-org/react'

import { DotWave } from '@uiball/loaders'

import { useUser } from '@clerk/nextjs'

import EntryCard from './EntryCard'
import NonLogged from './NonLogged'

import { EntryInterface } from '@/lib/types'

const entriesPerPage = 3

const EntriesSection = () => {
    const [entries, setEntries] = useState<EntryInterface[]>([])
    const [currentEntries, setCurrentEntries] = useState<EntryInterface[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { user, isSignedIn } = useUser()
    const userId = user?.id

    useEffect(() => {
        setIsLoading(true)
        const getEntries = async () => {
            if (!userId) return
            const response = await fetch(`/api/get-entries/${userId}`)
            console.log(response)
            const data = await response.json()
            setEntries(data)
            setCurrentEntries(data.slice(0, entriesPerPage))
            setIsLoading(false)
        }
        getEntries()
    }, [userId, entries.length])

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        const lastEntryIndex = page * entriesPerPage
        const firstEntryIndex = lastEntryIndex - entriesPerPage
        setCurrentEntries(entries.slice(firstEntryIndex, lastEntryIndex))
    }

    async function handleDelete(id: string) {
        try {
            const response = await fetch(`/api/delete-entry/${id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                setEntries(entries.filter((entry) => entry.id !== id))
                setCurrentEntries(
                    currentEntries.filter((entry) => entry.id !== id)
                )
            }
        } catch (error) {
            console.error(error)
        }
    }

    if (!isSignedIn) {
        return <NonLogged />
    }

    return (
        <div className="flex flex-col justify-center items-center w-full z-10 relative">
            <div className="max-h-[58vh] lg:max-h-[60vh] w-full overflow-y-scroll flex flex-col items-center mb-3 no-scrollbar z-10">
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
                        >
                            <EntryCard {...entry} handleDelete={handleDelete} />
                        </motion.div>
                    ))}
            </div>
            {!isLoading && entries.length > 3 && (
                <Pagination
                    loop
                    showControls
                    className="overflow-hidden text-slate-50 fixed bottom-[8vh]"
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

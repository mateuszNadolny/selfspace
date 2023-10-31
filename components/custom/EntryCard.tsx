import Image from 'next/image'

import { motion } from 'framer-motion'

import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
    CardTitle,
    CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { EntryInterface } from '@/lib/types'

import { formatTimestamp } from '@/lib/utils'

const EntryCard = ({ id, title, body, createdAt }: EntryInterface) => {
    return (
        <Card className=" w-full h-[165px] my-2 font-sans bg-slate-200 outline-none cursor-pointer">
            <CardHeader className="pb-1">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="text-xs lg:text-sm p-0 m-0">
                    {formatTimestamp(createdAt)}
                </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[54px] text-ellipsis overflow-hidden">
                <p className="text-sm overflow-hidden">{body}</p>
            </CardContent>
            <CardFooter>
                <Button className="bg-transparent p-0 hover:bg-transparent mr-4">
                    <motion.div
                        whileHover={{
                            scale: 0.9,
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image
                            src="/edit.svg"
                            alt="edit button"
                            width={20}
                            height={20}
                        />
                    </motion.div>
                </Button>
                <Button className="bg-transparent p-0 hover:bg-transparent">
                    <motion.div
                        whileHover={{
                            scale: 0.9,
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
    )
}

export default EntryCard

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { ToolCardProps } from '@/lib/types'

import React from 'react'

const ToolCard = ({
    title,
    url,
    href,
    primaryColor,
    secondaryColor,
}: ToolCardProps) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Link href={href}>
                <Card
                    style={{ backgroundColor: primaryColor }}
                    className={`bg-[${primaryColor}] text-${secondaryColor} font-sans border-none rounded-3xl`}
                >
                    <CardHeader>
                        <CardTitle>
                            <Image
                                src={url}
                                alt={title}
                                width={30}
                                height={30}
                                className="mb-0"
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl lg:text-2xl">{title}</p>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}

export default ToolCard
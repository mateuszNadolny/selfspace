'use client'
import { motion } from 'framer-motion'
import { SVGComponentProps } from '@/lib/types'

const pathVariants = {
    hidden: {
        opacity: 1,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0.0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 0.8)',
    },
}

const JournalSVG = ({ width, height, opacity }: SVGComponentProps) => {
    return (
        <motion.svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 1024 1024"
            className="path-item w-auto absolute lg:relative top-[9rem] lg:top-auto lg:w-1/2 pointer-event-none"
            style={{ opacity: opacity / 100 }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 12, ease: 'easeInOut' },
                    fill: { duration: 15, ease: 'easeInOut' },
                }}
                d="M854.29 957.76c9.37 12.88 1.84-31.2 12.85-62.4s27.53-51.36 27.53-102.78-47.72-141.32-69.74-200.05-16.52-91.77-66.07-170.69-112-163.34-176.19-194.55-77.09-102.78-154.18-135.81S193.57 108 129.33 63.95c130.31 134 148.66 268 211.06 365.23s84.43 62.4 150.5 143.16 33.14 88 97.27 179.86c74.34 106.45 192.72 104.61 266.13 205.56z"
                fill="rgba(255, 255, 255, 0)"
            />
        </motion.svg>
    )
}

export default JournalSVG

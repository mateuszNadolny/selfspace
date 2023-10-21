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
        fill: 'rgba(255, 255, 255, 0.5)',
    },
}

const BreathingSVG = ({ width, height, opacity }: SVGComponentProps) => {
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
                    default: { duration: 8, ease: 'easeInOut' },
                    fill: { duration: 15, ease: 'easeInOut' },
                }}
                className="stroke-2"
                d="M179.44 406.4c14.06-5.76 17.53-101.63 46.87-137.58s18.84 27.54 42.56 17.82S318 182.15 387.5 139.8c15.61-9.54 24.58 3.15 20.06 18.22s-16.08 29.89-0.32 39.17 41.15-47.08 79.71-66.67 55.6-13.34 61.22-1.17-17.78 21.14-3.22 29 39.32-19.27 67.8-29.68 51.87-19.37 60.41-7.76-13.27 16.77 0.14 29.53 54.49-29.89 89.24-40.35 5.8 20.29 20.73 33.69 43.11-7 64.9-1.41 12.51 21.31 34.73 38.65 66.28 8.09 75.57 20-16.38 19.98-31.15 63.83-1.45 71.74-18.1 98.71-80.51 49.36-79.71 66.67 55-2 46 15.68-31 42.4-53.52 53.52-60 13.27-64.37 25.75 45.67 14.65 41.66 26.37c-6.13 18.86-85.82 36.45-97.77 56.45s49.06 32.15 31.74 43.65-81.51 7-97.7 24.3 54.86 14 41.08 34.16-38.39 27.7-67.87 34.11-60-1.87-66.07 17 65.61 31 48.09 45.14-99.73-11.36-115.09 1.83 43.25 22.57 13.94 37.1-117.23-8-131.34 12.9 81 13.38 46.32 40.83-149.15 17.06-183.47 0.9C137.53 865 78.73 753.66 69.38 697.05s-6.24-59.77 0.76-76.49 36.32 34.85 30.95-12.05S71.91 548.06 82 511.19s22.07 26.21 26.46-18.4 3.14-103.59 28.71-118.12c40.08-22.78 22.83 39.68 42.27 31.73z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 8, ease: 'easeInOut' },
                    fill: { duration: 15, ease: 'easeInOut' },
                }}
                className="stroke-2"
                d="M845.45 220.74c-65.39-5.94-617.74 280.88-682.78 521.6 128.65-187.47 682.78-521.6 682.78-521.6z"
                fill="rgba(255, 255, 255, 0.7)"
            />
        </motion.svg>
    )
}

export default BreathingSVG

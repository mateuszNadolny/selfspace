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
        fill: 'rgba(255, 255, 255, 0.2)',
    },
}

const SoundSVG = ({ width, height, opacity }: SVGComponentProps) => {
    return (
        <motion.svg
            data-testid="animated-svg"
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
                    default: { duration: 6, ease: 'easeInOut' },
                    fill: { duration: 13, ease: 'easeInOut' },
                }}
                className="stroke-2"
                d="M450.72 418.17c-42.29-21.86-144.5-220-171.65-198.22s-40.59 114.28 0.29 171.31 132 97 153.52 129.58 18.45 57.07 13.36 63.2S262.49 462 217.66 485.53s-28.41 84.69 17.56 132.54S427 651.39 455.57 672.76s32.72 55 20.49 55-145.88-32.38-192.77-24.15-68.25 39.89 0.12 73.42 180.26 8.87 199.28 28.21 6.8 28.54-7.47 29.58-110.14-4.91-143.78 0.24 6.21 56.07 23.57 69.3 80.59 19.24 98.94 16.15 36.67-26.58 51-20.48 3.14 45.88 8.25 53 46.92 9.1 53-0.09-10.26-37.71-0.09-51 32.65 11.16 66.28-1.13 109-70.55 111-104.2-132.52 27.76-167.19 26.8c-24.48-4-34.71-21.36-19.43-30.56s228.33-55.45 244.57-96.27 4-34.68-21.47-34.63S605.6 724.45 590.26 700 791 610 813.3 555.9s29.37-119.36-0.22-127.47-147.62 137.92-194.54 130.86-1.06-21.41 19.29-48 132.36-120.51 133.32-154.16 10.08-67.32-27.65-71.33-129.27 135.84-149.69 123.63 52.89-78.61 64-143.89S632.09 133 611.7 137.14s-19.37 4.11-19.34 22.47 10.33 79.52-1.85 114.21-13.14 60.18-23.35 54.08-10.27-43.83-4.2-73.41 23.3-92.83 13.07-112.19S545.27 48.53 467.8 68s-72.25 89.86-65 136.75 27.67 83.57 45.09 128.41 21.71 94.77 2.83 85.01z"
                fill="#ffffff"
            />
        </motion.svg>
    )
}

export default SoundSVG

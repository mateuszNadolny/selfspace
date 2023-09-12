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

const MeditationSVG = ({ width, height, opacity }: SVGComponentProps) => {
    return (
        <motion.svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 1024 1024"
            className="path-item absolute lg:w-1/2 pointer-event-none"
            style={{ opacity: opacity / 100 }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M811.52 656.896c0.512 24.064-2.048 48.128-10.24 70.656-8.704 26.112-31.232 40.448-53.248 54.784-39.424 25.6-86.016 27.136-130.048 12.288 6.656-4.096 13.312-8.704 19.456-13.312 7.68-5.12 0.512-17.408-7.168-12.288s-15.36 10.24-22.528 15.36c-19.456-49.152 6.144-115.2 61.952-122.368 47.616-5.632 98.304 18.944 141.824-5.12zM790.528 267.264c0.512 24.064-2.048 48.128-9.728 70.656-8.704 26.112-31.232 40.448-53.248 54.784-39.424 25.6-86.016 27.136-129.536 12.288 6.656-4.096 12.8-8.704 19.456-13.312 7.68-5.12 0.512-17.408-7.168-12.288l-23.04 15.36c-19.456-49.152 6.144-115.2 61.952-122.368 47.104-5.632 97.792 18.944 141.312-5.12zM790.528 457.728c0.512 24.064-2.048 48.128-9.728 70.656-8.704 26.112-31.232 40.448-53.248 54.784-39.424 25.6-86.016 27.136-129.536 12.288 6.656-4.608 12.8-8.704 19.456-12.8 7.68-5.12 0.512-17.408-7.168-12.288l-23.04 15.36c-19.456-49.152 6.144-115.2 61.952-122.368 47.104-6.144 97.792 18.432 141.312-5.632zM594.432 163.84c14.848 26.624 12.8 54.272-3.584 79.872-14.336 22.016-35.84 38.4-61.44 44.032v-27.136c0-9.216-14.336-9.216-14.336 0v24.064c-17.408-13.312-32.256-29.696-43.52-48.128-13.824-22.528-18.432-46.08-18.432-72.192 0-29.184 1.536-52.736 21.504-75.776 13.824-15.872 30.208-29.696 47.616-40.96 4.608 47.616 49.664 75.776 72.192 116.224z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M801.28 727.552c7.68-22.528 10.24-47.104 10.24-70.656-43.52 24.064-94.208-0.512-141.312 5.632-55.808 7.168-81.408 73.216-61.952 122.368 7.68-5.12 15.36-10.24 22.528-15.36 7.68-5.12 14.848 7.168 7.168 12.288-6.656 4.608-12.8 8.704-19.456 13.312 43.52 14.848 90.112 13.312 130.048-12.288 22.016-14.848 44.032-28.672 52.736-55.296z m-165.888-69.12c55.808-29.696 124.928 19.456 177.664-19.456 3.584-2.56 7.68-1.024 9.216 2.56 1.536 1.024 3.072 3.072 3.072 5.632 1.536 31.232-1.536 64.512-13.312 93.696-10.24 24.064-31.744 37.888-52.736 51.712-46.592 31.232-102.912 33.28-154.624 12.8-1.024-0.512-2.048-1.024-2.56-1.536-3.584-1.024-5.632-4.608-5.12-8.192-19.968-45.568-7.68-113.152 38.4-137.216zM804.352 257.024c1.536 31.232-1.536 64.512-13.312 93.696-10.24 24.064-31.744 37.888-52.736 51.712-46.592 31.232-102.912 33.28-154.624 12.8-1.024-0.512-2.048-1.024-2.56-1.536-3.072-1.024-5.632-4.608-5.12-8.192-19.968-45.056-7.68-112.128 38.4-136.704 56.32-29.696 124.928 19.456 177.664-19.456 3.584-2.56 7.68-1.024 9.216 2.56 1.536 0.512 2.56 2.56 3.072 5.12z m-155.136 15.36c-55.808 7.168-81.408 73.216-61.952 122.368l23.04-15.36c7.68-5.12 14.848 7.168 7.168 12.288-6.656 4.608-12.8 8.704-19.456 13.312 43.52 14.848 90.112 13.312 129.536-12.288 22.016-14.336 44.544-28.672 53.248-54.784 7.68-22.528 10.24-47.104 9.728-70.656-43.52 24.064-94.208-0.512-141.312 5.12zM727.04 583.168c22.016-14.336 44.544-28.672 53.248-54.784 7.68-22.528 10.24-47.104 9.728-70.656-43.52 24.064-94.208-0.512-141.312 5.632-55.808 7.168-81.408 73.216-61.952 122.368l23.04-15.36c7.68-5.12 14.848 7.168 7.168 12.288-6.656 4.608-12.8 8.704-19.456 12.8 43.52 14.848 90.112 13.312 129.536-12.288z m11.264 9.728c-46.592 31.232-102.912 33.28-154.624 12.8-1.024-0.512-2.048-1.024-2.56-1.536-3.072-1.024-5.632-4.608-5.12-8.192-19.968-45.056-7.68-112.128 38.4-136.704 56.32-29.696 124.928 19.456 177.664-19.456 3.584-3.072 7.68-1.024 9.216 2.048 1.536 1.024 3.072 3.072 3.072 5.632 1.536 31.232-1.536 64.512-13.312 93.696-10.24 24.064-31.744 37.888-52.736 51.712z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M447.488 697.344c12.8 22.528 17.92 48.128 11.776 72.704-7.68-4.096-15.872-7.68-23.552-11.776-8.192-4.096-15.36 8.192-7.168 12.288 7.168 3.584 14.848 7.168 22.016 10.752-19.456 9.728-39.936 15.872-61.44 17.92-26.112 2.56-49.664-3.072-73.216-14.336-23.04-11.264-44.032-21.504-56.32-45.568-10.24-20.992-16.384-44.544-19.456-68.096 46.592 17.408 92.16-12.8 139.776-13.824 29.696-0.512 52.736 13.824 67.584 39.936z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M514.048 726.016c0-28.16-0.512-55.808-1.024-83.968-1.536-113.152-3.584-226.304-3.584-339.456 0-1.536 0.512-3.072 1.024-4.096-20.48-14.848-37.888-33.28-51.2-54.784-15.36-24.576-20.48-50.688-20.48-79.36 0-30.208 1.536-56.32 20.992-80.384 17.408-21.504 39.424-39.424 63.488-53.76 2.048-1.536 4.608-1.536 6.144-0.512 3.584 0 6.656 2.56 6.656 6.656-2.56 65.536 78.336 95.744 82.944 160.256 3.584 51.2-44.032 96.768-91.648 105.472-1.024 1.024-2.56 1.536-4.096 2.048 0 64 0.512 128.512 1.536 192.512 0.512 53.248 1.536 106.496 2.048 159.744 0.512 28.16 0.512 56.832 0.512 85.504 0 22.528-1.536 45.568 1.024 68.096 4.608 35.84 14.848 71.68 25.6 105.984 9.216 30.72 18.432 63.488 33.792 91.648 4.608 8.192-7.68 15.36-12.288 7.168-17.92-32.768-28.16-71.168-38.912-107.008-9.728-33.28-19.456-67.584-23.04-102.4-1.024-26.112 0.512-53.248 0.512-79.36z m-39.424-637.952c-19.968 23.04-21.504 46.592-21.504 75.776 0 26.624 4.608 49.664 18.432 72.192 11.264 18.432 26.112 34.816 43.52 48.128v-24.064c0-9.216 14.336-9.216 14.336 0v27.136c25.6-5.632 47.104-22.016 61.44-44.032 16.896-25.6 18.432-52.736 3.584-79.872-22.528-40.448-67.584-68.608-72.192-116.736-17.408 12.288-33.792 25.6-47.616 41.472z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M370.688 260.608c55.808 7.168 81.408 73.216 61.952 122.368-7.68-5.12-15.36-10.24-22.528-15.36-7.68-5.12-14.848 7.168-7.168 12.288 6.656 4.608 12.8 8.704 19.456 13.312-43.52 14.848-90.112 13.312-129.536-12.288-22.016-14.336-44.544-28.672-53.248-54.784-7.68-22.528-10.24-47.104-10.24-71.168 43.52 24.064 94.208-0.512 141.312 5.632zM370.688 451.072c55.808 7.168 81.408 73.216 61.952 122.368-7.68-5.12-15.36-10.24-22.528-15.36-7.68-5.12-14.848 7.168-7.168 12.288 6.656 4.608 12.8 8.704 19.456 13.312-43.52 14.848-90.112 13.312-129.536-12.288-22.016-14.336-44.544-28.672-53.248-54.784-7.68-22.528-10.24-47.104-10.24-71.168 43.52 24.576 94.208 0 141.312 5.632z"
                fill="rgba(255, 255, 255, 0)"
            />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 9, ease: 'easeInOut' },
                    fill: { duration: 9, ease: 'easeInOut' },
                }}
                d="M315.392 785.408c23.552 11.264 47.104 17.408 73.216 14.336 21.504-2.048 42.496-8.704 61.44-17.92-7.168-3.584-14.848-7.168-22.016-10.752-8.192-4.096-1.024-16.384 7.168-12.288 7.68 4.096 15.872 7.68 23.552 11.776 6.144-25.088 1.024-50.688-11.776-72.704-14.848-25.6-37.888-40.448-68.096-39.424-47.616 1.024-93.184 31.744-139.776 13.824 3.072 23.552 8.704 47.104 19.456 68.096 12.8 23.552 33.792 33.792 56.832 45.056z m-78.848-130.56c57.344 31.232 119.808-29.184 179.712-5.12 47.104 18.944 68.608 81.92 55.296 128.512 1.024 3.072-0.512 6.656-3.072 8.704-0.512 1.024-1.536 2.048-2.56 2.56-23.552 13.312-50.176 22.016-77.312 24.576-28.672 3.072-54.784-4.096-80.384-16.384-26.112-12.8-49.152-25.088-61.952-52.736-12.288-25.6-18.944-53.76-21.504-82.432-0.512-3.072 1.024-4.608 3.072-5.632 2.048-2.56 5.12-4.096 8.704-2.048zM370.688 260.608c-47.104-5.632-97.792 18.944-141.312-5.632-0.512 24.064 2.048 48.128 10.24 71.168 8.704 26.112 31.232 40.448 53.248 54.784 39.424 25.6 86.016 27.136 129.536 12.288-6.656-4.096-12.8-8.704-19.456-13.312-7.68-5.12-0.512-17.408 7.168-12.288s15.36 10.24 22.528 15.36c19.456-49.152-5.632-115.712-61.952-122.368z m65.536 142.336c-51.712 20.48-108.032 18.432-154.624-12.8-22.016-14.336-43.52-29.184-53.248-54.272-11.264-28.16-14.336-60.928-12.8-91.136 0-2.56 1.536-4.608 3.072-5.632 1.536-3.072 5.632-5.12 9.216-2.56 52.224 38.4 121.344-10.24 177.664 19.456 46.08 24.576 58.88 91.648 38.4 136.704 0.512 3.584-2.048 7.68-5.12 8.192-1.024 1.024-1.536 1.536-2.56 2.048zM370.688 451.072C323.584 445.44 272.896 470.016 229.376 445.44c-0.512 24.064 2.048 48.128 10.24 71.168 8.704 26.112 31.232 40.448 53.248 54.784 39.424 25.6 86.016 27.136 129.536 12.288-6.656-4.096-12.8-8.704-19.456-13.312-7.68-5.12-0.512-17.408 7.168-12.288s15.36 10.24 22.528 15.36c19.456-48.64-5.632-115.2-61.952-122.368z m-142.848-23.552c52.224 38.4 121.344-10.24 177.664 19.456 46.08 24.576 58.88 91.648 38.4 136.704 0.512 3.584-2.048 7.68-5.12 8.192-0.512 0.512-1.536 1.024-2.56 1.536-51.712 20.48-108.032 18.432-154.624-12.8-22.016-14.336-43.52-29.184-53.248-54.272-11.264-28.672-14.336-60.928-12.8-91.136 0-2.56 1.536-4.608 3.072-5.632 1.536-2.56 5.632-4.608 9.216-2.048z"
                fill="rgba(255, 255, 255, 0)"
            />
        </motion.svg>
    )
}

export default MeditationSVG

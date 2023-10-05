'use client'
import { motion } from 'framer-motion'
import { SVGComponentProps } from '@/lib/types'

const pathVariants = {
    hidden: {
        opacity: 1,
        pathLength: 0,
        fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'rgba(255, 255, 255, 0.8)',
    },
}

const FocusSVG = ({ width, height, opacity }: SVGComponentProps) => {
    return (
        <motion.svg
            viewBox="0 0 64 64"
            width={`${width}px`}
            height={`${height}px`}
            className="path-item w-full absolute lg:relative top-[9rem] lg:top-auto lg:w-1/2 pointer-event-none flex items-center justify-center"
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
                className="stroke-[0.6]"
                d="M61.96 31.649C60.747 10.563 49.854 7.48 41.072 7.479h-.001c-2.219.001-4.301.197-6.06.351c-.015-.959.026-1.986.187-3.121c.003-.016-.004-.03-.006-.045c.002-.008.006-.016.006-.024c0-.353-.664-.64-1.486-.64c-.82 0-1.484.287-1.484.64a24.454 24.454 0 0 1-.917 3.371c-11.587.07-26.85 1.908-29.18 22.922C.441 46.184 15.336 60 32.093 60S62.841 46.975 61.96 31.649M35.635 10.787c.409-.036.833-.073 1.269-.108c-.524.211-1.033.43-1.512.65c-.035-.158-.059-.346-.091-.514l.334-.028m-5.559.238c-.131.273-.259.535-.382.776a9.36 9.36 0 0 0-.933-.742c.438-.015.876-.025 1.315-.034m22.571 37.301C47.442 53.839 39.95 57 32.093 57c-8.007 0-15.96-3.544-21.276-9.48c-4.307-4.811-6.333-10.584-5.704-16.257c1.181-10.648 5.892-15.734 11.938-18.143c5.858-1.088 11.37.91 11.37.91s-12.529-3.11-17.442 12.988c6.183-9.639 16.823-6.802 19.622-10.355c0 6.869 4.992 3.536 7.515 6.63c3.246 3.978 4.434 11.106 8.168 12.51c-3.678-7.896 2.344-7.588-6.117-18.185c4.457 2.769 6.768-.033 12.854 2.462c-5.207-8.511-13.537-6.05-13.537-6.05s3.39-3.089 6.984-3.003c6.072 1.418 11.657 6.189 12.498 20.795c.342 5.965-1.902 11.826-6.319 16.504"
            />
        </motion.svg>
    )
}

export default FocusSVG

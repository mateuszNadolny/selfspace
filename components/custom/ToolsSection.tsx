import ToolCard from './ToolCard'
import { motion } from 'framer-motion'

const tools = [
    {
        title: 'Mood Journal',
        url: '/mood-journal.svg',
        href: '/journal',
        primaryColor: '#051d3d',
        secondaryColor: 'slate-50',
    },
    {
        title: 'Journal Entries',
        url: '/journal-entries.svg',
        href: '/entries',
        primaryColor: '#0e3c6c',
        secondaryColor: 'slate-50',
    },
    {
        title: 'Meditation',
        url: '/leaf-meditation.svg',
        href: '/meditation',
        primaryColor: '#1a5c9e',
        secondaryColor: 'slate-50',
    },
    {
        title: 'Breathing',
        url: '/breathing.svg',
        href: '/breathing',
        primaryColor: '#2478cc',
    },
    {
        title: 'Focus',
        url: '/focus.svg',
        href: '/focus',
        primaryColor: '#3d9bff',
    },
    {
        title: 'Relaxing sounds',
        url: '/relaxing-sounds.svg',
        href: '/sounds',
        primaryColor: '#00b2d6',
    },
]

const ToolsSection = () => {
    return (
        <div>
            <p className="font-alegreya text-slate-50 mb-6 text-2xl">
                Try one of our tools
            </p>
            <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-5 lg:gap-7">
                {tools.map((tool, i) => (
                    <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: i * 0.1,
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <ToolCard {...tool} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ToolsSection

import ToolCard from './ToolCard'

const ToolsSection = () => {
    return (
        <section>
            <p className="font-alegreya text-slate-50 mb-6 text-2xl">
                Try one of our tools
            </p>
            <div className="grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-5 lg:gap-7">
                <ToolCard
                    title="Mood Journal"
                    url="/mood-journal.svg"
                    primaryColor="#051d3d"
                    secondaryColor="slate-50"
                    href="/journal"
                />
                <ToolCard
                    title="Journal Entries"
                    url="/journal-entries.svg"
                    primaryColor="#0e3c6c"
                    secondaryColor="slate-50"
                    href="/entries"
                />
                <ToolCard
                    title="Meditation"
                    url="/leaf-meditation.svg"
                    primaryColor="#1a5c9e"
                    secondaryColor="slate-50"
                    href="/meditation"
                />
                <ToolCard
                    title="Breathing"
                    url="/breathing.svg"
                    primaryColor="#2478cc"
                    secondaryColor="slate-50"
                    href="/breathing"
                />
                <ToolCard
                    title="Focus"
                    url="/focus.svg"
                    primaryColor="#3d9bff"
                    secondaryColor="slate-50"
                    href="/focus"
                />
                <ToolCard
                    title="Relaxing sounds"
                    url="/relaxing-sounds.svg"
                    primaryColor="#00b2d6"
                    secondaryColor="slate-50"
                    href="/sounds"
                />
            </div>
        </section>
    )
}

export default ToolsSection

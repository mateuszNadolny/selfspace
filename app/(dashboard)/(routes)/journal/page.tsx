import JournalForm from '@/components/custom/JournalForm'
import JournalSVG from '@/components/SVGanimations/JournalSVG'

const JournalPage = () => {
    return (
        <section className="max-w-screen relative">
            <div className="absolute overflow-hidden w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <JournalSVG width={800} height={800} opacity={5} />
            </div>
            <div className="w-screen relative m-0 flex pt-2 lg:pt-24 flex-col items-center mb-16 lg:mb-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                    Mood Journal
                </h1>
                <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Simply write down how do you feel today
                </h3>
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-2 lg:mt-20 mb-2 animate-slide-down">
                    We are sorry, this section is still in development.
                </h1>
            </div>
            <JournalForm />
        </section>
    )
}

export default JournalPage

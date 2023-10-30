import FocusSection from '@/components/custom/FocusSection'

const FocusPage = () => {
    return (
        <section className="max-w-screen relative max-h-screen h-screen overflow-scroll lg:overflow-hidden">
            <div className="w-screen relative m-0 flex pt-2 lg:pt-24 flex-col items-center mb-3 lg:mb-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                    Focus timer
                </h1>
                <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Set your pomodoro session timer and dive into deep work
                </h3>
            </div>
            <FocusSection />
        </section>
    )
}

export default FocusPage

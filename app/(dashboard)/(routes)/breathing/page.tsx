import BreathingSVG from '@/components/SVGanimations/BreathingSVG'
import BreathingSection from '@/components/custom/BreathingSection'

// 4 second box breathing
// 4/7/8 breathing

const BreathingPage = () => {
    return (
        <section className="max-w-screen relative max-h-screen h-screen">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <BreathingSVG width={800} height={800} opacity={5} />
            </div>
            <div className="w-screen relative m-0 flex pt-2 lg:pt-24 flex-col items-center mb-5 lg:mb-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                    Breathing
                </h1>
                <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Take a few deep breathes and calm your mind
                </h3>
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-2 lg:mt-20 animate-slide-down">
                    We are sorry, this section is still in development.
                </h1>
            </div>
            <BreathingSection />
        </section>
    )
}

export default BreathingPage

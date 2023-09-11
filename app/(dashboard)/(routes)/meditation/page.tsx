import MeditationSVG from '@/components/SVGanimations/MeditationSVG'
import MeditationSelector from '@/components/custom/MeditationSelector'

export default function MediationPage() {
    return (
        <div className="max-w-screen relative max-h-screen h-screen">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <MeditationSVG width={800} height={800} opacity={5} />
            </div>

            <div className="w-screen relative m-0 flex pt-10 lg:pt-24 flex-col items-center mb-16 lg:mb-20">
                <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                    Meditation
                </h1>
                <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                    Select duration time and add background sounds
                </h3>
            </div>
            <MeditationSelector />
        </div>
    )
}

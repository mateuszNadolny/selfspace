import SoundSVG from '@/components/SVGanimations/SoundSVG'
import RelaxingSoundPlayer from '@/components/custom/RelaxingSoundPlayer'

export default function SoundsPage() {
    return (
        <section className="max-w-screen relative max-h-screen h-screen overflow-scroll lg:overflow-hidden">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center pointer-event-none">
                <SoundSVG width={800} height={800} opacity={5} />
            </div>
            <div>
                <div className="w-screen relative m-0 flex pt-2 lg:pt-24 flex-col items-center mb-16 lg:mb-20">
                    <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                        Relaxing sounds
                    </h1>
                    <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                        Choose a sound and listen to it as long as you wish
                    </h3>
                </div>
            </div>
            <RelaxingSoundPlayer />
        </section>
    )
}

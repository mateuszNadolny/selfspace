import MeditationSVG from '@/components/SVGanimations/MeditationSVG'
import MeditationSection from '@/components/custom/MeditationSection'

export default function MediationPage() {
    return (
        <section className="max-w-screen relative max-h-screen h-screen overflow-scroll lg:overflow-hidden">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <MeditationSVG width={800} height={800} opacity={5} />
            </div>

            <MeditationSection />
        </section>
    )
}

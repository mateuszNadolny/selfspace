import BreathingSVG from '@/components/SVGanimations/BreathingSVG'
import BreathingSection from '@/components/custom/BreathingSection'

const BreathingPage = () => {
    return (
        <section className="max-w-screen relative max-h-screen h-screen overflow-scroll lg:overflow-hidden">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <BreathingSVG width={800} height={800} opacity={5} />
            </div>
            <BreathingSection />
        </section>
    )
}

export default BreathingPage

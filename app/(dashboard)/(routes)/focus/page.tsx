import FocusSVG from '@/components/SVGanimations/FocusSVG'
import FocusSection from '@/components/custom/FocusSection'

const FocusPage = () => {
    return (
        <section className="max-w-screen relative max-h-screen h-screen">
            <div className="absolute overflow-hidden h-screen max-h-screen w-full lg:flex lg:flex-col items-center lg:justify-center ">
                <FocusSVG width={500} height={500} opacity={5} />
            </div>

            <FocusSection />
        </section>
    )
}

export default FocusPage

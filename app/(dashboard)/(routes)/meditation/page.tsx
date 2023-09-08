import Image from 'next/image'

import MeditationSelector from '@/components/custom/MeditationSelector'

export default function MediationPage() {
    return (
        <div className="max-w-full relative h-screen">
            <div className="absolute h-full max-h-screen w-full animate-slide-down flex flex-col items-center justify-center pointer-events-none m-0">
                <Image
                    src="/leaf-meditation.svg"
                    width={900}
                    height={900}
                    alt="Leaves"
                    className="opacity-[1%]"
                />
            </div>

            <div className="w-full m-0 flex pt-10 lg:pt-24 flex-col items-center mb-16 lg:mb-20">
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

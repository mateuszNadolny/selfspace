import Image from 'next/image'
import { Input } from '@/components/ui/input'

export default function MediationPage() {
    return (
        <div>
            <div className="absolute animate-slide-down flex flex-col items-center justify-center h-full w-full ">
                <Image
                    src="/leaf-meditation.svg"
                    width={400}
                    height={400}
                    alt="Leaves"
                    className="mb-3  opacity-5"
                    priority
                />
            </div>
            <div className="w-full animate-slide-down flex flex-col items-center m-0 p-10 md:p-24 lg:w-3/5 ">
                <h1 className="text-2xl md:text-5xl text-slate-50 font-alegreya mb-2 animate-slide-down">
                    Meditation
                </h1>
                <h3 className="text-center text-slate-500 text-xl md:text-2xl font-sans animate-slide-down">
                    Select duration and add background sounds
                </h3>
            </div>
            <div className="w-1/4">
                <Input type="email" placeholder="Duration" min={1} max={45} />
            </div>
        </div>
    )
}

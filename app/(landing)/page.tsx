import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const LandingPage = () => {
    return (
        <div
            className="bg-cover opacity-90 bg-center bg-no-repeat h-screen w-full "
            style={{ backgroundImage: "url('/background.svg')" }}
        >
            <div className="flex flex-col items-center justify-center h-full ">
                <Image
                    src="/leaves.svg"
                    width={200}
                    height={200}
                    alt="Leaves"
                    className="mb-3 animate-slide-down"
                />
                <h1 className="text-4xl text-slate-50 font-alegreya font-bold my-4 animate-slide-down">
                    Welcome to Selfspace
                </h1>
                <h3 className="text-slate-50 font-sans text-center mb-6 animate-slide-down">
                    Do meditation. Stay focused.
                    <br /> Breathe. Live a healthy life
                </h3>
                <Button
                    asChild
                    className="bg-slate-50 text-black hover:text-slate-50 animate-slide-down"
                >
                    <Link href="/dashboard">Get started</Link>
                </Button>
            </div>
        </div>
    )
}

export default LandingPage

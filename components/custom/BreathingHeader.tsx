import { SessionHeaderComponentProps } from '@/lib/types'
const BreathingHeader = ({ isSession }: SessionHeaderComponentProps) => {
    return (
        <div
            className="w-screen relative m-0 flex pt-2 lg:pt-24 flex-col items-center mb-5 lg:mb-20"
            style={isSession ? { opacity: 0 } : { opacity: 1 }}
        >
            <h1 className="text-center text-2xl md:text-5xl text-slate-50 font-alegreya mt-10 mb-2 animate-slide-down">
                Breathing
            </h1>
            <h3 className="w-4/5 text-slate-500 text-2xl md:text-3xl font-sans animate-slide-down text-center">
                Take a few deep breathes and calm your mind <br />
            </h3>
            <h4 className="w-4/5 text-slate-500 text-base font-sans animate-slide-down text-center mt-2">
                Always remember to do breathing exercises while sitting or
                laying down
            </h4>
        </div>
    )
}

export default BreathingHeader

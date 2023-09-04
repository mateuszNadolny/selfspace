import Image from 'next/image'

import { CustomMoodSelectorButtonProps } from '@/lib/types'

const MoodSelectorButton = ({
    title,
    url,
    onClick,
}: CustomMoodSelectorButtonProps) => {
    return (
        <button
            className="flex flex-col items-center justify-content-start mt-6"
            onClick={onClick}
        >
            <div className="width-[40px] height-[40px] bg-slate-100	p-2 rounded-2xl hover:bg-slate-400 ease-in duration-100">
                <Image src={url} alt="title" width={40} height={40}></Image>
            </div>
            <div>
                <p className="text-slate-300 font-alegreya mt-1 pointer-events-none">
                    {title}
                </p>
            </div>
        </button>
    )
}

export default MoodSelectorButton

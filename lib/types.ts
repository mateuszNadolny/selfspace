export interface ToolCardProps {
    title: string
    url: string
    href: string
    primaryColor: string
}

export interface SVGComponentProps {
    width: number
    height: number
    opacity: number
}

export interface MeditationSessionDataProps {
    duration: string
    sound: string
}

export interface MeditationComponentProps {
    isSession: boolean
    setIsSession?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface MeditationSessionProps extends MeditationComponentProps {
    expiryTimestamp: Date
}

export interface MeditationFormProps extends MeditationComponentProps {
    sessionData: MeditationSessionDataProps
    setSessionData: React.Dispatch<
        React.SetStateAction<MeditationSessionDataProps>
    >
}

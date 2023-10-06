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

export interface SessionHeaderComponentProps {
    isSession: boolean
    setIsSession?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface FocusSessionDataProps {
    duration: string
    break: string
}

export interface MeditationSessionDataProps {
    duration: string
    sound: string
}

// export interface MeditationSessionDurationProps
//     extends SessionHeaderComponentProps {
//     expiryTimestamp: Date
// }

export interface FocusFormProps extends SessionHeaderComponentProps {
    sessionData: FocusSessionDataProps
    setSessionData: React.Dispatch<React.SetStateAction<FocusSessionDataProps>>
}

export interface MeditationFormProps extends SessionHeaderComponentProps {
    sessionData: MeditationSessionDataProps
    setSessionData: React.Dispatch<
        React.SetStateAction<MeditationSessionDataProps>
    >
}

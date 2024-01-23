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
export interface BreathingSessionProps extends SessionHeaderComponentProps {
    breathingType: string
}
export interface BreathingSelectionProps extends BreathingSessionProps {
    setBreathingType: React.Dispatch<React.SetStateAction<string>>
}

export interface BreathingPhaseInterface {
    name: string
    duration: number
    scale: number
}

export interface EntryInterface {
    id: string
    userId: string
    title: string
    body: string
    createdAt: Date
}

export interface EntryCardProps extends EntryInterface {
    handleDelete: (id: string) => void
}

export interface EntryModalProps {
    id: string

    isOpenModal: boolean
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    entryTitle: string
    entryBody: string
    setEntryTitle: React.Dispatch<React.SetStateAction<string>>
    setEntryBody: React.Dispatch<React.SetStateAction<string>>
}

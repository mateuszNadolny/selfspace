import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MeditationPage from '@/app/(dashboard)/(routes)/meditation/page'
import MeditationForm from '@/components/custom/MeditationForm'
import MeditationSession from '@/components/custom/MeditationSession'

const mockSessionData = {
    duration: '10',
    sound: 'none',
}
const mockSetIsSession = jest.fn()
const mockSetSessionData = jest.fn()

describe('MeditationPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<MeditationPage />)
            const heading = screen.getByRole('heading', {
                name: 'Meditation',
            })
            expect(heading).toBeInTheDocument()
        })

        it('renders the description heading', () => {
            render(<MeditationPage />)
            const description = screen.getByRole('heading', {
                name: 'Select duration time and add background sounds',
            })
            expect(description).toBeInTheDocument()
        })

        it('renders the animated SVG', () => {
            render(<MeditationPage />)
            const svg = screen.getByTestId('animated-svg')
            expect(svg).toBeInTheDocument()
        })
    })

    describe('MeditationForm behavior', () => {
        it('renders form without crashing', () => {
            render(
                <MeditationForm
                    setSessionData={mockSetSessionData}
                    setIsSession={mockSetIsSession}
                    sessionData={mockSessionData}
                    isSession={false}
                />
            )
        })

        it('validates form fields', async () => {
            render(
                <MeditationForm
                    setSessionData={mockSetSessionData}
                    setIsSession={mockSetIsSession}
                    sessionData={mockSessionData}
                    isSession={false}
                />
            )

            const durationInput = screen.getByLabelText('Duration (mins)')
            const submitBtn = screen.getByRole('button', { name: 'Meditate' })

            await userEvent.type(durationInput, '0')
            await userEvent.click(submitBtn)
            const message = await screen.findByTestId('form-message')
            expect(message).toBeInTheDocument()

            await userEvent.clear(durationInput)
            await userEvent.type(durationInput, '55')
            const message2 = await screen.findByTestId('form-message')
            expect(message2).toBeInTheDocument()

            await userEvent.clear(durationInput)
            await userEvent.type(durationInput, '30')
            expect(screen.queryByRole('alert')).not.toBeInTheDocument()

            const soundSelect = screen.getByDisplayValue('None')
            await userEvent.selectOptions(soundSelect, 'rain')
            expect(soundSelect).toHaveValue('rain')
        })
    })

    describe('MeditationSession behavior', () => {
        it('renders when isSession is set to true', () => {
            render(
                <MeditationSession
                    setSessionData={mockSetSessionData}
                    setIsSession={mockSetIsSession}
                    sessionData={mockSessionData}
                    isSession={true}
                />
            )

            const sessionBtn = screen.getByRole('button', { name: 'Stop' })
            expect(sessionBtn).toBeInTheDocument()
        })

        it('does not render when isSession is set to true', () => {
            render(
                <MeditationSession
                    setSessionData={mockSetSessionData}
                    setIsSession={mockSetIsSession}
                    sessionData={mockSessionData}
                    isSession={false}
                />
            )

            const sessionBtn = screen.queryByRole('button', { name: 'Stop' })
            expect(sessionBtn).not.toBeInTheDocument()
        })
    })
})

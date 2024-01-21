import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FocusPage from '@/app/(dashboard)/(routes)/focus/page'
import FocusForm from '@/components/custom/FocusForm'
import FocusSession from '@/components/custom/FocusSession'

const mockSessionData = {
    duration: '25',
    break: '5',
}
const setIsSession = jest.fn()
const setSessionData = jest.fn()

describe('FocusPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<FocusPage />)
            const heading = screen.getByRole('heading', {
                name: 'Focus timer',
            })
            expect(heading).toBeInTheDocument()
        })

        it('renders the description heading', () => {
            render(<FocusPage />)
            const description = screen.getByRole('heading', {
                name: 'Set your pomodoro session timer and dive into deep work',
            })
            expect(description).toBeInTheDocument()
        })
    })

    describe('FocusForm behavior', () => {
        it('renders form without crashing', () => {
            render(
                <FocusForm
                    setSessionData={setSessionData}
                    setIsSession={setIsSession}
                    sessionData={{ duration: '25', break: '5' }}
                    isSession={false}
                />
            )
        })
        it('validates form fields', async () => {
            render(
                <FocusForm
                    setSessionData={setSessionData}
                    setIsSession={setIsSession}
                    sessionData={{ duration: '25', break: '5' }}
                    isSession={false}
                />
            )
            const settingsBtn = screen.getByTestId('settings-button')

            await userEvent.click(settingsBtn)
            const durationInput = screen.getByLabelText('Focus')
            const breakInput = screen.getByLabelText('Break')
            const submitBtn = screen.getByRole('button', { name: 'Save' })

            await userEvent.type(durationInput, '0')
            await userEvent.type(breakInput, '70')
            await userEvent.click(submitBtn)
            const messages = await screen.findAllByTestId('form-message')
            expect(messages).toHaveLength(2)

            await userEvent.type(durationInput, '70')
            await userEvent.type(breakInput, '0')
            await userEvent.click(submitBtn)
            const messages2 = await screen.findAllByTestId('form-message')
            expect(messages2).toHaveLength(2)

            await userEvent.click(settingsBtn)
            await userEvent.type(durationInput, '30')
            await userEvent.type(breakInput, '5')
            expect(screen.queryByTestId('form-message')).not.toBeInTheDocument()
        })
    })

    describe('FocusSession behavior', () => {
        it('renders when isSession is set to true', () => {
            render(
                <FocusSession
                    setSessionData={setSessionData}
                    setIsSession={setIsSession}
                    sessionData={mockSessionData}
                    isSession={true}
                />
            )

            const sessionMessage = screen.getByTestId('pause')
            expect(sessionMessage).toBeInTheDocument()
        })

        it('does not render when isSession is set to true', () => {
            render(
                <FocusSession
                    setSessionData={setSessionData}
                    setIsSession={setIsSession}
                    sessionData={mockSessionData}
                    isSession={false}
                />
            )

            const sessionMessage = screen.queryByTestId('pause')
            expect(sessionMessage).not.toBeInTheDocument()
        })
    })
})

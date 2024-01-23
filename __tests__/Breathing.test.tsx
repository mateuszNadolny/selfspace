import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BreathingPage from '@/app/(dashboard)/(routes)/breathing/page'
import BreathingSelection from '@/components/custom/BreathingSelection'
import BreathingSession from '@/components/custom/BreathingSession'

const mockSetIsSession = jest.fn()
const mockSetBreathingType = jest.fn()

describe('SoundsPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<BreathingPage />)
            const heading = screen.getByRole('heading', {
                name: 'Breathing',
            })
            expect(heading).toBeInTheDocument()
        })

        it('renders the description heading', () => {
            render(<BreathingPage />)
            const description = screen.getByRole('heading', {
                name: 'Take a few deep breathes and calm your mind',
            })
            expect(description).toBeInTheDocument()
        })

        it('renders the safety warning', () => {
            render(<BreathingPage />)
            const warning = screen.getByRole('heading', {
                name: 'Always remember to do breathing exercises while sitting or laying down Always discontinue when you are feeling dizzy or lightheaded',
            })
            expect(warning).toBeInTheDocument()
        })

        it('renders the animated SVG', () => {
            render(<BreathingPage />)
            const svg = screen.getByTestId('animated-svg')
            expect(svg).toBeInTheDocument()
        })

        it('renders the breathing selection', () => {
            render(<BreathingPage />)
            const selection = screen.getByTestId('breathing-selection')
            expect(selection).toBeInTheDocument()
        })
    })

    describe('BreathingSelection behavior', () => {
        it('renders sound player without crashing', () => {
            render(
                <BreathingSelection
                    breathingType={'box'}
                    setBreathingType={mockSetBreathingType}
                    isSession={false}
                    setIsSession={mockSetIsSession}
                />
            )
        })

        it('changes the visibility of selection tabs', async () => {
            render(
                <BreathingSelection
                    breathingType={'box'}
                    setBreathingType={mockSetBreathingType}
                    isSession={false}
                    setIsSession={mockSetIsSession}
                />
            )
            const boxBtn = screen.getByTestId('box-breathing-btn')
            const calmBtn = screen.getByTestId('calm-breathing-btn')
            const awakeBtn = screen.getByTestId('awake-breathing-btn')

            const boxDesc = screen.getByTestId('box-breathing-desc')
            const calmDesc = screen.getByTestId('calm-breathing-desc')
            const awakeDesc = screen.getByTestId('awake-breathing-desc')

            //initially, the box breathing description should be visible
            expect(boxDesc).toBeVisible()
            expect(calmDesc).not.toBeVisible()
            expect(awakeDesc).not.toBeVisible()

            //change the selection to calm breathing, calm breathing description should be visible
            await userEvent.click(calmBtn)
            expect(boxDesc).not.toBeVisible()
            expect(calmDesc).toBeVisible()
            expect(awakeDesc).not.toBeVisible()

            //change the selection to awake breathing, awake breathing description should be visible
            await userEvent.click(awakeBtn)
            expect(boxDesc).not.toBeVisible()
            expect(calmDesc).not.toBeVisible()
            expect(awakeDesc).toBeVisible()

            //change the selection to initial state, box breathing description should be visible
            await userEvent.click(boxBtn)
            expect(boxDesc).toBeVisible()
            expect(calmDesc).not.toBeVisible()
            expect(awakeDesc).not.toBeVisible()
        })
    })

    describe('BreathingSession behavior', () => {
        it('renders when isSession is set to true', () => {
            render(
                <BreathingSession
                    isSession={true}
                    setIsSession={mockSetIsSession}
                    breathingType={'box'}
                />
            )

            const sessionBtn = screen.getByRole('button', { name: 'Stop' })
            expect(sessionBtn).toBeInTheDocument()
        })

        it('does not render when isSession is set to true', () => {
            render(
                <BreathingSession
                    isSession={false}
                    setIsSession={mockSetIsSession}
                    breathingType={'box'}
                />
            )

            const sessionBtn = screen.queryByRole('button', { name: 'Stop' })
            expect(sessionBtn).not.toBeInTheDocument()
        })
    })
})

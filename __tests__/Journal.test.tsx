import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JournalPage from '@/app/(dashboard)/(routes)/journal/page'
import JournalForm from '@/components/custom/JournalForm'

const mockSessionData = {
    duration: '10',
    sound: 'none',
}
const mockSetIsSession = jest.fn()
const mockSetSessionData = jest.fn()

// Mock useRouter:
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            prefetch: () => null,
        }
    },
}))

// Mock useUser:
jest.mock('@clerk/nextjs', () => ({
    useUser: () => ({
        user: {
            id: 'mockUserId',
        },
        isSignedIn: true,
    }),
}))

describe('JournalPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<JournalPage />)
            const heading = screen.getByRole('heading', {
                name: 'Mood Journal',
            })
            expect(heading).toBeInTheDocument()
        })

        it('renders the description heading', () => {
            render(<JournalPage />)
            const description = screen.getByRole('heading', {
                name: 'Simply write down how do you feel today',
            })
            expect(description).toBeInTheDocument()
        })

        it('renders the animated SVG', () => {
            render(<JournalPage />)
            const svg = screen.getByTestId('animated-svg')
            expect(svg).toBeInTheDocument()
        })
    })

    describe('JournalForm behavior', () => {
        it('renders form without crashing', () => {
            render(<JournalForm />)
        })

        it('validates form fields', async () => {
            render(<JournalForm />)

            const titleInput = screen.getByPlaceholderText('Enter the title')
            const entryInput = screen.getByPlaceholderText(
                'Write whatever comes to your mind'
            )
            const submitBtn = screen.getByRole('button', { name: 'Add entry' })

            await userEvent.clear(titleInput)
            await userEvent.clear(entryInput)
            await userEvent.click(submitBtn)
            const messages = await screen.findAllByTestId('form-message')
            expect(messages).toHaveLength(2)

            await userEvent.type(titleInput, 'xyz')
            await userEvent.type(entryInput, 'Lorem')
            const message = await screen.findByTestId('form-message')
            expect(message).toBeInTheDocument()

            await userEvent.type(titleInput, 'xyz')
            await userEvent.type(entryInput, 'Lorem ipsum dolor sit amet')
            const message2 = screen.queryByTestId('form-message')
            expect(message2).not.toBeInTheDocument()
        })
    })
})

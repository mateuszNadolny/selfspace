import { render, screen } from '@testing-library/react'
import LandingPage from '@/app/(landing)/page'

describe('LandingPage', () => {
    describe('Rendering', () => {
        it('renders the welcome heading', () => {
            render(<LandingPage />)
            const heading = screen.getByText('Welcome to Selfspace')
            expect(heading).toBeInTheDocument()
        })

        it('renders the description text', () => {
            render(<LandingPage />)
            const description = screen.getByText(
                'Do meditation. Stay focused. Breathe. Live a healthy life'
            )
            expect(description).toBeInTheDocument()
        })

        it('renders the "Get started" button', () => {
            render(<LandingPage />)
            const button = screen.getByText('Get started')
            expect(button).toBeInTheDocument()
        })
    })

    describe('Behavior', () => {
        it('should redirect to the dashboard page', () => {
            render(<LandingPage />)
            const link = screen.getByRole('link', { name: 'Get started' })
            expect(link).toHaveAttribute('href', '/dashboard')
        })
    })
})

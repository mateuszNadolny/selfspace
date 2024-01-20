import { render, screen } from '@testing-library/react'
import SoundsPage from '@/app/(dashboard)/(routes)/sounds/page'

describe('SoundsPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<SoundsPage />)
            const heading = screen.getByRole('heading', {
                name: 'Relaxing sounds',
            })
            expect(heading).toBeInTheDocument()
        })

        it('renders the description heading', () => {
            render(<SoundsPage />)
            const description = screen.getByRole('heading', {
                name: 'Choose a sound and listen to it as long as you wish',
            })
            expect(description).toBeInTheDocument()
        })

        it('renders the animated SVG', () => {
            render(<SoundsPage />)
            const svg = screen.getByTestId('animated-svg')
            expect(svg).toBeInTheDocument()
        })

        it('renders the sound player', () => {
            render(<SoundsPage />)
            const player = screen.getByTestId('sound-player')
            expect(player).toBeInTheDocument()
        })
    })
})

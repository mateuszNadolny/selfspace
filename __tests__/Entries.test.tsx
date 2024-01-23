// it should render a entries page (header, subline) ✓
// it should render all entries
// if there are more than 3 entries in the DB, it should render a pagination element
// if there are no entries in the DB, it should render a message that says "No entries"
// entry card should render a title, date and body
// each entry card should render a view and delete button
// entry modal should appear after clicking 'view' button
// entry modal should display title and body
// entry modal should display edit, undo and save buttons (undo and save should be initialy disabled)
// edit form validation should work
// it should be possible to delete an entry

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EntriesPage from '@/app/(dashboard)/(routes)/entries/page'
import EntriesSection from '@/components/custom/EntriesSection'
import EntryCard from '@/components/custom/EntryCard'
import EntryModal from '@/components/custom/EntryModal'

// Mock useUser:
jest.mock('@clerk/nextjs', () => ({
    useUser: () => ({
        user: {
            id: 'mockUserId',
        },
        isSignedIn: true,
    }),
}))

describe('EntriesPage', () => {
    describe('Rendering', () => {
        it('renders the title heading', () => {
            render(<EntriesPage />)
            const heading = screen.getByRole('heading', {
                name: 'Journal Entries',
            })
            expect(heading).toBeInTheDocument()
        })
    })
})

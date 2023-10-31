import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function DELETE(request: NextRequest) {
    try {
        const url = new URL(request.url)

        const id = url.searchParams.get('id')

        if (!id) {
            throw new Error('Could not delete this entry')
        }

        const entries = await prisma.post.delete({
            where: {
                id: id,
            },
        })

        return NextResponse.json(entries, { status: 200 })
    } catch (error) {
        console.error('Error in POST /api/get-entries:', error)
        console.log(error)
        return NextResponse.error
    }
}

import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params

        if (!id) {
            throw new Error('Could not delete this entry')
        }

        if (!id) {
            throw new Error('User id is invalid')
        }

        const entries = await prisma.post.findMany({
            where: {
                userId: id,
            },
        })

        return NextResponse.json(entries, { status: 200 })
    } catch (error) {
        console.error('Error in POST /api/get-entries:', error)
        console.log(error)
        return NextResponse.error
    }
}

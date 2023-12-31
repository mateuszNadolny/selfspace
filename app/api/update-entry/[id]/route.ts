import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params

        if (!id) {
            throw new Error('Could not delete this entry')
        }

        const body = await request.json()
        const { title, entry } = body

        const post = await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                body: entry,
            },
        })

        return NextResponse.json(post, { status: 200 })
    } catch (error) {
        console.error('Error in POST /api/update-entry:', error)
        console.log(error)
        return NextResponse.error
    }
}

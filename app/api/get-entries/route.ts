import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url)

        const userId = url.searchParams.get('userId')

        if (!userId) {
            throw new Error('User id is invalid')
        }

        const entries = await prisma.post.findMany({
            where: {
                userId: userId,
            },
        })

        return NextResponse.json(entries, { status: 200 })
    } catch (error) {
        console.error('Error in POST /api/get-entries:', error)
        console.log(error)
        return NextResponse.error
    }
}

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request): Promise<Response> {
    try {
        const body = await request.json()
        const { title, entry, userId } = body

        const post = await prisma.post.create({
            data: {
                title: title,
                body: entry,
                userId,
            },
        })

        return new Response(JSON.stringify(post), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error in POST /api/create-entry:', error)
        console.log(error)
        return new Response('Internal Server Error', { status: 500 })
    }
}

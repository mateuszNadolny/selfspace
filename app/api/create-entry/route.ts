import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
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

        return Response.json({ status: 201 })
    } catch (error) {
        console.error('Error in POST /api/create-entry:', error)
        console.log(error)
        return Response.error
    }
}

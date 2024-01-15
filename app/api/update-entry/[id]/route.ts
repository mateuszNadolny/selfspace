import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(
    request: Request,
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

        return new Response(JSON.stringify(post), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error in POST /api/update-entry:', error)
        console.log(error)
        return new Response('Internal Server Error', { status: 500 })
    }
}

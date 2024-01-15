import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
): Promise<any> {
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

        return Response.json(post, { status: 200 })
    } catch (error) {
        console.error('Error in POST /api/update-entry:', error)
        console.log(error)
        return Response.error
    }
}

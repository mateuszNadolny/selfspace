import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params

        if (!id) {
            throw new Error('Could not delete this entry')
        }

        const deletedEntry = await prisma.post.delete({
            where: {
                id: id,
            },
        })

        const json = JSON.stringify(deletedEntry)

        return new Response(json, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.error('Error in POST /api/get-entries:', error)
        console.log(error)
        return Response.error
    }
}

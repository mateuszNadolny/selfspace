import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
    request: Request,
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

        const json = JSON.stringify(entries)

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

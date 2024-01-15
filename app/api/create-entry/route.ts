import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    try {
        const body = await req.body
        const { title, entry, userId } = body

        const post = await prisma.post.create({
            data: {
                title: title,
                body: entry,
                userId,
            },
        })

        return res.json(post) // Use res.json() instead of Response.json()
    } catch (error) {
        console.error('Error in POST /api/create-entry:', error)
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

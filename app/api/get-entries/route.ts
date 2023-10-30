// 'use client'

import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    try {
        const body = await request.json()
        const { userId } = body

        const entries = await prisma.post.findMany({
            where: {
                userId: {
                    equals: userId,
                },
            },
        })

        return NextResponse.json(entries, { status: 201 })
    } catch (error) {
        console.error('Error in POST /api/create-entry:', error)
        console.log(error)
        return NextResponse.error
    }
}

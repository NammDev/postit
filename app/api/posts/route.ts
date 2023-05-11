import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import * as z from 'zod'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new Response('Unauthorized', { status: 403 })
    }

    // Get User
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email || '' },
    })

    // Get Data from Frontend
    const json = await req.json()
    const body = postCreateSchema.parse(json)

    // DB Create Post
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: prismaUser?.id || '',
      },
    })

    // Give back the data
    return new Response(JSON.stringify(post))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

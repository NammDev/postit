import Link from 'next/link'
import { Post } from '@prisma/client'

import { formatDate } from '@/lib/utils'

interface PostItemProps {
  post: Pick<Post, 'id' | 'title' | 'published' | 'createdAt'>
}

export function PostItem({ post }: PostItemProps) {
  let createAtDate = new Date(post.createdAt)

  return (
    <div className='flex items-center justify-between p-4'>
      <div className='grid gap-1'>
        <Link href={`/editor/${post.id}`} className='font-semibold hover:underline'>
          {post.title}
        </Link>
        <div>
          <p className='text-sm text-muted-foreground'>{formatDate(createAtDate.toDateString())}</p>
        </div>
      </div>
      {/* <PostOperations post={{ id: post.id, title: post.title }} /> */}
    </div>
  )
}

'use client'

import { PostCreateButton } from '@/components/Button/PostCreateButton'
import { Icons } from '@/components/icon'
import { Post } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PostItem } from './Posttem'

function Dashboard() {
  const { data: posts } = useQuery<Post[]>({
    queryFn: async () => {
      const response = await axios.get('/api/posts')
      return response.data
    },
    queryKey: ['posts'],
  })

  return (
    <div>
      {posts?.length ? (
        <div className='divide-y divide-border rounded-md border'>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className='flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50'>
          <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-muted'>
              <Icons.post className='h-10 w-10' />
            </div>
            <h2 className='mt-6 text-xl font-semibold'>No posts created</h2>
            <p className='mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground'>
              You don&apos;t have any posts yet. Start creating content.
            </p>
            <PostCreateButton variant='outline' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard

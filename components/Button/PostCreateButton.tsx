'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Icons } from '../icon'

interface PostCreateButtonProps {
  variant: 'default' | 'outline'
}

export function PostCreateButton({ variant }: PostCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Untitled Post',
      }),
    })
    const post = await response.json()
    setIsLoading(false)

    // This forces a cache invalidation.
    router.refresh()
    router.push(`/editor/${post.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 
      ${variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90'}
      ${variant === 'outline' && 'border border-input hover:bg-accent hover:text-accent-foreground'}
      ${isLoading && 'cursor-not-allowed opacity-60'}
      `}
      disabled={isLoading}
    >
      {isLoading ? (
        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <Icons.add className='mr-2 h-4 w-4' />
      )}
      New post
    </button>
  )
}

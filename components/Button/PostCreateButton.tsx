'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Icons } from '../icon'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface PostCreateButtonProps {
  variant: 'default' | 'outline'
}

export function PostCreateButton({ variant }: PostCreateButtonProps) {
  const router = useRouter()

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await axios.post('/api/posts', {
        title: 'Untitled Post',
      }),
    onSuccess: (data) => {
      // This forces a cache invalidation.
      router.refresh()
      router.push(`/editor/${data.data.id}`)
    },
    onError: (data) => {},
  })

  async function onClick() {
    mutate()
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

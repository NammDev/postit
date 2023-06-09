'use client'

import { Post } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

import { Icons } from '../icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@ui/alert-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from '../toast/use-toast'

export function PostOperations({ post }: { post: Pick<Post, 'id' | 'title'> }) {
  const queryClient = useQueryClient()

  const [showDeleteAlert, setShowDeleteAlert] = useState(false)

  const { mutate, isLoading } = useMutation({
    mutationFn: async (postId: string) => {
      await axios.delete(`/api/posts/${postId}`)
    },
    onSuccess: (data) => {
      setShowDeleteAlert(false)
      queryClient.invalidateQueries(['posts'])
    },
    onError: () => {
      toast({
        title: 'Something went wrong.',
        description: 'Your post was not deleted. Please try again.',
        variant: 'destructive',
      })
    },
  })

  async function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    mutate(post.id)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted'>
          <Icons.ellipsis className='h-4 w-4' />
          <span className='sr-only'>Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className='flex w-full'>
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteAlert(true)}
            className='flex cursor-pointer items-center text-destructive focus:text-destructive'
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this post?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(e)}
              className='bg-red-600 focus:ring-red-600'
            >
              {isLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.trash className='mr-2 h-4 w-4' />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

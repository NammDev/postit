'use client'

import * as React from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '../icon'

export function PostOperations({ post }: { post: Pick<Post, 'id' | 'title'> }) {
  console.log('s')
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
          <DropdownMenuItem className='flex cursor-pointer items-center text-destructive focus:text-destructive'>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

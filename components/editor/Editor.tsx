'use client'

import * as React from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'
import '@/styles/editor.css'
import { Icons } from '../icon'

interface EditorProps {
  post: Pick<Post, 'id' | 'title' | 'content' | 'published'>
}

export function Editor({ post }: EditorProps) {
  return (
    <form>
      <div className='grid w-full gap-10'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-10'>
            <Link
              href='/dashboard'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4'
            >
              <>
                <Icons.chevronLeft className='mr-2 h-4 w-4' />
                Back
              </>
            </Link>
            <p className='text-sm text-muted-foreground'>
              {post.published ? 'Published' : 'Draft'}
            </p>
          </div>
          <button
            type='submit'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4'
          >
            <span>Save</span>
          </button>
        </div>
        <div className='prose prose-stone mx-auto w-[800px] dark:prose-invert'>
          <textarea
            id='title'
            placeholder='Post title'
            className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
            name='title'
            style={{ height: '53px !important' }}
            defaultValue={'Untitled Post\n'}
          />
          <div id='editor' className='min-h-[500px]' />
          <p className='text-sm text-gray-500'>
            Use <kbd className='rounded-md border bg-muted px-1 text-xs uppercase'>Tab</kbd> to open
            the command menu.
          </p>
        </div>
      </div>
    </form>
  )
}

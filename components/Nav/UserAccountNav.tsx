'use client'

import { IUser } from '@/types/user'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function UserAccountNav({ user }: { user: IUser }) {
  return (
    <li className='flex gap-8 items-center'>
      <button
        className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/80'
        onClick={() =>
          signOut({
            callbackUrl: `${window.location.origin}/login`,
          })
        }
      >
        Sign Out
      </button>
      <Link
        href={'/dashboard'}
        className='relative flex shrink-0 overflow-hidden rounded-full h-8 w-8'
      >
        <Image
          width={64}
          height={64}
          className='w-14 rounded-full'
          src={user.image}
          alt=''
          priority
        />
      </Link>
    </li>
  )
}

export default UserAccountNav

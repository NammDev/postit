'use client'

import { IUser } from '@/types/user'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function UserAccountNav({ user }: { user: IUser }) {
  return (
    <li className='flex gap-8 items-center'>
      <button
        className='bg-gray-700 text-white text-sm px-6 py-2 rounded-md '
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      <Link href={'/dashboard'}>
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

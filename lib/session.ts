import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { IUser } from '@/types/user'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  const user = session?.user as IUser
  return user
}

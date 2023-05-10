import { redirect } from 'next/navigation'

import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { UserNameForm } from '@/components/Form/UserNameForm'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    // <UserNameForm user={{ id: user.id, name: user.name || '' }} />
    <div className='grid items-start gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='font-heading text-3xl md:text-4xl'>Settings</h1>
          <p className='text-lg text-muted-foreground'>Manage account and website settings.</p>
        </div>
      </div>
      <div className='grid gap-10'>
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </div>
    </div>
  )
}

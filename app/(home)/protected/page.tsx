import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

const ServerProtectedPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/login?from=/protected')
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>server-side</span> protected page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{user?.name}</p>
      </div>
    </section>
  )
}

export default ServerProtectedPage

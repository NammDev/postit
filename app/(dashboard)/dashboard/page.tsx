import { PostCreateButton } from '@/components/Button/PostCreateButton'
import Dashboard from '@/components/Dashboard/Dashboard'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  return (
    <div className='grid items-start gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='text-3xl font-heading md:text-4xl'>Posts</h1>
          <p className='text-lg text-muted-foreground'>Create and manage posts.</p>
        </div>
        <PostCreateButton variant='default' />
      </div>
      <Dashboard />
    </div>
  )
}

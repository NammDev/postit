import { PostCreateButton } from '@/components/Button/PostCreateButton'
import { Icons } from '@/components/icon'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  return (
    <div className='grid items-start gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='font-heading text-3xl md:text-4xl'>Posts</h1>
          <p className='text-lg text-muted-foreground'>Create and manage posts.</p>
        </div>
        <PostCreateButton variant='default' />
      </div>
      <div>
        <div className='flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50'>
          <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-muted'>
              <Icons.post className='h-10 w-10' />
            </div>
            <h2 className='mt-6 text-xl font-semibold'>No posts created</h2>
            <p className='mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground'>
              You don&apos;t have any posts yet. Start creating content.
            </p>
            <PostCreateButton variant='outline' />
          </div>
        </div>
      </div>
    </div>
  )
}

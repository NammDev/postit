import { Icons } from '@/components/icon'

export const metadata = {
  title: 'Billing',
  description: 'Manage billing and your subscription plan.',
}

export default async function BillingPage() {
  return (
    <div className='grid items-start gap-8'>
      <div className='flex items-center justify-between px-2'>
        <div className='grid gap-1'>
          <h1 className='font-heading text-3xl md:text-4xl'>Billing</h1>
          <p className='text-lg text-muted-foreground'>
            Manage billing and your subscription plan.
          </p>
        </div>
      </div>
      <div className='grid gap-8'>
        <div
          role='alert'
          className='relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 bg-background text-foreground !pl-14'
        >
          <Icons.warning />
          <h5 className='mb-1 font-medium leading-none tracking-tight'>This is a demo app.</h5>
          <div className='text-sm [&_p]:leading-relaxed'>
            Taxonomy app is a demo app using a Stripe test environment. You can find a list of test
            card numbers on the{' '}
            <a
              href='https://stripe.com/docs/testing#cards'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-8'
            >
              Stripe docs
            </a>
            .
          </div>
        </div>
        <form>
          <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='text-lg font-semibold leading-none tracking-tight'>
                Subscription Plan
              </h3>
              <p className='text-sm text-muted-foreground'>
                You are currently on the <strong>Free</strong> plan.
              </p>
            </div>
            <div className='p-6 pt-0'>
              The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.
            </div>
            <div className='p-6 pt-0 flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0'>
              <button
                type='submit'
                className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4'
              >
                Upgrade to PRO
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

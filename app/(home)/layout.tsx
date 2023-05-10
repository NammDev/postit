import Login from '@/components/Nav/Login'
import { MainNav } from '@/components/Nav/MainNav'
import UserAccountNav from '@/components/Nav/UserAccountNav'
import { SiteFooter } from '@/components/footer'
import { marketingConfig } from '@/config/marketing'
import { getCurrentUser } from '@/lib/session'

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser()

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='container z-40 bg-background'>
        <div className='flex h-20 items-center justify-between py-6'>
          <MainNav items={marketingConfig.mainNav} />
          {!user && <Login />}
          {user && <UserAccountNav user={user} />}
        </div>
      </header>
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}

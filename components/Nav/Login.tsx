import Link from 'next/link'

function Login() {
  return (
    <Link
      href='/login'
      className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-4 bg-secondary text-secondary-foreground hover:bg-secondary/80'
    >
      Login
    </Link>
  )
}

export default Login

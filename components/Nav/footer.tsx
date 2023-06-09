import * as React from 'react'
import { Icons } from '../icon'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={className}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo />
          <p className='text-sm leading-loose text-center md:text-left'>
            Built by{' '}
            <a
              //   href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              namdev
            </a>{' '}
            - Hosted on{' '}
            <a
              href='https://vercel.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Vercel
            </a>
            . The source code is available on{' '}
            <a
              //   href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </p>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </footer>
  )
}

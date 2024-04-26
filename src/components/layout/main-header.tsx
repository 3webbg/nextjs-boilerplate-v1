import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './theme-switcher'
import Button from '../ui/button'

type MainHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {}

const links = [
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
]

export default function MainHeader(props: MainHeaderProps) {
  return (
    <header
      {...props}
      className={cn('border-b sticky top-0 py-4 z-50', props?.className)}
    >
      <div className="container flex items-center">
        <Link className="headline-h2 mr-12 font-montserrat" href={'/'}>
          Website
        </Link>
        <nav className="md:block hidden">
          <ul className="flex items-center space-x-6">
            {links?.map((link, i) => (
              <li key={link.href + i}>
                <Link className="body" href={link.href} target={link.target}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="ml-auto md:block hidden">
          <ul className="flex items-center space-x-2">
            <li>
              <ThemeSwitch />
            </li>
            <li>
              <Button variant={'primary'}>Action</Button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden ml-auto z-10">
          <label htmlFor="main-menu">Menu</label>
          <input type="checkbox" id="main-menu" className="peer" hidden />

          <div
            className={cn(
              'peer-checked:opacity-100 peer-checked:pointer-events-auto pointer-events-none opacity-0 transition-all',
              'fixed inset-0 top-[69px] flex flex-col bg-white dark:bg-slate-950 p-[1rem]'
            )}
          >
            <ul className="flex flex-col space-y-6">
              {links?.map((link, i) => (
                <li key={link.href + i}>
                  <Link className="body" href={link.href} target={link.target}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center space-x-2 mt-auto">
              <li>
                <ThemeSwitch />
              </li>
              <li>
                <Button variant={'primary'}>Action</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

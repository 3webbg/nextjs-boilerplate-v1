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
  { name: 'Blog', href: '/blog', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
  { name: 'Link', href: '#', target: '_self' },
]

export default function MainHeader(props: MainHeaderProps) {
  return (
    <header
      {...props}
      className={cn('h-[80px] container flex items-center', props?.className)}
    >
      <Link href={'/'} className="font-black text-[25px] leading-[28px]">
        Roooby
      </Link>
      <nav className="ml-[100px] lg:block hidden">
        <ul className="flex items-center space-x-[47px]">
          {links?.map((element, index, array) => (
            <li key={index}>
              <Link href={element.href} target={element.target}>
                {element.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lg:flex hidden items-center ml-auto space-x-[20px] text-[12px]">
        <button className="h-[32px] px-[20px] flex items-center bg-white border border-[#DCDCDC] text-black rounded-[5px] font-bold">
          Log in
        </button>
        <button className="h-[32px] px-[20px] flex items-center bg-primary border border-[#DCDCDC] text-white rounded-[5px] font-bold">
          Try for free
        </button>
      </div>
      <div className="lg:hidden ml-auto z-10">
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
    </header>
  )
}

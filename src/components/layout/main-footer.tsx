import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type MainFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {}

const sections = [
  {
    name: 'Section 1',
    links: [
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
    ],
  },
  {
    name: 'Section 2',
    links: [
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
    ],
  },
  {
    name: 'Section 3',
    links: [
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
    ],
  },
  {
    name: 'Section 4',
    links: [
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
      { name: 'Link', href: '#', target: '_self' },
    ],
  },
]

export default function MainFooter(props: MainFooterProps) {
  return (
    <footer {...props} className={cn('border-t py-2', props?.className)}>
      <div className="container flex md:flex-row flex-col justify-between">
        <section>
          <Link className="headline-h2 mr-12" href={'/'}>
            Website
          </Link>
          <address className="not-italic body opacity-60">
            &copy; Zing7 free to use
          </address>
        </section>
        <nav className="grid xs:grid-cols-2 gap-4 md:gap-0 md:flex items-start justify-between w-full max-w-[768px]">
          {sections?.map((section) => (
            <section key={section.name} className="flex flex-col">
              <h2 className="headline-h5 font-medium">{section?.name}</h2>
              <ul>
                {section?.links?.map((link, i) => (
                  <li key={i}>
                    <Link
                      className="body"
                      href={link.href}
                      target={link.target}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
    </footer>
  )
}

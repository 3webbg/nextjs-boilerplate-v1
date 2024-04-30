import Main from '@/components/layout/main'
import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function layout(props: { children: ReactNode }) {
  return (
    <Main>
      <header className="border w-full py-2">
        <nav className="container sticky top-0">
          <ul className="flex items-center space-x-4">
            <li>I Come from layout.tsx and these are links {'--->'}</li>
            <li>
              <Link href={'/segment'} className="hover:underline">
                Segment
              </Link>
            </li>
            <li>
              <Link
                href={'/segment/nested-segment'}
                className="hover:underline"
              >
                Nested segment
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {props?.children}
    </Main>
  )
}

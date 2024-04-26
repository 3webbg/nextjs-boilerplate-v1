import { cn } from '@/lib/utils'
import React from 'react'

type MainProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {}

export default function Main(props: MainProps) {
  return (
    <main {...props} className={cn('', props?.className)}>
      {props?.children}
    </main>
  )
}

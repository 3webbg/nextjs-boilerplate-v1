import { json_placeholder_api_url } from '@/config/constants'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export default async function page(props: Props) {
  const response = await fetch(
    `${json_placeholder_api_url}/users/${props.params.id}`
  )

  const user = (await response.json()) as JSONPlaceholder.User

  if (!user.id) {
    return notFound()
  }
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <code className="text-sm">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </code>
    </div>
  )
}

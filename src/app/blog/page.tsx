import { json_placeholder_api_url } from '@/config/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

async function getPosts() {
  const postsResponse = await fetch(
    `${json_placeholder_api_url}/posts?_limit=50`
  )
  const posts = (await postsResponse?.json()) as JSONPlaceholder.Post[]

  return posts
}

export default async function page() {
  const posts = await getPosts()

  const usersResponse = await fetch(`${json_placeholder_api_url}/users`)
  const users = (await usersResponse?.json()) as JSONPlaceholder.User[]

  const photosResponse = await fetch(
    `${json_placeholder_api_url}/photos?_limit=50`
  )
  const photos = (await photosResponse.json()) as JSONPlaceholder.Photo[]
  return (
    <div className="container pb-4">
      <h1 className="display-1 mb-4">Blog</h1>
      <hr className="mb-4" />
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts?.map((post, index) => {
          const author = users.find((user) => user.id == post.userId)
          const photo = photos?.[index]
          return (
            <li
              key={post.id}
              className="border rounded-md overflow-hidden flex flex-col hover:shadow-lg transition-all group"
            >
              <Link
                href={`/blog/${post.id}`}
                className="w-full min-h-[150px] overflow-hidden"
              >
                <img
                  loading="lazy"
                  className="w-full h-[150px] object-cover group-hover:scale-110 transition-all"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
              </Link>
              <section className="flex flex-col p-2 h-full">
                <h2 className="headline-h5 leading-5 mb-2">{post?.title}</h2>
                <p className="line-clamp-2 body mb-4">{post.body}</p>

                <footer className="mt-auto flex items-center justify-between">
                  <Link
                    className={cn(
                      'mt-auto p-2 rounded-md w-fit',
                      'bg-primary text-white dark:bg-white dark:text-primary hover:opacity-60 active:opacity-20'
                    )}
                    href={`/blog/${post.id}`}
                  >
                    View post
                  </Link>
                  <Link href={`/user/${author?.id}`}>
                    <address>by {author?.name ?? 'Annonymous'}</address>
                  </Link>
                </footer>
              </section>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

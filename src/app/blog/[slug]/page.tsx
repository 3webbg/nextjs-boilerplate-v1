import { json_placeholder_api_url } from '@/config/constants'
import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default async function page(props: Props) {
  const postResponse = await fetch(
    `${json_placeholder_api_url}/posts/${props?.params?.slug}`
  )
  const post = (await postResponse.json()) as JSONPlaceholder.Post

  const commentsResponse = await fetch(
    `${json_placeholder_api_url}/posts/${props?.params?.slug}/comments`
  )
  const comments = (await commentsResponse?.json()) as JSONPlaceholder.Comment[]

  const authorResponse = await fetch(
    `${json_placeholder_api_url}/users/${post.userId}`
  )
  const author = (await authorResponse?.json()) as JSONPlaceholder.User

  const imageResponse = await fetch(
    `${json_placeholder_api_url}/photos/${post.id}`
  )
  const photo = (await imageResponse?.json()) as JSONPlaceholder.Photo

  return (
    <article className="container flex flex-col pb-4">
      <img
        src={photo.url}
        loading="eager"
        alt={photo.title}
        className="w-full h-[300px] object-cover mb-6 rounded-md"
      />
      <h1 className="headline-h1 text-center">{post?.title}</h1>
      <time className="text-center mx-auto w-fit">
        {new Date().toDateString()}
      </time>
      <p className="body mt-8">{post?.body}</p>
      <address className="ml-auto mt-2">
        by {author?.name ?? 'Annonymous'}
      </address>
      <hr className="my-4" />
      <h2 className="headline-h3">Comments</h2>
      <ul className="flex flex-col items-center space-y-4">
        {comments?.map((comment) => (
          <li className="flex flex-col w-full text-left body">
            <address>
              {comment.email} ·{' '}
              <time className=" text-xs">{new Date().toDateString()}</time>
            </address>
            <q className="font-medium">{comment.body}</q>
          </li>
        ))}
      </ul>
    </article>
  )
}

namespace JSONPlaceholder {
  type Post = {
    userId: number
    id: number
    title: string
    body: string
  }

  type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
  }

  type Photo = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }

  type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  type Album = {
    userId: number
    id: number
    title: string
  }

  type User = {
    id: number
    name: string
    username: string
    email: str
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }
}

import { PostContainer } from './styles'

interface PostProps {
  id: number
  title: string
  created_at: string
  body: string
}

export function Post({ id, title, created_at, body }: PostProps) {
  const to = `/post-details/${id}`

  return (
    <PostContainer to={to}>
      <div>
        <strong>{title}</strong>
        <span>{created_at}</span>
      </div>

      <span>{body}</span>
    </PostContainer>
  )
}

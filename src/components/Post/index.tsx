import { PostContainer } from './styles'

interface PostProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Post({ number, title, created_at, body }: PostProps) {
  const to = `/post-details/${number}`

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

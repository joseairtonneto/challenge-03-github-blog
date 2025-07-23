import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { PostContainer } from './styles'

interface PostProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Post({ number, title, created_at, body }: PostProps) {
  const to = `/post-details/${number}`

  const publishedDateRelativeToNow = formatDistanceToNow(created_at, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostContainer to={to}>
      <div>
        <strong>{title}</strong>
        <span>{publishedDateRelativeToNow}</span>
      </div>

      <span>{body}</span>
    </PostContainer>
  )
}

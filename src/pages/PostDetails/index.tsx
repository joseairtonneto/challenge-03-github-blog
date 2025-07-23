import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import Markdown from 'react-markdown'
import { api } from '../../lib/axios'

import { Content, Details, DetailsFooter, Info, PostDetailsContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../components/ExternalLink/ExternalLink'

interface Post {
  number: number
  title: string
  body: string
  user: {
    login: string
  }
  html_url: string
  comments: number
  created_at: string
}

export function PostDetails() {
  const [post, setPost] = useState({} as Post)

  const { issueNumber } = useParams()

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get(
        `/repos/joseairtonneto/reactjs-github-blog-challenge/issues/${issueNumber}`,
      )

      console.log(response.data)

      setPost(response.data)
    }

    if (!post.number) {
      fetchPost()
    }
  }, [post, issueNumber])

  let publishedDateRelativeToNow

  if (post.created_at)
    publishedDateRelativeToNow = formatDistanceToNow(post.created_at, {
      locale: ptBR,
      addSuffix: true,
    })

  return (
    <PostDetailsContainer>
      <Details>
        <div>
          <Link to='/'>
            <FontAwesomeIcon icon={faAngleLeft} />
            Voltar
          </Link>

          <ExternalLink label='Ver no github' link={post.html_url} />
        </div>

        <h1>{post.title}</h1>

        <DetailsFooter>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.user.login}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{publishedDateRelativeToNow}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </Info>
        </DetailsFooter>
      </Details>

      <Content>
        <Markdown>{post.body}</Markdown>
      </Content>
    </PostDetailsContainer>
  )
}

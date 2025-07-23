import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'

import {
  BlogContainer,
  Profile,
  ProfileContent,
  ProfileDescription,
  ProfileFooter,
  ProfileTitle,
  Info,
  Content,
  ContentHeader,
  Posts,
} from './styles'
import { ExternalLink } from '../../components/ExternalLink/ExternalLink'
import { Post } from '../../components/Post'

interface User {
  login: string
  avatar_url: string
  html_url: string
  company: string
  bio: string
  followers: number
}

interface Post {
  number: number
  title: string
  body: string
  created_at: string
}

export function Blog() {
  const [user, setUser] = useState({} as User)

  const [posts, setPosts] = useState<Post[]>([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get('/users/joseairtonneto')

      setUser(response.data)
    }

    if (!user.login) fetchUser()
  }, [user])

  useEffect(() => {
    async function fetchPosts() {
      const query = search + `repo:${user.login}/reactjs-github-blog-challenge`

      const response = await api.get('/search/issues', {
        params: {
          q: query,
        },
      })

      console.log(response.data)

      setPosts(response.data.items)
    }

    if (user.login) fetchPosts()
  }, [search, user.login])

  return (
    <BlogContainer>
      <Profile>
        <img src={user.avatar_url} />
        <ProfileContent>
          <ProfileTitle>
            <h1>{user.login}</h1>
            <ExternalLink link={user.html_url} label='Github' />
          </ProfileTitle>

          <ProfileDescription>
            <span>{user.bio}</span>
          </ProfileDescription>

          <ProfileFooter>
            <Info>
              <FontAwesomeIcon icon={faGithub} size='lg' />
              <span>{user.login}</span>
            </Info>
            {user.company && (
              <Info>
                <FontAwesomeIcon icon={faBuilding} size='lg' />
                <span>{user.company}</span>
              </Info>
            )}
            <Info>
              <FontAwesomeIcon icon={faUserGroup} size='lg' />
              <span>
                {user.followers} {user.followers === 1 ? 'seguidor' : 'seguidores'}
              </span>
            </Info>
          </ProfileFooter>
        </ProfileContent>
      </Profile>

      <Content>
        <ContentHeader>
          <div>
            <h3>Publicações</h3>
            <span>
              {posts.length} {posts.length === 1 ? 'publicação' : 'publicações'}
            </span>
          </div>

          <input
            type='text'
            placeholder='Buscar conteúdo'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </ContentHeader>

        <Posts>{posts && posts.map(post => <Post key={post.number} {...post} />)}</Posts>
      </Content>
    </BlogContainer>
  )
}

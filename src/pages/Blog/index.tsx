import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../components/ExternalLink/ExternalLink'

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
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Post } from '../../components/Post'

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <img src='https://github.com/joseairtonneto.png' />
        <ProfileContent>
          <ProfileTitle>
            <h1>Cameron Williamson</h1>
            <ExternalLink link='https://github.com/joseairtonneto' label='Github' />
          </ProfileTitle>

          <ProfileDescription>
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa
              quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </span>
          </ProfileDescription>

          <ProfileFooter>
            <Info>
              <FontAwesomeIcon icon={faGithub} size='lg' />
              <span>cameronwll</span>
            </Info>
            <Info>
              <FontAwesomeIcon icon={faBuilding} size='lg' />
              <span>Rocketseat</span>
            </Info>
            <Info>
              <FontAwesomeIcon icon={faUserGroup} size='lg' />
              <span>32 seguidores</span>
            </Info>
          </ProfileFooter>
        </ProfileContent>
      </Profile>

      <Content>
        <ContentHeader>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>

          <input type='text' placeholder='Buscar conteúdo' />
        </ContentHeader>

        <Posts>
          <Post
            id={1}
            title='JavaScript data types and data structures'
            body='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript'
            created_at='há 1 dia'
          />
        </Posts>
      </Content>
    </BlogContainer>
  )
}

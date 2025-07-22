import { Link } from 'react-router-dom'
import { Content, Details, DetailsFooter, Info, PostDetailsContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../../components/ExternalLink/ExternalLink'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <Details>
        <div>
          <Link to='/'>
            <FontAwesomeIcon icon={faAngleLeft} />
            Voltar
          </Link>

          <ExternalLink label='Ver no github' link='https://github.com/joseairtonneto' />
        </div>

        <h1>JavaScript data types and data structures</h1>

        <DetailsFooter>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Há 1 dia</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </Info>
        </DetailsFooter>
      </Details>

      <Content>
        teste
      </Content>
    </PostDetailsContainer>
  )
}

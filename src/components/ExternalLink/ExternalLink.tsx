import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from './styles'

interface ExternalLinkProps {
  link: string
  label: string
}

export function ExternalLink({ link, label }: ExternalLinkProps) {
  return (
    <Link href={link} target='_blank'>
      <span>{label}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </Link>
  )
}

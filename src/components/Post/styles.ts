import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;

  background: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 2rem;

  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};

    transition: border-color 0.2s;
  }

  div {
    display: flex;
    gap: 1rem;

    strong {
      color: ${({ theme }) => theme['base-title']};

      font-size: 1.25rem;

      flex: 1;
    }

    span {
      width: max-content;

      color: ${({ theme }) => theme['base-span']};

      font-size: 0.875rem;
    }
  }

  > span {

    color: ${({ theme }) => theme['base-text']};
    overflow: hidden;

    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    & > * {
      max-width: 20rem;
    }
  }
`

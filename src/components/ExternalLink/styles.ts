import styled from 'styled-components'

export const Link = styled.a`
  width: fit-content;

  color: ${({ theme }) => theme.blue};
  border-bottom: 1px solid transparent;

  text-decoration: none;
  text-transform: uppercase;

  font-weight: bold;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};

    transition: border-color 0.2s;
  }
`

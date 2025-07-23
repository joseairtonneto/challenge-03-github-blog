import styled from 'styled-components'

export const PostDetailsContainer = styled.main`
  width: 100%;
  max-width: 54rem;

  margin: -5.5rem auto 0;
  z-index: 1;
`

export const Details = styled.header`
  width: 100%;

  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  > div:first-child {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
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
    }
  }

  h1 {
    color: ${({ theme }) => theme['base-title']};

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const DetailsFooter = styled.div`
  margin-top: -1rem;

  display: flex;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['base-label']};
  }

  span {
    color: ${({ theme }) => theme['base-span']};
  }
`

export const Content = styled.div`
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  * {
    max-width: 50rem;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
  }

  a {
    color: ${({ theme }) => theme.blue};
  }
`

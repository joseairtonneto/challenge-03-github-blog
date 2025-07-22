import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 54rem;

  margin: -5.5rem auto 0;
  z-index: 1;
`

export const Profile = styled.header`
  width: 100%;

  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;
  align-items: center;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme['base-title']};

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const ProfileDescription = styled.div`
  color: ${({ theme }) => theme['base-span']};
`

export const ProfileFooter = styled.div`
  margin-top: 1rem;

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
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Content = styled.div`
  margin-top: 4.5rem;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Posts = styled.div`
  margin: 3rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

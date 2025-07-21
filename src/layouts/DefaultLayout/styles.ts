import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Cover = styled.div`
  width: 100%;
  height: 18.5rem;

  position: relative;

  img:first-child {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:last-child {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

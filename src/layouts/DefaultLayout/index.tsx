import { Outlet } from 'react-router-dom'

import { LayoutContainer, Cover } from './styles'

import Logo from '../../assets/logo.svg'
import CoverImg from '../../assets/cover.png'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Cover>
        <img src={CoverImg} />
        <img src={Logo} />
      </Cover>

      <Outlet />
    </LayoutContainer>
  )
}

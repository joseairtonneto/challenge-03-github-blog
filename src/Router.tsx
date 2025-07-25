import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Blog } from './pages/Blog'
import { PostDetails } from './pages/PostDetails'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Blog />} />
        <Route path='/post-details/:issueNumber' element={<PostDetails />} />
      </Route>
    </Routes>
  )
}

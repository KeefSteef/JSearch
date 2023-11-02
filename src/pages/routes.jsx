import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Upload from './Upload/Upload.jsx'
import Profile from './Profile/Profile'
import Authorization from './Authorization/Authorization'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  //TODO: Must be /upload/id
  {
    path: '/upload',
    element: <Upload />,
  },
  //TODO: Must be /profile/id

  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/auth',
    element: <Authorization />,
  },
])

export default router

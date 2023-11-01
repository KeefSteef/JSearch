import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Upload from './Upload/Upload.jsx'
import Profile from './Profile/Profile'

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
])

export default router

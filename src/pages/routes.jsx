import { createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Upload from './Upload/Upload.jsx'

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
])

export default router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Muyan from './posts/Muyan.mdx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Muyan />,
    },
])

export default function RouterEnter() {
    return <RouterProvider router={router} />
}

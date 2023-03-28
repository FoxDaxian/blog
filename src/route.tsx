import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import Layout from './components/layout'
import * as posts from './posts'

const defaultLoader = () => redirect('/muyan')

export const postsRoute = Object.keys(posts).map((key) => {
    const Post = posts[key as keyof typeof posts]
    return {
        path: key.toLocaleLowerCase(),
        element: <Post />,
    }
})

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout postsRoute={postsRoute} />,
        children: [
            {
                index: true,
                loader: defaultLoader,
            },
            ...postsRoute,
            // {
            //     path: '*',
            //     loader: defaultLoader,
            // },
        ],
    },
])

export default function RouterEnter() {
    return <RouterProvider router={router} />
}

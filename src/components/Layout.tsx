import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Layout({
    postsRoute,
}: {
    postsRoute: { path: String; element: React.ReactElement }[]
}) {
    return (
        <div>
            <div className="flex">
                {postsRoute.map((post) => (
                    <div
                        key={post.path as React.Key}
                        className="text-center w-20 bg-blue-600 text-white leading-10 cursor-pointer"
                    >
                        {post.path}
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages'
import UserLayout from '../layout/user-layout'
import { Apples, Bananas1, Jsx1, Jsx2, Jsx3, Jsx4, Orange } from '../components'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/fruits",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <Apples />
            },
            {
                path: "apples",
                element: <Apples />
            },
            {
                path: "bananas1",
                element: <Bananas1 />
            },
            {
                path: "orange",
                element: <Orange />
            }
        ]
    },
    {
        path: "/jsx",
        children: [
            {
                index: true,
                element: <Jsx1 />
            },
            {
                path: "1",
                element: <Jsx1 />
            },
            {
                path: "2",
                element: <Jsx2 />
            },
            {
                path: "3",
                element: <Jsx3 />
            },
            {
                path: "4",
                element: <Jsx4 />
            }
        ]
    }
])

const AppRouter2 = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter2
import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Left_sec from '../Left_sections/Left_sec'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import Orders from '../Orders/Orders'
import "./Router.css"
const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<div className='flex'> <Left_sec/> <Home/></div>,

        },
        {
            path:'/dashboard',
            element:<div className='flex'> <Left_sec/> <Dashboard/></div>,

        },
       
        {
            path:'/AddOrder',
            element:<div className='flex'> <Left_sec/> <Orders/></div>,

        },
       
    ])
  return (
    <>
   
    <RouterProvider router={router}/>
    </>
  )
}

export default Router

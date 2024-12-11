import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Courses from './components/Courses'
import Mock from './components/Mock'
import NotFound from './NotFound'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
      <div>
        <Navbar/>
        <Home/>
        </div>
    },
    {
      path: '/about',
      element: <div>
      <Navbar/>
      <About/>
      </div>
    },
    {
      path: '/dashboard',
      element: <div>
      <Navbar/>
      <Dashboard/>
      </div>,
      children:[
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'mock-test',
          element: <Mock/>
        }
      ]
    },
    {
      path: '/students/:id',
      element: <div>
      <Navbar/>
      <Params/>
      </div>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
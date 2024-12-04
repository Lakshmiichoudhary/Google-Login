import React from 'react'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse'

const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Login />
    },
    {
      path: "/welcome",
      element : <Browse />
    },

  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App

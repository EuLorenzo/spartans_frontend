import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './pages/Main/Main.tsx'

const router = createBrowserRouter([
  {
    path: "/spartans_frontend",
    element: <App />,
    children:[{
    path: "/spartans_frontend",
    element: <Main />
  }]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

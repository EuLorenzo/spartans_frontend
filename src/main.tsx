import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './pages/Main/Main.tsx'
import { Shopping } from './pages/Shopping/Shopping.tsx'

export const base = "/spartans_frontend"

const router = createBrowserRouter([
  {
    path: base,
    element: <App />,
    children:[
    {
    path: base,
    element: <Main />
    },
    {
    path: base + "shopping",
    element: <Shopping />
    }
]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

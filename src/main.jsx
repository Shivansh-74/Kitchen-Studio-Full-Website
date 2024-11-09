import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Outlet from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Outlet/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"gallery",
        element:<Gallery/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)

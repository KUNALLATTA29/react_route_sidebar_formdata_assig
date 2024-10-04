import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './component/Contact.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Notfound from './component/Notfound.jsx'
import ProductDetail from './component/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
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
      path: 'product/:id',
      element: <ProductDetail />,
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path: '*',
      element: <Notfound />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

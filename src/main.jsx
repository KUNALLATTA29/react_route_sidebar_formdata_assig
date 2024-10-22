import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './component/Contact.jsx'
import Root from './Redux/Root.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Notfound from './component/Notfound.jsx'
import ProductDetail from './component/ProductDetail.jsx'
import LogIn from './component/LogIn.jsx'
import Cart from './component/Cart.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
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
    },
    {
      path: 'login',
      element: <LogIn/>
    },
    {
      path:'/cart',
      element:<Cart/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

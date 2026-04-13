import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage/HomePage'
import Books from './Pages/Books/Books'
import { router } from './Routers/Routers'






createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <h2 className='bg-amber-700 justify-center text-center font-bold text-4xl'>SHIHAB</h2> */}
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

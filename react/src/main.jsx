import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import StateContext from './context/ContextProvider'
import adminRouter from './router/adminRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
  {
    window.location.hostname.split('.')[0] != 'admin'
    &&
      <RouterProvider router={router}/>
    ||
      <RouterProvider router={adminRouter}/>
  }
  </StateContext>  
)

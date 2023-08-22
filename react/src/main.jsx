import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import StateContext from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContext>
      <RouterProvider router={router}/>
  </StateContext>  
)

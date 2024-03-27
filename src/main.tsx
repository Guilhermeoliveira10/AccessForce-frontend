import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import CostumerThreeSixty from './pages/Costumer360/index.tsx'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:'/Costumer360',
    element: <CostumerThreeSixty/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

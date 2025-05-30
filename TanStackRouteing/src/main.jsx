import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider ,  createRouter} from "@tanstack/react-router"
import { routeTree} from './routing/routeTree.js'
import App from './App.jsx'

const router = createRouter({routeTree});

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)

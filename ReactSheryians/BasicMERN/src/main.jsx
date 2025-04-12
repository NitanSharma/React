import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
        // <BrowserRouter>
        //  <App />
        // </BrowserRouter>  // wrapping with BrowserRouter for Routing

        <UserContext>
                <App/>
        </UserContext>
   // wrapping for usercontext to access data by all componemt that is in userContext
 
)

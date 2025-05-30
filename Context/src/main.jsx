import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookContext from './context/BookContext.jsx'


BookContext

createRoot(document.getElementById('root')).render(
        <BookContext>
              <App /> 
        </BookContext> 
)

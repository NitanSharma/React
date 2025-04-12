import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    
  return (
    <div>
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-bold">
                BrandName  
               
            </div>
            <input type="text" className='bg-white'/>
            <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 text-lg hover:text-white">
                    Home
                </Link>
                <Link to="/contact" className="text-gray-300 text-lg hover:text-white">
                    Contact
                </Link>
                <Link to="/about" className="text-gray-300 text-lg hover:text-white">
                    About
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
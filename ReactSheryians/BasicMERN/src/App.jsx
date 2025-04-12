import { useContext, useState } from 'react'
import { Routes , Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar';
import { DataContext } from './Context/UserContext';


function App() {
 
    let cardData = [
      {
        "movie_name": "Inception",
        "release_year": 2010,
        "image_url": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608870158/inception-9781608870158_hr.jpg"
      },
      {
        "movie_name": "The Dark Knight",
        "release_year": 2008,
        "image_url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
      },
      {
        "movie_name": "Interstellar",
        "release_year": 2014,
        "image_url": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
      },
      {
        "movie_name": "Parasite",
        "release_year": 2019,
        "image_url": "https://images.justwatch.com/poster/130011621/s332/parasite-2019"
      },
      {
        "movie_name": "Avengers: Endgame",
        "release_year": 2019,
        "image_url": "https://m.media-amazon.com/images/I/910ZGj1senL._AC_UF1000,1000_QL80_.jpg"
      }
    ]


      const data = useContext(DataContext);
      console.log(data);  

  return (
    <div>
    <h1 className='text-5xl font-bold'>This is APP</h1>
    </div>
  )
}
export default App


  {/* <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes> */}
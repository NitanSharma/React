import React, { useContext } from 'react'
import { BookDataContext } from './context/BookContext'


const App = () => {

  // const Data = useContext(DataContext)
  // console.log(Data)

  const BookData = useContext(BookDataContext);

  return (
    <>
    <div>Book Details : {BookData.title} by {BookData.author} gener {BookData.genre}</div>
      <br /> 
    </>
    
  )
}

export default App
import React from 'react'

export const BookDataContext = React.createContext();

const BookContext = ({children}) => {
    const bookData={
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction",
        description: "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's love for Daisy Buchanan.",
    }

  return (
    <div>
        <BookDataContext.Provider value={bookData}>
            {children}
        </BookDataContext.Provider>
        
    </div>
  )
}

export default BookContext
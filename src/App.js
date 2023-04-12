import React, { useEffect, useContext } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'
import './stylesheets/global.css'



const App = () => {
  const { getBooks } = useContext(BooksContext)

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  // the filter method returns a new array
  // we need to pass this function two levels down

  return (
    <div className='app'>
      <BookCreate />
      <div className='main'>
        <p>React Reading App</p>
        <BookList />
      </div>
    </div>
  )
}

export default App;

// The app will have 4 components:
// 1. BookShow
// 2. BookList
// 3. BookCreate
// 4. BookEdit


// All the info will be stored in a books array of objects.
// BookShow component will display books by taking info from that array

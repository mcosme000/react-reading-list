import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'


const App = () => {
  const [books, setBooks] = useState([])
  const AddBooks = (book) => {
    setBooks([...books, book])
    
  }


  return (
    <div className='app'>
      <p>React Reading App</p>
      <BookList books={ books }/>
      <BookCreate addBook={AddBooks}/>
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

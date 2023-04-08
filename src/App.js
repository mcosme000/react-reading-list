import React, { useState } from 'react'
import axios from 'axios';

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import './stylesheets/global.css'

const App = () => {
  const [books, setBooks] = useState([])

  const AddBooks = async (newTitle) => {
    const response = await axios.post('http://localhost:3001/books', {
      title: newTitle
    });

    const updateBooks = [
      ...books,
      response.data
      // this is the object we are getting from the PUT request
    ]

    setBooks(updateBooks)
  }

  // the filter method returns a new array
  // we need to pass this function two levels down
  const DeleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const EditBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id)
        return {...book, title: newTitle }
      else
        return book
    })
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <div className='main'>
        <p>React Reading App</p>
        <BookList books={ books } deleteBook={DeleteBookById} editBook={EditBook}/>
      </div>
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

import React, { useState, useEffect } from 'react'
import axios from 'axios';

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import SearchBooks from './components/Api'
import './stylesheets/global.css'

const App = () => {
  const [books, setBooks] = useState([])

  const GetBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  }

  useEffect(() => {
    GetBooks();
  }, []);

  const AddBooks = async (newTitle) => {
    const apiResponse = await SearchBooks(newTitle)
    const info = apiResponse.items[0].volumeInfo
    const title = info.title;
    const cover = info.imageLinks.thumbnail;
    console.log(info);

    const response = await axios.post('http://localhost:3001/books', {
      title: title, cover: cover
    });

    const updateBooks = [
      ...books,
      response.data
      // this is the object we are getting from the PUT request
    ]

    setBooks(updateBooks)
  }

  const EditBook = async (id, newTitle) => {
    const apiResponse = await SearchBooks(newTitle)
    const info = apiResponse.items[0].volumeInfo
    const title = info.title;
    const cover = info.imageLinks.thumbnail;

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title, cover: cover
    })

    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id)
        return {...book, ...response.data};
      else
        return book
    })

    setBooks(updatedBooks)
  }

  // the filter method returns a new array
  // we need to pass this function two levels down
  const DeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  return (
    <div className='app'>
      <BookCreate addBook={AddBooks}/>
      <div className='main'>
        <p>React Reading App</p>
        <BookList books={ books } deleteBook={DeleteBookById} editBook={EditBook}/>
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

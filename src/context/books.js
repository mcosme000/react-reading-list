import { createContext, useState } from 'react';
import axios from 'axios';

import SearchBooks from '../components/Api'


const BooksContext = createContext()

function Provider({children}) {

  const [books, setBooks] = useState([])

  const GetBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  }

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

  const DeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const valuesToShare = {
    books: books,
    getBooks: GetBooks,
    createBooks: AddBooks,
    editBooks: EditBook,
    deleteBooks: DeleteBookById
  }

  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider };

export default BooksContext;


// import BooksContex, { Provider } from './src/context/books'

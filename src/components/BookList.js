import React from 'react'
import BookShow from './BookShow'
import '../stylesheets/booklist.css'

const BookList = ({ books, deleteBook }) => {

  const BookElements = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} deleteBook={deleteBook}/>
    )
  })
  return (
    <div className='books-container'>
      {BookElements}
    </div>
  )
}

export default BookList;

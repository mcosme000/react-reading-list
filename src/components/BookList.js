import React from 'react'
import BookShow from './BookShow'
import '../stylesheets/booklist.css'

const BookList = ({ books }) => {
  const BookElements = books.map((book) => {
    return (
      <BookShow book={book} key={book.id}/>
    )
  })
  return (
    <div className='books-container'>
      {BookElements}
    </div>
  )
}

export default BookList;

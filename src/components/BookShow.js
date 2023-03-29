import React from 'react'
import '../stylesheets/book.css'

const BookShow = ({book}) => {
  console.log(book);
  return (
    <div className="book">
      <div className="img"></div>
      <div className='book-description'>
        <h3>{book}</h3>
        <p>Description</p>
      </div>
    </div>
  )
}

export default BookShow;

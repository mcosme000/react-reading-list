import React from 'react'
import '../stylesheets/book.css'

const BookShow = ({book, deleteBook}) => {

  const getBookId = () => {
    deleteBook(book.id)
  }
  return (
    <div className="book" id={book.id}>
      <div className="img"></div>
      <div className="icons">
        <img src={require('../media/icon-edit01.png')} alt="edit icon" className='edit-icon'/>
        <img src={require('../media/icon-cancel.png')} alt="delete icon" onClick={getBookId}/>
      </div>
      <div className='book-description'>
        <h3>{book.title}</h3>
        <p>Description</p>
      </div>
    </div>
  )
}

export default BookShow;

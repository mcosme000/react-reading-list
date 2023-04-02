import React, { useState } from 'react'
import '../stylesheets/book.css'
import BookEdit from './BookEdit'

const BookShow = ({book, deleteBook}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditBook = () => {
    setShowEdit(!showEdit)
  }

  const handleDeleteBook = () => {
    deleteBook(book.id)
  }

  return (
    <div className="book" id={book.id}>
      <div className="img"></div>
      <div className="icons">
        <img src={require('../media/icon-edit01.png')} alt="edit icon" onClick={handleEditBook}/>
        <img src={require('../media/icon-cancel.png')} alt="delete icon" onClick={handleDeleteBook}/>
      </div>
      <div className='book-description'>
        <h3>{book.title}</h3>
        <p>Description</p>
      </div>
      {showEdit ? <BookEdit /> : ""}
    </div>
  )
}

export default BookShow;

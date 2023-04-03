import React, { useState } from 'react'
import '../stylesheets/book.css'
import BookEdit from './BookEdit'

const BookShow = ({book, deleteBook, editBook}) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditBook = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (newTitle) => {
    setShowEdit(false)
    console.log(`The new book title is ${newTitle}`);
    editBook(book.id, newTitle)
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
        <h3>{showEdit ? "Edit book" : book.title}</h3>
      </div>
      {showEdit ? <BookEdit onSubmit={handleSubmit}/> : ""}
    </div>
  )
}

export default BookShow;

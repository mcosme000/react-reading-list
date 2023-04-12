import React, { useState, useContext } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'
import '../stylesheets/book.css'


const BookShow = ({book, deleteBook, editBook}) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBooks } = useContext(BooksContext)

  const handleEditBook = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  const handleDeleteBook = () => {
    deleteBooks(book.id)
  }

  return (
    <div className="book" id={book.id}>
      <div className="img">
        <img src={book.cover} alt="random book cover" />
      </div>
      <div className="icons">
        <img src={require('../media/icon-edit01.png')} alt="edit icon" onClick={handleEditBook}/>
        <img src={require('../media/icon-cancel.png')} alt="delete icon" onClick={handleDeleteBook}/>
      </div>
      <div className='book-description'>
        <h3>{showEdit ? "Edit book" : book.title}</h3>
      </div>
      {showEdit ? <BookEdit onSubmit={handleSubmit} book={book}/> : ""}
    </div>
  )
}

export default BookShow;

import React, { useState, useContext } from 'react'
import BooksContext from '../context/books'
import '../stylesheets/bookEdit.css'

const BookEdit = ({onSubmit, book}) => {
  const [newTitle, setNewTitle] = useState(book.title)
  const { editBooks } = useContext(BooksContext)

  const handleChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBooks(book.id, newTitle);
    setNewTitle("")
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input type="text" value={newTitle} onChange={handleChange}/>
      <input type="submit" value="Save"/>
    </form>
  )
}

export default BookEdit;

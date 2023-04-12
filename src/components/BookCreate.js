import React, { useState, useContext } from 'react'
// import SearchBooks from './SearchBooks'
import '../stylesheets/bookcreate.css'
import BooksContext from '../context/books'

const BookCreate = () => {
  const [title, setTitle] = useState("")
  const { createBooks } = useContext(BooksContext)

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    createBooks(title)
    setTitle('')
  }

  return (
    <form className="create-form"onSubmit={handleSubmit}>
      <label>Book title</label>
      <input type="text" value={title} onChange={handleChange}/>
      <input type="submit" value="Add to your list" />
    </form>
  )
}

export default BookCreate;

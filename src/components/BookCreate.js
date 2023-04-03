import React, { useState } from 'react'
import '../stylesheets/bookcreate.css'

const BookCreate = ({ addBook }) => {
  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title)
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

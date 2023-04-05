import React, { useState } from 'react'
import '../stylesheets/bookEdit.css'

const BookEdit = ({onSubmit, book}) => {
  const [newTitle, setNewTitle] = useState(book.title)

  const handleChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, newTitle)
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

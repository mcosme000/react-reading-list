import React, { useState } from 'react'

const BookCreate = ({ addBook }) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(input)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Book title</label>
        <input type="text" onChange={handleChange}/>
        <input type="submit" value="Add to your list" />
      </form>
    </div>
  )
}

export default BookCreate;

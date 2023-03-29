import React from 'react'

const BookShow = ({book}) => {
  console.log(book);
  return (
    <div className="book">
      <h3>{book}</h3>
      <p>Description</p>
    </div>
  )
}

export default BookShow;

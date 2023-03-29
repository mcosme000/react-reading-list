import React from 'react'
import '../stylesheets/book.css'

const BookShow = ({book}) => {
  return (
    <div className="book">
      <div className="img"></div>
      <img src={require('../media/icon-edit01.png')} alt="edit icon" className='edit-icon'/>
      <div className='book-description'>
        <h3>{book.title}</h3>
        <p>Description</p>
      </div>
    </div>
  )
}

export default BookShow;

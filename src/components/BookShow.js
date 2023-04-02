import React from 'react'
import '../stylesheets/book.css'

const BookShow = ({book}) => {
  return (
    <div className="book">
      <div className="img"></div>
      <div className="icons">
        <img src={require('../media/icon-edit01.png')} alt="edit icon" className='edit-icon'/>
        <img src={require('../media/icon-cancel.png')} alt="delete icon"/>
      </div>
      <div className='book-description'>
        <h3>{book.title}</h3>
        <p>Description</p>
      </div>
    </div>
  )
}

export default BookShow;

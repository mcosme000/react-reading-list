import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow'
import '../stylesheets/booklist.css'

const BookList = () => {
  const { books } = useContext(BooksContext)
  // We need to access the useContext object:
  const BookElements = books.map((book) => {
    return (
      <BookShow key={book.id} book={book}/>
    )
  })
  return (
    <div className='books-container'>
      {BookElements}
    </div>
  )
}

export default BookList;

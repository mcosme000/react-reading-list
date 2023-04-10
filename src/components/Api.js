const SearchBooks = async (input) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyA0166gqQrvpdg2svSIFIbjSmEB2SlGW4Y`)
    .then(response => {
      return response.json();
    })
    .then(data => data)
  return response
}

export default SearchBooks;

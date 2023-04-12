import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// we no longer need to import our BooksContext because it is nested,
// we can just import our Provider function
// import BooksContext from './context/books'
import { Provider } from './context/books'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider>
    <App />
  </Provider>
);

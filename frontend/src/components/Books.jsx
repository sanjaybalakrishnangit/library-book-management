import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import "../App.css"

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data))
  }, [])

  return (
    <div className="container">
      <h1>Library Book Management</h1>

      {books.map(book => (
        <div className="book" key={book._id}>
          <span>{book.title}</span> | {book.author} | {book.category} | {book.publishedYear} | Copies: {book.availableCopies}
        </div>
      ))}
    </div>
  )
}

export default Books

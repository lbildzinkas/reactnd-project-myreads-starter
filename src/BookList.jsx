import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const BookList = (props) => {
      const shelves = props.bookshelves.map(bookshelf => (
        <Bookshelf bookshelf={bookshelf} key={bookshelf.value} />
      ))
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
  }

export default BookList
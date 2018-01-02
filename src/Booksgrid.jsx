import React, { Component } from 'react'
import Book from './Book';

const Booksgrid = (props) => {
        const formatedBooks = props.books.map(book => (
            <li key={book.id}>
                <Book book={book} />
            </li>
        ))

        return (
            <ol className="books-grid">
                {formatedBooks}
            </ol>
        )
    }

export default Booksgrid;
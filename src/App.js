import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    bookshelves : [
        { title: "Currently Reading",
        value: "currentlyReading",
        books: []},
        { title: "Want to Read",
        value: "wantToRead",
        books: []},
        { title: "Read",
        value: "read",
        books: []}
    ],
    booksFound : []
  }

  componentDidMount(){
    const books = BooksAPI.getAll().then(books => {
      console.log(books)
      const shelves = this.state.bookshelves

      shelves.forEach(shelf => {
        shelf.books = books.filter(f => f.shelf === shelf.value)
      });

      this.setState({ bookshelves: shelves})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BookList bookshelves={this.state.bookshelves} />)} />
        <Route path="/search" render={() => (<Search books={this.props.booksFound}/>)} />
      </div>
    )
  }
}

export default App

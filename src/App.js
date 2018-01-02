import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.onShelfSelected = this.onShelfSelected.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

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

  onShelfSelected(book, shelf){
    BooksAPI.update(book, shelf).then(book => {
      this.showBooks();
    })
  }

  onSearch(query){
    BooksAPI.search(query).then(books => {
      console.log(books)
      this.setState({booksFound: books})
    })
  }

  componentDidMount(){
    this.showBooks();
  }

  showBooks(){
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
        <Route exact path="/" render={() => (<BookList bookshelves={this.state.bookshelves} onShelfSelected={this.onShelfSelected} />)} />
        <Route path="/search" render={() => (<Search books={this.state.booksFound} onShelfSelected={this.onShelfSelected} onSearch={this.onSearch}/>)} />
      </div>
    )
  }
}

export default App

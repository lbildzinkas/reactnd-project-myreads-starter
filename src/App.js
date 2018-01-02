import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookList from './BookList'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<BookList />)} />
        <Route path="/search" render={() => (<Search />)} />
      </div>
    )
  }
}

export default App

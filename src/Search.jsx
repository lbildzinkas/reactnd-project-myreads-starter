import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Booksgrid from './Booksgrid';

class Search extends Component {

  state = {
    value: ''
  }
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onSearch(event.target.value)
  }

  render(){
    console.log(this.props.books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.value} />

          </div>
        </div>
        <div className="search-books-results">
          {<Booksgrid books={this.props.books === undefined ? [] : this.props.books} onShelfSelected={this.props.onShelfSelected} />}
        </div>
    </div>
  )

  }
}
export default Search
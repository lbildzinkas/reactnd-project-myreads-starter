import React, { Component } from 'react'

class Book extends Component {

      constructor(props){
        super(props)
        this.state = {value: props.book.shelf === undefined ? 'none' : props.book.shelf}
      }

        handleChange = (event) => {
          const { book, onShelfSelected } = this.props
          const value = event.target.value;
          this.setState({value});
          onShelfSelected(book, value);
        }

        render(){
          const { book, onShelfSelected } = this.props

          return (
            <div className="book">
                          <div className="book-top">
                            { book.imageLinks !== undefined && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>}
                            <div className="book-shelf-changer">
                              <select value={this.state.value} onChange={this.handleChange}>
                                <option disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
            </div>
        )
        }
    }

export default Book
import React from 'react'
import Booksgrid from './Booksgrid';

const Bookshelf = (props) => {

        const { bookshelf } = props

        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookshelf.title}</h2>
                  <div className="bookshelf-books">
                    <Booksgrid books={bookshelf.books}/>
                  </div>
            </div>
        )
}

export default Bookshelf
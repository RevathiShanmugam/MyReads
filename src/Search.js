import React from 'react'
import { Link } from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    Books: [],
    query: ''
  }
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    myBooks: PropTypes.object.isRequired
  }
  handleChange = (event) => {var value = event.target.value
    this.setState(() => {
      return {query: value}})
    this.searchBooks(value)
  }
  changeBookShelf = (books) => {
  let all_Books = this.props.myBooks
  for (let book of books) {
    book.shelf = "none"
  }
  for (let book of books) {
    for (let b of all_Books) {
      if (b.id === book.id) {
        book.shelf = b.shelf
      }
    }
  }
  return books
 }
  searchBooks = (val)=> {
    if(val.length !== 0) {
      BooksAPI.search(val,10).then((books)=>{
        if (books.length>0) {
          this.setState(()=>{
            return {Books:books.filter((book)=>(book.imageLinks))}
          })
        }
      })
    }
    else
    {
      this.setState({
        Books: [],
        query: ''
      })
    }
  }
  addBook = (book, shelf) => {this.props.onChange(book,shelf)
    this.props.onChange(book,shelf)}
  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            value={this.state.query} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.query.length>0 && this.state.Books.map((book,index)=>
            (<Book book={book} key={index} onUpdate={(shelf)=>
              {this.addBook(book,shelf)}}/>)
            )}
          </ol>
        </div>
      </div>
    )
  }
}
export default Search

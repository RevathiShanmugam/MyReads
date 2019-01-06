import React from 'react'
import Home from './Home'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books:[]
  }
  componentDidMount(){
    this.getBookDetails()
  }
  getBookDetails = () => {
   BooksAPI.getAll().then((books)=> {this.setState({Books: books})})
  }
  updateBookDetails = (book, shelf) =>{
  BooksAPI.update(book, shelf).then(()=>{this.getBookDetails()})
  }

  render() {
    return (
      <div className="app">
          <Home books={this.state.Books} onChange={this.updateBookDetails}/>
      </div>
    )
  }
}

export default BooksApp

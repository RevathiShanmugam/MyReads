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

  render() {
    return (
      <div className="app">
          <Home books={this.state.Books}/>
      </div>
    )
  }
}

export default BooksApp

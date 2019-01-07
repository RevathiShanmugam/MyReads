import React from 'react'
import { Route } from 'react-router-dom'
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
        <Route exact path="/" render={()=>
          (<Home books={this.state.Books} onChange={this.updateBookDetails}/>)}/>
        <Route exact path="/search" render={(booklist)=>
          (<Search onChange={this.updateBookDetails} booklist={booklist}/>)}/>
      </div>
    )
  }
}

export default BooksApp

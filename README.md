# MyReads Project

## Description
MyReads is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## How to run :-
1. Download or clone the repository on your machine https://github.com/RevathiShanmugam/MyReads.git
2. Extract the .zip file
3. Run npm install to install all project dependencies
4. Run the app using npm start or yarn start command
5. App can be seen at: localhost:3000

## Backend Server
To simplify development process, a backend server was provided by Udacity. The file BooksAPI.js contains the methods to perform necessary operations on the backend

### getAll()
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app

### update(book, shelf)
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
  
### Search(query, maxResults)
query: <String>
maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
Returns a Promise which resolves to a JSON object containing a collection of book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
  
## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

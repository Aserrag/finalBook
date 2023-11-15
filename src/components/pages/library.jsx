import React from 'react'
import Header from '../items/header'

import SearchBar from '../items/searchBar'
import BookList from './../items/BookList';

const Library = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <BookList />
   
    </div>
  )
}

export default Library
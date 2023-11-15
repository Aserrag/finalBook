import React from 'react'
import Header from '../items/header'
import SearchBar from '../items/searchBar'
import Card from '../card';
import BookList from '../BookList';


const Library = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      

    <div>Library</div>

    <BookList />
    </div>
  )
}

export default Library
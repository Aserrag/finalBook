import React from 'react'
import Header from '../items/header'

import SearchBar from '../items/searchBar'
import BookList from './../items/BookList';
import Home from './home';

const Library = () => {
  return (
    <>
      <div className="bg-bgBasic" >
      <Header/>
      <SearchBar/>
      </div>
      <div className='bg-Hcolor'>
      
      </div>
    </>
    
  )
}

export default Library
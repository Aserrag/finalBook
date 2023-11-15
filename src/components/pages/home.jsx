import React from 'react'
import Header from '../items/header'
import SearchBar from '../items/searchBar'
import MediaPlayer from '../items/mediaPlayer'
import BookList from '../items/BookList';

const Home = () => {
  return (
    <>
    <div className="bg-bgBasic" >

      
      <Header/>
      <SearchBar/>
      </div>
      <div className='bg-Hcolor'>

      <BookList />
      </div>
      </>  
  )
}

export default Home
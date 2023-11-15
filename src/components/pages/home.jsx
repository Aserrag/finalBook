import React from 'react'
import Header from '../items/header'
import SearchBar from '../items/searchBar'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col bg-indigo-900  justify-center text-center" >
      <Header/>
      <SearchBar/>
    <div>
      Home
      </div>
      </div>
  )
}

export default Home
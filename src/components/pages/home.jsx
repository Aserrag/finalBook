import React, { useState } from 'react';
import Header from '../items/header';
import SearchBar from '../items/searchBar';
import BookList from '../items/BookList';
import BookTypesList from './../items/BookTypeList';

const Home = () => {
  const [selectedType, setSelectedType] = useState('All');

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    // You can perform additional actions based on the selected type
  };

  return (
    <>
      <div
        className="top"
        style={{ position: "absolute", top: "-100px" }}
        id="top"
      ></div>

      <div className="bg-bgBasic">
        <Header />
        <SearchBar />
      </div>
      <div className='bg-Hcolor'>
        <BookTypesList onTypeSelect={handleTypeSelect} />
        <BookList selectedType={selectedType} />
      </div>
    </>  
  );
}

export default Home;

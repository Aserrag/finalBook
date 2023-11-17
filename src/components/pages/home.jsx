import React, { useState } from "react";
import Header from '../items/header';
import SearchBar from '../items/searchBar';
import BookList from '../items/BookList';
import BookTypesList from './../items/BookTypeList';

const Home = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="top" style={{ position: "absolute", top: "-100px" }} id="top"></div>

      <div className="bg-bgBasic sticky top-0 z-10">
        <Header />
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="bg-Hcolor pt-8 flex justify-center items-center">
        <img
          src="/assets/image/SocialGraphicTop10.png" 
          alt=""
          className="w-3/4 h-1/6"
        />
      </div>
      <div className="bg-Hcolor w-full  flex justify-center items-center ">
      <div className="w-2/4" >
       
      <BookTypesList onTypeSelect={handleTypeSelect}   />
      <BookList selectedType={selectedType} searchTerm={searchTerm} />
      </div>
      </div>
    </>
  );
};

export default Home;

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
    console.log("Search Term:", term);
    setSearchTerm(term);
  };

  return (
    <>
      <div className="top" style={{ position: "absolute", top: "-100px" }} id="top"></div>

      <div className="bg-bgBasic">
        <Header />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="bg-Hcolor">
        <BookTypesList onTypeSelect={handleTypeSelect} />
        <BookList selectedType={selectedType} searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Home;

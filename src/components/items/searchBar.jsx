import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div className="sticky top-0 z-10"  >
      <div className=" p-1 w-1/2 bg-items shadow-xl rounded-full flex items-center mx-96  bg-searchb ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-full  bg-transparent text-lg  text-textColor border-none outline-none"
          placeholder="Search here ...."
        />
        <button
          className="ml-2 px-4 py-2 text-lg text-white bg-orange-700 rounded-full hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

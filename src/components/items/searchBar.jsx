import React, { useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import { useStateValue } from "../Context/StateProvider";

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
    <div className="gap-24 flex items-center justify-center place-items-center">
      <div className="p-4 md:w-2/3 bg-items shadow-xl mt-12 rounded-md flex items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-full bg-transparent text-lg text-textColor border-none outline-none"
          placeholder="Search here ...."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
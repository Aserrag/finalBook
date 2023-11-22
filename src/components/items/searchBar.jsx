import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Pass the search term to the parent component
  // onSearch(searchTerm);
  };



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return (

    <input
      type="text"
      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => { setSearchTerm(e.target.value); }}
      onKeyDown={handleKeyDown}
      onSearch={handleSearch}
    />






    // <div className="sticky top-0 z-10">
    //   <div className="p-1 md:w-1/2 mx-auto bg-items shadow-xl rounded-full flex items-center bg-card    ">
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e)=>{setSearchTerm(e.target.value);}}
    //       onKeyDown={handleKeyDown}
    //       className="w-30 bg-transparent text-lg text-textColor border-none outline-none"
    //       placeholder="        Search..."
    //     />
    //     <button
    //       className="ml-2 px-4 py-2 text-lg text-white bg-Hcolor rounded-r-full hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
    //       onClick={handleSearch}
    //     >
    //       Search
    //     </button>
    //   </div>
    // </div>
  );
};

export default SearchBar;

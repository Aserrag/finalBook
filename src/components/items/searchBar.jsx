import React from "react";
// import { IoSearch } from "react-icons/io5";
// import { useStateValue } from "../Context/StateProvider";

const SearchBar = () => {
//   const [{ searchTerm }, dispatch] = useStateValue();

//   const setSearchTerm = (value) => {

//   };

  return (
    <div className=" gap-24   flex items-center justify-center place-items-center ">
      <div className="p-4 md:w-2/3 bg-items shadow-xl mt-12 rounded-md flex items-center justify-center">
        {/* <IoSearch className="text-2xl text-textColor" /> */}
        <input
          type="text"
        //   value={searchTerm}
          className="w-full h-full bg-transparent text-lg text-textColor  border-none outline-none "
          placeholder="Search here ...."
        //   onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
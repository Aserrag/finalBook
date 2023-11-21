import React, { useEffect, useState } from "react";
import Header from '../items/header';
import SearchBar from '../items/searchBar';
import BookList from '../items/BookList';
import BookTypesList from './../items/BookTypeList';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { login } from "../../assets/img";
import Col from "../items/col";

const Home = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log("uid", uid)
        } else {
          window.localStorage.setItem("auth", false);
          navigate("/login")
        }
      });
     
}, [])

useEffect(() => {
  if (window.localStorage.getItem("auth") === "false")
    navigate("/login", { replace: true });
}, [navigate]);


  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="bg-Hcolor">
      <div className="top bg-Hcolor"  id="top"></div>

      <div className=" sticky top-0 z-10 m-2">
        {/* <Header /> */}
        </div>
        <div >
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="bg-Hcolor pt-2 flex justify-center items-center">
     <Col/>
      </div>
      <div className="bg-Hcolor w-full  flex justify-center items-center ">
      <div className="w-2/4" >
       
      <BookTypesList onTypeSelect={handleTypeSelect}   />
      <BookList selectedType={selectedType} searchTerm={searchTerm} />
      </div>
      </div>
    </div>
  );
};

export default Home;

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
import ColorInversionFooter from "../items/Footer";




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
    <div className="bg-white">
      <div className="top bg-white" style={{ position: "absolute", top: "-100px" }} id="top"></div>

 


      <div className="">
     <Col/>
      </div>


      <div className="bg-white w-full  flex flex-col justify-center items-center ">
      
      {/* <BookTypesList onTypeSelect={handleTypeSelect}   /> */}
      <div className="w-2/4 rounded bg-card mt-4 mb-5 flex  cursor-pointer" >
      </div>

      <div className="w-3/4" >
      <BookList selectedType={selectedType} searchTerm={searchTerm} />
      </div>

      {/* <div className="w-[80%] flex justify-center mt-40">
      <ColorInversionFooter />
      </div> */}

      </div>

    </div>
  );
};

export default Home;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { CompleteLogo } from "./../../assets/img/index";


const Header = () => {
  return (
<>
    <div className="top" style={{ position: "absolute", top: "-100px" }} id="top"></div>
    <header className='flex flex-wrap justify-center lg:justify-start w-full h-20 p-4 md:py-1 md:px-6 mt-4'>
      <div className="flex flex-wrap justify-center lg:justify-start ">
        <NavLink to="/home">
          <img src={CompleteLogo} alt="Logo" className='h-9' />
          </NavLink>

     
      </div>
    </header>
    </>
  );
}

export default Header;

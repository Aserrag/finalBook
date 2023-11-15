import React from 'react'
import { NavLink } from 'react-router-dom'
import {CompleteLogo} from "./../../assets/img/index"
const Header = () => {
  return (
    <header className='flex justify-between w-full p-4 md:py-1 md:px-6 mt-4'>
            <div className="flex justify-center items-center">
                <NavLink to="/home">
                    <img src={CompleteLogo} alt="Logo" className='h-12' />
                </NavLink>
            </div>

          

            {/* <div className="flex justify-center items-center ml-7">
                <NavLink to="/home">
                    <img src={TextLogo} alt="Logo" className='h-12' />
                </NavLink>
            </div> */}

          
               
                
                   
                

          

        </header>
  )
}

export default Header
import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Link , Redirect} from 'react-router-dom'
import {  TERipple } from 'tw-elements-react'
import { logoSm } from '../../assets/img';
import { Label, TextInput } from 'flowbite-react';
import {login} from '../../actions/auth'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
 
const SignIn = ({login}) => {
    const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);


  const onLogin = (e) => {
    e.preventDefault();
    login(username,password);
   
}
useEffect(() => {
  if (window.localStorage.getItem('access')) {
    navigate('/home');
  }
}, []);


  // useEffect(() => {
  //   if (window.localStorage.getItem("access"))
  //     navigate("/home", { replace: true });
  // }, [navigate]);
 
  return (
 

    <form className="mb-8 text-black gap-2">
      <div className=''>
      {/* <!-- Email input --> */}
      <div>
        <div className="mb-2 gap-2 text-start">
          <Label htmlFor="email1" value="Your email : " />
        </div>
        <TextInput className='mb-3'value={username} name="username" type="username" placeholder="username...."  onChange={(e)=>setEmail(e.target.value)} required />
      </div>

      {/* <!--Password input--> */}
      <div>
        <div className="mb-2 gap-3 text-start">
          <Label htmlFor="password1" value="Your password :" />
        </div>
        <TextInput className='mb-4'value={password} name='password' type="password"  onChange={(e)=>setPassword(e.target.value)} required />
      </div>
      </div>
      {/* <!-- Remember me checkbox --> */}
      <div className="mb-6 flex items-center justify-between">
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-buttons checked:bg-buttons checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-buttons dark:checked:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="exampleCheck3"
            defaultChecked
          />Remember Me
        </div>
      </div>

      {/* <!-- Submit button --> */}

      <TERipple rippleColor="light" className="w-full">
        <button
        onClick={onLogin}
          type="button"
          className="inline-block w-full rounded bg-buttons   px-7 pb-2.5 pt-3 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Sign in
        </button>
      </TERipple>


    </form>


      
     
  )
}
 
export default connect(null,{login}) (SignIn); 
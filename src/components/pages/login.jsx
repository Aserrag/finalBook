import React, { useEffect, useState } from 'react'
import {  login2, Logo, logoSm, logoimg } from '../../assets/img'
import { ReactDOM } from 'react'
import { TEInput, TERipple } from 'tw-elements-react'
import { auth, provider } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { motion, AnimatePresence } from "framer-motion";
import Signup from './signup'
import SignIn from './signin'





const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUser, setIsUser] = useState(false);

  const handleRedirect = () => {
    // Redirect to a new link
  
    window.location.href = 'https://movieproject0001.pythonanywhere.com/auth/users/'
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        window.localStorage.setItem("auth", true);
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }

  useEffect(()=>{
    

  },[isUser]);


  const setIsUser2 = (isDone) =>{
    setIsUser(!isUser)
  }

  const loginWithGoogle = async () => {
    try {
      const userCred = await auth.signInWithPopup(provider);
      if (userCred) {
        window.localStorage.setItem("auth", true);
        navigate("/home", { replace: true });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true")
      navigate("/home", { replace: true });
  }, [navigate]);

  return (
    <section className='flex h-screen w-screen justify-center bg-white   bg-no-repeat bg-center bg-[length:100%_100%] '
    // style={{ backgroundImage: `url(${login})` }}
    >
      <div className="container h-full px-6 py-24 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src={logoimg}
              className="w-full"
              alt="Phone image"
            />
          </div>



          <div className="md:w-8/12 lg:ml-6  lg:w-5/12 p-10 shadow-2xl shadow-black bg-white rounded-3xl text-white gap-4 ">
            <div className='text-2xl pb-10  font-bold text-card flex justify-center items-center gap-5 '>
              <span>
               
                </span>
              {!isUser ? "Sign In ":"Sign Up "}</div>
          

          {!isUser?<SignIn />:<Signup/>}


      {/* <!-- Divider --> */}
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
          OR
        </p>
      </div>
<div>
  </div>
        {/* <!-- Forgot password link --> */}
        <TERipple rippleColor="light" className="w-full">
        <a
          className="mb-3 flex w-full items-center justify-center rounded bg-card px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={()=>{setIsUser(!isUser)}}
          href="#!"
          role="button"
        >
          {!isUser ? "Become a Member" :"Log in with your Email "}
        </a>
      </TERipple>

      {/* <!-- Social login buttons --> */}
      <TERipple rippleColor="light" className="w-full">
        <a
          className="mb-3 flex w-full items-center justify-center rounded bg-facebook px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          
          href="#!"
          role="button"
        >
          {/* <!-- Facebook --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-3.5 w-3.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          Continue with Facebook
        </a>
      </TERipple>
      <TERipple onClick={loginWithGoogle} rippleColor="light" className="w-full">
        <a
          className="mb-3 flex w-full items-center justify-center rounded bg-blue-700 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
          // style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          {/* <!-- Google --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 45 50"
          >
            <path d="M23.4 46.9c-12.5 0-23-10.2-23-22.7s10.5-22.7 23-22.7c6.9 0 11.9 2.7 15.6 6.3l-4.4 4.4c-2.7-2.5-6.3-4.4-11.2-4.4C14.2 7.7 7.1 15 7.1 24.2c0 9.1 7.1 16.5 16.3 16.5 5.9 0 9.3-2.4 11.5-4.5 1.8-1.8 2.9-4.3 3.4-7.8H23.5v-6.2h20.7c.2 1.1.3 2.4.3 3.9 0 4.7-1.3 10.4-5.4 14.5-3.9 4.1-9 6.3-15.7 6.3zm52.7-14.6c0 8.4-6.6 14.6-14.7 14.6s-14.7-6.2-14.7-14.6c0-8.5 6.6-14.6 14.7-14.6 8.1-.1 14.7 6.1 14.7 14.6zm-6.4 0c0-5.3-3.8-8.9-8.3-8.9-4.4 0-8.3 3.6-8.3 8.9 0 5.2 3.8 8.9 8.3 8.9 4.5-.1 8.3-3.7 8.3-8.9zm38.3 0c0 8.4-6.6 14.6-14.7 14.6s-14.7-6.2-14.7-14.6c0-8.5 6.6-14.6 14.7-14.6 8.1-.1 14.7 6.1 14.7 14.6zm-6.5 0c0-5.3-3.8-8.9-8.3-8.9-4.4 0-8.3 3.6-8.3 8.9 0 5.2 3.8 8.9 8.3 8.9 4.5-.1 8.3-3.7 8.3-8.9zm37-13.8v26.3c0 10.8-6.4 15.2-13.9 15.2-7.1 0-11.4-4.8-13-8.6l5.6-2.3c1 2.4 3.4 5.2 7.4 5.2 4.8 0 7.8-3 7.8-8.6v-2.1h-.2c-1.4 1.8-4.2 3.3-7.7 3.3-7.3 0-14-6.4-14-14.6 0-8.3 6.7-14.7 14-14.7 3.5 0 6.3 1.6 7.7 3.3h.2v-2.4h6.1zm-5.7 13.8c0-5.2-3.4-8.9-7.8-8.9s-8.1 3.8-8.1 8.9c0 5.1 3.7 8.8 8.1 8.8 4.4 0 7.8-3.7 7.8-8.8zm16-29.2V46h-6.2V3.1h6.2zm24.9 34l5 3.3c-1.6 2.4-5.5 6.5-12.2 6.5-8.3 0-14.5-6.4-14.5-14.6 0-8.7 6.3-14.6 13.8-14.6 7.6 0 11.3 6 12.5 9.3l.7 1.7-19.6 8.1c1.5 2.9 3.8 4.4 7.1 4.4s5.5-1.7 7.2-4.1zm-15.3-5.3l13.1-5.4c-.7-1.8-2.9-3.1-5.4-3.1-3.4 0-7.9 2.9-7.7 8.5z" /><path fill="none" d="M0 1h180v59.5H0z" />
          </svg>
          Continue with Google
        </a>
      </TERipple>
</div>

        </div>
      </div>
    </section>
  )
}

export default Login
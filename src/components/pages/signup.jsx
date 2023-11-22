import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { TEInput, TERipple } from 'tw-elements-react'
import { logoSm } from '../../assets/img';
import { Label, TextInput } from 'flowbite-react';


const Signup = ({isDone2}) => {
    const navigate = useNavigate();
 const [data, setData] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isDone,setIsDone]=useState(true)

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setName(name)
                setIsDone(!isDone)
                isDone2(isDone)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }



    


    return (

        <form className="mb-8 text-black">
            <div className=''>
                {/* <!-- Email input --> */}
                <div>
                    <div className="mb-2 gap-2 text-start">
                        <Label value="Your Name : " />
                    </div>
                    <TextInput className='mb-3' name="name" type="text" placeholder="Johny" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <div className="mb-2 gap-2 text-start">
                        <Label htmlFor="email1" value="Your email : " />
                    </div>
                    <TextInput className='mb-3' name="email" type="email" placeholder="Johny@example.com" onChange={(e) => setEmail(e.target.value)} required />
                </div>
            

                {/* <!--Password input--> */}
                <div>
                    <div className="mb-2 gap-3 text-start">
                        <Label htmlFor="password1" value="Your password :" />
                    </div>
                    <TextInput className='mb-4' name='password' type="password" placeholder='*********' onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            {/* <!-- Submit button --> */}

            <TERipple rippleColor="light" className="w-full">
                <button
                    onClick={onSubmit}
                    type="button"
                    className="inline-block w-full rounded bg-buttons   px-7 pb-2.5 pt-3 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Sign Up
                </button>
            </TERipple>
        </form>


    )
}

export default Signup
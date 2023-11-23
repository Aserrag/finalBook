import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { TEInput, TERipple } from 'tw-elements-react'
import { logoSm } from '../../assets/img';
import { Label, TextInput } from 'flowbite-react';

import { connect } from 'react-redux';
import { signup } from '../../actions/auth'


const Signup = ({ signup }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { email, password, username, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault()
        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    }



    return (

        <form className="mb-8 text-black" onSubmit={e => onSubmit(e)}>
            <div className=''>
                {/* <!-- username input --> */}
                <div>
                    <div className="mb-2 gap-2 text-start">
                        <Label value="Your Name : " />
                    </div>
                    <TextInput
                        className='mb-3'
                        value={username}
                        name="username"
                        type="text"
                        placeholder="Johny"
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                {/* <!-- email input --> */}
                <div>
                    <div className="mb-2 gap-2 text-start">
                        <Label htmlFor="email1" value="Your Email : " />
                    </div>
                    <TextInput
                        className='mb-3'
                        value={email}
                        name="email"
                        type="email"
                        placeholder="Johny@example.com"
                        onChange={e => onChange(e)}
                        required
                    />
                </div>


                {/* <!--Password input--> */}
                <div>
                    <div className="mb-2 gap-3 text-start">
                        <Label htmlFor="password1" value="Password :" />
                    </div>
                    <TextInput
                        className='mb-4'
                        name='password'
                        value={password}
                        type="password"
                        placeholder='*********'
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
            </div>
            <div>
                <div className="mb-2 gap-3 text-start">
                    <Label htmlFor="password2" value="Re-confirm password :" />
                </div>
                <TextInput
                    minLength={6}
                    className='mb-4'
                    name='re_password'
                    value={re_password}
                    type="password"
                    placeholder='*********'
                    onChange={(e) => onChange(e)}
                    required
                />
            </div>

            {/* <!-- Submit button --> */}

            <TERipple rippleColor="light" className="w-full">
                <button
                    onClick={e => onSubmit(e)}
                    type="submit"
                    className="inline-block w-full rounded bg-buttons   px-7 pb-2.5 pt-3 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Sign Up
                </button>
            </TERipple>
        </form>


    )
}

export default connect(null, { signup })(Signup); 
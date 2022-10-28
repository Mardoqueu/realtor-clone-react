import React from 'react';
import {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { signInWithEmailAndPassword, auth } from 'firebase/auth';
import {toast} from "react-toastify"
import { async } from '@firebase/util';


const SignIn = () => {
    /* Created a hook for show password */
    const [showPassword, setShowPassword] = useState(false);
   /*  created a hook for the formdata */
    const [formData, setFormData] = useState({
    /*  Initial value was an empty string */
        email: "",
        password: "",
    });
    const {email, password} = formData;
   /*  function for any change happens to the forms we are going to get it gets and puts it inside of the formdata state */
    function onChange(e){
        setFormData((prevState)=> ({
          ...prevState,
          [e.target.id]: e.target.value, 
        }));
    }

    async function onSubmit(){
        Prevente to refresh the page
        e.preventDefault();
    }
    return (
        <section>
        {/* Just added h1 for the title sign up */}
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                {/* Adding image */}
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80" 
                alt='key'
                className='w-full rounded-t-2xl'                    
                />
            </div>
            {/* Adding a form with two inputs
            1. For the email
            2. For the password
            So each input has a value onChange for tracking the changes inside our input */}
            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                <form onSubmit={onSubmit}>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={onChange}
                        placeholder="Email Address"
                        className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                    />
                     {/* For the password field added the condition if the show password is true, we want to see the icon AiFillEyeInvisible and it it's false it shows AiFillEye */}                   
                    <div className='relative mb-6'>
                        <input 
                        type={showPassword ? "text" : "password"}
                        id="password" 
                        value={password} 
                        onChange={onChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                    />
                    {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' 
                    onClick={() => setShowPassword((prevState) => ! prevState)}/> 
                    :
                     <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'
                        onClick={() => setShowPassword((prevState) => ! prevState)}
                     />}
                    </div>
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='mb-6'>Don't have a account?
                        <Link 
                        to='/sign-up'
                        className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
                        </p>
                        <p>
                            <Link 
                            to='/forgot-password'
                            className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                            >Forgot password?</Link>
                        </p>
                    </div>
                    <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>
                Sing in
                </button>
                <div className='flex my-4 
                before:border-t before:flex-1 items-center before:border-gray-300
                after:border-t after:flex-1 items-center after:border-gray-300'>
                    <p className='text-center font-semibold mx-4'>OR</p>
                </div>
                <OAuth/>
                </form>

            </div>
        </div>
            
        </section>
    );
}

export default SignIn;

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    function onChange(e){
        setEmail(e.target.value); 
    };

    async function onSubmit(e){
         /*  Prevent to refresh the page */
        e.preventDefault();
        try {
         /*  Send the password */
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)    
        /*  if it was sucessful  */
            toast.success("Email was sent")    
        } catch (error) {
            toast.error("Could not resend password")
        }
    }
    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password?</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80" 
                alt='key'
                className='w-full rounded-t-2xl'                    
                />
            </div>
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
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='mb-6'>Don't have a account?
                        <Link 
                        to='/sign-up'
                        className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
                        </p>
                        <p>
                            <Link 
                            to='/sign-in'
                            className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'
                            >Sign in instead</Link>
                        </p>
                    </div>
                    <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>
                Sent Reset email
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

export default ForgotPassword;
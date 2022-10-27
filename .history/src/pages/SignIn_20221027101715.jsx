import React from 'react';
import {useState} from 'react';


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const {email, password} = formData;
    function
    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80" 
                alt='key'
                className='w-full rounded-t-2xl'                    
                />
            </div>
            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                <form>
                    <input className='w-full' type="email" id="email" value={email} onChange={onChange}/>
                </form>
            </div>
        </div>
            
        </section>
    );
}

export default SignIn;

import React from 'react';
import {FcGoogle} from 'react-icons/fc'
const OAuth = () => {
    return (
        <button className='flex items-center justify-center w-full bg-red-700 text-white px-7'>
        <FcGoogle/>
            Continue with Google
        </button>
    );
}

export default OAuth;
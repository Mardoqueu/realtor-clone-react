import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Profile = () => {
    /* So firth we got the information from the auth and put it inside formData, but we can not get it directly because we would get an error, so it needs to wait until the information is coming from the auth, that's why I have to added the middleware */
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "Mardoqueu",
        email: "mardoqueu.sousa@gmail.com"
    });
/*     structure and name and email from formData
 */    
    const {name, email} = formData;
    /* function for logging out the person. It uses auth that sing out to log out the person and navigates the person to home page */
    function onLogout(){
        auth.signOut();
        navigate("/");
    }
    return (
        <>
            <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
                <h1 className='text-3xl text-center mt-6 font-bold'>
                My profile
                </h1>
                <div className='w-full md:w-[50%] mt-6 px-3 '>
                    <form>
                        {/* Name input*/}

                        <input type="text" id="name" value={name} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'></input>

                        {/* Email input*/}
                        <input type="email" id="email" value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'></input>

                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                            <p className='flex items-center '>Do you want to change your name?
                            <span className='text-red-600 hover:text-red-700 ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
                            </p>
                            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}

export default Profile;

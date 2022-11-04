import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from "firebase/firestore";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from "../firebase";
import {FcHome} from "react-icons/fc"
import { Link } from 'react-router-dom';

const Profile = () => {
    /* So first we got the information from the auth and put it inside formData, but we can not get it directly because we would get an error, so it needs to wait until the information is coming from the auth, that's why I have to added the middleware */
    const auth = getAuth();
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
/*     structure and name and email from formData
 */    
    const {name, email} = formData;
    /* function for logging out the person. It uses auth that sing out to log out the person and navigates the person to home page */
    function onLogout(){
        auth.signOut();
        navigate("/");
    }
    function onChange(e) {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      }
      async function onSubmit() {
        try {
          if (auth.currentUser.displayName !== name) {
            //update display name in firebase auth
            await updateProfile(auth.currentUser, {
              displayName: name,
            });
    
            // update name in the firestore
    
            const docRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(docRef, {
              name,
            });
          }
          toast.success("Profile details updated");
        } catch (error) {
          toast.error("Could not update the profile details");
        }
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

                        <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        disabled={!changeDetail}
                        onChange={onChange}
                        className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                            changeDetail && "bg-red-200 focus:bg-red-200"
                        }`}></input>

                        {/* Email input*/}
                        <input type="email" id="email" value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'></input>

                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
                            <p className='flex items-center '>Do you want to change your name?
                            <span
                                onClick={() => {
                                    changeDetail && onSubmit();
                                    setChangeDetail((prevState) => !prevState);
                                }}
                                className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer"
                                >
                                {changeDetail ? "Apply change" : "Edit"}
                             
                             </span>
                            </p>
                            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
                        </div>

                    </form>
                    <button type='submit' className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded-none shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
                    <Link to="/create-listing" className='flex justify-center items-center'>
                    <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2'/>
                      Sell or rent your home
                    </Link>

                    </button>
                </div>
            </section>
        </>
    );
}

export default Profile;

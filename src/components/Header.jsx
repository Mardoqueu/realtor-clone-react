import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IMG from "../img/realtor-logo.svg"
import {getAuth, onAuthStateChanged} from "firebase/auth"
const Header = () => {
    const [pageState, setPageState] = useState("Sign in")
    /*useLocation returns the current location object, which represents the current URL in web browsers. */
    const location = useLocation();

    /*useNavigate returns an imperative method for changing the location. Used by s, but may also be used by other elements to change the location. */
    const navigate = useNavigate()
    const auth = getAuth();
    /* added useEffect to track the changes in auth */ 
    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setPageState('Profile')
            }else{
                setPageState('Sign in')
            }
        } )
    }, [auth]);

    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
    
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src={IMG} alt='logo'
                    className='h-5 cursor-pointer'
                    onClick={() => navigate("/")}></img>
                </div>
                <div>
                    {/* Items of menu where I used useLocation to returns the current location of each element on menu and the useNavigation  to returns the changing of each element on menu */}
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"} `}  onClick={() => navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}  onClick={() => navigate("/offers")}>Offers</li>

                        <li 
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                           ( pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`}  onClick={() => navigate("/profile")}>
                        {pageState}
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

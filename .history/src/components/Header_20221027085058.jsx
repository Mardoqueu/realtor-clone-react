import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IMG from "../img/realtor-logo.svg"
const Header = () => {
    /*useLocation returns the current location object, which represents the current URL in web browsers. */
    const location = useLocation();
    
/*     Returns an imperative method for changing the location. Used by s, but may also be used by other elements to change the location. */
    const navigate = useNavigate()
    function pathMathRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
    
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <div>
                    <img src={IMG} alt='logo'
                    className='h-5 cursor-pointer'
                    onClick={() => navigate("/")}></img>
                </div>
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"} `}  onClick={() => navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}  onClick={() => navigate("/offers")}>Offers</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}  onClick={() => navigate("/sign-in")}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';

/* Import the outlets for adding the Children inside this and navigate the person to sing in page
 */
const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus();
    /* if checkingStatus is true, it means we were getting the information 
    so just show the loading */
    if(checkingStatus){
        return <Spinner/>;
    }
    /* Otherwise, if the logging is true, we get the outlie order and if 
    it's false, we are going to be redirect to the sign in page  */
    return loggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
 }

export default PrivateRoute;

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {useEffect, useState } from 'react';

/* This hook is getting information from the firebase, including the getAuth
and onAuthStateChanged  */
export const useAuthStatus = () => {
/*     loggedIn false by default */
    const [loggedIn, setLoggedIn] = useState(false)
/*     checkingStatus is true by default */
    const [checkingStatus, setCheckingStatus] = useState(true)

/*     After using useEffect one time rendering and getting information from the Auth
    it gets true or false of the person to be authenticated or not */
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
/*         if the user exists it means the person is logged   
 */            if(user){
                setLoggedIn(true)
            }
/*             put the setCheckingStatus to false
 */            setCheckingStatus(false)
        })
    }, []);
/*     export the return, the loggedIn and the checkingStatus */
    return {loggedIn, checkingStatus}
}



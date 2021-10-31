import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../pages/Shared/Login/firebase/firebase.init';

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google
    const handleGoogleSignIn = () => {

        return signInWithPopup(auth, provider)
            .finally(() => setIsLoading(false))
    }

    // observer
    useEffect(() => {
        // setIsLoading(true);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        setIsLoading(false)
    }, [])

    // log out
    const logOut = () => {
        // setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        error,
        handleGoogleSignIn,
        logOut,
        isLoading
    };
};

export default UseFirebase;
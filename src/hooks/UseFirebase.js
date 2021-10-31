import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../pages/Shared/Login/firebase/firebase.init';

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)
        /* .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => {
            setError(error.message)
        }) */
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
            }
        })
    }, [])

    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }


    return {
        user,
        error,
        handleGoogleSignIn,
        logOut
    };
};

export default UseFirebase;
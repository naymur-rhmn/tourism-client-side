import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn, user } = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    console.log(user);
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <div className="login">
                <button onClick={handleGoogleLogIn}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;
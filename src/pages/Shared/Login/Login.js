import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

const google = <FontAwesomeIcon icon={faGoogle} />

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
            <div>
                <p className="m-0 fw-bold fs-2 header-logo text-center mb-3">Travel<span className="text-warning">Guru</span></p>

                <div className="login text-center p-5 shadow
                ">
                    <h5 className="fw-bold mb-3">Login With</h5>
                    <div>
                        <button className="btn shadow google-btn pe-5 d-flex align-items-center fw-bold" onClick={handleGoogleLogIn}><span className="text-info me-5 fs-2">{google}</span> Sign in with Google</button>
                        <p className="mt-3"> Don't have an account? <a href="##">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
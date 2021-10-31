import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center p-5">
                        <h2 className="display-4 fw-bold text-danger">404</h2>
                        <h2 className="display-4">Oops! That page can’t be found.</h2>
                        <p className="fw-bold text-gray">IT LOOKS LIKE NOTHING WAS FOUND AT THIS LOCATION. MAYBE TRY ONE OF THE LINKS BELOW OR A SEARCH?</p>
                        {/* link for home */}
                        <NavLink to="/home"><button className="btn bg-secondary text-white ">Back to Home</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div className="bg-secondary">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light  align-items-center">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="##"><p className="m-0 fw-bold fs-2 header-logo">Travel<span className="text-warning">Guru</span></p></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <NavLink className="text-decoration-none nav-link fw-bold" to='/home'><span>HOME</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="text-decoration-none nav-link fw-bold" to='/home'><span>SERVICES</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="text-decoration-none nav-link fw-bold" to='/home'><span>ABOUT US</span></NavLink>
                                </li>
                            </ul>
                            <span className="ms-auto d-flex align-items-center">
                                {(user.email) && <Link to="/manageorders"><button className="btn btn-warning border-0 me-2 fw-bold ">Manage Orders</button></Link>}
                                {(user.email) && <Link to="/myorders"><button className="btn btn-warning border-0 me-2 fw-bold ">My Order</button></Link>}
                                {(user.email) && <span className="me-2 bg-info py-2 px-3 fw-bold text-warning rounded-circle">{user.displayName.slice(0, 1)}</span>}
                                {(user.email) ? <Link to="home"><button onClick={logOut} className="btn btn-warning border-0 me-2 fw-bold ">Log Out</button></Link> :
                                    <Link to="login"><button className="btn btn-info border-0 me-2 fw-bold ">Login</button></Link>}

                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;

// lobstar , notable, coiny
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div className="py-2">
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
                                    <NavLink className="navlink" to="/home"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#FFC107"
                                        }}>HOME</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="navlink" to="/gallery"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#FFC107"
                                        }}>GALLERY</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="navlink" to="/aboutus"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#FFC107"
                                        }}>ABOUT US</NavLink>
                                </li>
                            </ul>
                            <span className="ms-auto d-flex align-items-center">
                                {(user.email) && <Link to="/manageorders"><button className="btn text-info border-0 me-2 fw-bold ">Add A New Service</button></Link>}
                                {(user.email) && <Link to="/manageorders"><button className="btn text-info border-0 me-2 fw-bold ">Manage Orders</button></Link>}
                                {(user.email) && <Link to="/myorders"><button className="btn text-info border-0 me-2 fw-bold ">My Order</button></Link>}
                                {(user.email) && <span className="me-2 bg-info py-2 px-3 fw-bold text-warning rounded-circle">{user.displayName.slice(0, 1)}</span>}
                                {(user.email) ? <Link to="home"><button onClick={logOut} className="btn btn-secondary border-0 me-2 fw-bold ">Log Out</button></Link> :
                                    <Link to="login"><button className="btn btn-info border-0 me-2 fw-bold px-3">Login</button></Link>}

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
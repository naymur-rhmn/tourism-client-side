import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faGooglePlus, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


const envelope = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhone} />
const fax = <FontAwesomeIcon icon={faFax} />
const fb = <FontAwesomeIcon icon={faFacebookSquare} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const googelPlus = <FontAwesomeIcon icon={faGooglePlus} />
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />


const Footer = () => {
    return (
        <div className="footer text-white">


            <div className="footer-middle">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-4 col-md-6">
                            <h5>OFFICE HOURS</h5>
                            <div className="opening card text-dark p-3 mt-4">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <h6 className="m-0">Monday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Tuesday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Wensday</h6>
                                            <small>10:00 am - 05:00 pm</small>
                                        </div>
                                    </div>
                                    <div className="col-6">

                                        <div className="mb-3">
                                            <h6 className="m-0">Thursday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="m-0">Friday</h6>
                                            <small>08:00 am - 05:00 pm</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-sm-5 mt-4 mt-md-0">
                            <h5>ABOUT US</h5>
                            <div className="mt-3">
                                <p>Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                                <p>We all together are vary consious about our cmmunity and service</p>
                            </div>

                            <div className="social-icon mt-3">
                                <span className="fs-3 me-4">{fb}</span>
                                <span className="fs-3 me-4">{twitter}</span>
                                <span className="fs-3 me-4">{googelPlus}</span>
                                <span className="fs-3 me-4">{linkedin}</span>
                            </div>
                        </div>
                        <div className="col-lg-4 text-white mt-sm-4 mt-4 mt-md-0 mt-lg-0">
                            <h5>CONTACTS</h5>
                            <div className="contacts mt-3">
                                <div className="row">
                                    <div className="col">
                                        <p><span className="me-2">{envelope} </span> E-mail: info@example.com</p>
                                        <p><span className="me-2">{phone} </span> E-mail: info@example.com</p>
                                        <p><span className="me-2">{fax}</span> E-mail: info@example.com</p>
                                    </div>
                                    <small className="mt-4 text-muted">The office is in the same parking lot at McDonalds. Haharina street 27, Odessa city.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col p-3">
                            <small className="text-secondary">Copyright &copy; 2021 Travel<span className="text-warning">Guru</span>. All Rights Reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
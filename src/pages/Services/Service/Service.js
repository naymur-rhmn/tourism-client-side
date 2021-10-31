import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons'

const calendar = <FontAwesomeIcon icon={faCalendar} />
const users = <FontAwesomeIcon icon={faUsers} />



const Service = ({ service }) => {
    const { title, img, desc, days, team, price, _id } = service;
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-2">

            <div className="single-service">
                <div className="service-img">
                    <img src={img} alt="" className="img-fluid img" />
                </div>
                <div className="service-content p-4 pb-0">
                    <div className="content-title d-flex justify-content-between align-items-center">
                        <h3 className="m-0">{title}</h3>
                        <p className="fs-4 m-0">${price}</p>
                    </div>
                    <div className="content-desc mt-3">
                        <p className="text-start">{desc.slice(0, 88)}...</p>
                    </div>
                </div>
                <div className="content-bottom  d-flex align-items-center justify-content-between px-3  py-3">
                    <div className="ctlg d-flex ">
                        <p className="m-0 me-4">{calendar} {days} Days</p>
                        <p className="m-0">{users} {team} / per team</p>
                    </div>
                    <Link to={`/servicedetail/${_id}`}><button className="btn btn-primary py-3 px-4 fw-bold">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
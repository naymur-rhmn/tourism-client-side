import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, desc, days, team, price, _id } = service;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="single-service shadow">
                <img src={img} alt="" className="img-fluid img" />
                <div className="service-content p-4 pb-0">
                    <div className="content-title d-flex justify-content-between align-items-center">
                        <h3 className="m-0">{title}</h3>
                        <p className="fs-4 m-0">${price}</p>
                    </div>
                    <div className="content-desc mt-3">
                        <p className="text-start">{desc.slice(0, 88)}...</p>
                    </div>
                </div>
                <div className="content-bottom bg-info d-flex align-items-center justify-content-between">
                    <div className="ctlg d-flex ">
                        <p className="m-0">{days} Days</p>
                        <p className="m-0">{team}</p>
                    </div>
                    <Link to={`/servicedetail/${_id}`}><button >Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
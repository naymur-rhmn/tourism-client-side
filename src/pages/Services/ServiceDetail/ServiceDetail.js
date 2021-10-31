import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './ServiceDetail.css'
import UseAuth from '../../../hooks/UseAuth';

const ServiceDetail = () => {
    const { user } = UseAuth();
    const { id } = useParams();
    const [service, setService] = useState([]);

    // destructure
    const { title, img, desc, days, team, price, _id, img_1, img_2, img_3, desc_1, desc_2, destination, dep_time, return_time, dress_code } = service;

    useEffect(() => {
        fetch(`https://ghastly-mausoleum-76597.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // hook form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.order_id = _id;
        data.approval = 'Pending';
        data.title = title;
        data.img = img;
        fetch('https://ghastly-mausoleum-76597.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Wellcome! Your submission is compleated. We will contact you within 4 hours')
                }
            })
    };


    return (
        <div className="service-detail">
            <div className="service-bg d-flex justify-content-center align-items-center">
                <h2 className="text-white fs-1">{title}</h2>

            </div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="service-content">
                            <div className="service-title d-flex ">
                                <h2 className="fw-bold me-5">{title}</h2>
                                <p className="d-flex align-items-center"><span className="text-info fs-3 fw-bold">${price} &nbsp; </span> / per prson</p>
                            </div>
                            <p>{desc}</p>
                            <p>{desc_1}</p>
                            <div className="info-bar my-5 p-3 d-flex align-items-center">
                                <p className="m-0 me-4">{days} Days</p>
                                <p className="m-0 me-4">{team} /per team</p>
                                <p className="m-0 me-4">Exotic</p>
                                <p className="m-0 me-4">Romantic</p>
                            </div>
                            {/* content cheat sheet */}
                            <div className="row border-top py-3 cnt-cheat-sheet">
                                <div className="col-6">
                                    <h6 className="fw-bold text-dark">Destination</h6>
                                </div>
                                <div className="col-6">
                                    <p>{destination}</p>
                                </div>
                            </div>
                            <div className="row border-top py-3 cnt-cheat-sheet">
                                <div className="col-6">
                                    <h6 className="fw-bold text-dark">Departure Time</h6>
                                </div>
                                <div className="col-6">
                                    <p>Please arrive by {dep_time} AM for a prompt departure.</p>
                                </div>
                            </div>
                            <div className="row border-top py-3 cnt-cheat-sheet">
                                <div className="col-6">
                                    <h6 className="fw-bold text-dark">Return Time</h6>
                                </div>
                                <div className="col-6">
                                    <p>Approximately {return_time} PM.</p>
                                </div>
                            </div>
                            <div className="row border-top border-bottom py-3 cnt-cheat-sheet">
                                <div className="col-6">
                                    <h6 className="fw-bold text-dark">Dress Code</h6>
                                </div>
                                <div className="col-6">
                                    <p>{dress_code}</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-gallery py-5">
                            <h2>FROM OUR GALLERY</h2>
                            <p className="my-4">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.</p>
                            <div className="gallery-box">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img className="img-fluid" src={img_1} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className="img-fluid" src={img_2} alt="" />
                                    </div>
                                    <div className="col-lg-4">
                                        <img className="img-fluid" src={img_3} alt="" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                    {/* Booking form */}
                    <div className="col-lg-4">
                        <div className="booking-form py-5 px-4">
                            <h5 className="text-center fw-bold mb-4">BOOK THIS TOUR</h5>

                            {/* form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100 border-0 mb-2 p-3" defaultValue={user.displayName} {...register("name")} placeholder="Name" required />

                                <input className="w-100 border-0 mb-2 p-3" defaultValue={user.email} {...register("email", { required: true })} placeholder="Email" required />

                                <input className="w-100 border-0 mb-2 p-3" type="number" {...register("age", { min: 18, max: 99 })} placeholder="Age" required />

                                <input className="w-100 border-0 mb-2 p-3" type="number" {...register("phone_number")} placeholder="Phone" required />

                                <input className="w-100 border-0 mb-2 p-3" {...register("city", { required: true })} placeholder="City" required />

                                <input className="w-100 border-0 mb-2 p-3" {...register("country", { required: true })} placeholder="Country" required />

                                <input className="w-100 border-0 mb-2 p-3" type="number" {...register("ticketNumber")} placeholder="Number of tickets" required />

                                <select className="w-100 border-0 mb-2 p-3" {...register("gender")}>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>


                                <input className="w-100 border-0 mb-2 p-3 bg-info fw-bold mt-3" type="submit" value="BOOK NOW" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
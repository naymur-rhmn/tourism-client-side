import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = UseAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myorders')
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(dt => dt.email === user.email);
                setOrders(myOrder)
            })
    }, [user])
    console.log(orders);
    return (
        <div className="my-order">
            <div className="order-bg"> </div>
            <div className="container py-5">
                <div className="row  custom-height-order">
                    <div className="col-lg-8 mx-auto">
                        <div className="row">

                            <div className="text-center mb-4">
                                <h2 className="fw-bold">My Orders</h2>
                                <p>Welcome to an amazing journey</p>
                            </div>

                            {
                                orders.map(order => {
                                    // My orders
                                    const { _id, title, img, ticketNumber, name, approval } = order;

                                    const handleDeleteOrder = id => {
                                        const url = `http://localhost:5000/myorders/${id}`
                                        fetch(url, {
                                            method: 'DELETE'
                                        })
                                            .then(res => res.json())
                                            .then(data => {
                                                if (data.deletedCount) {
                                                    alert('Canceled successfully');
                                                    window.location.reload();
                                                    /* const remainingOrder = orders.filter(order._id !== id);
                                                    setOrders(remainingOrder) */
                                                }
                                            })

                                    }
                                    return (
                                        <div key={order._id} className="col-lg-12 mb-2">
                                            <div className="single-order shadow d-flex  align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div><img className="order-img" src={img} alt="" /></div>
                                                    <div> <h5 className="fw-bold ms-2">{title}</h5></div>
                                                    <div> <p className="m-0  ms-4">Tickets: {ticketNumber}</p></div>
                                                    <div className="ms-auto">
                                                        <p className="m-0 bg-info rounded-pill px-3 ms-4">{approval}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button onClick={() => handleDeleteOrder(_id)} className="btn bg-warning py-2 me-1">Cancel Booking</button>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
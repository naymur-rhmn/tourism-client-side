import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css';

const ManageOrders = () => {
    const [totalOrders, setTotalOrders] = useState([]);

    useEffect(() => {
        fetch('https://ghastly-mausoleum-76597.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setTotalOrders(data))
    }, [])
    return (
        <div>
            <div className="manage-order-bg"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row p-5">
                            <div className="manage-title text-center mb-4">
                                <h2 className="fw-bold">Manage all Orders</h2>

                            </div>
                            {
                                totalOrders.map(tOrder => <ManageOrder key={tOrder._id} totalOrder={tOrder}></ManageOrder>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;
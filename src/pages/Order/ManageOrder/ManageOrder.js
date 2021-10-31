import React from 'react';

const ManageOrder = ({ totalOrder }) => {
    const { name, title, ticketNumber, email, approval, _id } = totalOrder;
    console.log(name, totalOrder);


    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Cancel?');
        if (proceed) {
            const url = `http://localhost:5000/myorders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Canceled successfully');
                        window.location.reload();
                    }
                })
        }

    }
    return (
        <div className="col-12 shadow mb-3 py-3">
            <div className="row align-items-center">
                <div className="col-lg-2 col-md-4">
                    <h6>{title}</h6>
                </div>
                <div className="col-lg-2 col-md-4">
                    <h6>Tickets: {ticketNumber}</h6>
                </div>
                <div className="col-lg-3 col-md-4">
                    <h6>Email: {email}</h6>
                </div>
                <div className="col-lg-2 col-md-6">
                    <p className="text-center bg-info text-white rounded-pill">{approval}</p>
                </div>
                <div className="col-lg-3  col-md-6 ms-auto">
                    <button className="ms-auto float-end btn bg-primary text-white">Approve</button>
                    <button onClick={() => handleCancelOrder(_id)} className="ms-auto float-end btn bg-secondary me-2 text-white">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;
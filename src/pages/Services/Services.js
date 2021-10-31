import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ghastly-mausoleum-76597.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-12 mx-auto">
                        <div className="service-title pt-5 text-center mb-5">
                            <h2 className="fw-bold">Our Packages</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime enim hic voluptas rem animi sunt! Incidunt quisquam enim consequatur odit facere beatae?</p>
                        </div>
                    </div>
                </div>
                <div className="row g-4">
                    {services.map(service => <Service key={service.title} service={service}></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Services;
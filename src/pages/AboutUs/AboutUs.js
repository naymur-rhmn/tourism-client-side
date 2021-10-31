import React from 'react';
import Guides from '../Home/Guides/Guides';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-bg"></div>
            <div className="container">
                <div className="row align-items-center py-5">
                    <div className="col-lg-6">
                        <h6 className="custom-underline fw-bold mb-4">About Us</h6>
                        <h1 className="mb-4">Who We Are</h1>
                        <p>Rorem Ipsum is simply dummy text of the printin and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                        <p>Printer took a galley of type and scrambled it to make a type speci menu book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanget was popularised.</p>

                        <div className="d-flex align-items-center">
                            <img className="img-fluid pe-3" src="http://themescare.com/demos/peulis-v6/assets/img/signature.png" alt="" />
                            <div className="ps-3 border-start border-2">
                                <h2>Robertho Garcia</h2>
                                <p>Founder</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src="http://themescare.com/demos/peulis-v6/assets/img/about.jpg" alt="" />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkchx_uZ9VG-toHAGS-OvZtvHDjJfaF5sqg&usqp=CAU" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>Our Story</h2>
                        <p>Quisque massa porta ut placerat lentesque non diam. Nam convallis porta rhoncus. Maecenas varius eget turpis suscipit porta sapien tinc Mauris tempor libero fringilla orci vivrra faucibue fringilla orci vivrra faucibus.</p>
                    </div>
                </div>
                <div className="row align-items-center  pb-5">

                    <div className="col-lg-6">
                        <h2>Our Values</h2>
                        <p>Quisque massa porta ut placerat lentesque non diam. Nam convallis porta rhoncus. Maecenas varius eget turpis suscipit porta sapien tinc Mauris tempor libero fringilla orci vivrra faucibue fringilla orci vivrra faucibus.</p>
                    </div>
                    <div className="col-lg-6">
                        <img width="100%" src="https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Guides></Guides>
        </div>
    );
};

export default AboutUs;
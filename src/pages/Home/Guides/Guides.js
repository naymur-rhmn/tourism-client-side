import React from 'react';
import './Guides.css'

const Guides = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="guide-title text-center mb-5">
                            <h2 className="fs-1 fw-bold">Our guides</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-3">
                        <div className="single-guide  text-center">
                            <img className="img-fluid rounded-circle" src="https://c8.alamy.com/comp/2ACEEDC/happy-young-man-throwing-snowball-looking-at-camera-in-forest-2ACEEDC.jpg" alt="" />
                            <h4 className="fw-bold my-3">Robert Alex</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, magni.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="single-guide">
                            <img className="img-fluid rounded-circle" src="https://static6.depositphotos.com/1008303/626/i/600/depositphotos_6264733-stock-photo-mixed-race-man-smiling.jpg" alt="" />
                            <h4 className="fw-bold my-3">John Petter</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, magni.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="single-guide">
                            <img className="img-fluid rounded-circle" src="https://image.shutterstock.com/image-photo/portrait-young-man-crossed-hands-260nw-582575041.jpg" alt="" />
                            <h4 className="fw-bold my-3">Rocky ms</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, magni.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="single-guide">
                            <img className="img-fluid rounded-circle" src="https://cdn.pixabay.com/photo/2014/10/28/22/19/young-507297_640.jpg" alt="" />
                            <h4 className="fw-bold my-3">Ahmed Sharif</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, magni.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guides;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-img py-5">
            <div className="row py-5 my-5 justify-content-center">
                <div className="col-lg-8 py-5 banner my-5 text-center">
                    <h3 className="fw-bold mt-4">TRAVEL WITH US</h3>
                    <h1 className="fw-bold mb-4">ENJOY ADVENTURE</h1>
                </div>
            </div>

            {/* <Carousel className="carousel">
                <Carousel.Item data-interval={false}>
                    <img
                        className="d-block w-100 c-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHI-_u0TOFhBSzkYyZ3mC__zMdeUKiWWWVQ&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item data-interval={false}>
                    <img
                        className="d-block w-100 h-50 c-img"
                        src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item data-interval={false}>
                    <img
                        className="d-block w-100 h-50 c-img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AbzThUyf4OW-k5sfP2ZIks7JB5AyQtK07KgBeL_uAViXnTTVLs02tfSvVEJcJWZbHoU&usqp=CAU"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Banner;
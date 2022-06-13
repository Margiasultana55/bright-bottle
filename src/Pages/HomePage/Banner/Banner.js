import React from 'react';
import banner1 from '../../../img/banner1.jpg';

import banner3 from '../../../img/banner3.jpg';
import './Banner.css'


const Banner = () => {

    return (
        <div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={banner1} className="d-block w-100 img-fluid" style={{ height: '35rem' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='banner-text'>In the right light, at right time every thing is extraordinary</h5>
                            <p className='logo-text'>Bright bottle</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100 img-fluid" style={{ height: '35rem' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='banner-text'>In the right light, at right time every thing is extraordinary</h5>
                            <p className='logo-text'>Bright bottle</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
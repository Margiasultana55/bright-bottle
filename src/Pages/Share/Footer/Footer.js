import React from 'react';
import logo from '../../../img/logo.png'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgba(240, 32, 84, 0.904)", color: 'white', paddingBottom: 1, marginTop: 20 }}>
            <div className="container-fluid px-5">
                <div className="row py-5">
                    <div className="col-sm-12 col-md-6 col-lg-3  text-center text-lg-start">
                        <img className='img-fluid mb-2' style={{ marginLeft: '1rem' }} src={logo} alt="" width="150px" />
                        <p className="lh-lg">We make interiors infused with the spirit of contemporary design and minimalist philosophies.</p>
                        <h4 className="mt-2 mb-4"><i className="fab fa-facebook me-3"></i>
                            <i className="fab fa-twitter me-3"></i>
                            <i className="fab fa-youtube me-3"></i>
                            <i className="fab fa-instagram "></i></h4>
                    </div>


                    <div className="col-sm-12 col-md-6 col-lg-3 text-center ">
                        <h4 className='mt-1 mb-3'>Contact Us</h4>
                        <p className="lh-lg">No: 58 A, khulna,<br />Bangladesh,<br /><i className="fas fa-phone-alt"></i> +880-1908661817 <br /> <i className="far fa-envelope"></i>  brightbootle@gail.com</p>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                        <h4 className='mt-1 mb-3'>SUPPORT</h4>
                        <p>24/7 support</p>
                        <p>Bright bottle Help Center</p>
                        <p>Bright bottle Community</p>

                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3 ">

                        <img className="img-fluid mt-3" style={{ height: '100px' }} src="https://www.nicepng.com/png/full/87-870350_credit-cards-all-credit-card-logos.png" alt="" />

                    </div>

                </div>
            </div>
            <div className=" container border-top text-center ">
                <p className="p-3">© 2021 Bright bottle, All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;
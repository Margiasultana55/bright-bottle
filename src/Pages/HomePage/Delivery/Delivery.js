import React from 'react';

const Delivery = () => {
    return (
        <div>
            <div className="container my-5 ">
                <div style={{ marginBottom: '10rem', marginTop: '10rem' }} className="row ">
                    <div className="col-lg-4 col-sm-6 d-flex  border border-1 p-4  justify-content-center">
                        <div className="me-3 ">
                            <i style={{ color: 'rgba(240, 32, 84, 0.904)' }} className="fas fa-truck fs-1"></i>
                        </div>
                        <div className='ms-2'>
                            <h6 className="m-0">FREE SHIPPING</h6>
                            <p style={{ color: 'gray', marginTop: '7px', marginLeft: '10px' }}>For all order over 99$</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex  border border-1 p-4 justify-content-center">
                        <div className="me-3">
                            <i style={{ color: 'rgba(240, 32, 84, 0.904)' }} className="far fa-clock  fs-1"></i>
                        </div>
                        <div>
                            <h6 className="m-0">DELIVERY ON TIME</h6>
                            <p style={{ color: 'gray', marginTop: '7px', marginLeft: '10px' }}>If good have problems</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 d-flex border border-1 p-4 justify-content-center">
                        <div className="me-3">
                            <i style={{ color: 'rgba(240, 32, 84, 0.904)' }} className="far fa-credit-card  fs-1"></i>
                        </div>
                        <div>
                            <h6 className="m-0">SECURE PAYMENT</h6>
                            <p style={{ color: 'gray', marginTop: '7px', marginLeft: '10px' }}>100% secure payment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Delivery;
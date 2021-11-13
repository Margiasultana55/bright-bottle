import React from 'react';
import { Link } from 'react-router-dom';



import './Service.css'
const Service = ({ product }) => {
    const { _id, name, price, picture } = product;


    return (
        <div>
            <div className="service pb-3 mb-5 mt-5 ">
                <img className='img-fluid' src={picture} alt="" />
                <div className='page'>
                    <h3 className='mt-3 my-text mb-3'>{name}</h3>

                    <h6 className='text-secondary '>BDT, {price}</h6>


                    <Link to={`/booking/${_id}`} >
                        <button className="btn service-btn px-5 mt-2 ">Buy now</button></Link>
                </div>


            </div>


        </div>
    );
};

export default Service;
import React from 'react';
import { useHistory } from 'react-router-dom';



import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, picture } = product;


    const history = useHistory();

    const handleBuyNow = () => {
        history.push(`/booking/${_id}`);
    }

    return (
        <div>
            <div className="service pb-3 mb-5 mt-5 ">
                <img className='img-fluid' src={picture} alt="" />
                <h3 className='mt-3 my-text mb-3'>{name}</h3>

                <h6 className='text-secondary '>BDT, {price}</h6>




                <button onClick={handleBuyNow} className="btn service-btn px-5 mt-2 ">Buy now</button>



            </div>

        </div>
    );
};

export default Product;
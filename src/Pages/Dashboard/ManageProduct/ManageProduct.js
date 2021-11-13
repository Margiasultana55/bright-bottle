import React from 'react';

import './ManageProduct.css'
const ManageProduct = ({ product, handleDeleteProduct }) => {
    const { _id, name, price, picture } = product;
    // console.log(product);





    return (
        <div>
            <div className="service  pb-3 mb-5 mt-5 ">
                <img className='img-fluid' src={picture} alt="" />
                <h3 className='mt-3 my-text mb-3'>{name}</h3>

                <h6 className='text-secondary   '>BDT, {price}</h6>



                <button onClick={() => handleDeleteProduct(_id)} className="btn service-btn px-5 mt-2 ">Delete</button>



            </div>

        </div>
    );
};

export default ManageProduct;
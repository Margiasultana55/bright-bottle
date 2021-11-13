import { TextField } from '@mui/material';
import React, { useState } from 'react';


const AddProducts = () => {


    const [products, setProducts] = useState('');

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...products };
        newProduct[field] = value;
        setProducts(newProduct);

    }
    const onSubmit = e => {
        const product = {
            ...products,



        }


        fetch('https://stormy-island-04558.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                if (data.modifiedCount);

                alert("insert successfully");


            })
        e.preventDefault()
    };
    return (
        <div>
            <h2 className='arrived mt-5'>Add Products</h2>
            <hr className="w-25 mx-auto mb-2 text-dark " />

            <form onSubmit={onSubmit}>
                <TextField sx={{ mt: 5, width: '50%' }} name="picture" id="standard-basic" onBlur={handleOnBlur} label="Product Image url " variant="standard" /><br />
                <TextField sx={{ mt: 5, width: '50%' }} name="name" id="standard-basic" onBlur={handleOnBlur} label="Product Name" variant="standard" /><br />
                <TextField sx={{ mt: 5, width: '50%' }} name="price" id="standard-basic" onBlur={handleOnBlur} label=" Product Price" variant="standard" /><br />
                <button className="btn service-btn px-5 mt-5 ">Confirm</button>

            </form>
        </div>
    );
};

export default AddProducts;
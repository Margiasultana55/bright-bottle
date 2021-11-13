import { TextField } from '@mui/material';
import * as React from 'react';

import useAuth from '../../../hooks/useAuth';
const Review = () => {
    const { user } = useAuth();
    const initialInfo = { clientName: user.displayName, text: '' }
    const [values, setValues] = React.useState(initialInfo);


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...values };
        newReview[field] = value;
        setValues(newReview);


    }
    const onSubmit = e => {
        const review = {
            ...values,


        }
        console.log(review);


        fetch('https://stormy-island-04558.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                if (data.modifiedCount);

                alert("insert successfully");


            })
            .catch(e => {
                console.log(e);
            })
        e.preventDefault()
    };

    return (
        <div>
            <h2 className='arrived mt-5'>Add Review</h2>
            <hr className="w-25 mx-auto mb-1 text-dark  mb-5" />

            <form onSubmit={onSubmit}>

                <TextField sx={{ width: '50%', m: 2 }}
                    id="standard-password-input"
                    label="name"

                    onChange={handleOnChange}
                    defaultValue={user.displayName}
                    name="name"
                    autoComplete="current-password"
                    variant="standard"
                />
                <textarea
                    onChange={handleOnChange}
                    name="text"
                    style={{ width: '50%', height: '10rem' }}
                >
                </textarea><br />



                <button className="btn service-btn px-5 mt-2 ">Submit</button>
            </form>
        </div>
    );
};

export default Review;
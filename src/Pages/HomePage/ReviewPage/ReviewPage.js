import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './ReviewPage.css'
const ReviewPage = ({ review }) => {
    console.log(review);
    const { clientName, text, name } = review;

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className=" review-box pb-3 mb-5 mt-5 ">

                <h6 className='mt-3 text-dark mb-3 '> {clientName}</h6>
                {!clientName && <h6 className='mt-3 text-dark   mb-3'> {name}</h6>}

                <p style={{ color: 'gray', textAlign: 'center' }} className='  pt-2 p-1 '> “{text}”</p>
                <Stack spacing={1}>

                    <Rating style={{ color: 'rgba(240, 32, 84, 0.904) ' }} name="half-rating-read" defaultValue={4.5} precision={4.5} readOnly />
                </Stack>



            </div>
        </div >
    );
};

export default ReviewPage;
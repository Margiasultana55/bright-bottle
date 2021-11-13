
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const BuyModal = () => {
    const { serviceId } = useParams();
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    const initialInfo = { clientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }

    const handleBookSubmit = e => {
        //collect data
        const orders = {
            ...bookingInfo,

            serviceName: name,

        }
        //send data to server
        fetch('https://stormy-island-04558.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {
                alert('Ordered successfull!')
                console.log(data);

            })



        e.preventDefault();
    }

    useEffect(() => {
        fetch('https://stormy-island-04558.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const service = data.find(data => data._id === serviceId);
                setBookings(service);
                // console.log(service);
            });
    }, [serviceId])

    const { name, price } = bookings;

    return (
        <div>
            <Box >
                <h3 style={{ marginTop: '10rem' }} className='arrived '>
                    {name}
                </h3>

                <Typography sx={{ color: 'gray', fontSize: '18px' }} id="transition-modal-title" variant="h6" >
                    Price: {price}tk
                </Typography>
                <hr className="w-25 mx-auto mb-5 text-dark " />
                <form onSubmit={handleBookSubmit} >

                    <TextField
                        label="name"
                        sx={{ m: 1, width: '50%' }}
                        id="outlined-size-small"
                        name="clientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        label="email"
                        sx={{ m: 1, width: '50%' }}
                        id="outlined-size-small"
                        name="email"
                        onBlur={handleOnBlur}
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        label="phone"
                        sx={{ m: 1, width: '50%' }}
                        id="outlined-size-small"
                        name="phone"
                        onBlur={handleOnBlur}
                        size="small"
                    />
                    <br />
                    <button className="btn service-btn px-5 mt-2 " type="submit" >submit</button>
                </form>
            </Box>

        </div >
    );
};

export default BuyModal;
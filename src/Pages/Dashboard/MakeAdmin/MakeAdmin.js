import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stormy-island-04558.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    console.log(data);
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className='arrived mt-5 mb-5'>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{ width: '50%' }}
                    label="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /><br />
                <button type='submit' className="btn service-btn px-5 mt-5 ">Add Admin</button>

            </form>
            {success && <Alert severity="success">Add Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;
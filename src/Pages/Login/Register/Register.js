import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import reg from '../../../img/reg.png'
import login1 from '../../../img/login1.png'
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnBlur = e => {
        const fied = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fied] = value;

        setLoginData(newLoginData);

    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <div style={{ paddingBottom: '1rem', width: '100%' }}>
            <Box sx={{ flexGrow: 1, }} >
                <Grid container spacing={2}>
                    <Grid item xs={9} md={4} lg={4}>
                        <img className='img-fluid' style={{ width: '100%', marginTop: '7rem' }} src={login1} alt='' />
                        <img className='img-fluid' style={{ width: '100%', height: '75%', marginTop: '-6rem' }} src={reg} alt='' />
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <Typography className='arrived' style={{ marginTop: '6rem', }} variant="h4" component="h2">
                                Register
                            </Typography><br />
                            <Box style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {user?.email && <Alert severity="success">user created successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </Box>
                            <TextField sx={{ width: '50%', m: 2 }}
                                id="standard-password-input"
                                label="name"

                                name="name"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField sx={{ width: '50%', mt: 3 }}
                                id="standard-password-input"
                                label="email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <TextField sx={{ width: '50%', mt: 3, mb: 2 }}
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <TextField sx={{ width: '50%', mt: 3, mb: 4 }}
                                id="standard-password-input"
                                label="Retype Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                <Button style={{ color: 'gray' }} variant="text">Already registered?Please login</Button>
                            </NavLink>
                            <br />
                            <button className="btn service-btn px-5 mt-3 " type="submit"  >Submit</button><br />

                        </form>}
                        {
                            isLoading && <CircularProgress color="inherit" />
                        }


                    </Grid>

                </Grid>
            </Box>



        </div >
    );
};

export default Register;
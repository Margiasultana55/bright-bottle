import React from 'react';
import logo from '../../../img/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark my-navbar fixed-top">
                <div className="container-fluid">
                    <img className='img-fluid' style={{ marginLeft: '2rem' }} src={logo} alt="" width="100px" />
                    <button className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item nav ">
                                <NavLink style={{ textDecoration: 'none', color: 'white', }} to='/home'>  Home</NavLink>
                            </li>
                            <li className="nav-item nav">
                                <NavLink style={{ textDecoration: 'none', color: 'white', }} to='/products'>  Products </NavLink>
                            </li>

                            {user?.email &&
                                <li className="nav-item nav">
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> Dashboard</NavLink>
                                </li>

                            }


                        </ul>
                        <form className="d-flex">

                            {
                                user?.email ?
                                    <div className="d-flex" style={{ alignItems: 'center' }}>
                                        <span style={{ color: 'white' }}><i className="fas fa-user-circle fa-lg"></i> {user.displayName}</span>
                                        <button onClick={logout} className="btn btn-outline-white  login-btn px-4 me-4 " >Log out</button>
                                    </div>
                                    :


                                    <NavLink to='/login'>  <button className="btn btn-outline-white login-btn  px-4  me-4 " type="submit">Login</button></NavLink>

                            }
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
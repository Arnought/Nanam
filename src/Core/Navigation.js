import React, { useState } from 'react';
import './navigation.css';
import { Outlet, Link } from 'react-router-dom';
import Login from '../SBOX/SBOX_Magat/Login.js';

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);

    // Open and close modal functions
    const openLoginModal = () => setShowLogin(true);
    const closeLoginModal = () => setShowLogin(false);

    return (
    <>
        <nav>
            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/reservation" className="link">Reservation</Link></li>
                <li><Link to="/About" className="link">About Us</Link></li>
                <li><button to="/Login" onClick={openLoginModal} className="login">Login</button></li>

            </ul>
        </nav>
        
        <Login showModal={showLogin} handleClose={closeLoginModal} />

        <Outlet />
    </>
    );
}

export default Navigation;
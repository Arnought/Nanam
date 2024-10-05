import React, { useState } from 'react';
import './navigation.css';
import { Outlet, Link } from 'react-router-dom';
import Login from '../SBOX/SBOX_Magat/Login.js';
import Register from '../SBOX/SBOX_Magat/Register.js';  // Import the Register component

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const openLoginModal = () => setShowLogin(true);
    const closeLoginModal = () => setShowLogin(false);

    const openRegisterModal = () => setShowRegister(true);
    const closeRegisterModal = () => setShowRegister(false);

    return (
    <>
        <nav>
            <ul>
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/reservation" className="link">Reservation</Link></li>
                <li><Link to="/about" className="link">About Us</Link></li>
                <li>
                    <button onClick={openLoginModal} className="login">Login</button>
                    <button onClick={openRegisterModal} className="register">Register</button>
                </li>
            </ul>
        </nav>
        
        {/* Render the Login and Register modals */}
        <Login showModal={showLogin} handleClose={closeLoginModal} />
        <Register showModal={showRegister} handleClose={closeRegisterModal} />

        <Outlet />
    </>
    );
}

export default Navigation;

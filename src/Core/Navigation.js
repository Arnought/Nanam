import React, { useState } from 'react';
import './navigation.css';
import { Outlet, Link } from 'react-router-dom';
import Login from '../SBOX/SBOX_Magat/Login.js';
import Register from '../SBOX/SBOX_Magat/Register.js';

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const openLoginModal = () => {
        setShowLogin(true);
        setShowRegister(false);
    };
    
    const closeLoginModal = () => setShowLogin(false);

    const openRegisterModal = () => {
        setShowRegister(true);
        setShowLogin(false);
    };
    
    const closeRegisterModal = () => setShowRegister(false);
    return (
    <>
        <nav>
            <ul className="center-links">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/reservation" className="link">Reservation</Link></li>
                <li><Link to="/about" className="link">About Us</Link></li>
            </ul>

            <div className="login-container">
                <button onClick={openLoginModal} className="login">Login</button>
            </div>
        </nav>

        <Login 
            showModal={showLogin} 
            handleClose={closeLoginModal} 
            openRegisterModal={openRegisterModal} 
        />
        <Register 
            showModal={showRegister} 
            handleClose={closeRegisterModal} 
            openLoginModal={openLoginModal} 
        />
        <Outlet />
    </>
    );
};

export default Navigation;

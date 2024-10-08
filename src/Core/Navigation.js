import React, { useState } from 'react';
import './navigation.css';
import { Outlet, Link } from 'react-router-dom';
import Login from '../SBOX/SBOX_Magat/Login.js';
import Register from '../SBOX/SBOX_Magat/Register.js';
import Reservation from '../SBOX/SBOX_Magat/Reservation.js'; // Assuming the correct path

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showReservation, setShowReservation] = useState(false); // State for Reservation

    const openLoginModal = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowReservation(false);
    };
    
    const closeLoginModal = () => setShowLogin(false);

    const openRegisterModal = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowReservation(false);
    };
    
    const closeRegisterModal = () => setShowRegister(false);

    const openReservationModal = () => {
        setShowReservation(true);
        setShowLogin(false);
        setShowRegister(false);
    };

    const closeReservationModal = () => setShowReservation(false);

    return (
    <>
        <nav>
            <ul className="center-links">
                <li><Link to="/" className="link">Home</Link></li>
                {/* <li><button onClick={openReservationModal} className="link">Reservation</button></li> */}
                <li><Link onClick={openReservationModal} className='link'>Reservation</Link></li>
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
        <Reservation 
            showModal={showReservation} 
            handleClose={closeReservationModal} 
        />
        <Outlet />
    </>
    );
};

export default Navigation;

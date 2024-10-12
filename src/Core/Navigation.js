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
    const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state
    const [userDetails, setUserDetails] = useState({ email: '', name: '' }); // User details

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

    // Function to handle user login (example implementation)
    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUserDetails(user); // Set user details on successful login
        closeLoginModal(); // Close login modal after logging in
    };

    // Function to handle user logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserDetails({ email: '', name: '' }); // Reset user details on logout
    };

    return (
    <>
        <nav>
                <li><Link to="/" className='home-title'>NANAM</Link></li>
            <ul className="center-links">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link onClick={openReservationModal} className='link'>Reservation</Link></li>
                <li><Link to="/about" className="link">About Us</Link></li>
            </ul>

            <div className="login-container">
                {!isLoggedIn ? (
                    <button onClick={openLoginModal} className="login">Login</button>
                ) : (
                    <button onClick={handleLogout} className="login">Logout</button>
                )}
            </div>
        </nav>

        <Login 
            showModal={showLogin} 
            handleClose={closeLoginModal} 
            openRegisterModal={openRegisterModal} 
            onLogin={handleLogin} // Pass login handler to Login component
        />
        <Register 
            showModal={showRegister} 
            handleClose={closeRegisterModal} 
            openLoginModal={openLoginModal} 
        />
        <Reservation 
            showModal={showReservation} 
            handleClose={closeReservationModal} 
            isLoggedIn={isLoggedIn} // Pass logged-in state
            userDetails={userDetails} // Pass user details
        />
        <Outlet />
    </>
    );
};

export default Navigation;

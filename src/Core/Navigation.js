import React, { useState, useEffect } from 'react';
import './navigation.css';
import { Outlet, Link } from 'react-router-dom';
import Login from '../SBOX/SBOX_Magat/Login.js';
import Register from '../SBOX/SBOX_Magat/Register.js';
import Reservation from '../SBOX/SBOX_Magat/Reservation.js';

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showReservation, setShowReservation] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({ email: '', name: '' });

    useEffect(() => {
        // This will check if user data exists in localSRtorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setIsLoggedIn(true);
            setUserDetails(storedUser);
        }
    }, []);

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

    //user login
    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUserDetails(user);
        localStorage.setItem('user', JSON.stringify(user)); //user data in localStorage
        closeLoginModal();
    };

    //user logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserDetails({ email: '', name: '' });
        localStorage.removeItem('user'); // clear session
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
                onLogin={handleLogin} 
            />
            <Register 
                showModal={showRegister} 
                handleClose={closeRegisterModal} 
                openLoginModal={openLoginModal} 
            />
            <Reservation 
                showModal={showReservation} 
                handleClose={closeReservationModal} 
                isLoggedIn={isLoggedIn}
                userDetails={userDetails}
            />
            <Outlet />
        </>
    );
};

export default Navigation;

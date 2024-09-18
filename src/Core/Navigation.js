import React from 'react';
import './navigation.css'
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <>
        <nav>
        <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/reservation" className="link">Reservation</Link></li>
            <li><Link to="/About" className="link">About Us</Link></li>
        </ul>
        </nav>
        <Outlet />
    </>
    );
}

export default Navigation;
import React, { useState } from 'react';
import './Login.css';

const Login = ({ showModal, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    // Mock login functionality
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      setErrorMessage('');
      handleClose();
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  // Show the modal only if `showModal` is true
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

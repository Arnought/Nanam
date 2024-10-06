import React, { useState } from 'react';
import './Login.css'; 

const Login = ({ showModal, handleClose, openRegisterModal }) => {
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
    alert('Login successful!');
    setErrorMessage('');
    handleClose();  
  };

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

        <p className="register-link">
          Don't have an account?{' '}
          <span 
            onClick={() => {
              handleClose();
              openRegisterModal();
            }} 
            className="register-text"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

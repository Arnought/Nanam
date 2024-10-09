import React, { useState } from 'react';

const Login = ({ showModal, handleClose, openRegisterModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          alert('Login successful!');
          handleClose(); // Close modal after successful login
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again.');
      });
  };

  if (!showModal) {
    return null; // Do not render anything if the modal is not supposed to be shown
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={handleClose} className="close">&times;</button>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <span
            className="register-text"
            onClick={() => {
              handleClose();
              openRegisterModal(); // Open register modal
            }}
          >
            Don't have an account? Register here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

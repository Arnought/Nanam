import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import './Reservation.css';

// Helper function to generate time options
const generateTimeOptions = () => {
  const times = [];
  let hour = 9;
  let minute = 0;
  const period = ['AM', 'PM'];

  while (hour <= 22) {
    const formattedTime = `${hour % 12 || 12}:${minute === 0 ? '00' : '30'} ${hour < 12 ? period[0] : period[1]}`;
    times.push(formattedTime);

    if (minute === 0) {
      minute = 30;
    } else {
      minute = 0;
      hour += 1;
    }
  }
  return times;
};

const Reservation = ({ showModal, handleClose, isLoggedIn, userDetails }) => {
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState(1);
  const [customPeople, setCustomPeople] = useState(''); // For custom input when people > 8
  const [time, setTime] = useState('9:00 AM');
  const [email, setEmail] = useState(userDetails?.email || ''); // Pre-fill if logged in
  const [name, setName] = useState(userDetails?.name || ''); // Pre-fill if logged in
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setSuccessMessage('');

    const numberOfPeople = people === '8+' ? customPeople : people;

    if (!numberOfPeople || !date || !time || (!isLoggedIn && (!email || !name)) || !agreed) {
      setError('Please fill in all fields and agree to the terms.');
      return;
    }

    if (people === '8+' && (!customPeople || customPeople <= 8)) {
      setError('Please specify a valid number greater than 8.');
      return;
    }

    const reservationData = {
      people: numberOfPeople,
      date: date.toISOString(),
      time,
      email: isLoggedIn ? userDetails.email : email,
      name: isLoggedIn ? userDetails.name : name,
      agreed,
    };

    fetch('http://localhost:5000/Reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Reservation successful') {
          setSuccessMessage('Reservation made successfully!');
          setPeople(1);
          setDate(new Date());
          setTime('');
          setEmail('');
          setName('');
          setCustomPeople('');
          setAgreed(false);
        } else {
          setError('Failed to make a reservation. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred while making the reservation. Please try again.');
      });
  };

  const timeOptions = generateTimeOptions();

  if (!showModal) {
    return null;
  }

  return (
    <div className="reservation-modal">
      <div className="reservation-overlay" onClick={handleClose}></div>
      <div className="reservation-container">
        <header className="header">
          <div className="reservation-title">Reservation</div>
          <span className="close" onClick={handleClose}>&times;</span>
        </header>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Number of People</label>
            {people !== '8+' ? (
              <select value={people} onChange={(e) => setPeople(e.target.value)}>
                <option value={1}>1 Person</option>
                <option value={2}>2 People</option>
                <option value={3}>3 People</option>
                <option value={4}>4 People</option>
                <option value={5}>5 People</option>
                <option value={6}>6 People</option>
                <option value={7}>7 People</option>
                <option value="8+">8+ People</option>
              </select>
            ) : (
              <input
                type="number"
                value={customPeople}
                onChange={(e) => setCustomPeople(e.target.value)}
                placeholder="Enter number of people"
                min="9"
                required
              />
            )}
          </div>
          <div className="form-group">
            <label>Date</label>
            <div className="date-picker-container">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MM/dd/yyyy"
                className="date-picker"
              />
              <FaRegCalendarAlt className="calendar-icon" />
            </div>
          </div>
          <div className="form-group">
            <label>Time</label>
            <select value={time} onChange={(e) => setTime(e.target.value)}>
              {timeOptions.map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          {!isLoggedIn && (
            <>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={!isLoggedIn}
                />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLoggedIn}
                />
              </div>
            </>
          )}

          <p className="terms">Agree to terms
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
          </p>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit" className="submit-button">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;

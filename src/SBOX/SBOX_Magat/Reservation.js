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

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState(1);
  const [time, setTime] = useState('9:00 AM');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ people, date, time, email, name, agreed });
    // Add form submission logic here
  };

  const timeOptions = generateTimeOptions(); // Get the generated time options

  return (
    <div className="reservation-container">
      <header className="header">
        <div className="logo">Site name</div>
        <div className="reservation-title">Reservation</div>
      </header>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Number of People</label>
          <select value={people} onChange={(e) => setPeople(e.target.value)}>
            <option value={1}>1 Person</option>
            <option value={2}>2 People</option>
            <option value={3}>3 People</option>
            <option value={4}>4 People</option>
            <option value={5}>5 People</option>
            <option value={6}>6 People</option>
            <option value={7}>7 People</option>
            <option value={8}>8 People</option>
            <option value="8+">8+ People</option> {/* Added "8+ People" */}
          </select>
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
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group terms">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
          />
          <label>Agree to terms</label>
        </div>
        <button type="submit" className="submit-button">Confirm</button>
      </form>
    </div>
  );
};

export default Reservation;

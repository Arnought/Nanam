const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

let users = [];
let reservation = [];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});


app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(user => user.email === email);
  
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.json({ message: 'Registration successful' });
});


app.post('/reservation', (req, res) => {
  const { people, date, time, email, name } = req.body;

  const newReservation = { id: reservation.length + 1, people, date, time, email, name };
  reservation.push(newReservation);

  res.json({ message: 'Reservation successful', reservation: newReservation });
});


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/reservation', (req, res) => {
  res.json(reservation);
});

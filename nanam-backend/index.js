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

// Login Route
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
  // Save new user details (save this to a database in a real app)
  const newUser = { name, email, password };
  users.push(newUser);

  res.json({ message: 'Registration successful' });
});

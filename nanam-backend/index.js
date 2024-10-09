const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // To handle JSON data

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Hardcoded user credentials for validation
const validUser = {
  email: 'test@example.com',
  password: 'password123'
};

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match the hardcoded credentials
  if (email === validUser.email && password === validUser.password) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

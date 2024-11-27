const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nanam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log('Connected to MongoDB');
  seedMenuItems(); // Auto-seed menu items on successful DB connection
})
.catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose Schemas and Models
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

      //Menu
const MenuItemSchema = new mongoose.Schema({ 
  id: String,
  imgSrc: String,
  imgAlt: String,
  name: String,
  description: String,
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

// Routes
// POSTS
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/reservation', async (req, res) => {
  const { people, name, date, time, email } = req.body;
  try {
    const newReservation = new Reservation({ people, name, date, time, email });
    await newReservation.save();
    res.json({ message: 'Reservation successful', reservation: newReservation });
  } catch (error) {
    console.error('Error during reservation:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// GET
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

//MENU


const seedMenuItems = async () => {
  const sampleMenu = [
    {
      imgSrc: "/Assets/FoodImg/Liempo.png",
      imgAlt: "foodLiempo",
      name: "Liempo",
      description: "Liempo is marinated in a mixture of crushed garlic, vinegar, salt, and pepper before being grilled.",
    },
    {
      imgSrc: "/Assets/FoodImg/Sisig.png",
      imgAlt: "foodSisig",
      name: "Sisig",
      description: "Sisig is a dish made from pork jowl and ears, pork belly, and chicken liver, seasoned with calamansi, onions, and chili peppers.",
    },
    {
      imgSrc: "/Assets/FoodImg/Tinolang-Manok.png",
      imgAlt: "foodTinolangManok",
      name: "Tinolang Manok",
      description: "Tinolang Manok is a well-loved Filipino comfort food dish. It's a great tasting and healthy dish for you and your family.",
    },
    {
      imgSrc: "/Assets/FoodImg/adobo.png" ,
      imgAlt: "foodAdobong Manok",
      name: "Adobong Manok",
      description: "Adobo is meat marinated in soy sauce and vinegar, one of Philippines' most popular dish and loved by many. Because Adobo recipes varies, this recipe includes garlic, potatoes, and black pepper.",
    }
  ];

  try {
    const existingItems = await MenuItem.find(); // Check if the collection is already seeded
    if (existingItems.length === 0) {
      await MenuItem.insertMany(sampleMenu);
      console.log('Menu items seeded successfully!');
    } else {
      console.log('Menu items already exist. No seeding performed.');
    }
  } catch (error) {
    console.error('Error seeding menu items:', error);
  }
};

// Seed Initial Data
// app.get('/menuSeed', async (req, res) => {
  // const sampleMenu = [
// const menuSeed = async () =>
// {
//   [
//     {
//         imgSrc: "/Assets/FoodImg/Liempo.png",
//         imgAlt: "foodLiempo",
//         name: "Liempo",
//         description: "Liempo is marinated in a mixture of crushed garlic, vinegar, salt, and pepper before being grilled.",
//     },
//     {
//         imgSrc: "/Assets/FoodImg/Sisig.png",
//         imgAlt: "foodSisig",
//         name: "Sisig",
//         description: "Sisig is a dish made from pork jowl and ears, pork belly, and chicken liver, seasoned with calamansi, onions, and chili peppers.",
//     },
//     {
//         imgSrc: "/Assets/FoodImg/Tinolang-Manok.png",
//         imgAlt: "foodTinolangManok",
//         name: "Tinolang Manok",
//         description: "Tinolang Manok is a well-loved Filipino comfort food dish. It's a great tasting and healthy dish for you and your family.",
//     },
//     {
//         imgSrc: "/Assets/FoodImg/adobo.png" ,
//         imgAlt: "foodAdobong Manok",
//         name: "Adobong Manok",
//         description: "Adobo is meat marinated in soy sauce and vinegar, one of Philippines' most popular dish and loved by many. Because Adobo recipes varies, this recipe includes garlic, potatoes, and black pepper.",
//     }
//   ]

//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));
// };

// MenuItem.insertMany(menuSeed);


  // try {
  //     await MenuItem.insertMany(sampleMenu);
  //     res.status(201).send('Menu seeded!');
  // } catch (error) {
  //     res.status(500).send('Error seeding data:', error);
  // }


  app.get('/home', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error in fetch menu items.' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

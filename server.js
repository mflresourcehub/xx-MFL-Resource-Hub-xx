// Import necessary modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/User');  // Import the User model
const app = express();
const PORT = 3000;  // You can change this to any port you prefer

// Middleware to parse incoming request bodies (for form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (e.g., HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection string (replace with your actual credentials)
const dbURI = 'mongodb+srv://mflresourcehub:mflresourcehubpw@mfl-resource-hub.lm52rpr.mongodb.net/mflResourceHub?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Render the home page
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));  // Render the sign-up page
});

// Add a POST route to handle form submission (when user clicks sign up)
app.post('/signup', async (req, res) => {
    const { username, password, userRole } = req.body;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).send('Username is already taken');
    }

    // Create a new user instance based on the selected role
    const newUser = new User({
        username,
        password,  // For now, we store the password directly. You should hash it later.
        role: userRole // Store the user role (teacher or pupil)
    });

    try {
        // Save the new user to the database
        await newUser.save();
        res.redirect('/success');  // Redirect to success page
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('There was an error signing up. Please try again later.');
    }
});

app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

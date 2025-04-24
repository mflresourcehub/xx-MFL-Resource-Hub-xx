// Import necessary modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // You can change this to any port you prefer

// Middleware to parse incoming request bodies (for form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (e.g., HTML, CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Render the home page
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));  // Render the sign-up page
});

// Add a POST route to handle form submission (when user clicks sign up)
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    
    // Here, we can process the user data, like saving it to a database (this part is skipped for now)
    console.log(`Received sign-up data: ${username}, ${password}`);

    // For now, send a success message
    res.send('Sign-up successful!');  // You can replace this with a redirect or a success message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

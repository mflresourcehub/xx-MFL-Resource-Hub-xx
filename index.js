const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set up session handling
app.use(session({
  secret: 'your_secret_key', // Change this to something secure
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Dummy user data (replace with database in real use)
const users = [];

// Passport.js local strategy for login
passport.use(new LocalStrategy(
  (username, password, done) => {
    const user = users.find(u => u.username === username);
    if (!user) return done(null, false, { message: 'Incorrect username.' });
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    });
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.username));
passport.deserializeUser((username, done) => {
  const user = users.find(u => u.username === username);
  done(null, user);
});

// Handle user signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.send('Error hashing password.');
    users.push({ username, password: hashedPassword });
    res.send('Signup successful!');
  });
});

// Handle user login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Handle user logout
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

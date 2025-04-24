const express = require('express');
const app = express();
const port = 3000;

// This handles a GET request to the homepage (/)
app.get('/', (req, res) => {
  res.send('Welcome to MFL Resource Hub!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

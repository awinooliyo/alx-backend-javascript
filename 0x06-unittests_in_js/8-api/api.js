const express = require('express');

// Create an instance of express
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the server and listen on port 7865
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

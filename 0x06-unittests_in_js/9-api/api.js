const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route to handle /cart/:id with logging
app.get('/cart/:id([0-9]+)', (req, res) => {
  console.log(`Received request for cart ${req.params.id}`);
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart IDs
app.get('/cart/*', (req, res) => {
  console.log('Received request for invalid cart ID');
  res.status(404).send('Cannot GET /cart');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

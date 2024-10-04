const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON request bodies
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Cart endpoint with number validation using regex
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Available payments endpoint
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// Login endpoint
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (!userName) {
    res.status(400).send('Username is required');
  } else {
    res.send(`Welcome ${userName}`);
  }
});

// Handle invalid cart IDs (non-numeric values)
app.get('/cart/*', (req, res) => {
  res.status(404).send('Cannot GET /cart');
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

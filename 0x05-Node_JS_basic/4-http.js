const http = require('http');

/**
 * HTTP server that responds with "Hello Holberton School!" to any endpoint.
 * @module 4-http
 */

/**
 * Handles incoming HTTP requests and sends back a plain text response.
 * @param {http.IncomingMessage} req The incoming HTTP request.
 * @param {http.ServerResponse} res The server response that will be sent back to the client.
 */
const handleRequest = (req, res) => {
  // Set the response header to indicate that the content type is plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the plain text response
  res.end('Hello Holberton School!');
};

/**
 * Create an HTTP server that listens on port 1245.
 * The server calls handleRequest on every incoming request.
 */
const app = http.createServer(handleRequest);

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app variable for use in other modules or tests
module.exports = app;

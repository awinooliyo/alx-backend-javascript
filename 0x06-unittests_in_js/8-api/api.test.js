const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');  // Import both app and server

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  // Close the server after all tests are done
  after(() => {
    server.close();
  });

  it('should return status 200 for GET /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for GET /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

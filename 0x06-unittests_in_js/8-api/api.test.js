const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('should return status 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();  // Let Mocha know the async call is complete
    });
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();  // Let Mocha know the async call is complete
    });
  });
});

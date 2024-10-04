const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  it('should return status 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return status 200 for a valid cart id', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for an invalid cart id (non-numeric)', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('should return payment methods object', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login page', () => {
  it('should return Welcome message for valid userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 if userName is missing', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {}
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Username is required');
      done();
    });
  });
});

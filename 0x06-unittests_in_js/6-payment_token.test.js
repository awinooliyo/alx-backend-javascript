const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the response data is correct
        expect(response).to.include({ data: 'Successful response from the API' });
        done();  // Call done to signal that the test is finished
      })
      .catch((error) => done(error));  // Call done with error if promise rejects (for safety)
  });
});

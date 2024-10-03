const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');  // Importing the function

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // Before each test, set up the spy
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  // After each test, restore the spy
  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;

    // Verify the correct message was logged
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify the console.log was called once
    expect(consoleSpy.calledOnce).to.be.true;

    // Verify the correct message was logged
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});

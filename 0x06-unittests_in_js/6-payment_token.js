function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // If success is false, do nothing (or could return a rejected promise in other cases)
}

module.exports = getPaymentTokenFromAPI;

/**
 * Calculates the sum of two rounded numbers.
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT,
 * or DIVIDE)
 * @param {number} a - The first number to be rounded and added
 * @param {number} b - The second number to be rounded and added
 * @returns {number} The sum of a and b, with both numbers rounded to the
 * nearest integer
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  
  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        throw new Error('Cannot divide by zero');
	  }
      return roundedA / roundedB;

    default:
      throw new Error(`Invalid type: {type}`);
  }
}

module.exports = calculateNumber;

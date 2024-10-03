const { expect } = require('chai');  // Importing Chai's expect
const calculateNumber = require('./2-calcul_chai');  // Importing the function

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);  // 1 + 4 = 5
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);  // -1 + -4 = -5
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference between two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);  // 6 - 2 = 4
      expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);  // -6 - -2 = -4
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);  // 8 / 2 = 4
    });

    it('should handle division by a negative number', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);  // -1 / 5 = -0.2
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');  // Division by 0
      expect(calculateNumber('DIVIDE', -8, 0)).to.equal('Error');  // Division by 0
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw('Invalid type');
    });
  });
});

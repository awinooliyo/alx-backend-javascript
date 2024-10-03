/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference between two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8.9, 2.2)).to.equal(4);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle division with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid type');
    });
  });
});

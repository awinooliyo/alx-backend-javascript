/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

// You can assume a and b are always numbers
// Tests should focus on the rounding behavior

describe('calculateNumber', () => {
  it('handles floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('handles b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('handles both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('handles a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('handles negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, 3.8), 3);
  });

  it('handles b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('handles zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('handles both a and b as floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('handles large numbers', () => {
    assert.strictEqual(calculateNumber(1000000000.2, 3000000000.8), 4000000001);
  });

  it('handles floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('handles edge cases', () => {
    assert.strictEqual(calculateNumber(0.4, 0.6), 1);
    assert.strictEqual(calculateNumber(0.49, 0.51), 1);
    assert.strictEqual(calculateNumber(-0.4, -0.6), -1);
    assert.strictEqual(calculateNumber(-0.49, -0.51), -1);
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });
});

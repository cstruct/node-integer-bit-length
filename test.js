const integerBitLength = require('./')
const assert = require('assert')

describe('integer-bit-length', () => {
  it('should get bit length of integers', () => {
    assert.strictEqual(integerBitLength(0), 0)
    assert.strictEqual(integerBitLength(1), 1)
    assert.strictEqual(integerBitLength(2), 2)
    assert.strictEqual(integerBitLength(3), 2)
  })

  it('should throw on non integer inputs', () => {
    assert.throws(() => integerBitLength('this is not a number'))
    assert.throws(() => integerBitLength(1.1))
  })
})


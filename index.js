module.exports = function integerBitLength (integer) {
  if (typeof integer !== 'number') throw TypeError(`Excpected number got ${typeof integer}`)
  if (!Number.isInteger(integer)) throw TypeError(`Excpected integer got ${integer}`)
  return integer === 0 ? 0 : Math.floor(Math.log2(integer)) + 1
}


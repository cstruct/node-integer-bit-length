# node-integer-bit-length

Get the minimum bit length of a integer

## Installation

```sh
npm install --save integer-bit-length
```

## Usage

```js
const integerBitLength = require('integer-bit-length')

console.log(integerBitLength(256))
// => 9
```

## API

### `integerBitLength(integer) => Number`

Get the bit length of `integer`

A `TypeError` will be thrown if `integer` is not a integer


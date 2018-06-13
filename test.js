const assert = require('assert');
const chickpea = require('./index.js');

process.argv.push('--cheese');
process.argv.push('gorgonzola');

const input = {

  pepper_flag: 'Add peppers.',
  pineapple_flag: 'Add pineapple.',
  bbqSauce_flag: 'Add bbq sauce.',
  cheese: 'Add the specified type of cheese: --cheese gorgonzola',
  firstName: 'First name.',
  lastName: 'Last name.',

};

const actual = chickpea(input);

const expected = {
  pepper: undefined,
  pineapple: undefined,
  bbqSauce: undefined,
  cheese: 'gorgonzola',
  firstName: undefined,
  lastName: undefined
};

assert.deepEqual( actual , expected );

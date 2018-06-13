const assert = require('assert');
const chickpea = require('./index.js');

let response = chickpea({

  pepper_flag: 'Add peppers.',
  pineapple_flag: 'Add pineapple.',
  bbqSauce_flag: 'Add bbq sauce.',
  cheese: 'Add the specified type of cheese: --cheese gorgonzola',
  firstName: 'First name.',
  lastName: 'Last name.',

})

console.log(response)

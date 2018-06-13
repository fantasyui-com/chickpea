#!/usr/bin/env node

const chickpea = require('./index.js');

const pizzaOrder = chickpea({

  pepper_flag: 'Add peppers.',
  pineapple_flag: 'Add pineapple.',
  bbqSauce_flag: 'Add bbq sauce.',
  cheese: 'Add the specified type of cheese: --cheese gorgonzola',
  firstName: 'First name.',
  lastName: 'Last name.',

});

console.log('Cheese Type:', pizzaOrder.cheese);
console.log('BBQ Sauce:', pizzaOrder.bbqSauce?'yes':'no');

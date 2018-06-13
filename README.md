# chickpea
A little bean for parsing command line arguments without any surprises, at all.


## Install

```bash

npm i chickpea

```

## Usage
```JavaScript

#!/usr/bin/env node

const chickpea = require('chickpea');

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

```

### Execute

```bash

$ ./example.js --cheese "Super Stinky" --bbq-sauce

```

### Result

```

Cheese Type: Super Stinky
BBQ Sauce: yes

```

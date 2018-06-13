const fs = require('fs');
const path = require('path');
const commander = require('commander');
const kebabcase = require('lodash.kebabcase');

module.exports = function(input){
  const package = JSON.parse(fs.readFileSync(path.join(__dirname,'package.json')).toString());
  const chickpea = {};

  let program = commander.version(package.version);

    const shorts = {};

    Object.keys(input).forEach(function(key){

      const isFlag = !!(key.match(/_flag$/));

      let first = key.substr(0,1);
      if(shorts[first]){
        // Already exists, need another...
        first = '';
        for(let pos = 1; pos<key.length; pos++){
          first = key.substr(pos,1);
          if(!shorts[first]){
            // does not exist, take it.
            shorts[first] = true;
            break
          }
        }
      }else{
        shorts[first] = true;
      }
      if(!first) {
        // never found a litle letter, throw
        throw new Error('Never found a litle letter.')
      }

      const short = first;
      const long = kebabcase(key.replace(/_flag$/,''));
      const help = input[key];
      const data = isFlag?"":" [text]";
      const initialize = [`-${short},`, `--${long}`, data].join('');
      // console.log('%s: %s', initialize, help)
      program = program.option(initialize, help);
    })

   program = program.parse(process.argv);

   Object.keys(input).forEach(function(key){
     name = key.replace(/_flag$/,'');
     chickpea[name] = program[name];
   });

  return chickpea;

}

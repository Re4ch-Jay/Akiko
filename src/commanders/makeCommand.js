const program = require('commander');
const generators = require('../Generators');

const makeCommand = (name, description, generateFunction, path) => {
  program
    .command(`make:${name} [names...]`)
    .description(description)
    .option('-t, --ts', 'TypeScript file')
    .option('-a, --all', 'Create express Model, Controller and Route')
    .action(function(names) {
      const ts = this.opts().ts;
      const all = this.opts().all;
    
      if (name === 'gitignore') {
        generateFunction();
      } 
      
      else if(name === "model" && all) {
        if(ts) {
          return names.forEach((name) => {
            generators.generateExpressModel(name, 'models', ts);
            generators.generateExpressController(name, 'controllers', ts);
            generators.generateExpressRoute(name, 'routes', ts);
          });  
        }
        names.forEach((name) => {
          generators.generateExpressModel(name, 'models');
          generators.generateExpressController(name, 'controllers');
          generators.generateExpressRoute(name, 'routes');
        });
      }
      else {
        names.forEach((name) => {
          if(ts) {
            return generateFunction(name, path, ts);
          }
          generateFunction(name, path);
        });
      }
    });
};

module.exports = makeCommand;
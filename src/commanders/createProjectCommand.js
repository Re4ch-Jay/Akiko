const program = require('commander');
const generators = require('../Generators')

const createProjectCommand = (description, defualtOption) => {
  program
    .command(`create-project:express [name]`)
    .description(description)
    .option('-t, --type <type>', 'File type (js, cs, dart)', defualtOption)
    .action(function(name) {
      const type = this.opts().type;

      switch(type){
        case 'js':
          return generators.generateExpressProject(name);
        case 'ts':
          return generators.generateExpressProject(name);
      }
    });
};

module.exports = createProjectCommand;
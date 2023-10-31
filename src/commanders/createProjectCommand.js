const program = require('commander');
const generators = require('../Generators')

const createProjectCommand = (description) => {
  program
    .command(`create-project:express [name]`)
    .description(description)
    .option('-t, --ts', 'TypeScript File')
    .action(function(name) {
      const ts = this.opts().ts;
      if(ts){
        return generators.generateExpressProject(name, ts);
      }
      generators.generateExpressProject(name);
    });
};

module.exports = createProjectCommand;
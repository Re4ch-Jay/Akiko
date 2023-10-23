const program = require('commander');

const makeCommand = (name, description, generateFunction, path) => {
  program
    .command(`make:${name} [names...]`)
    .description(description)
    .action((names) => {
      if (name === 'gitignore') {
        generateFunction();
      } if (name === "react" || name === "vue" || name === "svelte") {
        names.forEach((name) => {
          generateFunction(name);
        });
      }
      else {
        names.forEach((name) => {
          if (name.includes('\\')) {
            const [folder, componentName] = name.split('\\');
            generateFunction(componentName, `${path}\\${folder}`);
          } else {
            generateFunction(name, path);
          }
        });
      }
    });
};

module.exports = makeCommand;
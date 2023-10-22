#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const generators = require("./src/Generators");
const {quotes, getRandomQuote} = require("./src/Quotes");

program.version('1.0.0');

const makeCommand = (name, description, generateFunction, path) => {
  program
    .command(`make:${name} [names...]`)
    .description(description)
    .action((names) => {
      if (name === 'gitignore') {
        generateFunction();
      }else{
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
}
const makeCommandWithoutSpecificFolder = (name, description, generateFunction) => {
program
  .command(`make:${name} [names...]`)
  .description(description)
  .action((names) => {
    names.forEach((name) => {
      generateFunction(name);
    });
  });
}

// Import and call makeCommand for different component types

// JavaScript Command
makeCommand('class', 'Create JavaScript classes', generators.generateJavaScriptClass, 'Class');
makeCommand('object', 'Create JavaScript objects', generators.generateJavaScriptObject, 'Object');
makeCommand('func', 'Create JavaScript functions', generators.generateJavaScriptFunction, 'Function');
makeCommand('json', 'Create JSON files', generators.generateJSON, 'Json');

// HTML Command
makeCommand('html', 'Create HTML files', generators.generateHTML, 'HTML');
makeCommand('css', 'Create CSS files', generators.generateCSS, 'Styles');

// React Command
makeCommandWithoutSpecificFolder('react', 'Create React files', generators.generateReactComponent);
makeCommand('comp', 'Create React components in src/Components', generators.generateReactComponent, 'Components');
makeCommand('page', 'Create React pages in src/Pages', generators.generateReactComponent, 'Pages');
makeCommand('hook', 'Create custom React hooks in src/hooks', generators.generateReactHook, 'hooks');

// Vue Command
makeCommandWithoutSpecificFolder('vue', 'Create Vue files', generators.generateVueComponent);
makeCommand('comp-v', 'Create Vue components in src/Components', generators.generateVueComponent, 'Components');
makeCommand('page-v', 'Create Vue pages in src/Pages', generators.generateVueComponent, 'Pages');
makeCommand('hook-v', 'Create Vue hooks in src/hooks', generators.generateVueHook, 'hooks');

// Svelte Command
makeCommandWithoutSpecificFolder('svelte', 'Create Svelte files', generators.generateSvelteComponent);
makeCommand('comp-s', 'Create Svelte components in src/Components', generators.generateSvelteComponent, 'Components');
makeCommand('page-s', 'Create Svelte pages in src/Pages', generators.generateSvelteComponent, 'Pages');

// Test Command
makeCommand('jest', 'Create Jest files', generators.generateTestJest, 'Test');
makeCommand('mocha', 'Create Mocha files', generators.generateTestMocha, 'Test');
makeCommand('cypress', 'Create Cypress files', generators.generateTestCypress, 'Test');

// .gitignore Command
makeCommand('gitignore', 'Create gitignore', generators.generateGitignore, '');


program
  .command('read <file>')
  .description('Read the contents of a file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      } else {
        console.log('File contents:');
        console.log(data);
      }
    });
  });

program
  .command('google <query>')
  .description('Search something on Google')
  .action((query) => {
    const sanitizedQuery = query.replace(/ /g, '+'); // Replace spaces with '+'
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(sanitizedQuery)}`;
    console.log("\n\n");
    console.log(`Google Search URL: ${googleSearchUrl}`);
    console.log("\n\n");
  });

program
  .command('youtube <query>')
  .description('Search something on YouTube')
  .action((query) => {
    const sanitizedQuery = query.replace(/ /g, '+'); // Replace spaces with '+'
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(sanitizedQuery)}`;
    console.log("\n\n");
    console.log(`YouTube Search URL: ${youtubeSearchUrl}`);
    console.log("\n\n");
  });


program
  .command('github <query>')
  .description('Search repository on GitHub')
  .action((query) => {
    const sanitizedQuery = query.replace(/ /g, '+'); // Replace spaces with '+'
    const youtubeSearchUrl = `https://github.com/search?q=${encodeURIComponent(sanitizedQuery)}&type=repositories`;
    console.log("\n\n");
    console.log(`GitHub Search URL: ${youtubeSearchUrl}`);
    console.log("\n\n");
  });

program
  .command('info')
  .description('Info of the package')
  .action(() => {
    console.log('This package created by Phat Panhareach'); 
    console.log('2023');
    console.log('GitHub: https://github.com/Re4ch-Jay');  
  });


program
  .command('quote')
  .description('Generate a motivational quote')
  .action(() => {
    const randomQuote = getRandomQuote();
    console.log("\n\n");
    console.log('Random Quote:');
    console.log(randomQuote);
    console.log("\n\n");
  });

program
  .command('help')
  .description('Display help information')
  .action(() => {
    program.help(); // This displays help information for all available commands.
  });

program.parse(process.argv);

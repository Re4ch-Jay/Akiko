#!/usr/bin/env node


const program = require('commander');
const generators = require("./src/Generators");
const {quotes, getRandomQuote} = require("./src/Quotes");

program.version('1.0.0');

// Import and call makeCommand for different component types
const makeCommand = require("./src/commanders/makeCommand");

// JavaScript Command
makeCommand('class', 'Create JavaScript classes', generators.generateJavaScriptClass, 'Class');
makeCommand('object', 'Create JavaScript objects', generators.generateJavaScriptObject, 'Object');
makeCommand('func', 'Create JavaScript functions', generators.generateJavaScriptFunction, 'Function');
makeCommand('json', 'Create JSON files', generators.generateJSON, 'Json');

// HTML Command
makeCommand('html', 'Create HTML files', generators.generateHTML, 'HTML');
makeCommand('css', 'Create CSS files', generators.generateCSS, 'styles');

// React Command
makeCommand('react', 'Create React files', generators.generateReactComponent, "");
makeCommand('comp-r', 'Create React components in src/components', generators.generateReactComponent, 'components');
makeCommand('page-r', 'Create React pages in src/pages', generators.generateReactComponent, 'pages');
makeCommand('hook-r', 'Create custom React hooks in src/hooks', generators.generateReactHook, 'hooks');

// Vue Command
makeCommand('vue', 'Create Vue files', generators.generateVueComponent, "");
makeCommand('comp-v', 'Create Vue components in src/components', generators.generateVueComponent, 'components');
makeCommand('page-v', 'Create Vue pages in src/pages', generators.generateVueComponent, 'views');
makeCommand('hook-v', 'Create Vue hooks in src/hooks', generators.generateVueHook, 'hooks');

// Svelte Command
makeCommand('svelte', 'Create Svelte files', generators.generateSvelteComponent, "");
makeCommand('comp-s', 'Create Svelte components in src/components', generators.generateSvelteComponent, 'components');
makeCommand('page-s', 'Create Svelte pages in src/pages', generators.generateSvelteComponent, 'pages');

// Test Command
makeCommand('jest', 'Create Jest files', generators.generateTestJest, 'Test');
makeCommand('mocha', 'Create Mocha files', generators.generateTestMocha, 'Test');
makeCommand('cypress', 'Create Cypress files', generators.generateTestCypress, 'Test');

// .gitignore Command
makeCommand('gitignore', 'Create gitignore', generators.generateGitignore, '');

// const readFileCommand = require("./src/commanders/readFileCommand");


const queryCommand = require("./src/commanders/queryCommand");

queryCommand('google', 'https://www.google.com/search?q=');
queryCommand('youtube', 'https://www.youtube.com/results?search_query=');
queryCommand('github', 'https://github.com/search?q=', '&type=repositories');

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

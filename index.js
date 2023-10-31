#!/usr/bin/env node

const program = require('commander');
const generators = require("./src/Generators");
const {quotes, getRandomQuote} = require("./src/Quotes");
const {makeCommand, queryCommand, readFileCommand, createProjectCommand} = require('./src/commanders');

program.version('1.0.0');

// Import and call makeCommand for different component types

// React Command
makeCommand('comp-r', 'Create React components in src/components (--ts for TypeScript)', generators.generateReactComponent, 'components');
makeCommand('page-r', 'Create React pages in src/pages (--ts for TypeScript)', generators.generateReactComponent, 'pages');
makeCommand('hook-r', 'Create custom React hooks in src/hooks (--ts for TypeScript)', generators.generateReactHook, 'hooks');

// Vue Command
makeCommand('comp-v', 'Create Vue components in src/components', generators.generateVueComponent, 'components');
makeCommand('page-v', 'Create Vue pages in src/pages', generators.generateVueComponent, 'views');
makeCommand('hook-v', 'Create Vue hooks in src/hooks', generators.generateVueHook, 'hooks');

// Svelte Command
makeCommand('comp-s', 'Create Svelte components in src/components', generators.generateSvelteComponent, 'components');
makeCommand('page-s', 'Create Svelte pages in src/pages', generators.generateSvelteComponent, 'pages');

// Create Project
createProjectCommand('Create a ExpressJs Project');
makeCommand('model', 'Create Express Model (--ts for TypeScript)', generators.generateExpressModel, 'models');
makeCommand('controller', 'Create Express Controller (--ts for TypeScript)', generators.generateExpressController, 'controllers');
makeCommand('route', 'Create Express Route (--ts for TypeScript)', generators.generateExpressRoute, 'routes');
makeCommand('middleware', 'Create Express Middleware (--ts for TypeScript)', generators.generateExpressMiddleware, 'middleware');

// Test Command
makeCommand('jest', 'Create Jest files', generators.generateTestJest, '__test__');
makeCommand('mocha', 'Create Mocha files', generators.generateTestMocha, '__test__');

// .gitignore Command
makeCommand('gitignore', 'Create gitignore', generators.generateGitignore, '');

// JavaScript Command
makeCommand('class', 'Create JavaScript classes (--ts for TypeScript)', generators.generateJavaScriptClass, 'Class');
makeCommand('object', 'Create JavaScript objects (--ts for TypeScript)', generators.generateJavaScriptObject, 'Object');
makeCommand('func', 'Create JavaScript functions (--ts for TypeScript)', generators.generateJavaScriptFunction, 'Function');
makeCommand('json', 'Create JSON files', generators.generateJSON, 'Json');

// HTML Command
makeCommand('html', 'Create HTML files', generators.generateHTML, 'HTML');
makeCommand('css', 'Create CSS files', generators.generateCSS, 'styles');


readFileCommand();

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

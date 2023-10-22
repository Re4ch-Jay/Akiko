## Akiko

**Akiko** a versatile developer's command-line toolkit for code generation, file management, web searches, testing setups, and daily motivation. Simplify your development workflows with an all-in-one command-line tool.

#### Installation

Before you can use Akiko, - make sure you have Node.js installed on your system.

Then, you can install it globally using npm:

```bash
npm install -g akiko
```

or as a dependency

```bash
npm install akiko
```

#### Usage

Akiko offers a multitude of commands to assist you in various development tasks. Below is an overview of the available commands:

#### Code Generation

- make:class [names...]: Create JavaScript classes.
- make:object [names...]: Create JavaScript objects.
- make:func [names...]: Create JavaScript functions.
- make:json [names...]: Create JSON files.
- make:html [names...]: Create HTML files.
- make:css [names...]: Create CSS files.
- make:react [names...]: Create React files.
- make:comp [names...]: Create React components.
- make:page [names...]: Create React pages.
- make:hook [names...]: Create custom React hooks.
- make:vue [names...]: Create Vue files.
- make:comp-v [names...]: Create Vue components.
- make:page-v [names...]: Create Vue pages.
- make:hook-v [names...]: Create Vue hooks.
- make:svelte [names...]: Create Svelte files.
- make:comp-s [names...]: Create Svelte components.
- make:page-s [names...]: Create Svelte pages.
- make:jest [names...]: Create Jest test files.
- make:mocha [names...]: Create Mocha test files.
- make:cypress [names...]: Create Cypress test files.

#### File Management

- make:gitignore [names...]: Generate a .gitignore file.

- read &lt;file>: Read the contents of a file.

#### Web Searches

- google &lt;query>: Search something on Google.
- youtube &lt;query>: Search something on YouTube.
- github &lt;query>: Search for repositories on GitHub.

#### Motivation

- quote: Generate a motivational quote.

#### Information

- info: Get information about the package.

#### Help

- help: Display help information for all available commands.

#### Example

```bash
akiko make:comp Button
```

This command generates a React component named "Button" in your project src/Components.

```bash
akiko make:comp Button Card ProductList
```

This command generates multiple React component in your project src/Components.

```bash
akiko google "React Tutorial"
```

This command search "React Tutorial" on google search engine.

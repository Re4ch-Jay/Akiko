## Akiko

**Akiko** a minimal JavaScript command-line toolkit for code generation, file management, web searches, testing setups, and daily motivation. Simplify your development workflows with an all-in-one command-line tool.

#### Installation

Before you can use Akiko, - make sure you have Node.js installed on your system.

Then, you can install it globally using npm:

```bash
npm install -g akiko
// In Linux, MacOS terminal or GitBash for Windows
akiko --version
```

or as a dependency

```bash
npm install akiko
```

In your package.json add scripts

```json

{
  "scripts": {
    "akiko": "akiko",
  },
}

```
Then you can run it through npm

```bash
// In Linux, MacOS terminal or GitBash for Windows
npm run akiko --version

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

#### Examples

React

```bash
akiko make:react Button Card ProductList
// This command generates React files in your project src/.
akiko make:comp-r Button Card ProductList
// This command generates React components in your project src/components.
akiko make:page-r About Contact Home
// This command generates React pages in your project src/pages.
akiko make:hook-r useSearch useFetch
// This command generates custom React hooks in your project src/hooks.
akiko make:jest Button Card
// This command generates Jest in your project src/__tests__.
```

Vue

```bash
akiko make:vue Button Card ProductList
// This command generates Vue files in your project src/.
akiko make:comp-v Button Card ProductList
// This command generates Vue components in your project src/components.
akiko make:page-v About Contact Home
// This command geneates Vue pages in your project src/views.
akiko make:hook-v useSearch useFetch
// This command generates custom Vue hooks in your project src/hooks.
akiko make:jest Button Card
// This command generates Jest in your project src/__tests__.
```

Svelte

```bash
akiko make:svelte Button Card ProductList
// This command generates Svelte files in your project src/.
akiko make:comp-s Button Card ProductList
// This command generates Svelte components in your project src/components.
akiko make:page-s About Contact Home
// This command geneates Svelte pages in your project src/pages.
```

Web Search

```bash
akiko google "React Tutorial"

google Search URL: https://www.google.com/search?q=React%2BTutorial

akiko youtube "React Tutorial"
akiko github "React Tutorial"
```

This command search "React Tutorial" on (google, youtube, github) search.

Motivational Quote

```bash
akiko quote

Random Quote:
The best way to predict the future is to create it. - Peter Drucker

```

#### License

Under the [MIT License](LICENSE)

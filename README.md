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

- make:comp-r [names...]: Create React components. (--ts for TypeScript)
- make:page-r [names...]: Create React pages. (--ts for TypeScript)
- make:hook-r [names...]: Create custom React hooks. (--ts for TypeScript)

- make:comp-v [names...]: Create Vue components.
- make:page-v [names...]: Create Vue pages.
- make:hook-v [names...]: Create Vue hooks.

- make:comp-s [names...]: Create Svelte components.
- make:page-s [names...]: Create Svelte pages.

- make:model [options] [names...]          Create Express Model (--ts for TypeScript)
- make:controller [options] [names...]     Create Express Controller (--ts for TypeScript)
- make:route [options] [names...]          Create Express Route (--ts for TypeScript)
- make:middleware [options] [names...]     Create Express Middleware (--ts for TypeScript)

- make:jest [names...]: Create Jest test files 
- make:mocha [names...]: Create Mocha test files.
- make:class [names...]: Create JavaScript classes. (--ts for TypeScript)
- make:object [names...]: Create JavaScript objects. (--ts for TypeScript)
- make:func [names...]: Create JavaScript functions.  (--ts for TypeScript)
- make:json [names...]: Create JSON files.
- make:html [names...]: Create HTML files.
- make:css [names...]: Create CSS files.

#### Create Project

- create-project:express [options] [name]  Create a ExpressJs Project (--ts for TypeScript)

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

ExpressJS

```bash
akiko create-project:express backend_api
// This command create express project.
akiko make:model User Comment Post --all
// This command generates User, Comment, Post model, controller, and route in your project.
akiko make:model User Comment Post
// This command generates User, Comment, Post model in your project.
akiko make:controller User Comment Post
// This command generates User, Comment, Post controller in your project.
akiko make:route User Comment Post
// This command generates User, Comment, Post route in your project.
akiko make:middleware logger auth isAdmin
// This command generates logger, auth, isAdmin middleware in your project.
```

TypeScript
By only add the flag --ts you can generate the typescript file extension for your project.

```bash
akiko create-project:express backend_api --ts
// This command create express project with TypeScript.
akiko make:model User Comment Post --all --ts 
// This command generates User, Comment, Post model, controller, and route in your project with TypeScript.
akiko make:comp-r Button Card --ts
// This command generates Button and Card components with TypeScript
```

Create Express Project with JavaScript

```bash
akiko create-project:express backend_api
cd backend_api
npm i
npm start
```

Create Express Project with TypeScript

```bash
akiko create-project:express backend_api --ts
cd backend_api
npm i
npm start
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

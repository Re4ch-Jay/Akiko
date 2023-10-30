const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

module.exports = function generateExpressProject(name) {
  const rootDir = name;

  createDirectory(rootDir);

  const directories = ['public', 'routes', 'views', 'models', 'middleware', 'config', 'controllers'];
  directories.forEach((dir) => createDirectory(path.join(rootDir, dir)));

  const files = {
    'routes/userRoute.js': `
const express = require('express');
const router = express.Router();

/**
 * Your user routes defined here.
 */

module.exports = router;
`,
    'views/index.ejs': '',
    'views/layout.ejs': '',
    'controllers/userController.js': `
// User Controller
// GET all users
const getUsers = (req, res) => {
}

// GET single user
const getUser = (req, res) => {
}

// POST user
const postUser = (req, res) => {
}

// UPDATE user
const updateUser = (req, res) => {
}

// DELETE user
const deleteUser = (req, res) => {
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
}
`,
    'models/User.js': '// User Model',
    'middleware/auth.js': '// Middleware for current authentication',
    'middleware/guest.js': '// Middleware for guest',
    'config/database.js': '// Database Configurations',
    'config/app.js': '// App Configurations',
    '.env': `
# Express App Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=null
DB_PORT=null
DB_NAME=null

# Secret Key for JWT (JSON Web Tokens)
JWT_SECRET=null

# API Keys
API_KEY=null
`,
    'app.js': `
// Root Application

const express = require('express');
const morgan = require('morgan');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/');
});
`,
    'package.json': JSON.stringify({
      name: name,
      version: '1.0.0',
      description: 'Scaffold Express App',
      scripts: {
        start: 'node app.js',
        test: 'echo "Error: no test specified" && exit 1',
      },
      dependencies: {
        express: '^4.18.2',
        ejs: '^3',
        morgan: '^1',
        validator: '^13.11.0',
      },
    }, null, 2),
    '.gitignore': `
.env
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`,
  };

  for (const [filePath, content] of Object.entries(files)) {
    createFile(path.join(rootDir, filePath), content);
  }

  const readmeContent = `
# Express App Scaffold by Akiko

## Getting Started

1. Install dependencies: \`npm install\`
2. Start the application: \`npm start\`
`;

  createFile(path.join(rootDir, 'README.md'), readmeContent);

  console.log(`Express application structure has been created.\ncd ${name}\nnpm install\nnpm start\n`);
};

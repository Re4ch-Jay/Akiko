const fs = require('fs');
const path = require('path');

module.exports = function generateGitignore() {
  // Define the target directory (root directory)
  const targetDirectory = process.cwd(); // process.cwd() returns the current working directory

  const gitignoreContent = 
`
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
`;

  const fileName = path.join(targetDirectory, '.gitignore');

  fs.writeFile(fileName, gitignoreContent, (err) => {
    if (err) {
      console.error('Error creating .gitignore file:', err);
    } else {
      console.log(`.gitignore created in ${fileName}`);
    }
  });
};

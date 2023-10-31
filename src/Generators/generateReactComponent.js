const fs = require('fs');
const path = require('path');

module.exports = function generateReactComponent(name, folder, isTypeScript = false) {
  const targetDirectory = folder ? path.join('src', folder) : 'src';

  // Ensure the target directory exists
  if (folder) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  const componentContent = `import React from 'react';

function ${name}() {
  return (
    <div>
      <h1>${name}</h1>
    </div>
  );
}

export default ${name};
`;

  const fileName = path.join(targetDirectory, `${name}.${isTypeScript === true ? 'tsx' : 'jsx'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating component file:', err);
    } else {
      console.log(`React Component '${name}' created in ${fileName}`);
    }
  });
};

const fs = require('fs');
const path = require('path');

module.exports = function generateReactComponent(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

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

  const fileName = path.join(targetDirectory, `${name}.jsx`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating component file:', err);
    } else {
      console.log(`React Component '${name}' created in ${fileName}`);
    }
  });
}



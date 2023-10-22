const fs = require('fs');
const path = require('path');

module.exports =  function generateJavaScriptClass(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = `class ${name} {
  constructor() {
        
  }
}
`;

  const fileName = path.join(targetDirectory, `${name}.js`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`Class '${name}' created in ${fileName}`);
    }
  });

}

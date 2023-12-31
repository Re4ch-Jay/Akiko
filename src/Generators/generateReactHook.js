const fs = require('fs');
const path = require('path');

module.exports =  function generateReactHook(name, folder, isTypeScript = false) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = `
function ${name}() {
  return {};
}

export default ${name};
`;

  const fileName = path.join(targetDirectory, `${name}.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating hook file:', err);
    } else {
      console.log(`React Hook '${name}' created in ${fileName}`);
    }
  });
}

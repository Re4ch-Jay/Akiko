const fs = require('fs');
const path = require('path');

module.exports =  function generateExpressModel(name, folder, isTypeScript = false) {
  const targetDirectory = path.join(folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
// ${name} model
`;

  const fileName = path.join(targetDirectory, `${name}.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating model file:', err);
    } else {
      console.log(`Model '${name}' created in ${fileName}`);
    }
  });

}

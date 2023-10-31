const fs = require('fs');
const path = require('path');

module.exports =  function generateJavaScriptFunction(name, folder, isTypeScript = false) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
// JavaScript is Amazing, just like you!

function myFunction(you, me) {
  return you + me;
}

`;

  const fileName = path.join(targetDirectory, `${name}.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`Function '${name}' created in ${fileName}`);
    }
  });

}

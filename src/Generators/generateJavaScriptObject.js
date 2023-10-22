const fs = require('fs');
const path = require('path');

module.exports =  function generateJavaScriptObject(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`const ${name} = {
    myProperty: "myValue",
}
`;

  const fileName = path.join(targetDirectory, `${name}.js`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`Object '${name}' created in ${fileName}`);
    }
  });

}

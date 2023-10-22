const fs = require('fs');
const path = require('path');

module.exports =  function generateHTML(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
/* CSS is Amazing, just like you! */
`;

  const fileName = path.join(targetDirectory, `${name}.css`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`CSS file '${name}' created in ${fileName}`);
    }
  });

}

const fs = require('fs');
const path = require('path');

module.exports =  function generateJSON(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
{
  "${name}":[]
}
`;

  const fileName = path.join(targetDirectory, `${name}.json`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`Json '${name}' created in ${fileName}`);
    }
  });

}

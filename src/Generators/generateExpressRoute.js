const fs = require('fs');
const path = require('path');

module.exports =  function generateExpressRoute(name, folder, isTypeScript = false) {
  const targetDirectory = path.join(folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`// ${name} route
const express = require('express');
const router = express.Router();

/**
 * Your user routes defined here.
 */

module.exports = router;

`;

  const fileName = path.join(targetDirectory, `${name.toLowerCase()}Route.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating route file:', err);
    } else {
      console.log(`Route '${name}' created in ${fileName}`);
    }
  });

}

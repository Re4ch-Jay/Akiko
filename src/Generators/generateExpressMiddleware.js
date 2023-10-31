const fs = require('fs');
const path = require('path');

module.exports =  function generateExpressMiddleware(name, folder, isTypeScript = false) {
  const targetDirectory = path.join(folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`// ${name} middleware
function ${name}(req, res, next) {
  
  // Business Logic

  next(); // Call next() to continue to the next middleware or route handler
}
`;

  const fileName = path.join(targetDirectory, `${name.toLowerCase()}.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating middleware file:', err);
    } else {
      console.log(`Middleware '${name}' created in ${fileName}`);
    }
  });

}

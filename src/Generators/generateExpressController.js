const fs = require('fs');
const path = require('path');

module.exports =  function generateExpressController(name, folder, isTypeScript = false) {
  const targetDirectory = path.join(folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });
  
  const componentContent = 
`// ${name} Controller
// GET ALL
const get${name}s = (req, res) => {

}

// GET ONE
const get${name} = (req, res) => {

}

// POST ONE
const post${name} = (req, res) => {

}

// UPDATE ONE
const update${name} = (req, res) => {

}

// DELETE ONE
const delete${name} = (req, res) => {

}

module.exports = {
    get${name}s,
    get${name},
    post${name},
    update${name},
    delete${name}
}
`;

  const fileName = path.join(targetDirectory, `${name.toLowerCase()}Controller.${isTypeScript === true ? 'ts' : 'js'}`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating controller file:', err);
    } else {
      console.log(`Controller '${name}' created in ${fileName}`);
    }
  });

}

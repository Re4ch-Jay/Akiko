const fs = require('fs');
const path = require('path');

module.exports =  function generateTestMocha(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
// Example
const chai = require('chai');
const expect = chai.expect;

describe('Example Test', () => {
  it('should return true', () => {
    const result = true;
    expect(result).to.be.true;
  });
});

`;

  const fileName = path.join(targetDirectory, `${name}.js`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating Test Mocha file:', err);
    } else {
      console.log(`Test Mocha '${name}' created in ${fileName}`);
    }
  });

}

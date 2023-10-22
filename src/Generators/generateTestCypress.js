const fs = require('fs');
const path = require('path');

module.exports =  function generateTestCypress(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
// Example
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

`;

  const fileName = path.join(targetDirectory, `${name}.cy.js`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating Test Cypress file:', err);
    } else {
      console.log(`Test Cypress '${name}' created in ${fileName}`);
    }
  });

}

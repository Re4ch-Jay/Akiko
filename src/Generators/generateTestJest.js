const fs = require('fs');
const path = require('path');

module.exports =  function generateTestJest(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
// Example
function ${name}(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(${name}(1, 2)).toBe(3);
});

`;

  const fileName = path.join(targetDirectory, `${name}.test.js`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating Test Jest file:', err);
    } else {
      console.log(`Test Jest '${name}' created in ${fileName}`);
    }
  });

}

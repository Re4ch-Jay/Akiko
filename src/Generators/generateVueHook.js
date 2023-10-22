const fs = require('fs');
const path = require('path');

module.exports = function generateVueHook(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const hookContent = `import { ref } from 'vue';

export function use${name}() {
  const data = ref();

  // Add your custom logic here

  return {
    data,
  };
}
`;

  const fileName = path.join(targetDirectory, `${name}.js`);

  fs.writeFile(fileName, hookContent, (err) => {
    if (err) {
      console.error('Error creating hook file:', err);
    } else {
      console.log(`Vue Hook '${name}' created in ${fileName}`);
    }
  });
}

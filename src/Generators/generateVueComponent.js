const fs = require('fs');
const path = require('path');

module.exports =  function generateVueComponent(name, folder) {
  const targetDirectory = folder ? path.join('src', folder) : 'src';

  // Ensure the target directory exists
  if (folder) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  }

  const componentContent = `<template>
  <div>
    <h1>${name}</h1>
  </div>
</template>

<script>
export default {
  name: '${name}',
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
`;

  const fileName = path.join(targetDirectory, `${name}.vue`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating component file:', err);
    } else {
      console.log(`Vue Component '${name}' created in ${fileName}`);
    }
  });
}

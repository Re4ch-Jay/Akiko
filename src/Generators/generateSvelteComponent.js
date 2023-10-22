const fs = require('fs');
const path = require('path');

module.exports =  function generateSvelteComponent(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
<script>
	let greeting = 'Hello';
</script>

<h1>${name}</h1>

<style>

</style>

`;

  const fileName = path.join(targetDirectory, `${name}.svelte`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`Svelte '${name}' created in ${fileName}`);
    }
  });

}

const fs = require('fs');
const path = require('path');

module.exports =  function generateHTML(name, folder) {
  const targetDirectory = path.join('src', folder);

  // Ensure the target directory exists
  fs.mkdirSync(targetDirectory, { recursive: true });

  const componentContent = 
`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${name}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>

    </style>
</head>
<body>

    <div>${name}</div>

    <script>

    </script>
</body>
</html>
`;

  const fileName = path.join(targetDirectory, `${name}.html`);

  fs.writeFile(fileName, componentContent, (err) => {
    if (err) {
      console.error('Error creating class file:', err);
    } else {
      console.log(`HTML file '${name}' created in ${fileName}`);
    }
  });

}

const program = require("commander");
const fs = require("fs");

const readFileCommand = () => {
    program
    .command('read <file>')
    .description('Read the contents of a file')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log('File contents:');
            console.log(data);
        }
        });
    });
}

module.exports = readFileCommand;
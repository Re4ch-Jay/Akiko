const program = require('commander');

const queryCommand = (name, searchUrl, nested = "") => {
    program
    .command(`${name} <query>`)
    .description(`Search something on ${name}`)
    .action((query) => {

        const sanitizedQuery = query.replace(/ /g, '+'); // Replace spaces with '+'
        const _searchUrl = `${searchUrl}${encodeURIComponent(sanitizedQuery)}`;
       
        const newSearchUrl = urlConfig(_searchUrl, nested);
       
        console.log("\n\n");
        console.log(`${name} Search URL: ${newSearchUrl}`);
        console.log("\n\n");
    });
}

const urlConfig = (_searchUrl, nested) => {
    let newSearchUrl;

    if(nested !== "") {
        newSearchUrl = _searchUrl + nested;
        return newSearchUrl;
    }
    newSearchUrl = _searchUrl;
    return newSearchUrl;
}

module.exports = queryCommand;
const generateJavaScriptClass  = require("./generateJavaScriptClass");
const generateReactHook  = require("./generateReactHook");
const generateVueComponent = require("./generateVueComponent");
const generateReactComponent  = require("./generateReactComponent");
const generateJavaScriptObject = require("./generateJavaScriptObject");
const generateHTML = require("./generateHTML");
const generateCSS = require("./generateCSS");
const generateJavaScriptFunction = require("./generateJavaScriptFunction");
const generateJSON = require("./generateJSON");
const generateSvelteComponent = require("./generateSvelteComponent"); 
const generateVueHook = require("./generateVueHook"); 
const generateGitignore = require("./generateGitignore"); 
const generateTestJest = require("./generateTestJest"); 
const generateTestMocha = require("./generateTestMocha"); 
const generateTestCypress = require("./generateTestCypress"); 
const generateExpressProject = require("./generateExpressProject");

module.exports = {
    generateJavaScriptClass,
    generateReactHook,
    generateVueComponent,
    generateReactComponent,
    generateJavaScriptObject,
    generateHTML,
    generateCSS,
    generateJavaScriptFunction,
    generateJSON,
    generateSvelteComponent,
    generateVueHook,
    generateGitignore,
    generateTestJest,
    generateTestMocha,
    generateTestCypress,
    generateExpressProject
}
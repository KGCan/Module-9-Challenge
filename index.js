// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {if (projectInput){return true} else{console.log('Please enter the name of your project!'); return false;}}
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter the name of your project!'); return false;}}
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
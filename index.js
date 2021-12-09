// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter the name of your project!'); return false;}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: nameInput => {if (nameInput){return true} else{console.log('You must enter a description of your project!'); return false;}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependencies?:',
        default: 'npm i',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter instructions!'); return false;}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your repo? (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter directions for usage!'); return false;}}
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Contribution guidelines: (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter a value!'); return false;}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license(s) were used? (Required)',
        choices: ['MIT', 'GPL', 'Apache', 'none'],
        validate: nameInput => {if (nameInput){return true} else{console.log('Please select at least one!'); return false;}}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter your username!'); return false;}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: nameInput => {if (nameInput){return true} else{console.log('Please enter an email!'); return false;}}
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      });
}

// Function call to initialize app
init();
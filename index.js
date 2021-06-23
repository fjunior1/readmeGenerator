/*
 Main file for Professional READE Generator homework
*/

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (title) => {
            if (title) {
                return true;
            } else {
                console.log('Error: ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a good/small description of your project?',
        validate: (description) => {
            if (description) {
                return true;
            } else {
                console.log('Error: no description given.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation instructions here:',
        validate: (installation) => {
            if (installation) {
                return true;
            } else {
                console.log('Error: Enter installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add instructions on how to use yur project:',
        validate: (usage) => {
            if (usage) {
                return true;
            } else {
                console.log('Error: enter usage instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how to contribute to the project:',
        validate: (contributing) => {
            if (contributing) {
                return true;
            } else {
                console.log('Error: Need to add contribution instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to test the project:',
        validate: (tests) => {
            if (tests) {
                return true;
            } else {
                console.log('Error: Enter project test instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project(from the list provided):',
        choices: ['GPL 2.0','GPL 3.0','BSD','MIT','Apache 2.0'],
        validate: (license) => {
            if (license) {
                return true;
            } else {
                console.log('Error: Choose a license.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: '',
        validate: (github) => {
            if (github) {
                return true;
            } else {
                console.log('Error: enter github account name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter contact email address',
        validate: (email) => {
            if (email) {
                return true;
            } else {
                console.log('Error: Enter email.');
                return false;
            }
        }
    }    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Success saving README contents !!!");
            }
        })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
        console.log('answers: \n--------\n' + answer + "\n\n\n --------");

        const contents = genMarkDown(answer);
        writeToFile("./output/README.md", contents);
    });
}

// Function call to initialize app
init();

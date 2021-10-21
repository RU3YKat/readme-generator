// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create an array of questions for user input

const questions = [
    // ask username on github
    {
        type: 'input',
        name: 'username',
        message: 'What is the GitHub username associated with this project?',
        // add validation for username input
        // validate: ''
    },
    // ask name of github repo
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub repository name for the project:'
    },
    // request developer's email
    {
        type: 'input',
        name: 'email',
        message: 'Enter the contact email for the project: (Required)'
    },
    // ask title of project
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project: (Required)'
    },
    // ask project description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project: (Required)'
    },
    // ask installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe (in detail) how your users should install your project: (Optional)'
    },
    // ask usage instructions
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage instructions for users of your project: (Optional)'
    },
    // ask if and how others can contribute to projects
    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how project users can contribute: (Optional)'
    },
    // user makes selections with checkbox for license
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project: (Required)',
        // referenced [https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-trends-and-predictions/] 
        // for 2020s most popular open source licenses
        choices: ['Apache 2.0', 'MIT', 'GPLv3', 'GPLv2', 'BSD 3', 'LGPLv2.1', 'BSD 2']
    },
    // prompt for project run tests
    {
        type: 'input',
        name: 'test',
        message: 'Enter any tests provided for the project: (Optional)'
    },
    // prompt for project user questions
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any further information to be provided in the "Questions?" section (GitHub username and email autofill): (Optional)'
    }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        if (err){
         return console.log(err);
        }
        console.log('README.md has been generated!')
    })
};

// TODO: Create a function to initialize app
// referenced [https://www.geeksforgeeks.org/node-js-util-promisify-method/]
// referenced [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await]
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(answers);

        console.log(answers)

        await writeFileAsync('./dist/README.md', markdown);
        console.log('README success!');

    } catch(err) {
        console.log(err);
    }
};


// Function call to initialize app
init();

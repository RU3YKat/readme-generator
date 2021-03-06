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
        message: 'What is the GitHub username associated with this project? (Required)',
        // add validation for username input
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            }
            console.log('Please enter your GitHub username!');
            return false;
        }
    },
    // ask name of github repo
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub repository name for the project: (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            console.log('Please enter the name of the project GitHub repository!');
            return false;
        }
    },
    // request project's github url
    {
        type: 'input',
        name: 'githubUrl',
        message: 'Enter the URL of the program on GitHub: (Required)',
        validate: githubUrlInput => {
            if (githubUrlInput) {
                return true;
            }
            console.log('Please enter the URL of the project on GitHub!');
            return false;
        }
    },
    // request developer's email
    {
        type: 'input',
        name: 'email',
        message: 'Enter the contact email for the project: (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            console.log('Please enter contact email!');
            return false;
        }
    },
    // ask title of project
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project: (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            console.log('Please enter the title of the project!');
            return false;
        }
    },
    // ask project description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project: (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            console.log('Please enter a description of the project');
            return false;
        }
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
    // referenced [https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-trends-and-predictions/] 
        // for 2020s most popular open source licenses
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project: (Optional)',
        choices: ['Apache-2.0', 'MIT', 'GPL-3.0', 'GPL-2.0', 'BSD-3-Clause', 'LGPL-2.1', 'LGPL-3.0', 'BSD-2-Clause']  
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
    fs.writeFile(fileName, data, err => {
        if (err){
            return console.log(err);
        }
        console.log('README.md has been generated!')
    });
};

// TODO: Create a function to initialize app
// referenced [https://www.geeksforgeeks.org/node-js-util-promisify-method/]
// referenced [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await]
// referenced [https://www.npmjs.com/package/util.promisify]
async function init() {
    try {
        // call inquirer to prompt questions
        const data = await inquirer.prompt(questions);
        
        // pass inquirer user's answers to generateMarkdown
        const markdown = generateMarkdown(data);

        // write markdown to file
        await writeFileAsync('./dist/README.md', markdown);
        console.log('README success!');

    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();

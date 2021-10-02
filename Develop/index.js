// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: "What is your project name?"
    },
    {
        type: 'input',
        name: 'project-desc',
        message: "Briefly describe (1-2 sentences) the purpose of your project."
    },
    {
        type: 'input',
        name: 'table-content',
        message: "Would you like to add a table of content?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: 'input',
        name: 'collab',
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: 'input',
        name: 'license',
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: 'list',
        name: 'license',
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        choices: ["MIT - Allow others to make and distrubute closed source versions", "GNU GPLv3 - Allow others do almost anything they want with your project, except distributing closed source versions."]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt ([
        [
            {
                type: 'input',
                name: 'projectName',
                message: "What is your project name?",
                validate: (projectName) => {
                    if (projectName) {
                      return true;
                    } else {
                      console.log("You must enter a project name.");
                      return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'projectDesc',
                message: "Briefly describe (1-2 sentences) the purpose of your project.",
                validate: (projectDesc) => {
                    if (projectDesc) {
                      return true;
                    } else {
                      console.log("You must enter a project description.");
                      return false;
                    }
                },
            },
            {
                type: 'confirm',
                name: 'table-content',
                message: "Would you like to include a table of contents?",
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: "What are the steps required to install your project? Hit enter to skip this step."
            },
            {
                type: 'input',
                name: 'usage',
                message: "Provide instructions and examples for use or hit enter to skip."
            },
            {
                type: 'input',
                name: 'author',
                message: "Who worked on this project? List your name and link to your own GitHub profile."
            },
            {
                type: 'confirm',
                name: 'collab',
                message: "Would you like to add a collaborator? Remember to include their their GitHub profile. (Enter to skip)"
            },
            //TODO: license nessacery?
            {
                type: 'list',
                name: 'license',
                message: "List your collaborators, if any, with links to their GitHub profiles.",
                choices: ["MIT - Allow others to make and distrubute closed source versions", "GNU GPLv3 - Allow others do almost anything they want with your project, except distributing closed source versions."]
            },
            
    ]).then(answers => {
        const answers = answers
        //push to README file
        fs.writeFileSync('README.md', generateMarkdown(answers), 'utf-8')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

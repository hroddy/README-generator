// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input


// TODO: Create a function to initialize app

    const questions = [
        
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
                name: 'tableContent',
                message: "Would you like to include a table of contents?",
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: "What are the steps required to install your project? Hit enter to leave this section blank."
            },
            {
                type: 'input',
                name: 'usage',
                message: "Provide instructions and examples for use or hit enter to leave this section blank."
            },
            {
                type: 'input',
                name: 'author',
                message: "Who worked on this project? List everyone's names and Github profile links.",
                validate: (author) => {
                    if (author) {
                      return true;
                    } else {
                      console.log("Author required. You must enter at least one name and Github profile link.");
                      return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: "Please select a license. (Default without selection: MIT)",
                choices: ["MIT - Allow others to make and distrubute closed source versions", "GNU GPLv3 - Allow others do almost anything they want with your project, except distributing closed source versions."]
            },
            
    ]
    
function writeToFile(fileName, data) {
    //push to README file
    fs.writeFileSync(fileName, generateMarkdown(data), 'utf-8')
}

function init() {
    // TODO: Create a function to write README file
    inquirer.prompt (questions).then(answers => {
        const data = answers
        writeToFile('README.md', data)
    })
    
}

// Function call to initialize app
init();


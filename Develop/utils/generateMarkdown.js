// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ----
## Description
### ${data.projectDesc}

----

## Table of Contents
${determineTableContent(data.tableContent)}

----

## Installation
${data.installation}

----

## Usage
${data.usage}

----

## Credit
${data.author}

----

## License
${determineLicense(data.license)}
`;
}

function determineTableContent(tableContent) {
  if (tableContent === true) {
    return `
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Credit](#credit)
  *  [License](#license)`
  } else {
    return ``
  }
}

// function determineInstallation(installation) {
//   if (installation === true) {
//     return `${data.installation}`
//   }
//   else {
//     return ``
//   }
// }

// function determineUsage(usage) {
//   if (usage === true) {
//     return `${data.usage}`
//   }
//   else {
//     return ``
//   }
// }

function determineLicense(license) {
  switch (license) {
    case "MIT - Allow others to make and distrubute closed source versions":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case "GNU GPLv3 - Allow others do almost anything they want with your project, except distributing closed source versions.":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  
    default: 
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}

module.exports = generateMarkdown;

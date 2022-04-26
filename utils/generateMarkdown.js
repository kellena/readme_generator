function renderLicenseBadge(license) {
  if(license === 'MIT License') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === "Apache License") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents:

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [License](#license)
  [Questions](#questions)
  [Contact](#contact)

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contributing
  ${data.guidelines}

  # Tests
  ${data.tests}

  # License

  # Questions

  ### Contact
  GitHub Profile: (https://github.com/${data.username})
  Email:   ${data.email}
  
  `;
}

module.exports = generateMarkdown;

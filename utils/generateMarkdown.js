// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GPL 2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    /*
    case '':
      return;
    case '':
      return;
    case '':
      return;
    */
    case '':
    default:
      // in the case of no input of empty string 
      return '[ NO license ]';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GPL 2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD':
      return;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    /*
    case '':
      return;
    case '':
      return;
    case '':
      return;
    */
    case '':
    default:
      // in the case of no input of empty string 
      return '[ NO license ]';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licesne) {
    return '${license}';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation { [back to Table of contents](#Table-of-Contents) }
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License   { [back to Table of contents](#Table-of-Contents) }
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

  ## Contributing  { [back to Table of contents](#Table-of-Contents) }
  ${data.contributing}

  [Request access to the GITHUB repository to the owner and go on your way implementing features into this project.]

  ## Tests    { [back to Table of contents](#Table-of-Contents) }
  ${data.tests}
  [Basically the output of this project is a README file. you can run the application and verify that your input is added to the right place in the README generated.]

  ## Questions   { [back to Table of contents](#Table-of-Contents) }

  -- GitHub: [${data.github}](https://github.com/${data.github})
  -- Email: ${data.email}

  ## References
  ### Formatting syntax basics 
  https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

  ### inquirer
  https://www.npmjs.com/package/inquirer

  ### License badges examples
  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

`;
}

module.exports = generateMarkdown;

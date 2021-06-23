// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GPL 2.0':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3.0':
      return '![License: BSD v3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'APACHE 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
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
    case 'BSD 3.0':
      return 'https://opensource.org/licenses/BSD-3-Clause';
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
  if (license) {
    return renderLicenseBadge(license) + " " + renderLicenseLink(license);
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseSection(data.license)}

  
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


  ## Installation    { [back to Table of contents](Table-of-Contents) }
  ${data.installation}


  ## Usage    { [back to Table of contents](###Table-of-Contents) } 
  ${data.usage}
  

  ## License    { [back to Table of contents](###Table-of-Contents) }
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}


  ## Contributing    { [back to Table of contents](###Table-of-Contents) }
  ${data.contributing}


  ## Tests    { [back to Table of contents](###Table-of-Contents) }
  ${data.tests}


  ## Questions    { [back to Table of contents](###Table-of-Contents) }


  ## Contact 
  -- GitHub: [${data.github}](https://github.com/${data.github})  
  -- Email: ${data.email}
`;
}

module.exports = generateMarkdown;

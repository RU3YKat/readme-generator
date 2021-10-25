// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let renderBadge = license;
  let badgeResult;
  switch (renderBadge) {
    case 'Apache-2.0':
      badgeResult = 'https://img.shields.io/badge/License-Apache%202.0-violet.svg';
      break;
    case 'MIT':
      badgeResult = 'https://img.shields.io/badge/License-MIT-violet.svg';
      break;
    case 'GPL-3.0':
      badgeResult = 'https://img.shields.io/badge/License-GPL%203.0-violet.svg';
      break;
    case 'GPL-2.0':
      badgeResult = 'https://img.shields.io/badge/License-GPL%202.0-violet.svg';
      break;
    case 'BSD-3-Clause':
      badgeResult = 'https://img.shields.io/badge/License-BSD%203%20Clause-violet.svg';
      break;
    case 'LGPL-2.1':
      badgeResult = 'https://img.shields.io/badge/License-LGPL%202.1-violet.svg';
      break;
    case 'LGPL-3.0':
      badgeResult = 'https://img.shields.io/badge/License-LGPL%203.0-violet.svg';
      break;
    case 'BSD-2-Clause':
      badgeResult = 'https://img.shields.io/badge/License-BSD%202%20Clause-violet.svg';
      break;
    default:
      return '';
  }
  return badgeResult;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// referencing [https://opensource.org/]
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'Apache-2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPL-3.0':
      link = 'https://opensource.org/licenses/GPL-3.0';
      break;
    case  'GPL-2.0':
      link = 'https://opensource.org/licenses/GPL-2.0';
      break;
    case 'BSD-3-Clause':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'LGPL-2.1':
      link = 'https://opensource.org/licenses/LGPL-2.1';
      break;
    case 'LGPL-3.0':
      line = 'https://opensource.org/licenses/LGPL-3.0';
      break;
    case 'BSD-2-Clause':
      link = 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    default:
      return '';
  }
    return link;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return `This program is using ${license} license. Please refer to the LICENSE file for more information.`;
  };
};

// TODO: Create a function to generate markdown for README
// referencing (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `
  # ${data.title}  
  ## ${data.github}  

  ## Description  
  ${data.description}  

  ## Table of Contents  
- [Installation Instructions](#installation)  
- [Usage Information](#usage)  
- [License](#license)  
- [Contribution Guidelines](#contributing)  
- [Test Instructions](#testing)  
- [Questions](#questions?)  

  ## Installation  
  ${data.installation}  

  ## Usage  
  ${data.usage}  

  ## Contributing    
  ${data.contributing}

  This program follows the Code of Conduct from the Contributer Convenant, version 2.1, available at [Contributer Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)  

  ## License  
  [![${data.license}](${badge})](${licenseLink})

  ${licenseSection}

  ## Testing  
  ${data.test}

  ## Questions?
  This program was created by [@${data.github}](${data.githubUrl}).  
  Contact me at ${data.email}.  


  `;
}

module.exports = generateMarkdown;

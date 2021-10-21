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
  return `
  # ${data.title}

  // add badges placeholders, badge for license chosen

  // add table of contents with linked sections
  ## Table of Contents

  // add description 
  ## Description

  // add installation instructions
  ### Installation

  // add usage instructions
  ## Usage

  // add contributing how to contribute
  ### Contributing
    // add specifics and link to contributor covenant
    This Code of Conduct is adapted from the Contributer Convenant, version , available at [Contributer Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

  // add license
  ### License 

  // add tests
  ### Tests

  // add questions
  ### Questions?
`;
}

module.exports = generateMarkdown;

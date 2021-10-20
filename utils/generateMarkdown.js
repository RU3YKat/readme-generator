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

  // add badges placeholders

  // add table of contents (optional)
  // ## ${}

  // add repository title then repo description
  // ### ${}

  // add features (format as bulleted list)
  ### Features
  // ${}

  // add program title and screenshot
    // add program description
  ### ${data.title}

  // add installation instructions
  ### Installation

  // add license
  ### License 

  // add contributing
  ### Contributing
    // add specifics and link to contributor covenant
    This Code of Conduct is adapted from the Contributer Convenant, version , available at [Contributer Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

  // add tests
  ### Tests

`;
}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// create variable to require generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a short description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add any usage information.'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please add contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add any testing instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license from the options below.',
        choices: ['MIT License', 'Apache License']
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

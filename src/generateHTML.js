// file to write functions for manager, engineer, intern

const inquirer = require(`inquirer`);
const fs = require (`fs`);
const Engineer = require (`../lib/engineer`);
const Intern = require (`../lib/intern`);
const Manager = require (`../lib/manager`);
const newHire = [];

function newEmployee() {
    if (answers.role === 'Manager') {
        const managerAnswers =
        inquirer.prompt([
            {
                type: 'input',
                name: 'officenumber',
                message: 'What is your office number?',
                validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
            },
        ])
        const newManger = new Manager (
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.officeNumber
            
        );
        newHire.push(newManger);
    } else return console.log('error try again');
};
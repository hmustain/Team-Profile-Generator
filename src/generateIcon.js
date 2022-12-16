// file imports
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

// file to generate icon for emp role

function renderIcon() {
    if (employee.getRole() === "Manager") {
        return `fas fa-coffee' style="font-size: 20px; color:#0c2340"`
    }
    if (employee.getRole() === "Engineer") {
        return `fas fa-glasses' style="font-size: 20px; color:#0c2340"`
    }
    if (employee.getRole() === "Intern") {
        return `fas fa-graduate' style="font-size: 20px; color:#0c2340"`
    }
    else
    return " "
};

module.exports = {renderIcon};
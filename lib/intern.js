// // Create a class titled "Intern" that extends from the class "Employee". This class will have all of the same properties that "Employee" has but will also add an additional property of "school" which will pull the school that the intern attended. Will also have the additional method "getSchool()" which will return the users school and getRole will be overridden to return "Intern" instead of "Employee" Again went back to day 3 activities to implement this.

// Import employee.js
const Employee = require (`./employee`);

// Create intern class and extend the employee properties
class Intern extends Employee {
    constructor(name, id, email, school) {
        // use super to bring in employee properties then this.school to add a new property
        super(name, id, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    // Create a method to override role from employee to intern
    getRole(){
        return "Intern";
    }
}

// Export file
module.exports = Intern;
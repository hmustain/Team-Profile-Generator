// Create a class titled "Manager" that extends from the class "Employee". This class will have all of what the employee as with the additions of officeNumber also getRole() will be overridden to return "Manager" instead of "Employee". I will also need to bring in the import from employee.js for this extend to work. We will do basically the same thing as employee but we will bring in the employee js file and us the terms "extends" and "super" which my notes from day 3 tells me you have to use in order for it to work

// import the employee.js file
const Employee = require(`./employee`);

// create manager class and extend the employee properties
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // use super to bring in employee properties then this.officeNumber to add a new property
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }

    // Create method to return officeNumber
    getOfficeNumber(){
        return this.officeNumber;
    }

    // Create method to override role from employee to manager
    getRole(){
        return "Manager";
    }
}

// export file
module.exports = Manager;
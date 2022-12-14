// Create a class titled "Engineer" that extends from the class "Employee". This class will have all of the same properties that "Employee" has but will also add an additional property of "github" which will be the github user name. Will also have the additional method "getGithub" which will return the github user name and getRole will be overridden to return "Engineer" instead of "Employee" Again went back to day 3 activities to implement this.

// Import employee.js
const Employee = require (`./employee`);

// Create engineer class and extend the employee properties
class Engineer extends Employee {
    constructor(name,id,email,gitHub) {
        // use super to bring in employee properties then this.giHub to add a new property
        super(name, id, email);

        this.gitHub = gitHub;
    }

    // Create method to return gitHub user name
    getGitHub(){
        return this.gitHub;
    }

    // Create method to override role from employee to engineer
    getRole(){
        return "Engineer";
    }
}

// export file
module.exports = Engineer;
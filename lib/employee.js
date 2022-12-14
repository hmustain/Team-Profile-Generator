// Create a class called Employee. Employee should have name, id, email properties and getName() getId() getEmail() getRole() methods. Went back to day 3 activities for examples

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }
    
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return Employee;
    }
}

module.exports = Employee;
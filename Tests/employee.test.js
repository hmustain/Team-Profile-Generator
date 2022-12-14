// Create a group of tests to test out to see if the properties and methods i set up in the lib folder are setup properly and working. For this "Employee Test Folder" We will test out to see if employee name, id, email is functioning properly by calling that specific property with the method we created ie getName() should return the name I enter getId() should return the id i enter, getEmail() should return the email i enter and getRole() should return the role of the employee. Day 2 talked about how to write tests, so I went back to day 2, along with documentation and youtube videos and help from Tutor to write test. Also note in order to run test I had to instal jest by putting npm i jest in the terminal https://www.npmjs.com/package/jest

// Need to import the employee.js file
const Employee = require(`../lib/employee`);

// Create a new employee to use as a test study include 'name, id, email'
const newEmployee = new Employee('Hunter', 123456, 'hunter@testemail.com');

// code the test using the previously defined parameters for employee ie name, id, email use this. method
it(`should display name, id, email when called using this.`, () => {
    expect(newEmployee.name).toEqual(`Hunter`);
    expect(newEmployee.id).toEqual(123456);
    expect(newEmployee.email).toEqual('hunter@testemail.com');
}
);

it(`should be able to get name from the getName() method name should be hunter`, () => {
    expect(newEmployee.getName()).toEqual('Hunter');
});

it(`should be able to get id from the getId() method id should be 123456` , () => {
    expect(newEmployee.getId()).toEqual(123456);
});

it(`should be able to get email from getEmail() method email should be hunter@testemail.com` , () => {
    expect(newEmployee.getEmail()).toEqual('hunter@testemail.com');
});
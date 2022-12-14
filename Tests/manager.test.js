// Create a group of tests to test out to see if the properties and methods i set up in the lib folder are setup properly and working. For this "Manager Test Folder" We will test out to see if engineer name, id, email which came over previously from employee as well as the new parameter created officeNumber is functioning properly by calling that specific property with the method we created ie getName() should return the name I enter getId() should return the id i enter, getEmail() should return the email i enter getOfficeNumber() should return the Office Number i enter and getRole() should return the role of the employee in this case it should override and become manager. Day 2 talked about how to write tests, so I went back to day 2, along with documentation and youtube videos and help from Tutor and askbcs to write test. Also note in order to run test I had to instal jest by putting npm i jest in the terminal https://www.npmjs.com/package/jest

// Import the manager.js file
const Manager = require(`../lib/manager`);

// Create a new manager to use as a test study include 'name, id, email, and add office number'
const newManager = new Manager ('Hunter', 123456, 'hunter@testemail.com', 3329);

// code the test using the previously defined parameters for employee and add the extra parameter for manager
it(`should display name, id, email, office number` , () =>{
    expect(newManager.name).toEqual('Hunter');
    expect(newManager.id).toEqual(123456);
    expect(newManager.email).toEqual('hunter@testemail.com');
    expect(newManager.officeNumber).toEqual(3329);
});

it(`should be able to get name from the getName() method name should be hunter`, () => {
    expect(newManager.getName()).toEqual('Hunter');
});

it(`should be able to get id from the getId() method id should be 123456` , () => {
    expect(newManager.getId()).toEqual(123456);
});

it(`should be able to get email from getEmail() method email should be hunter@testemail.com` , () => {
    expect(newManager.getEmail()).toEqual('hunter@testemail.com');
});

it(`should be able to get office number from getOfficeNumber() method. office number should be 3329` , () => {
    expect(newManager.getOfficeNumber()).toEqual(3329);
});

it(`should be able to get the employees role using the getRole() in this case it should be Manager` , () => {
    expect(newManager.getRole()).toEqual('Manager');
});
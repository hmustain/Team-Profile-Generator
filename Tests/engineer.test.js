// Create a group of tests to test out to see if the properties and methods i set up in the lib folder are setup properly and working. For this "Engineer Test Folder" We will test out to see if engineer name, id, email which came over previously from employee as well as the new parameter created gitHub is functioning properly by calling that specific property with the method we created ie getName() should return the name I enter getId() should return the id i enter, getEmail() should return the email i enter getGitHub() should return the github user name i enter and getRole() should return the role of the employee in this case it should override and become engineer. Day 2 talked about how to write tests, so I went back to day 2, along with documentation and youtube videos and help from Tutor and askbcs to write test. Also note in order to run test I had to instal jest by putting npm i jest in the terminal https://www.npmjs.com/package/jest

// Import the engineer.js file
const Engineer = require(`../lib/engineer`);

// Create a new engineer to use as a test study to include 'name, id, email, and add github user name'
const newEngineer = new Engineer (`Hunter`, 123456, 'hunter@testemail.com', 'hmustain');

// code the test using the previously defined parameters for employee and add the extra parameter for engineer
it(`should display name, id, email, gitHub user name` , () =>{
    expect(newEngineer.name).toEqual('Hunter');
    expect(newEngineer.id).toEqual(123456);
    expect(newEngineer.email).toEqual('hunter@testemail.com');
    expect(newEngineer.gitHub).toEqual('hmustain');
});

it(`should be able to get name from the getName() method name should be hunter`, () => {
    expect(newEngineer.getName()).toEqual('Hunter');
});

it(`should be able to get id from the getId() method id should be 123456` , () => {
    expect(newEngineer.getId()).toEqual(123456);
});

it(`should be able to get email from getEmail() method email should be hunter@testemail.com` , () => {
    expect(newEngineer.getEmail()).toEqual('hunter@testemail.com');
});

it(`should be able to get github user name from getGitHub() method. github user name should be hmustain` , () => {
    expect(newEngineer.getGitHub()).toEqual('hmustain');
});

it(`should be able to get the employees role using the getRole() in this case it should be Manager` , () => {
    expect(newEngineer.getRole()).toEqual('Engineer');
});